<template>
  <div v-if="$root.wampIsOpen">
    <Channel
      v-for="(val, index) in vals"
      :key="index"
      :number="index"
      :val="val"
      :ref="`Channel${index}`"
    />
  </div>
  <div v-else>
    <md-dialog-prompt
      :md-active.sync="!$root.wampIsOpen"
      v-model="password"
      md-title="Enter Password"
      md-input-placeholder="Password"
      md-confirm-text="Login"
      v-on:md-confirm="reconnect"
    />
  </div>
</template>

<script>
import Channel from "./channel.vue"

export default {
  name: "Channels",
  components: {
    Channel,
  },
  data() {
    return {
      controllerName: null,
      vals: [],
      password: "",
    }
  },
  wamp: {
    subscribe: {
      "controller.statechange"(args) {
        args[0].forEach((val, i) => (this.$refs[`Channel${i}`][0].val = val))
      },
    },
  },
  async mounted() {
    // It would probably be better to reconnect or move the connection logic here.
    const self = this
    this.$wamp._connection._options.onchallenge = function () {
      return self.password
    }
  },
  methods: {
    reconnect: async function () {
      this.$wamp._connection.open()
      const info = await this.$wamp.call("details")
      this.vals = info.vals
    },
  },
}
</script>
