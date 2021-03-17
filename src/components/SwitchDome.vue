<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"/>
  </div>
</template>
<script lang="ts">
import {ref} from  'vue'
import Button from '../lib/Button.vue';
import Switch1Demo from './Switch1.demo.vue'
import  'prismjs';
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue';
const  Prism = (window as any).Prism

export default {
  components:{Demo, Button},
  setup(){
    const bool = ref(false)
    return {bool,
      Switch1Demo,Prism}
  }
}
</script>
<style lang="scss" scoped>
</style>