import Vue from "vue";
import App from "./App.vue";
import { createAidbox } from "./aidbox";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  provide: {
    aidbox: createAidbox(),
  },
}).$mount("#app");
