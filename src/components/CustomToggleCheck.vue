<script setup lang="ts">
import { useCommunityServicesCardStore } from "@/stores/communityServicesCard";
import { useDinoCardStore } from "@/stores/dinoCard";
import { ref } from "vue";
const props = defineProps({
  heading: {
    type: String,
  },
  modelValue: {
    type: String,
  },
});

const cscStore = useCommunityServicesCardStore();
const activeButtonClass = ref("");

const dinoCardStore = useDinoCardStore();

const setToTrue = () => {
  activeButtonClass.value = "true";
  if (props.modelValue === "communityServicesCardHolder") {
    cscStore.isCommunityServicesCard = "true";
  }
  if (props.modelValue === "DinoCardHolder") {
    dinoCardStore.isDinoCard = "true";
  }
};
const setToFalse = () => {
  activeButtonClass.value = "false";
  if (props.modelValue === "communityServicesCardHolder") {
    cscStore.isCommunityServicesCard = "false";
  }
  if (props.modelValue === "DinoCardHolder") {
    dinoCardStore.isDinoCard = "false";
  }
};
</script>

<template>
  <v-card :title="props.heading" color="action" class="mb-8 pa-8">
    <v-card-actions>
      <v-btn
        @click="setToTrue()"
        elevation="2"
        :class="{
          'bg-success': activeButtonClass === 'true',
        }"
        >Yes</v-btn
      >
      <v-btn
        @click="setToFalse()"
        elevation="2"
        :class="{
          'bg-error': activeButtonClass === 'false',
        }"
        >No</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss"></style>
