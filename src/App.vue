<script setup>
import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
  <div class="w-full p-6 sm:p-12">
    <HeaderBar />
    <router-view />
  </div>
</template>
