<template>
  <div>
    <component v-for="c in defaults" :is="c"></component>
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