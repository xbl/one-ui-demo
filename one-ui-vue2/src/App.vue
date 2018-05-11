<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-div v-show="show">
      <button @click="hideDiv">abc</button>
    </my-div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  data() {
    return {
      show: true
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    hideDiv () {
      this.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
