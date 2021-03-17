<template>
    <div class="demo">
      <h2>{{component.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <component :is="component" />
      </div>
      <div class="demo-actions">
        <Button @click="toggleCode">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html" />
      </div>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import {ref,computed} from 'vue'
import  'prismjs';
import 'prismjs/themes/prism.css'
const  Prism = (window as any).Prism
export default {
  props:{
    component: Object
  },
  components:{
    Button
  },
  setup(props){
    const html = computed(()=>{
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const toggleCode = () => codeVisible.value = !codeVisible.value
   const codeVisible = ref(false)
   return{Prism,html,codeVisible,toggleCode}
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