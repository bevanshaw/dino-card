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
  <div class="my-8">
    <template>
      <v-icon icon="mdi-home" />
    </template>

    <h3 class="text-h3 my-8">
      {{ props.heading }}
    </h3>
    <p>
      {{ props.description }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
