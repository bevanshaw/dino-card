<script setup lang="ts">
import CustomToggleCheck from "@/components/CustomToggleCheck.vue";
import CommunityServicesCardForm from "@/components/CommunityServicesCardForm.vue";
import DinoCardForm from "@/components/DinoCardForm.vue";
import DinoCardRegisterForm from "@/components/DinoCardRegisterForm.vue";
import { useCommunityServicesCardStore } from "@/stores/communityServicesCard";
import { useDinoCardStore } from "@/stores/dinoCard";

const cscStore = useCommunityServicesCardStore();
const communityServicesCardHolder = "communityServicesCardHolder";

const dinoCardStore = useDinoCardStore();
const DinoCardHolder = "DinoCardHolder";
</script>

<template>
  <v-card
    title="Welcome to Dino Card!"
    text="Dino Card is a government funded concession that gives community service cardholders with a registered Dino Card access to half-price public transport."
    variant="tonal"
    color="primary"
    class="mb-8 pa-8"
    rounded="0"
  />
  <CustomToggleCheck
    heading="Do you have a Community Services Card?"
    :modelValue="communityServicesCardHolder"
  />
  <CommunityServicesCardForm
    v-show="cscStore.isCommunityServicesCard === 'true'"
  />
  <v-card
    v-show="cscStore.isCommunityServicesCard === 'false'"
    title="You are not eligible for a Dino Card!"
    text="Dino Card is only available to community service cardholders."
    variant="tonal"
    color="error"
    class="mb-8 pa-8"
    rounded="0"
  />
  <CustomToggleCheck
    v-show="cscStore.isCscValid"
    heading="Enter your Dino Card details:"
    :modelValue="DinoCardHolder"
  />
  <DinoCardForm v-show="dinoCardStore.isDinoCard === 'true'" />
  <DinoCardRegisterForm v-show="dinoCardStore.isDinoCard === 'false'" />
</template>

<style lang="scss" scoped></style>
