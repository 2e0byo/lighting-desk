<template>
  <div>
    <div v-for="(channel, index) in channels" :key="index">channel {{index}}: {{ channel }}</div>
  </div>
</template>
<script>
export default {
  name: "Wamp",
  data() {
    return {
      controllerName: null,
      channels: []
    };
  },
  wamp: {
    subscribe: {
      'controller.statechange'(args, kwArgs, details) {
        this.channels = args[0]
        console.log(args, kwArgs, details)
      }//,
      // 'another-topic': {
      //   acknowledge: true,
      //   handler(args, kwArgs, details) {
      //     // do stuff
      //   }
      // }
    }
  },
  async mounted() {
    const info  = await this.$wamp.call("details", [])
    this.channels = new Array(info.channels)
    console.log(info)
    this.channels = info.vals
  }
}
</script>
