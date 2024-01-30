import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(Toast, {
  position: POSITION.TOP_CENTER,
  timeout: 3000,
});

app.mount("#app");
