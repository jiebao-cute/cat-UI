<template>
  <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>
<script>
export default {
  props:{
    value: Boolean
  },
  setup(props,context){
    const toggle = () => {
     context.emit('input', !props.value)
    }
    return { toggle}
  }
}
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button{
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
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
  background:white;
  transition: left 0.5s;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px)
}
button:focus{
  outline: none;
}
</style>