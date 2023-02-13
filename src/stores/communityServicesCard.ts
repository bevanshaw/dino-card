import { ref } from "vue";
import { defineStore } from "pinia";

export const useCommunityServicesCardStore = defineStore(
  "communityServicesCard",
  () => {
    const isCommunityServicesCard = ref("");
    const isCscValid = ref(false);
    const cscClientNumber = ref("");
    const cscDateOfBirth = ref("");

    function getCscDateOfBirthFormatted() {
      return formatDate(new Date(cscDateOfBirth.value));
    }
    function padTo2Digits(number: number) {
      return number.toString().padStart(2, "0");
    }

    function formatDate(date: Date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/");
    }

    return {
      isCommunityServicesCard,
      isCscValid,
      cscClientNumber,
      cscDateOfBirth,
      getCscDateOfBirthFormatted,
    };
  }
);

