import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/styles/global.scss";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

fetch(import.meta.env.BASE_URL + "config/home.json")
  .then((response) => response.json())
  .then((info) => {
    const app = createApp(App)
    app.config.globalProperties.$info = info
      app.use(
        AOS.init({
          duration: 0,
        })
      )
      app.use(router)
      app.use(store)
      app.use(vuetify)
      app.mount("#app");
      
      // 
  });


