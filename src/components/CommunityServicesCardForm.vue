<script setup lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { Field, Form } from "vee-validate";
import { string, object } from "yup";

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
  // userCscDateOfBirthFormatted.value = values.cscDateOfBirth;

  // const userValues = {
  //   clientNumber: values.cscClientNumber,
  //   dateOfBirth: userCscDateOfBirthFormatted.value,
  // } as any;

  // isCscButtonLoading.value = true;
  // const response = await validateCSC(userValues);
  // isCscButtonLoading.value = false;
  // if (!response) {
  //   isCscValid.value = "";
  //   cscExpiryDate.value = "";
  //   validationAPIFailure.value = true;
  // } else {
  //   isCscValid.value = response.communityServicesCardValid;
  //   cscExpiryDate.value = response.expiryDate;
  //   validationAPIFailure.value = false;
  // }
};
</script>

<template>
  <v-card
    class="mb-8 pa-8"
    color="surface"
    title="Enter your Community Services Card details to confirm eligibility"
  >
    <Form
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
                name="cscClientNumber"
                v-bind="field"
                label="Community Services Card Number"
                required
                minlength="9"
                maxlength="9"
                :counter="10"
                :error-messages="errors"
              />
            </Field>
          </v-col>
          <v-col cols="12">
            <Field name="cscDateOfBirth" v-slot="{ field, errors }">
              <Datepicker
                id="cscDateOfBirth"
                class="mb-2"
                v-bind="field"
                auto-apply
                :enable-time-picker="false"
                required
                validateOnInput
              />
              <p v-show="errors.length" class="mb-3">
                <v-icon>mdi-alert</v-icon>{{ errors[0] }}
              </p>
            </Field>
          </v-col>
          <v-col cols="12">
            <v-btn
              type="submit"
              variant="outlined"
              :disabled="!(meta.valid && meta.dirty)"
              :class="!(meta.valid && meta.dirty) ? 'bg-warning' : 'bg-success'"
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
