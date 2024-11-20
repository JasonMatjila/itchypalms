<template>
  <q-card flat bordered class="product-card" style="background-color: #000000; color: #FFFFFF;">
    <img :src="product.imageUrl" class="product-image" alt="Product Image">
    <q-card-section class="text-center">
      <div class="text-h6" style="color: #FF0000;">{{ product.name }}</div>
      <div class="text-subtitle1" style="color: #FFFFFF;">R {{ product.price }}</div>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn label="Add to Cart" color="primary" @click="addToCart" flat />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product);
    },
  },
};
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #FF0000; /* Red accent at the bottom of the image */
}
</style>
