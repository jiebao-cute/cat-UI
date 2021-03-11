import Dialog from './Dialog.vue'
import {createApp,h} from 'vue'
export  const openDialog = (options)=>{
  const {title,context,ok,cancel} = options
  const  div = document.createElement('div')
  document.body.appendChild(div)//div放到body里面
  const close = () => {
    //@ts-ignore
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render(){
         return h(//这个h函数是因为可以接收第二个参数vieble,就可以让Dialog出现
           Dialog,
           {//这个对象属性都会被当成Dialog属性
             visible: true,
             'onUpdate:visible':(newVisible)=>{//监听visible,在点击close时，会打出false
               if (newVisible === false){close()}},
                ok,cancel
           },
           {
        title,context//接收内容和标题
      })
    }
  })
  app.mount(div)//Dialog放在div里面
}