import Vue from 'vue'
import App from './App.vue'



import VueWamp from 'vue-wamp'

Vue.use(VueWamp, {
     url: 'wss://wamp.2e0byo.co.uk:3227/ws',
    // url: 'ws://demo.crossbar.io/ws',
    realm: 'miniature-lighting-controller',
    authmethods: ["ticket"],
    authid: "public",
    onchallenge: function () {return ""},

    // change this in case of naming conflict
    namespace: 'wamp',
    // automatically re-registers and re-subscribes after reconnection (on by default)
    auto_reestablish: true,
    // automatically closes WS connection after amount of idle milliseconds (off by default)
    auto_close_timeout: -1,
});



import 'vue-material-slider/dist/vue-material-slider.css'
import VueMaterialSlider from 'vue-material-slider';
Vue.use(VueMaterialSlider);
// import {Slider} from 'vue-material-slider'
// Vue.use(Slider)

import { MdDialogPrompt, MdDialog, MdSwitch, MdButton} from 'vue-material/dist/components'
import { MdCard } from 'vue-material/dist/components'
import { MdDialogAlert , MdField} from 'vue-material/dist/components'
import {MdApp, MdToolbar, MdContent } from 'vue-material/dist/components'
// import {MdInput} from 'vue-material/dist/components/MdField'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdContent)
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdSwitch)
Vue.use(MdButton)
Vue.use(MdDialog)
Vue.use(MdDialogAlert)
Vue.use(MdDialogPrompt)
Vue.use(MdCard)
Vue.use(MdField)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
