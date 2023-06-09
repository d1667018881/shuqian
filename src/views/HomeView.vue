<template>
  <el-container class="home">

    <!-- 侧边栏 -->
    <el-aside class="home-aside shadow-1">
      <el-menu
        class="side-nav"
        default-active="search"
        :collapse="appConfig.sideMenuCollapse"
        :collapse-transition="false"
        @select="changeCategory"
      >

        <!-- 搜索引擎 -->
        <el-menu-item index="search">
          <i class="el-icon-search"></i>
          <span slot="title">搜索</span>
        </el-menu-item>

        <!-- 全部链接 -->
        <el-menu-item index="all">
          <i class="el-icon-menu"></i>
          <span slot="title">全部链接</span>
        </el-menu-item>

        <!-- 分类 -->
        <el-menu-item
          v-for="(item, itemIndex) in navLinks.list"
          :key="'list-' + itemIndex"
          :index="itemIndex.toString()"
        >
          <i :class="item.icon || 'el-icon-link'"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>

      </el-menu>
    </el-aside>

    <!-- 内容 -->
    <el-main class="home-content">
      <div class="wrapper">

        <!-- 搜索引擎 -->
        <div v-show="show.searchNet" class="search-engine">

          <!-- 搜索栏 -->
          <div :class="['search-bar', 'shadow-3', { suggest: showSES }]">

            <!-- 输入 -->
            <input
              v-model="searchNet.keyword"
              class="input"
              type="text"
              @blur="searchNet.isFocus = false"
              @focus="searchNet.isFocus = true"
              @keydown.enter.exact="searchNetSubmit()"
            />

            <!-- 清除 -->
            <div
              v-show="searchNet.keyword.length > 0"
              class="btn btn-clear"
              @click="searchNet.keyword = ''"
            >
              <i class="el-icon-close"></i>
            </div>

            <!-- 搜索 -->
            <div class="btn btn-search" @click="searchNetSubmit()">
              <i class="el-icon-search"></i>
            </div>

            <!-- 关键词建议 -->
            <div class="suggestion shadow-3">
              <ul>
                <li
                  v-for="item in searchNet.suggest.list"
                  :key="item.id"
                  @click="searchNet.keyword = item.label"
                >
                  <!-- 文本 -->
                  <span class="label">{{ item.label }}</span>
                  <!-- 来源 -->
                  <el-tag
                    class="tag"
                    effect="plain"
                    size="mini"
                    type="success"
                  >{{ searchNet.suggest.name }}</el-tag>
                </li>
              </ul>
            </div>

          </div>

          <!-- 选择搜索引擎 -->
          <el-radio-group
            v-model="configSearchEngine"
            size="small"
            :class="['search-type', { fade: searchNet.isFocus }]"
          >
            <!-- 分类 -->
            <div
              v-for="(category, cIndex) in searchNet.list"
              :key="cIndex"
              class="category"
            >

              <!-- 标题 -->
              <div class="title">{{ category.title }}</div>

              <!-- 项 -->
              <el-radio
                v-for="item in category.list"
                :key="item.name"
                :label="item.name"
                class="shadow-2"
              >
                <IconElement :path="item.icon || 'website/default.svg'" size="1.2em" />
                <i class="name">{{ item.name }}</i>
                <i class="desc limit-line-1">{{ item.desc }}</i>
              </el-radio>

            </div>
          </el-radio-group>

        </div>

        <!-- 链接搜索框 -->
        <el-input
          v-show="show.searchLink"
          v-model="searchLink.keyword"
          class="link-search shadow-2"
          placeholder="搜索链接"
          clearable
        >
          <el-select slot="prepend" v-model="searchLink.type" placeholder="类型">
            <el-option label="全部" value="all"></el-option>
            <el-option label="标题" value="title"></el-option>
            <el-option label="链接" value="link"></el-option>
            <el-option label="简介" value="desc"></el-option>
          </el-select>
        </el-input>

        <!-- 链接列表树 -->
        <el-tree
          v-show="show.linkTree"
          ref="linkTree"
          class="link-tree shadow-2"
          :data="currentLinks"
          node-key="id"
          empty-text="没有查找到内容"
          :props="{ label: 'title', children: 'items' }"
          :filter-node-method="searchLinkSubmit"
          :default-expand-all="false"
          :expand-on-click-node="true"
        >
          <div
            slot-scope="{ node, data }"
            class="link-item"
            :title="data.update"
            @click="openLink(data.link, data.showOnly)"
            @contextmenu.prevent="openDetail(data)"
          >
            <div class="row title">
              <span>{{ node.label }}</span>
              <span v-if="data.desc"> - {{ data.desc }}</span>
            </div>
            <div class="row link">
              <span>{{ data.link }}</span>
            </div>
          </div>
        </el-tree>

      </div>
    </el-main>

    <!-- 链接详情 -->
    <el-dialog
      :append-to-body="true"
      custom-class="link-detail"
      title="详情"
      :visible="linkDetail.show"
      @close="linkDetail.show = false"
    >
      <div class="content">
        <div class="row">
          <div class="label">ID：</div>
          <div class="text">{{ linkDetail.id }}</div>
        </div>
        <div class="row">
          <div class="label">标题：</div>
          <div class="text">{{ linkDetail.title }}</div>
        </div>
        <div class="row">
          <div class="label">链接：</div>
          <div class="text">
            <el-link
              v-show="!linkDetail.linkCopy"
              type="primary"
              :href="linkDetail.link"
              target="_blank"
            >{{ linkDetail.link }}</el-link>
            <input
              v-show="linkDetail.linkCopy"
              type="text"
              :value="linkDetail.link"
            />
          </div>
        </div>
        <div v-show="linkDetail.desc != ''" class="row">
          <div class="label">简介：</div>
          <div class="text">{{ linkDetail.desc }}</div>
        </div>
        <div v-show="linkDetail.update != ''" class="row">
          <div class="label">更新：</div>
          <div class="text">{{ linkDetail.update }}</div>
        </div>
      </div>
    </el-dialog>

  </el-container>
</template>

<script>
/**
 * @typedef {object} NavLinkItem
 * @property {string} title
 * @property {string} desc
 * @property {string} link
 */

import { mapState } from 'vuex';

import navLinks from '@/assets/js/navLinks';
import searchUtils from '@/assets/js/search-utils';
import utils from '@/assets/js/utils';
import IconElement from '@/components/IconElement.vue';

export default {
  name: 'HomeView',
  components: {
    IconElement
  },
  data() {
    return {

      /** 显示的内容 */
      show: {
        searchNet: true,
        searchLink: false,
        linkTree: false,
      },

      /** 网络搜索 */
      searchNet: {
        isFocus: false,
        keyword: '',
        list: searchUtils.searchEngines,
        url: '',
        debounce: null,
        suggest: {
          list: [],
          name: '',
        },
      },

      /** 导航链接数据 */
      navLinks,

      /** 当前显示的链接 */
      currentLinks: [],

      /** 链接搜索 */
      searchLink: {
        debounce: null,
        keyword: '',
        type: 'all'
      },

      /** 链接详情 */
      linkDetail: {
        show: false,
        id: '',
        title: '',
        link: '',
        linkCopy: false,
        desc: '',
        update: '',
      },

    };
  },
  computed: {

    ...mapState({
      appConfig: 'config',
    }),

    /** 设置 - 搜索引擎名称 */
    configSearchEngine: {
      /** @this */
      get() {
        return this.appConfig.searchEngine;
      },
      set(value) {
        this.$store.commit('setConfig', {
          key: 'searchEngine',
          value,
        });
      },
    },

    /**
     * @description 显示搜索引擎关键词建议
     * @this
     */
    showSES() {
      var sn = this.searchNet;
      var isShow = (
        (sn.isFocus) &&
        (sn.keyword !== '') &&
        (sn.suggest.list.length > 0)
      );

      return isShow;
    },

  },
  watch: {

    'searchNet.keyword': {
      handler(value) {
        if (!this.appConfig.searchSuggestion) {
          return;
        }
        clearInterval(this.searchNet.debounce);
        this.searchNet.debounce = setTimeout(() => {
          value = window.encodeURIComponent(value);
          this.searchNetGS(value);
        }, 500);
      }
    },

    'searchLink.keyword': {
      handler(value) {
        clearTimeout(this.searchLink.debounce);
        this.searchLink.debounce = setTimeout(() => {
          this.$refs.linkTree.filter(value);
        }, 500);
      }
    },

    'searchLink.type': {
      handler() {
        // 更改搜索类型时自动重新搜索
        this.$refs.linkTree.filter(this.searchLink.keyword);
      }
    },

  },
  methods: {

    /** 更改当前显示的分类 */
    changeCategory(index) {
      const { navLinks, searchLink, show } = this;

      if (index === 'search') {
        this.currentLinks = [];
        show.searchNet = true;
        show.searchLink = false;
        show.linkTree = false;
      } else if (index === 'all') {
        this.currentLinks = navLinks.list;
        show.searchNet = false;
        show.searchLink = true;
        show.linkTree = true;
      } else {
        this.currentLinks = navLinks.list[Number(index)].items;
        show.searchNet = false;
        show.searchLink = true;
        show.linkTree = true;
      }

      searchLink.keyword = '';
    },

    /**
     * @description 查看详情
     * @param {object} datas 当前链接的数据
     */
    openDetail(datas) {
      // 非链接 / 仅显示
      if (datas.link === undefined) {
        return;
      }

      var detail = this.linkDetail;

      detail.id = datas.id;
      detail.title = datas.title;
      detail.link = datas.link;
      detail.linkCopy = datas.showOnly || false;
      detail.desc = datas.desc || '';
      detail.update = datas.update || '';
      detail.show = true;
    },

    /**
     * @description 打开链接
     * @param {string} link 需要打开的链接
     * @param {boolean} showOnly 是否仅显示链接
     */
    openLink(link, showOnly) {
      if (link === undefined) {
        return false;
      }

      if (showOnly) {
        this.$message({
          duration: 5000,
          message: '请在链接详情中复制后手动打开',
          type: 'warning'
        });
      } else {
        window.open(link, '_blank');
      }
    },

    /**
     * @description 搜索引擎（获取关键词建议）
     * @param {string} keyword 当前输入的关键词
     */
    searchNetGS(keyword) {
      var suggest = this.searchNet.suggest;
      // 设置的搜索引擎名称
      var configSE = this.configSearchEngine;
      // 关键词建议来源信息（默认使用百度）
      var reqURLs = [
        {
          name: '百度',
          url: `https://www.baidu.com/sugrec?json=1&prod=pc&wd=${keyword}&cb=cbSES`
        },
        {
          name: 'bilibili',
          url: `https://s.search.bilibili.com/main/suggest?func=suggest&main_ver=v1&term=${keyword}&jsonp=jsonp&callback=cbSES`
        },
      ];
      var reqURL = reqURLs[0].url;

      suggest.list = [];
      suggest.name = reqURLs[0].name;

      if (keyword === '') {
        return;
      }

      // 根据当前搜索引擎选择请求地址
      for (let i = 0; i < reqURLs.length; i++) {
        let item = reqURLs[i];
        if (item.name === configSE) {
          reqURL = item.url;
          suggest.name = item.name;
          break;
        }
      }

      // 处理数据
      var cbFunc = (data) => {

        var id = 0;                  // 结果 ID
        var reqName = suggest.name;  // 来源名称

        if (reqName === '百度') {
          // [百度]
          let result = (data.g || []);

          if (result.length === 0) {
            return;
          }

          result.forEach((item) => {
            id += 1;
            suggest.list.push({
              id,
              label: item.q,
              highlight: keyword
            });
          });
        } else if (reqName === 'bilibili') {
          // [bilibili]
          let result = (data.result ? (data.result.tag || []) : []);

          if (result.length === 0) {
            return;
          }

          result.forEach((item) => {
            id += 1;
            suggest.list.push({
              id,
              label: item['value'],
              highlight: keyword
            });
          });
        }

      };

      // 使用 JSONP 获取
      utils.jsonp({
        url: reqURL,
        cbName: 'cbSES',
        cbFunc
      });
    },

    /** 搜索引擎（搜索） */
    searchNetSubmit() {
      var vm = this;
      var sn = this.searchNet;
      var selectedSE = this.configSearchEngine;
      var keyword = sn.keyword;
      var url = '';

      if (keyword) {
        keyword = window.encodeURIComponent(keyword);
      } else {
        return false;
      }

      for (let category in sn.list) {
        let list = sn.list[category].list;

        for (let index in list) {
          if (list[index].name === selectedSE) {
            url = list[index].url.replace(/%keyword%/, keyword);
            break;
          }
        }
      }

      vm.openLink(url);
    },

    /**
     * @description 搜索链接（搜索）
     * @param {string} keyword 关键词
     * @param {NavLinkItem} data 每一项链接的信息
     */
    searchLinkSubmit(keyword, data) {

      // 关键词为空，显示全部
      if (keyword === '') {
        return true;
      }

      // 转为小写
      keyword = keyword.toLowerCase();

      const type = this.searchLink.type;
      const title = (data.title || '').toLowerCase();
      const link = (data.link || '').toLowerCase();
      const desc = (data.desc || '').toLowerCase();

      switch (type) {
        // 全部
        case 'all':
          return (
            title.includes(keyword) ||
            link.includes(keyword) ||
            desc.includes(keyword)
          );
        // 标题
        case 'title':
          return title.includes(keyword);
        // 链接
        case 'link':
          return link.includes(keyword);
        // 简介
        case 'desc':
          return desc.includes(keyword);
        // 未知
        default:
          return false;
      }

    },

  },
}
</script>

<style lang="less" scoped>
.home-aside {
  position: relative;
  z-index: 110;
  width: auto !important;
  overflow-x: hidden;

  .side-nav {
    min-height: 100%;
    border: none;
  }
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2rem;
  background-color: @colorWhite;
  overflow-x: hidden;
  overflow-y: scroll;

  .wrapper {
    width: 100%;
    min-width: 16rem;
    max-width: 64rem;
  }
}

.search-engine {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.search-bar {
  @barHeight: 2.8rem;
  @barRadius: 0.3rem;

  display: flex;
  align-items: center;
  position: sticky;
  top: 2.5rem;
  z-index: 100;
  width: 100%;
  max-width: 40rem;
  height: @barHeight;
  border-radius: @barRadius;
  background-color: #FFF;

  &.suggest {
    border-radius: @barRadius @barRadius 0 0;
  }

  .input {
    flex-grow: 1;
    padding-left: 1rem;
    width: 0;
    height: 100%;
    outline: none;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 2.8rem;
    height: 2.8rem;
    background-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .btn-clear {
    width: 2rem;
    opacity: 0.5;
    transition: opacity @transitionTime;

    &:hover {
      opacity: 1;
    }
  }

  .btn-search {
    border-radius: 0 @barRadius @barRadius 0;
    color: @colorPrimary;
    transition: background @transitionTime, color @transitionTime;

    &:hover {
      background-color: @colorPrimary;
      color: #FFF;
    }
  }
  &.suggest .btn-search {
    border-bottom-right-radius: 0;
  }

  .suggestion {
    display: block;
    visibility: hidden;
    position: absolute;
    top: @barHeight;
    width: 100%;
    border-top: 0.1rem solid #EEE;
    border-radius: 0 0 @barRadius @barRadius;
    background-color: #FFF;
    overflow: hidden;
    // 延迟隐藏
    transition: visibility 0.2s;

    ul {
      padding: 0.5rem 0;
      list-style: none;
      line-height: 1.5rem;
      font-size: 0.9rem;
      color: #000;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      cursor: pointer;

      &:hover {
        background-color: @colorWhite;
      }
    }

    .label {
      flex-grow: 1;
      padding-right: 0.5em;
    }

    .tag {
      flex-shrink: 0;
    }
  }
  &.suggest .suggestion {
    visibility: visible;
  }
}

.search-type {
  display: block;
  margin: 4.5rem 0;
  font-size: 1rem;
  transition: opacity calc(@transitionTime * 4);

  &.fade {
    opacity: 0.5;
  }

  /deep/ .category {
    padding: 0.5rem 0;

    .title {
      margin: 0.5rem 0;
      text-align: left;
    }

    .el-radio {
      margin: 0.5rem;
      padding: 0.8rem 1rem;
      width: 15rem;
      border-radius: 0.25rem;
      border-left: solid 0.2rem transparent;
      background-color: #FFF;
      text-align: left;
      font-weight: normal;
      transition: border @transitionTime;

      &:hover {
        border-left-color: @colorSecondary;
        color: @colorSecondary;
      }

      &.is-checked {
        border-left-color: @colorPrimary;
        color: @colorPrimary;
      }
    }

    .el-radio__input {
      display: none;
    }

    .el-radio__label {
      display: flex;
      align-items: center;
      padding: 0;
      transition: color @transitionTime;

      i {
        display: inline-block;
        padding: 0.125rem 0;
        font-style: normal;
      }

      .fn-icon {
        flex-shrink: 0;
        margin-right: 0.4rem;
      }

      .name {
        flex-shrink: 0;
        margin-left: 0.5rem;
      }

      .desc {
        flex-grow: 1;
        margin-left: 0.5rem;
        font-size: 0.8rem;
        color: #CCC;
      }
    }
  }
}

/deep/ .link-search {
  @height: 2.8rem;

  position: sticky;
  z-index: 100;
  top: 0;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  line-height: @height;
  overflow: hidden;

  > div,
  > input {
    border: none;
  }

  .el-input-group__prepend {
    background-color: #FFF;

    .el-select .el-input {
      width: 4.5rem;

      input {
        padding: 0 0.75rem;
      }
    }
  }

  .el-input__inner {
    height: @height;
    line-height: @height;
  }
}

.link-tree {
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 14px;

  /deep/ .el-tree-node__content {
    height: 3.6em;
  }

  .link-item {
    flex-grow: 1;
    width: 0;

    > div {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title {
      opacity: 1;
    }

    .link {
      margin-top: 0.2rem;
      opacity: 0.5;
    }
  }
}

/deep/ .link-detail {
  width: 80%;
  max-width: 32rem;

  .row {
    display: flex;
    align-items: flex-start;
    line-height: 1.5rem;
  }

  .label {
    flex-shrink: 0;
    width: 3.5em;
    text-align: right;
  }

  .text {
    flex-grow: 1;
  }

  input[type="text"] {
    margin: 0;
    padding: 0;
    width: 100%;
    border: none;
    border-radius: 0;
    line-height: 1em;
    font-size: inherit;
    color: @colorSecondary;
  }
}
</style>

<style lang="less" scoped>
@media screen and (max-width: 400px) {
  .home-content {
    padding: 1rem;
  }

  .search-engine {
    .search-bar {
      top: 1rem;
    }

    .search-type {
      margin: 2rem 0;
    }

    .category {
      text-align: center;

      .el-radio {
        width: 90% !important;
      }
    }
  }
}
</style>
