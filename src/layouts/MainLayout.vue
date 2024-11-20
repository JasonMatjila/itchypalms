<template>
  <q-layout>
    <!-- Header -->
    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer" class="text-white" />
        <q-toolbar-title>My Store</q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <!-- Left Drawer -->
    <!-- <q-drawer v-model="leftDrawerOpen" side="left" class="bg-grey-2">
      <q-list>
        <q-item
          v-for="link in linksList"
          :key="link.title"
          clickable
          tag="a"
          :href="link.link"
          target="_blank"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption>{{ link.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> -->

    <!-- Page Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-grey-9 text-white">
      <div class="q-pa-md text-center">
        &copy; {{ new Date().getFullYear() }} ItchyPalms. All rights reserved.
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
</script>
