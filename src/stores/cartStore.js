// src/stores/cartStore.js
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
    clearCart() {
      this.cart = [];
    },
  },
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
});
