import { createApp } from "vue";
import App from "./App.vue";
import "virtual:svg-icons-register";
// 引入tailwind
import "tailwindcss/tailwind.css";
const app = createApp(App);
app.mount("#app");
