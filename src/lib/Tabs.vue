<template>
  <div class=" gulu-tabs">
    <div class=" gulu-tabs-nav" ref="container">
    <div class=" gulu-tabs-nav-item"
         v-for="(t,index) in titles"
         :ref="el =>{ if(el) navItems[index] = el }"
         @click="select(t)"
         :class="{selected:t === selected}"
         :key="index">{{t}}</div>
      <div class="gulu-tabs-nav-indicator"  ref="indicator"></div>
    </div>
    <div class=" gulu-tabs-content">
      <component class=" gulu-tabs-content-item"
                 :class="{selected:c.props.title === selected}"
                 v-for="(c,index) in defaults"
                 :is="c"
                 :key="index" ></component>
  </div>
  </div>
</template>
<script lang="ts">
import Tab from  './Tab.vue'
import {ref,onMounted,onUpdated} from 'vue'
export  default {
  props:{
    selected: {
      type:String
    }
  },
  setup(props,context){
    const navItems = ref<HTMLDivElement[]>([])
    const  indicator = ref<HTMLDivElement>(null)//获取到蓝色下划线
    const container = ref<HTMLDivElement>(null)
    const x = () => {
        //onMounted(()=>{//只在第一次渲染执行
        //挂载之后打出navItem的值
        //   console.log({...navItems.value});
        const divs = navItems.value
        const result = divs
            .filter(div=>div.classList.contains('selected'))[0]//获取到名字为selected的div
        // console.log(result);
        const {width} = result.getBoundingClientRect()//得到我们需要的宽度
        indicator.value.style.width = width + 'px' //将item的宽度赋值给div的宽度
        const {left:left1} = container.value.getBoundingClientRect()//得到nav左边的宽度
        const {left:left2} = result.getBoundingClientRect()//获取第一个div的最左侧宽度
        const left = left2-left1
        indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)
     const defaults = context.slots.default()
     defaults.forEach((tag)=>{
       if (tag.type !== Tab){ //判断TabsDome使用的子组件标签必须是tab标签
         throw new Error('Tabs 子标签必须是 Tab')
       }
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title //拿到title
    })
    const select = (title:string)=>{
       context.emit("update:selected",title)
    }
   return{
      defaults,
     titles,
     select,
     navItems,
     indicator,
     container}
  }
}
</script>
<style lang="scss">
$blue:#40a9ff;
$color:#333;
$border-color:#d9d9d9;
.gulu-tabs{
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected{
        color:#40a9ff;
      }
    }
    &-indicator{
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 300ms;
    }
  }
  &-content{
    padding: 10px 0;

    &-item{
      display: none;

     &.selected{
       display: block;
      }
     }
  }
}

</style>