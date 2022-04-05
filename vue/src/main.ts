import { createApp } from "vue";
import { createPinia } from "pinia";
import { RowndPlugin } from "@rownd/vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(RowndPlugin, {
  appKey: "cab1d353-655a-414b-9d33-39fc8f4bf54e",
});

app.use(createPinia());
app.use(router);

app.mount("#app");
