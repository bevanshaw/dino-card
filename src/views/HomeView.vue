<script setup lang="ts">
import CustomToggleCheck from "@/components/CustomToggleCheck.vue";
import CommunityServicesCardForm from "@/components/CommunityServicesCardForm.vue";
import DinoCardForm from "@/components/DinoCardForm.vue";
import DinoCardRegisterForm from "@/components/DinoCardRegisterForm.vue";
import { useCommunityServicesCardStore } from "@/stores/communityServicesCard";

const cscStore = useCommunityServicesCardStore();
const isCommunityServicesCard = "isCommunityServicesCard";

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
  <CustomToggleCheck heading="Do you have a Community Services Card?" :modelValue="isCommunityServicesCard"/>
  <CommunityServicesCardForm v-show="cscStore.hasCommunityServicesCard === 'true'" />
  <v-card
    v-show="cscStore.hasCommunityServicesCard === 'false'"
    title="You are not eligible for a Dino Card!"
    text="Dino Card is only available to community service cardholders."
    variant="tonal"
    color="warning"
    class="mb-8 pa-8"
    rounded="0"
  />
  <CustomToggleCheck heading="Do you have an existing Dino Card?" />
  <DinoCardForm />
  <DinoCardRegisterForm />
</template>

<style lang="scss" scoped></style>
