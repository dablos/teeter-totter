import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import "./styles/global.css";

const app = createApp(App);

app.use(store);
app.mount("#app");
