<script setup lang="ts">
const props = defineProps({
  heading: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="about-community-connect mb-lg-16 mb-md-16 mb-sm-16 mb-4">
    <h1
      class="about-community-connect__title display-1 font-weight-bold mb-lg-8 mb-md-8 mb-sm-8 mb-4"
    >
      {{ props.heading }}
    </h1>
    <p
      class="text-lg-body-1 text-md-body-1 text-sm-body-1 text-xs-body-1 font-weight-medium"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
