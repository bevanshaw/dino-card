<script setup lang="ts">
import { ref } from "vue";
const validCSC = ref(false);
const firstName = ref("");
const lastName = ref("");
const nameRules = ref([
  (v: any) => !!v || "Name is required",
  (v: string | any[]) =>
    v.length <= 10 || "Name must be less than 10 characters",
]);
const email = ref("");
const emailRules = ref([
  (v: any) => !!v || "E-mail is required",
  (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
]);
</script>

<template>
  <v-card class="bg-secondary">
    <v-form v-model="validCSC">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstName"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastName"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<style scoped lang="scss"></style>
