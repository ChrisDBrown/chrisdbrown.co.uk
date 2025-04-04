<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="href"
    class="text-indigo-700 transition-colors duration-500 hover:text-gray-900"
    ><slot></slot
  ></a>
</template>
