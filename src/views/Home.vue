<template>
  <div>
    <div class="kuang">
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>Cat UI</h1>
      <h2>这 是 一 个 UI 的 框 架</h2>
      <p class="action">
        <a href="https://github.com/">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#iconVue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#iconTS"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#iconlight"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码比较简洁</p>
        </li>
      </ul>
  </div>
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
.kuang{
  background:#c6c1be;

}
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(136,125,119,1) 0%, rgba(57,42,35,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  padding: 0 24px;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      color: #392a23;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
.banner{
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #d9d9d8;
  > .action{
    padding: 12px 0;
    a{
      margin: 6px 10px;
      background: #423129;
      padding: 10px 16px;
      color: white;
      border-radius: $border-radius;
    }
  }
}
</style>