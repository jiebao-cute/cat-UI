<template>
  <div>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>cat UI</h1>
      <h2>这是一个厉害的框架</h2>
      <p class="action">
        <a href="https://github.com/">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
    <div class="features">
    <svg class="icon">
      <use xlink:href="#iconVue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#iconTS"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#iconlight"></use>
    </svg>
  </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  components:{Topnav}
}
</script>
<style lang="scss" scoped>
$border-radius: 6px;
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(136,125,119,1) 0%, rgba(57,42,35,1) 100%);
}
.features{
  >svg{
    width: 64px;
    height: 64px;
  }
}
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > .action{
    padding: 10px 0;
    a{
      margin: 0 10px;
      background: #423129;
      padding: 6px 10px;
      color: white;
      border-radius: $border-radius;
    }
  }
}
</style>