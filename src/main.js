import { createApp } from "vue";
import App from "./App.vue";
import BasaCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

app.component("base-card", BasaCard);

app.mount("#app");
