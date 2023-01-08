<template>
  <v-app class="main-app">
    <v-app-bar absolute color="#f0b537" scroll-target="#scrolling-techniques-6">
      <!-- <v-toolbar-title>Collapsing Bar</v-toolbar-title> -->
      <div class="d-flex flex-row align-center">
        <v-img
          width="100px"
          height="60px"
          :src="getImageUrl('uno800.png')"
        ></v-img>
      </div>
      <div class="navbar-logo mr-3">UNO 800 Brew dispatch</div>
      <v-spacer v-if="$vuetify.display.smAndUp"></v-spacer>
      <div v-if="$vuetify.display.smAndUp">
        <v-btn @click="goToMenu()" text class="nav-link"> menú </v-btn>
        <v-btn text class="nav-link"> ubicación </v-btn>
        <v-btn text class="nav-link"> contacto </v-btn>
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
            v-for="media in social_media"
            :key="media.name"
            class="mx-4"
            color="black"
            size="30px"
            @click="openURL(media.url)"
          >
            {{ media.icon }}
          </v-icon>
        </v-card-text>

        <v-card-text class="footer-text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada.
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

  data: () => ({
    social_media: [
      {
        name: "facebook",
        icon:"mdi-facebook",
        url: "https://www.facebook.com/Uno800Cafe",
      },
      {
        name: "instagram",
        icon:"mdi-instagram",
        url: "https://www.instagram.com/uno800cafe/",
      },
    ],
    menuUrl:
      "https://www.foodbooking.com/ordering/restaurant/menu?company_uid=f3dbcba5-d95b-4b90-aae8-36154f89ecd7&restaurant_uid=7d459545-e2bf-47af-ba44-2cd04b992f3d&facebook=true",
  }),


  methods: {
    goToMenu() {
      this.openURL(this.menuUrl);
    },
    openURL(url) {
      window.open(url);
    },
    getImageUrl(name) {
      return new URL(`./assets/${name}`, import.meta.url).href;
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

<style>
html {
  /* font-family: 'Montserrat' !important; */
}
</style>
