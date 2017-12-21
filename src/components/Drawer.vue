<template>
  <transition name="drawer">
    <div v-bind:class="{'drawer-menu-open':inAtivar, 'drawer-menu-close':!inAtivar}">
      <div class="drawer-menu" v-show="inAtivar">
        <slot class="body" name="body">
          default body
        </slot>
      </div>
    </div>
  </transition>
</template>
<script>
import Icon from 'vue-awesome'
export default {
  components: {
    Icon
  },
  props: {
    inAtivar: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="css">
.drawer-menu-open {
    width: 100vw;
    height: 10vh;
    max-height: 10vh;
    position: fixed;
    z-index: 9998;
    background-color: var(--corVerdeHover);
    color: var(--corSecundaria);
    animation: animation-open-drawer 2s ease;
  }

  @keyframes animation-open-drawer {
    0% {
      height: 0vh;
    }
    100% {
      height: 10vh;
    }
  }

  .drawer-menu-close {
    width: 100vw;
    height: 0vh;
    position: fixed;
    z-index: 9990;
    background-color: var(--corVerdeHover);
    animation: animation-close-drawer 2s ease;
  }

  @keyframes animation-close-drawer {
    0% {
      height: 10vh;
    }
    100% {
      height: 0vh;
    }
  }

  .drawer-menu {
    color: var(--corSecundaria);
    width: 100vw;
    height: 10vh;
    font-size: 16px;
    padding-right: 1vw;
  }

  .drawer-menu .body {
    height: 10vh;
  }
</style>

