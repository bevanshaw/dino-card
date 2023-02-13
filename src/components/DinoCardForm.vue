<script setup lang="ts">
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { Field, Form } from "vee-validate";
import { string, object } from "yup";
import { useDinoCardStore } from "@/stores/dinoCard";

const dinoCardStore = useDinoCardStore();

const dinoCardValidationSchema = object().shape({
  dinoCardNumber: string()
    .required("Dino card number is required")
    .matches(/^[0-9]+$/, "Number should contain only the digits (0-9)")
    .min(9, "Number length should be 9 digits")
    .max(9, "Number length should be 9 digits"),
  email: string()
    .required("Email is required")
    .email("Email address must be valid")
    .min(6, "Email length should be 6 digits"),
});

const validateDinoCard = async (values: Record<string, any>) => {
  if (values === null || values === undefined) {
    return console.log("Please check all values have been entered correctly");
  }
};
</script>

<template>
  <v-card class="mb-8 pa-8" color="surface" title="Dino Card Details">
    <Form
      :validation-schema="dinoCardValidationSchema"
      @submit="validateDinoCard"
      v-slot="{ meta }"
      autocomplete="off"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <Field name="dinoCardNumber" v-slot="{ field, errors }">
              <v-text-field
                id="dinoCardNumber"
                v-bind="field"
                label="Dino Card Number"
                variant="outlined"
                required
                minlength="9"
                maxlength="9"
                :error-messages="errors"
                :hide-details="true"
                validateOnInput
              />
              <v-alert
                v-show="errors.length"
                variant="plain"
                density="compact"
                icon="mdi-alert"
                :text="errors[0]"
                color="error"
              ></v-alert>
            </Field>
          </v-col>
          <v-col cols="12">
            <Field name="email" v-slot="{ field, errors }">
              <v-text-field
                type="email"
                id="email"
                v-bind="field"
                label="Email"
                required
                minlength="6"
                :error-messages="errors"
                variant="outlined"
                :hide-details="true"
                validateOnInput
              />
              <v-alert
                v-show="errors.length"
                variant="plain"
                density="compact"
                icon="mdi-alert"
                :text="errors[0]"
                color="error"
              ></v-alert>
            </Field>
          </v-col>
          <v-col cols="12">
            <v-btn
              type="submit"
              variant="outlined"
              :disabled="!(meta.valid && meta.dirty)"
              :class="!(meta.valid && meta.dirty) ? 'bg-error' : 'bg-success'"
            >
              <v-icon class="mr-2">mdi-check</v-icon>Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </Form>
  </v-card>
</template>

<style scoped lang="scss"></style>
