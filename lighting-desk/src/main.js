import Vue from 'vue'
import App from './App.vue'



import VueWamp from 'vue-wamp'

Vue.use(VueWamp, {
     url: 'ws://wamp.2e0byo.co.uk:3227/ws',
    // url: 'ws://demo.crossbar.io/ws',
    realm: 'miniature-lighting-controller',

    // change this in case of naming conflict
    namespace: 'wamp',
    // automatically re-registers and re-subscribes after reconnection (on by default)
    auto_reestablish: true,
    // automatically closes WS connection after amount of idle milliseconds (off by default)
    auto_close_timeout: -1,
});


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
