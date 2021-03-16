<template>
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
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  components:{Topnav}
}
</script>
<style lang="scss" scoped>
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(136,125,119,1) 0%, rgba(57,42,35,1) 100%);
}
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > .action{
    padding: 8px 0;
    a{
      margin: 0 8px;
      background: lightskyblue;
      $h: 28px;
      height: $h;
      line-height:$h;
      padding: 0 8px;
      border-radius: $h/2;
    }
  }
}
</style>