<script setup lang="ts">
import { computed, ref, type ComputedRef } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { Field, Form } from "vee-validate";
import { string, object } from "yup";
import { useCommunityServicesCardStore } from "@/stores/communityServicesCard";

const cscStore = useCommunityServicesCardStore();

const cscValidationSchema = object().shape({
  cscClientNumber: string()
    .required("Community Services Card number is required")
    .matches(/^[0-9]+$/, "Number should contain only the digits (0-9)")
    .min(9, "Number length should be 9 digits")
    .max(9, "Number length should be 9 digits"),
  cscDateOfBirth: string().required("Date of birth is required").nullable(),
});

const validateCommunityServicesCard = async (values: Record<string, any>) => {
  if (values === null || values === undefined) {
    return console.log("Please check all values have been entered correctly");
  }
  cscStore.isCscValid = true;
};

const vCardTitle = computed((): string => {
  return !cscStore.isCscValid
    ? "Enter your Community Services Card details to confirm eligibility"
    : "You entered these Community Services Card details";
});
</script>

<template>
  <v-card class="mb-8 pa-8" color="surface" :title="vCardTitle">
    <table v-show="cscStore.isCscValid" class="ml-4">
      <tr>
        <td>Services Card Number:</td>
        <td>{{ cscStore.cscClientNumber }}</td>
      </tr>
      <tr>
        <td>Date of Birth:</td>
        <td>{{ cscStore.getCscDateOfBirthFormatted() }}</td>
      </tr>
    </table>
    <Form
      v-show="!cscStore.isCscValid"
      :validation-schema="cscValidationSchema"
      @submit="validateCommunityServicesCard"
      v-slot="{ meta }"
      autocomplete="off"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <Field name="cscClientNumber" v-slot="{ field, errors }">
              <v-text-field
                id="cscClientNumber"
                v-bind="field"
                label="Community Services Card Number"
                v-model="cscStore.cscClientNumber"
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
            <Field name="cscDateOfBirth" v-slot="{ field, errors }">
              <Datepicker
                id="cscDateOfBirth"
                v-bind="field"
                placeholder="Date of Birth"
                v-model="cscStore.cscDateOfBirth"
                auto-apply
                :enable-time-picker="false"
                required
                validateOnInput
                month-name-format="long"
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
