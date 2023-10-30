<script setup>
import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
  <div class="p-6 sm:p-12 w-full">
    <HeaderBar />
    <router-view />
  </div>
</template>
