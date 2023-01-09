<!-- All the data of the website is in the "home.json" file, located in the path "public/config/" -->

<template>
  <v-app class="main-app">
    <v-app-bar absolute color="#f0b537" scroll-target="#scrolling-techniques-6">
      <div class="d-flex flex-row align-center">
        <v-img
          width="100px"
          height="60px"
          :src="getImageUrl('uno800.png')"
        ></v-img>
      </div>
      <div class="navbar-logo mr-3">UNO 800 Brew dispatch</div>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.display.smAndUp">
        <v-btn @click="goToMenu()" text class="nav-link"> menú </v-btn>
        <v-btn @click="goToTarget('about-us')" text class="nav-link">
          Nosotros
        </v-btn>
        <v-btn @click="goToTarget('location')" text class="nav-link">
          ubicación
        </v-btn>
      </div>
      <div class="mobile-menu" v-else>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn icon color="rgb(59, 57, 55)" v-bind="props">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list width="100vw">
            <v-list-item>
              <v-list-item-title @click="goToMenu">Menu</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="goToTarget('about-us')">Nosotros</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="goToTarget('location')">Ubicación</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer padless dark color="#f0b537">
      <v-card
        color="transparent"
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-icon
            v-for="media in $info.about.social_media"
            :key="media.name"
            class="mx-4"
            color="black"
            size="30px"
            @click="openURL(media.url)"
          >
            {{ media.icon }}
          </v-icon>
        </v-card-text>

        <v-card-text class="footer-text pt-0" v-html="$info.about.footer_text">
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="d-flex align-center flex-column">
          <div>
            {{ new Date().getFullYear() }} —
            <strong class="navbar-logo">UNO 800 Brew dispatch</strong>
          </div>
          <v-img
            width="50px"
            height="60px"
            :src="getImageUrl('uno800.png')"
          ></v-img>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    goToMenu() {
      this.openURL(this.$info.home.menu_url);
    },
    openURL(url) {
      window.open(url);
    },
    getImageUrl(name) {
      return new URL(`./assets/${name}`, import.meta.url).href;
    },
    goToTarget(DOM_id) {
      window.scrollTo({
        top: document.getElementById(DOM_id).offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/global";
.main-app {
  overflow: hidden;
}
.navbar {
  background-color: $yellow !important;
}
.navbar-logo {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 14px;
  color: $dark-grey;
  text-transform: uppercase;
}
.footer-text {
  color: azure !important;
}
.nav-link {
  color: white !important;
}
</style>

<style lang="scss">
html {
  /* font-family: 'Montserrat' !important; */
}

.v-overlay__content {
  top: 64px !important;
  left: 0 !important;
}
</style>
