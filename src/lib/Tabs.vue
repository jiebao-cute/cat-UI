<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(c,index) in defaults" :is="c" :key="index" ></component>
  </div>
</template>
<script lang="ts">
import Tab from  './Tab.vue'
export  default {
  setup(props,contexts){
     const defaults = contexts.slots.default()
     defaults.forEach((tag)=>{
       if (tag.type !== Tab){ //判断TabsDome使用的子组件标签必须是tab标签
         throw new Error('Tabs 子标签必须是 Tab')
       }
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })
   return{defaults,titles}
  }
}
</script>