<script setup lang="ts">
import InformationCard from "@/components/InformationCard.vue";
import CustomToggleCheck from "@/components/CustomToggleCheck.vue";
import CommunityServicesCardForm from "@/components/CommunityServicesCardForm.vue";
import DinoCardForm from "@/components/DinoCardForm.vue";
import DinoCardRegisterForm from "@/components/DinoCardRegister.vue";
</script>

<template>
  <InformationCard
    heading="Welcome to Dino Card"
    description="Dino Card is a government funded concession that gives community service cardholders with a registered Dino Card access to half-price public transport."
  />
  <CustomToggleCheck heading="Do you have a Community Services Card?" />
  <CommunityServicesCardForm />
  <InformationCard
    heading="You are not fossilized enough for a Dino Card!"
    description="Dino Card is only available to community service cardholders allowing access to half-price public transport."
  />
  <CustomToggleCheck heading="Do you have an existing Dino Card?" />
  <DinoCardForm />
  <DinoCardRegisterForm />
</template>

<style lang="scss" scoped></style>
