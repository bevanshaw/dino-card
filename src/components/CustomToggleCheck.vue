<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  heading: {
    type: String,
  },
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const setToTrue = () => {
  value.value = "true";
};
const setToFalse = () => {
  value.value = "false";
};
</script>

<template>
  <div class="custom-toggle mb-lg-11 mb-md-11 mb-sm-11 mb-8 mx-12">
    <h3 class="mb-8 text-h56">
      {{ heading }}
    </h3>
    <v-row no-gutters>
      <v-btn
        :class="{
          'flex-lg-grow-0 flex-md-grow-0 flex-sm-grow-0 flex-grow-1 mr-lg-5 mr-md-5 mr-sm-5 mr-4 custom-toggle__button-container custom-toggle__button-container--inactive': true,
          'bg-accentGreen': value === 'true',
        }"
        @click="setToTrue"
      >
        <div class="custom-toggle__button-content">Yes</div>
      </v-btn>
      <v-btn
        :class="{
          'flex-lg-grow-0 flex-md-grow-0 flex-sm-grow-0 flex-grow-1 custom-toggle__button-container custom-toggle__button-container--inactive': true,
          'bg-purple-darken-2': value === 'false',
        }"
        @click="setToFalse"
      >
        <div class="custom-toggle__button-content">No</div>
      </v-btn>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.custom-toggle {
  &__button-container {
    &--inactive {
      border: 1px solid #4fbfa5;
    }
  }
  &__button-content {
    width: fit-content;
  }
}
</style>
