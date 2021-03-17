<template>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
     <Switch1Demo/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>{{Switch1Demo.__sourceCode}}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from  'vue'
import Button from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue'
export default {
  components:{Button, Switch ,Switch1Demo},
  setup(){
    const bool = ref(false)
    return {bool,Switch1Demo}
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #ffff;
  .demo{
   border: 1px solid $border-color;
    margin: 16px 0 32px;
    >h2{
      font-size: 20px;
      padding: 12px 18px;
      border-bottom: 1px solid $border-color;
    }
    &-component{
      padding: 36px 16px;
    }
    &-actions{
      padding: 12px 4px;
      border-top: 1px dashed $border-color;
    }
    &-code{
      padding: 12px 16px;
      border-top: 1px dashed $border-color;
      >pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;

      }
    }
  }
</style>