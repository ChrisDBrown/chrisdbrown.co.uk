<script setup>
const links = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/chrisdeebrown",
  },
  {
    title: "GitHub",
    url: "https://github.com/chrisdbrown",
  },
];
</script>

<template>
  <nav class="flex items-center">
    <ul class="flex gap-2 text-sm">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="link uppercase">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>
