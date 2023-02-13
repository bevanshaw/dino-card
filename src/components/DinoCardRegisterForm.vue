<script setup lang="ts">
import { ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { Field, Form } from "vee-validate";
import { string, object, boolean } from "yup";
import { useDinoCardRegisterStore } from "@/stores/dinoCardRegister";

const dinoCardRegisterStore = useDinoCardRegisterStore();

const registerDinoCardValidationSchema = object().shape({
  firstName: string()
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,39}$/,
      "Please enter a valid first name"
    )
    .max(40, "First name must be at most 40 characters")
    .required("First name is required"),
  lastName: string()
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,24}$/,
      "Please enter a valid last name"
    )
    .max(40, "Last name must be at most 40 characters")
    .required("Last name is required"),
  email: string()
    .required("Email is required")
    .email("Email address must be valid")
    .min(6, "Email length should be 6 digits"),
  addressLine: string().required("Address is required"),
  suburb: string().required("Suburb is required"),
  city: string().required("City is required"),
  postcode: string()
    .required("Postcode is required")
    .matches(/^[0-9]{4}$/, "Postcode should contain only the digits (0-9)")
    .min(4, "Postcode length should be 4 digits")
    .max(4, "Postcode length should be 4 digits"),
  region: string().required("Region is required"),
  termsCheckbox: boolean().oneOf(
    [true],
    "Please agree to the Bee Card Terms and Conditions to continue."
  ),
});

const validateDinoCard = async (values: Record<string, any>) => {
  if (values === null || values === undefined) {
    return console.log("Please check all values have been entered correctly");
  }
};
</script>

<template>
  <v-card class="mb-8 pa-8" color="surface" title="Dino Card Registration">
    <Form
      :validation-schema="registerDinoCardValidationSchema"
      @submit="validateDinoCard"
      v-slot="{ meta }"
      autocomplete="off"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <Field name="firstName" v-slot="{ field, errors }">
              <v-text-field
                id="firstName"
                v-bind="field"
                label="First Name"
                variant="outlined"
                required
                maxlength="25"
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
            <Field name="lastName" v-slot="{ field, errors }">
              <v-text-field
                id="lastName"
                v-bind="field"
                label="Last Name"
                variant="outlined"
                required
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
            <Field name="addressLine" v-slot="{ field, errors }">
              <v-text-field
                id="addressLine"
                v-bind="field"
                label="Address"
                variant="outlined"
                required
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
            <Field name="suburb" v-slot="{ field, errors }">
              <v-text-field
                id="suburb"
                v-bind="field"
                label="Suburb"
                variant="outlined"
                required
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
            <Field name="city" v-slot="{ field, errors }">
              <v-text-field
                id="city"
                v-bind="field"
                label="City"
                variant="outlined"
                required
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
            <Field name="postcode" v-slot="{ field, errors }">
              <v-text-field
                id="postcode"
                v-bind="field"
                label="Postcode"
                variant="outlined"
                required
                minlength="4"
                maxlength="4"
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
            <Field name="region" v-slot="{ field, errors }">
              <v-text-field
                id="region"
                v-bind="field"
                label="Region"
                variant="outlined"
                required
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
            <Field
              v-slot="{ value, handleChange, errors }"
              name="termsCheckbox"
              type="checkbox"
              :value="true"
            >
              <v-checkbox
                :model-value="value"
                @update:modelValue="handleChange"
                :error-messages="errors"
                :hide-details="true"
                validateOnInput
              >
                <template v-slot:label>
                  <span
                    >Buy a
                    <a
                      target="_blank"
                      href="https://bevanshaw.co.nz"
                      @click.stop
                      >painting
                    </a>
                    to continue Dino card registration.</span
                  >
                </template>
              </v-checkbox>
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
