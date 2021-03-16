<template>
  <div>
    <component :is="defaults[0]"></component>
    <component :is="defaults[1]"></component>
  </div>
</template>
<script lang="ts">
import Tab from  './Tab.vue'
export  default {
  setup(props,contexts){
     const defaults = contexts.slots.default()
     defaults.forEach((tag)=>{
       if (tag.type !== Tab){
         throw new Error('Tabs 子标签必须是 Tab')
       }
    })
   return{defaults}
  }
}
</script>