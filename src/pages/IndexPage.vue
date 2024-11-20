<template>
  <q-page class="bg-black min-h-screen">
    <!-- Navigation -->
    <q-header class="bg-black">
      <q-toolbar>
        <q-btn
          flat
          round
          icon="menu"
          @click="isMenuOpen = !isMenuOpen"
          v-show="!isMenuOpen"
        />
        <q-btn
          flat
          round
          icon="close"
          @click="isMenuOpen = !isMenuOpen"
          v-show="isMenuOpen"
        />
        <q-toolbar-title class="text-red text-h6">ICHYPALMS</q-toolbar-title>
        <q-space />
        <div class="hidden md:flex items-center space-x-4">
          <q-input filled dense placeholder="Search..." v-model="searchQuery" />
          <q-icon name="favorite" class="text-white cursor-pointer" />
          <q-icon name="shopping_cart" class="text-white cursor-pointer" @click="toggleCart" />
          <q-badge color="red" floating>{{ cart.length }}</q-badge>
        </div>
      </q-toolbar>
      <!-- <q-drawer v-model="isMenuOpen" side="left" bordered>
        <q-list>
          <q-item label="Home" />
          <q-item label="Shop" />
          <q-item label="About" />
          <q-item label="Contact" />
        </q-list>
      </q-drawer> -->
    </q-header>

    <!-- Hero Section -->
    <div
      class="relative q-pa-md"
      style="background-image: url('https://images.unsplash.com/photo-1445205170230-053b83016050'); background-size: cover;"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="text-white text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold">
          Welcome to <span class="text-red">ICHYPALMS</span>
        </h1>
        <p class="text-xl text-gray-300">Discover Your Perfect Style</p>
        <q-btn label="Shop Now" color="red" class="q-mt-md" />
      </div>
    </div>

    <!-- Product Showcase -->
    <div class="q-pa-md text-white">
      <h2 class="text-3xl font-bold">Featured Products</h2>
      <div class="q-gutter-md row justify-center">
        <q-card
          v-for="product in products"
          :key="product.id"
          class="col-12 col-md-4 col-lg-3 bg-grey-8 text-white"
        >
          <!-- Product Image -->
          <q-img :src="product.imageUrl" :alt="product.name" ratio="4:3" />

          <!-- Product Name and Price -->
          <q-card-section class="text-center">
            <h3>{{ product.name }}</h3>
            <p class="text-red font-bold">{{ formatCurrency(product.price) }}</p>
          </q-card-section>

          <!-- Action Buttons -->
          <q-card-actions align="center">
            <q-btn label="Quick View" color="red" flat />
            <q-btn label="Add to Cart" color="green" flat @click="addToCart(product)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Cart Drawer -->
    <q-drawer v-model="isCartOpen" side="right" width=300 bordered>
      <q-list>
        <q-item-label header>Cart</q-item-label>
        <q-item
          v-for="item in cart"
          :key="item.id"
          clickable
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>{{ formatCurrency(item.price) }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn icon="delete" color="red" flat @click="removeFromCart(item)" />
          </q-item-section>
        </q-item>
      </q-list>
      <q-toolbar>
        <q-btn label="Checkout" color="green" class="q-mt-md" />
        <q-space />
        <p>Total: {{ formatCurrency(cartTotal) }}</p>
      </q-toolbar>
    </q-drawer>

    <!-- Footer -->
    <!-- <q-footer class="bg-gray-900 q-pa-md text-gray-400">
      <q-toolbar>
        <q-toolbar-title class="text-red text-h6">ICHYPALMS</q-toolbar-title>
        <q-space />
        <div class="text-center">
          <p>&copy; {{ new Date().getFullYear() }} ICHYPALMS. All rights reserved.</p>
        </div>
      </q-toolbar>
    </q-footer> -->
  </q-page>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { storage } from "src/boot/firebase";
import { getDownloadURL, ref as storageRef } from "firebase/storage";

export default {
  setup() {
    const isMenuOpen = ref(false);
    const isCartOpen = ref(false);
    const searchQuery = ref("");
    const cart = ref([]);

    const products = ref([
      {
        id: 1,
        name: "Black Amber Rose",
        price: 129.99,
        imageRef: "images/black_amber_rose.jpeg",
      },
      {
        id: 2,
        name: "Black Art",
        price: 89.99,
        imageRef: "images/Black_art.jpeg",
      },
      {
        id: 3,
        name: "Red Art",
        price: 199.99,
        imageRef: "images/red_art.jpeg",
      },
    ]);

    const fetchImagesUrls = async () => {
      for (let product of products.value) {
        try {
          const imgRef = storageRef(storage, product.imageRef);
          product.imageUrl = await getDownloadURL(imgRef);
        } catch (error) {
          console.error(`Failed to fetch image for ${product.name}: ${error}`);
          product.imageUrl = "https://via.placeholder.com/400";
        }
      }
    };

    const addToCart = (product) => {
      cart.value.push(product);
    };

    const removeFromCart = (product) => {
      cart.value = cart.value.filter((item) => item.id !== product.id);
    };

    const cartTotal = computed(() => {
      return cart.value.reduce((total, item) => total + item.price, 0);
    });

    const toggleCart = () => {
      isCartOpen.value = !isCartOpen.value;
    };

    const formatCurrency = (value) => {
      return `$${value.toFixed(2)}`;
    };

    onMounted(async () => {
      await fetchImagesUrls();
    });

    return {
      isMenuOpen,
      isCartOpen,
      searchQuery,
      cart,
      products,
      addToCart,
      removeFromCart,
      cartTotal,
      toggleCart,
      formatCurrency,
    };
  },
};
</script>

<style scoped>
/* Custom styling as needed */
</style>
