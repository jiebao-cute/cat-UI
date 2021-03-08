<template>
  <button @click="toggle" :class="{checked:checked}"><span></span></button>
</template>
<script>
import {ref} from 'vue'
export default {
  setup(){
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
    }
    return {checked , toggle}
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
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px)
}

</style>