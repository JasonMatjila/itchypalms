<template>
  <q-page class="bg-black min-h-screen">
    <q-header class="bg-black">
      <q-toolbar>
        <q-toolbar-title class="text-red text-h6">Your Cart</q-toolbar-title>
        <q-space />
        <q-btn
          flat
          round
          icon="arrow_back"
          class="text-white"
          @click="$router.push({ name: 'Shop' })"
        />
      </q-toolbar>
    </q-header>

    <div class="q-pa-md text-white">
      <h2 class="text-3xl font-bold">Cart Items</h2>
      <div v-if="cart.length" class="q-gutter-md">
        <q-card
          v-for="item in cart"
          :key="item.id"
          class="col-12 bg-grey-8 text-white"
        >
          <!-- Item Info -->
          <q-card-section>
            <div class="row items-center">
              <q-img
                :src="item.imageUrl"
                ratio="4:3"
                class="col-3"
              />
              <div class="col">
                <h3>{{ item.name }}</h3>
                <p>{{ formatCurrency(item.price) }}</p>
              </div>
              <q-btn
                icon="delete"
                color="red"
                flat
                @click="$emit('remove-item', item)"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <p v-else>Your cart is empty.</p>

      <!-- Cart Summary -->
      <q-toolbar class="q-mt-md">
        <q-toolbar-title>Total: {{ formatCurrency(cartTotal) }}</q-toolbar-title>
        <q-btn label="Checkout" color="green" class="q-ml-auto" />
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["cart"],
  setup(props) {
    const cartTotal = computed(() =>
      props.cart.reduce((total, item) => total + item.price, 0)
    );

    const formatCurrency = (value) => `$${value.toFixed(2)}`;

    return { cartTotal, formatCurrency };
  },
};
</script>
