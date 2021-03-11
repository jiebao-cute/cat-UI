<template>
  <div>
    <h2>dialog示例1</h2>
    <Button @click="toggle">toggle</Button>
   <Dialog :visible="x"  @update:visible = "x = $event"  :close-onclick-overlay="false"
   :ok="f1"  :cancel="f2"
   >
     <div>
       哈喽，我是你爸爸
     </div>
     <div>
      哈喽我是你妈妈
     </div>
   </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue';
import {ref} from 'vue'
export default {
  components:{
    Dialog,Button
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = () =>{
     return false  //返回false，可以通过return 来阻止关闭
    }
    const f2 = () =>{
               //和ok函数一样的逻辑
    }
    return{toggle,x,f1,f2}
  }

}
</script>