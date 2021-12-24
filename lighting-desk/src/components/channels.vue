<template>
  <div>
    <Channel
      v-for="(val, index) in vals"
      :key="index"
      :number="index"
      :val="val"
      :ref="`Channel${index}`"
    />
    <!-- <Channel
         :number="3"
         :val="7"
         /> -->
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
    }
  },
  wamp: {
    subscribe: {
      "controller.statechange"(args) {
        args[0].forEach((val, i) => this.$refs[`Channel${i}`][0].val = val)
      },
    },
  },
  async mounted() {
    const info = await this.$wamp.call("details")
    this.vals = info.vals
  },
}
</script>
