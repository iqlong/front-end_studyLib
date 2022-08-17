<template>
  {{ count }}jkjkj
  <video width="800" controls loop>
    <source src="../../static/vedio/League of Legends (TM) Client 2020-05-04 16-30-31.mp4" type="video/mp4">
  </video>
  <teleport to="#bodyEnd" :disabled="!showVideo">
    <video width="800" controls loop>
      <source src="../../static/vedio/League of Legends (TM) Client 2020-05-04 16-30-31.mp4" type="video/mp4">
    </video>
  </teleport>
  <p>
    <button @click="showVideo=!showVideo">toggle teleport to bodyEnd</button>
    f{{ count }}f
    <br>
    {{ obj.test }}
    <button @click="test+='g'">destruct for reactive</button>
    <button @click="count++">countRef add</button>
  </p>
  <hr>
  <span>我的名字{{Store.name}}</span>
  <br><div @click="testFunc">改变名字</div>
  <div @click="Store.increment">只用store中的方法</div>
</template>

<script>
import {ref, reactive, watch, onMounted} from "vue";
import valiOut from '../assets/js/testRender-valiOut'
import {userStore} from '../stores/counter'

export default {
  setup() {
    const Store = userStore()
    const count = ref(0);
    const showVideo = ref(false);
    // 使用reactive的结构方法用处不大
    const obj = ref({test: 'ref and reactive and confusing!'})
    console.log('setupCalled --- testValidator');
    onMounted(() => {
      console.log('optionApi中使用老的：', valiOut.name.value += 'g');

    })
    function testFunc() {
      Store.$patch({
        name: '张慧龙'
      })
    }
    const watcher = watch( () => Store.name, (oldV, newV) => {
      console.log(`get from watcher: ${oldV} & ${newV}`)
    })
    Store.$subscribe((mutation, state) => {
      console.log('changed state')
      console.log(mutation.type,'d', mutation.storeId, mutation.payload)
      console.log(state.name)
    })

    return {
      count,
      showVideo,
      ...valiOut,
      obj,
      testFunc,
      watcher,
      Store
    };
  }

}


</script>
