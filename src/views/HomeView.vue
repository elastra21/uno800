<template>
  <v-container class="top-container pt-0">
    <v-row class="mb-0 mb-0">
      <v-carousel
        :show-arrows="false"
        hide-delimiter-background="true"
        height="80vh"
        v-model="model"
        class="elevation-6"
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet color="#8C5638" height="100%" tile>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-col v-if="$vuetify.display.mdAndUp" cols="4" lg="5"> </v-col>
              <v-col class="fill-height pb-0">
                <v-img
                  cover
                  position="center left"
                  :src="getImageUrl('cup_coffee.jpeg')"
                  class="fill-height grey lighten-2"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-parallax :src="getImageUrl('parallax-4.jpg')" class="menu elevation-3">
      <div class="content">
        <h1>Visita nuestro menú en línea</h1>
        <v-btn class="mt-4" variant="outlined" @click="goToMenu()">
          <v-icon class="mr-2">mdi-cart</v-icon> ver más
        </v-btn>
      </div>
    </v-parallax>
  </v-container>

  <v-container class="bottom pb-0">
    <v-row class="d-flex justify-center mb-10">
      <v-col cols="12" class="text-center">
        <h1 class="mt-4 mb-0">Métodos de extración de café</h1>
      </v-col>
      <v-col cols="12" sm="7" md="5">
        <v-row>
          <v-col cols="6" class="pa-10">
            <v-img
              @click="setMethodIndex()"
              contain
              width="100px"
              height="100px"
              aspect-ratio="1"
              :src="getImageUrl('v60.png')"
            />
          </v-col>
          <v-col hover cols="6" class="pa-10">
            <v-img
              @click="setMethodIndex()"
              contain
              width="100px"
              height="100px"
              aspect-ratio="1"
              :src="getImageUrl('chemex.png')"
            />
          </v-col>
          <v-col hover cols="6" class="pa-10">
            <v-img
              @click="setMethodIndex()"
              contain
              width="100px"
              height="100px"
              aspect-ratio="1"
              :src="getImageUrl('french_press.png')"
            />
          </v-col>
          <v-col hover cols="6" class="pa-10">
            <v-img
              @click="setMethodIndex()"
              contain
              width="100px"
              height="100px"
              aspect-ratio="1"
              :src="getImageUrl('kalita wave.png')"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4"> Hola </v-col>
    </v-row>
    <v-row>
      <v-col class="pr-0 pb-0" style="height: 650px; max-height: 650px">
        <v-img cover height="100%" :src="getImageUrl('metodos.jpeg')" />
      </v-col>
      <v-col
        v-if="!$vuetify.display.smAndDown"
        style="height: 650px; max-height: 650px"
        class="d-flex flex-column"
      >
        <v-img
          cover
          class="mb-3"
          height="50%"
          aspect-ratio="1"
          :src="getImageUrl('tasa.jpeg')"
        />
        <v-img
          cover
          height="50%"
          aspect-ratio="1"
          :src="getImageUrl('tostados.jpeg')"
        />
      </v-col>
      <v-col
        v-if="!$vuetify.display.xs"
        class="pl-0 pb-0"
        style="height: 650px; max-height: 650px"
      >
        <v-img cover height="100%" :src="getImageUrl('granos.jpeg')" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="mt-4 mb-0">Nuestros productos</h1>
      </v-col>
      <v-col
        class="d-flex flex-column justify-center align-center"
        v-for="(coffee, index) in coffees"
        :data-aos="`fade-${!index ? 'right' : index == 1 ? 'up' : 'left'}`"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="4"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-img
            aspect-ratio="1"
            cover
            width="300"
            :src="coffee.img"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            v-bind="props"
          >
            <v-fade-transition>
              <div
                v-if="isHovering || $vuetify.display.smAndDown"
                class="fade-coffee-card transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
              >
                <h1 class="mb-2">{{ coffee.name }}</h1>
                <v-divider dark class="mb-5" width="200px"></v-divider>
                <h2 class="mb-0">{{ coffee.grain }}</h2>
                <h2>{{ coffee.origen }}</h2>
                <h4>{{ coffee.roast }}</h4>
                <div>
                  <span v-for="size in coffee.weight">
                    {{ size + "g" }}
                    <tr></tr>
                  </span>
                </div>
              </div>
            </v-fade-transition>
          </v-img>
        </v-hover>
        <h3>{{ coffee.name }}</h3>
        <h4>{{ coffee.origen }}</h4>
      </v-col>
    </v-row>

    <v-row class="mt-10" id="about-us">
      <v-col cols ="12" md="6" data-aos="fade-right" class="d-flex align-center flex-column">
        <h1 class="mt-9">UNO 800 CAFÉ</h1>
        <v-img
          :src="getImageUrl('uno800.png')"
          class="mt-5 mb-5"
          contain
          width="300px"
        ></v-img>
      </v-col>
      <v-col cols ="12" md="6" data-aos="fade-left">
        <p v-html="$info.about.history"></p>
      </v-col>
    </v-row>
    <v-row class="ma-0 rows first-row" data-aos="fade-up">
      <v-col cols="12" md="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${60}`"
          :lazy-src="`https://picsum.photos/10/6?image=${60}`"
          class="grey lighten-2"
          aspect-ratio="1"
          cover
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" md="8"> hola </v-col>
    </v-row>
    <v-row class="rows" data-aos="fade-up">
      <v-col cols="12" md="8"> hola </v-col>
      <v-col cols="12" md="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${60}`"
          :lazy-src="`https://picsum.photos/10/6?image=${60}`"
          class="grey lighten-2"
          aspect-ratio="1"
          cover
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <v-row class="rows" data-aos="fade-up">
      <v-col cols="12" md="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${60}`"
          :lazy-src="`https://picsum.photos/10/6?image=${60}`"
          class="grey lighten-2"
          aspect-ratio="1"
          cover
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" md="8"> hola </v-col>
    </v-row>
    <div>
      <v-row>
        <v-col id="location" cols="12" class="px-10">
          <h2>Encuéntranos</h2>
        </v-col>
        <v-col class="pa-0" cols="12" md="5" lg="5" xl="5">
          <div class="information">
            <div class="mb-5 address-container">
              <h3>Dirección:</h3>
              <span>{{ $info.about.address }}</span>
            </div>
            <div class="mb-5">
              <h3>Teléfono:</h3>
              <p class="white--text">
                <a :href="`tel:${$info.about.phone}`">{{ $info.about.phone }}</a>
              </p>
            </div>
            <!-- <h3>Dirección:</h3>
            <span>sdasdasdas</span> -->
          </div>
        </v-col>
        <v-col class="pa-0" cols="12" md="7" lg="7" xl="7">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                :src="$info.about.maps_link"
                id="gmap_canvas"
                frameborder="0" 
                allowfullscreen
                scrolling="no"
                style="width: 100%; height: 400px"
              ></iframe>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import * as easings from "vuetify/lib/services/goto/easing-patterns";

export default defineComponent({
  name: "HomeView",
  beforeMount() {
    this.coffees = this.$info.home.products
  },
  data: () => ({
    model: 0,
    easing: "easeInOutCubic",
    duration: 300,
    offset: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    coffees: [],
  }),
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      };
    },
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/${name}`, import.meta.url).href;
    },
    goToMenu() {
      window.open(this.$info.home.menu_url);
    },
    goToTarget(DOM_id) {
      this.$vuetify.goTo(DOM_id, this.options);
    },
  },
});
</script>

<style lang="scss">
.top-container {
  max-width: 100vw !important;
  padding-left: 0;
  padding-right: 0;
}
.menu {
  .v-img__img {
    position: absolute;
    margin-left: auto;
    right: 0;
    left: 0;
    margin-right: auto;
    max-width: 40% !important;
    filter: blur(1px) !important;
  }
}
</style>
<style scoped lang="scss">
@import "@/assets/styles/global";
.carousel-sheet {
  background-color: $dark-grey !important;
}
.fade-coffee-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(55, 55, 55, 0.4);
  * {
    color: white;
  }
}
.address-container {
  max-width: 250px;
  // margin-left: 5%;
}
.information {
  padding: 10px;
  background-color: $dark-grey;
  height: 100%;
  padding: 40px;
  * {
    color: white;
  }
  // border-radius: 10px;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;
  background-color: lightgrey;
  overflow: hidden;
  * {
    max-height: 220px;
  }
  .content {
    filter: none !important;
    display: flex;
    width: 100%;
    height: 220px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    * {
      color: white;
    }
    background-color: rgba(55, 55, 55, 0.6);
  }
}
.bottom {
  .first-row {
    margin-top: 5% !important;
  }
  .rows {
    justify-content: space-between;
    margin-bottom: 10%;
    margin-top: 10%;
    max-height: 350px;
  }
}
</style>
