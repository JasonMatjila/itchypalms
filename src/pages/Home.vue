<template>
  <q-page padding style="background-color: #000000;">
    <q-toolbar style="background-color: #FF0000; color: #FFFFFF;">
      <q-toolbar-title>MoveIt - Shop</q-toolbar-title>
    </q-toolbar>

    <div class="q-mt-lg row q-col-gutter-md q-pt-md q-pb-lg">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart" />
    </div>
  </q-page>
</template>

<script>
import { fetchProducts } from "src/services/firebaseService";
import ProductCard from "src/components/ProductCard.vue";

export default {
  name: "indexPage",
  components: { ProductCard },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await fetchProducts();
  },
  methods: {
    addToCart(product) {
      // Handle adding to cart logic
      console.log("Added to cart:", product);
    },
  },
};
</script>

<style>
/* Additional styles */
.q-page {
  color: #FFFFFF; /* White text on a black background */
}
</style>
