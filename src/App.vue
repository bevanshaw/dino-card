<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

const drawer = ref(true);
const navItems = [
  {
    title: "Homepage",
    props: {
      prependIcon: "mdi-home",
      to: "/",
    },
  },
  {
    title: "About",
    props: {
      prependIcon: "mdi-chevron-right",
      to: "/about",
    },
  },
];
</script>

<template>
  <v-app>
    <v-app-bar :elevation="2" color="secondary" flat prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon icon="mdi-menu" />
      </v-app-bar-nav-icon>
      <v-app-bar-title>Dino Card</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list
        class="ml-lg-n2 ml-md-n2 ml-sm-n2 ml-n2"
        :items="navItems"
        activeColor="secondary"
      ></v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped></style>
