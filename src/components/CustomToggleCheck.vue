<script setup lang="ts">
import { useCommunityServicesCardStore } from "@/stores/communityServicesCard";
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

const setToTrue = () => {
  if (props.modelValue === "isCommunityServicesCard") {
    cscStore.hasCommunityServicesCard = "true";
    activeButtonClass.value = "true";
  }
};
const setToFalse = () => {
  if (props.modelValue === "isCommunityServicesCard") {
    cscStore.hasCommunityServicesCard = "false";
    activeButtonClass.value = "false";
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
          'bg-warning': activeButtonClass === 'false',
        }"
        >No</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss"></style>
