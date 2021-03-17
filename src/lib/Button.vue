<template>
  <button class="gulu-button" :class="classes" :disabled="disabled" :loading="loading">
    <div v-if="loading" class="gulu-loadingIndicator"></div>
    <slot />
  </button>
</template>
<script lang="ts">
import {computed} from "vue";
export default {
props: {
  theme: {
    type: String,
    default: "button",
  },
  size:{
    type: String,
    default: "normal",
  },
  level: {
    type: String,
    default: "normal",
  },
  disabled: {
    type: Boolean,
    default:false
  },
  loading: {
    type: Boolean,
    default: false
  }
},
  setup(props){
  const {theme,size,level} = props;
  const classes = computed(()=>{
    return {
      [`gulu-theme-${theme}`]: theme,
      [`gulu-size-${size}`]: size,
      [`gulu-level-${level}`]: level,
    };
  });
    return {classes};
    },
};
</script>
<style lang="scss">
$h:32px;
$border-color:#d9d9d9;
$color:#333;
$blue:#d29959;
$radius:4px;
.gulu-button{
  box-sizing: border-box;
  height: $h;
  margin: 8px 0;
  padding: 0 12px;
  cursor: pointer;//鼠标悬浮变成手
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0  fade-out(black,0.95);
  transition: background 250ms ;
  & + &  {
    margin-left: 8px;//button之间的间隔
  }
  &:hover,
  &:focus{
    color: $blue;//focus就是tab
    border-color: $blue;
  }
  &:focus{
    outline: none;//focus就是tab
  }
  &::-moz-focus-inner{
    border: 0;
  }
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus::after{
      content: '';
      color: white;
      background: #392a23;
    }
  }
    &.gulu-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,
      &:focus {
        background: darken(white, 50%);
        border-color:black;
        color: white;
      }
    }

  &.gulu-size-big {
    font-size: 20px;
    height: 46px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
   &.gulu-theme-button{
     &.gulu-level-main{
       background: darkseagreen;
       color: black;
       border-color: darkgreen;
       box-shadow: 0 0 2px 1px darkseagreen;
       &:hover,
       &:focus{
         color: white;
         background: darken(green,5%);
         border-color: darken(darkgreen,10%);
       }
     }
     &.gulu-level-danger{
       background: palevioletred;
       border-color:brown;
       box-shadow: 0 0 2px 1px palevioletred;
       &:hover,
       &:focus{
         color: white;
         background: red;
         border-color: darken(red,10%);
       }
     }
   }
  &.gulu-theme-link{
    &.gulu-level-danger{
      color: palevioletred;
      box-shadow: 0 0 2px 1px palevioletred;
      &:hover,
      &:focus{
        color: white;
        background: red;
        border-color: darken(red,10%);
      }
    }
    &.gulu-level-main{
      color: darkseagreen;
      box-shadow: 0 0 2px 1px darkseagreen;
      &:hover,
      &:focus{
        color: white;
        background: darken(green,5%);
        border-color: darken(darkgreen,10%);
      }
    }
  }
  &.gulu-theme-text{
    &.gulu-level-main {
      color: darkseagreen;
      box-shadow: 0 0 2px 1px darkseagreen;
      &:hover,
      &:focus{
        color: white;
        background: darken(green,5%);
        border-color: darken(darkgreen,10%);
      }
    }
    &.gulu-level-danger {
      color: palevioletred;
      box-shadow: 0 0 2px 1px palevioletred;
      &:hover,
      &:focus{
        color: white;
        background: red;
        border-color: darken(red,10%);
      }
    }
  }

   &.gulu-theme-button{
     &[disabled]{
       cursor: not-allowed;
       color: grey;
       &:hover{
         border-color: grey;
       }
     }
   }
  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: grey;
    }
  }

   > .gulu-loadingIndicator{
     width: 14px;
     height: 14px;
     display: inline-block;
     margin-right: 4px;
     border-radius: 8px;
     border-color: royalblue royalblue royalblue transparent;
     border-style: solid;
     border-width: 2px;
     animation: gulu-spin 1s infinite linear;
   }
}
@keyframes gulu-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}


</style>