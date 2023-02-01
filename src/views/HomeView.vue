<script setup lang="ts">
import IntroInformation from "../components/IntroInformation.vue";
import CustomToggleCheck from "@/components/CustomToggleCheck.vue";
import CSCardForm from "@/components/CSCardForm.vue";
</script>

<template>
  <IntroInformation
    heading="Welcome to Dino Card"
    description="Dino Card is a government funded concession that gives community service cardholders with a registered Dino Card access to half-price public transport."
  />
  <CustomToggleCheck heading="Do you have a Community Services Card?" />
  <CSCardForm />
  <CustomToggleCheck heading="Do you have an existing Dino Card?" />
</template>

<style lang="scss" scoped></style>
