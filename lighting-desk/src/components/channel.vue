<template>
  <md-card>
    <md-card-header>
      <span class="md-subhead">
        {{val}}
      </span>
    </md-card-header>

    <vue-material-slider
      :min="0"
      :max="256"
      :vertical="true"
      :disabled="disabled"
      :thumbLabel="true"
      v-model="val"
    />
    <md-card-header>
      <div class="md-title">{{ number }}</div>
    </md-card-header>
  </md-card>
</template>

<style>
.md-card {
  width: 50px;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>


<script>
export default {
  name: "Channel",
  props: {
    number: Number,
    initialVal: Number,
  },
  data() {
    return {
      disabled: true,
      val: 0
    }
  },
  watch: {
    val: async function(v) {
      try {
        await this.$wamp.call("set_brightness", [], {channel:this.number, val:v})
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted() {
    try {
      this.val = await this.$wamp.call("get_brightness",[], {channel: this.number})
      this.disabled = false
    } catch (err) {
      console.error(err)
    }
  },
}

</script>
