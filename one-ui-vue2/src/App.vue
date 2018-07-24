<template>
  <div id="app">
    <x-header v-show="show" @logo="clickLogo"></x-header>
    <img src="./assets/logo.png" >
    <button @click="hideDiv">abc</button>
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
    },
    clickLogo() {
      alert('click logo!')
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
body{ margin: 0; }
</style>
