<template>
  <div ref="floatingBtn" class="floating-btn">
    <div :class="['btns-inner', { show: showInner }]">
      <button class="btn" type="button" title="折叠侧边菜单" @click="toggleSideCollapse()">
        <i class="el-icon-menu" aria-hidden="true"></i>
      </button>
      <button class="btn" type="button" title="刷新" @click="refreshPage()">
        <i class="el-icon-refresh-right" aria-hidden="true"></i>
      </button>
      <button class="btn" type="button" title="返回主页" @click="backToHome()">
        <i class="el-icon-s-home" aria-hidden="true"></i>
      </button>
    </div>
    <div class="btns-outer">
      <button class="btn" type="button" title="菜单">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingBtn',
  data() {
    return {
      showInner: false,
    }
  },
  mounted () {
    this.initAnimation();
  },
  methods: {

    /** 设置动画 */
    initAnimation() {
      var vm = this;
      var el = vm.$refs['floatingBtn'];
      var btns = el.querySelectorAll('.btn');
      var className = 'animate';

      btns.forEach((elem) => {
        elem.addEventListener('click', function () {
          this.classList.remove(className);
          setTimeout(() => {
            this.classList.add(className);
            vm.toggleInnerBtns();
          }, 20);
        });
      });
    },

    /** 切换按钮显示 */
    toggleInnerBtns() {
      this.showInner = !this.showInner;
    },

    /** 返回主页 */
    backToHome() {
      const routeName = 'Home';

      if (this.$route.name != routeName) {
        this.$router.push({ name: routeName });
      } else {
        this.$message({
          duration: 2000,
          message: '已经在主页啦~',
          type: 'warning'
        });
      }
    },

    /** 刷新 */
    refreshPage() {
      window.location.reload();
    },

    /** 切换侧边菜单折叠状态 */
    toggleSideCollapse() {
      this.$store.dispatch('toggleSideCollapse');
    },

  },
}
</script>

<style lang="less" scoped>
.floating-btn {
  position: fixed;
  z-index: 5000;
  right: 2rem;
  bottom: 2rem;
  text-align: center;

  .btns-inner.show .btn {
    width: 2.6rem;
    height: 2.6rem;
    font-size: 1rem;
    color: #FFF;
  }

  @media screen and (max-width: 400px) {
    right: 1.5rem;
    bottom: 1.5rem;
  }
}

.btns-inner {
  display: inline-block;

  .btn {
    width: 0;
    height: 0;
    background-color: @colorSecondary;
    font-size: 0;
    color: transparent;
    transition: all @transitionTime;

    &:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

.btns-outer {
  display: block;

  .btn {
    margin-top: 1rem;
    width: 3.2rem;
    height: 3.2rem;
    background-color: @colorPrimary;
  }
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 0;
  bottom: 0;
  box-shadow: 0 0.15rem 0.15rem 0 rgba(0, 0, 0, 0.14),
    0 0.2rem 0.1rem -0.15rem rgba(0, 0, 0, 0.12),
    0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.20);
  border-radius: 50%;
  font-size: 1rem;
  color: #FFF;
  overflow: hidden;
  cursor: pointer;

  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #FFF;
    opacity: 0;
    transition: opacity @transitionTime;
    transform: translate(-50%, -50%);
  }

  &:hover::before {
    opacity: 0.1;
  }

  &.animate::after {
    animation: floatingBtnClick calc(@transitionTime * 2) linear;
  }
}

@keyframes floatingBtnClick {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  25% {
    opacity: 0.2;
  }
  50% {
    width: 100%;
    height: 100%;
  }
  75% {
    opacity: 0.2;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
