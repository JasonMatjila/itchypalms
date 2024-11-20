<template>
  <q-page class="bg-black min-h-screen">
    <!-- Navigation -->
    <q-header class="bg-black">
      <q-toolbar>
        <q-toolbar-title class="text-red text-h6">ICHYPALMS - Shop</q-toolbar-title>
        <q-space />
        <q-btn
          flat
          round
          icon="shopping_cart"
          class="text-white"
          @click="$router.push({ name: 'Cart' })"
        />
      </q-toolbar>
    </q-header>

    <!-- Product List -->
    <div class="q-pa-md text-white">
      <h2 class="text-3xl font-bold">Shop Products</h2>
      <div class="q-gutter-md row justify-center">
        <q-card
          v-for="product in products"
          :key="product.id"
          class="col-12 col-md-4 col-lg-3 bg-grey-8 text-white"
        >
          <!-- Product Image -->
          <q-img :src="product.imageUrl" :alt="product.name" ratio="4:3" />

          <!-- Product Details -->
          <q-card-section class="text-center">
            <h3>{{ product.name }}</h3>
            <p class="text-red font-bold">{{ formatCurrency(product.price) }}</p>
          </q-card-section>

          <!-- Action Buttons -->
          <q-card-actions align="center">
            <q-btn
              label="Add to Cart"
              color="green"
              flat
              @click="handleAddToCart(product)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed } from "vue";

export default {
  setup(props, { emit }) {
    const products = computed(() => [
      { id: 1, name: "Black Amber Rose", price: 129.99, imageUrl: "..." },
      { id: 2, name: "Black Art", price: 89.99, imageUrl: "..." },
      { id: 3, name: "Red Art", price: 199.99, imageUrl: "..." },
    ]);

    const handleAddToCart = (product) => {
      // Check login status (replace this with your logic)
      if (!localStorage.getItem("isLoggedIn")) {
        alert("You need to log in to add items to the cart.");
        this.$router.push({ name: "Login" });
      } else {
        emit("add-to-cart", product);
      }
    };

    const formatCurrency = (value) => `$${value.toFixed(2)}`;

    return { products, handleAddToCart, formatCurrency };
  },
};
</script>
