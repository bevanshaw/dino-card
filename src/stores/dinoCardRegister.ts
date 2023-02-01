import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDinoCardRegsterStore = defineStore(
  "dinoCardRegister",
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }

  return { count, doubleCount, increment };
  }
);

// import { defineStore } from 'pinia';
// import axios from 'axios';

// export const useCSCardStore = defineStore('', {
//   state: () => ({
//     cart: [],
//     parts: null,
//     foo: 'robots-foo',
//   }),
//   actions: {
//     async updateParts(parts) {
//       this.parts = parts;
//     },
//     async getParts() {
//       try {
//         axios
//           .get('/api/parts')
//           .then((result) => (this.updateParts(result.data)))
//           .catch(console.error);
//       } catch (error) {
//         console.log('nothing back');
//       }
//     },
//     async addRobotToCart(robot) {
//       const cart = [...this.cart, robot];
//       return axios.post('/api/cart', cart)
//         .then(() => (this.cart.push(robot)));
//     },
//   },
//   getters: {
//     cartSaleItems() {
//       return this.cart.filter((item) => item.head.onSale);
//     },
//     fooGetter() {
//       return `robots-getter/${this.foo}`;
//     },
//   },
// });

// export default useRobotsStore;
