<template>
  <div>
    <div>
      <span v-if="$root.wampIsOpen">Connected</span>
      <span v-else-if="$root.wampIsRetrying">Retrying...</span>
      <span v-else>Disconnected</span>
    </div>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
      <Wamp />
    </div>
  </div>
</template>

<script>
import Wamp from "./components/wamp.vue"

export default {
  name: "App",
  components: {
    Wamp,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
