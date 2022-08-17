<template>
  <div id="bodyEnd"></div>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <TestValidator>

  </TestValidator>
  <button v-on:click="addToCart">Add to cart</button>
  <p>Cart({{ cart }})</p>
</template>

<script>
import TestValidator from '@/components/TestValidator.vue'
export default {
  name: 'HelloWorld',
  components: {
    TestValidator
  },
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      cart: 0
    }
  },
  beforeCreate(){
    console.log(`Component-hello's beforeCreate`);
  },
  setup(){
    console.log('setup called!');
  },
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type })
  },
  renderTracked({ key, target, type }) {
    console.log({ key, target, type })
    /* 当组件第一次渲染时，这将被记录下来:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
  },
  methods: {
    addToCart() {
      this.cart += 1
    }
  }
}
</script>
