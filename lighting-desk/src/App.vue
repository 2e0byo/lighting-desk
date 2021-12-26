<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <span class="md-title">Miniature Lighting Desk</span>
        </div>
        <div class="md-toolbar-row">
          <span class="md-subtitle" v-if="$root.wampIsOpen"
            >Connected to Server</span
          >
          <span class="md-subttile" v-else-if="$root.wampIsRetrying"
            >Retrying...</span
          >
          <span class="md-subtitle" v-else>Disconnected</span>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <Channels />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Channels from "./components/channels.vue"

export default {
  name: "App",
  components: {
    Channels,
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
