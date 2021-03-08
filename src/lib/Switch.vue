<template>
  <button  class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}"><span></span></button>
</template>
<script>
export default {
  props:{
    value: Boolean
  },
  setup(props,context){
    const toggle = () => {
     context.emit('update:value', !props.value)
    }
    return { toggle}
  }
}
</script>
<style lang="scss" >
$h: 22px;
$h2: $h - 4px;
.gulu-switch{
  height: $h;
  width: $h * 2;
  border: none;
  background: lightyellow;
  border-radius: $h/2;
  position: relative;
  box-shadow: 0 0 1px 1px #666;
}
span{
  position: absolute;
  left: 2px;
  top: 2px;
  height: $h2;
  width: $h2;
  border-radius: $h2/2;
  background:palevioletred;
  transition: all 250ms;
}
button.gulu-checked {
  background: cadetblue;
}
button.gulu-checked > span {
  background: greenyellow;
  left: calc(100% - #{$h2} - 2px)
}
.gulu-switch:focus{
  outline: none;
}
.gulu-switch:hover{
  box-shadow: 0 0 6px 2px #666;
}
.gulu-switch:active{
  > span {width: $h2 + 4px}
}
button.gulu-checked:active{
  > span {width: $h2 + 4px; margin-left: -4px}
}
</style>