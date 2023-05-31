import { createApp } from "vue";
import App from "./App.vue";
import BasaCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("base-card", BasaCard);
app.component("base-button", BaseButton);

app.mount("#app");
