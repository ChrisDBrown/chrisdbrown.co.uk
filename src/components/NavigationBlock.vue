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
  {
    title: "itch.io",
    url: "https://chrisdbrown.itch.io",
  },
];
</script>

<template>
  <nav class="flex items-end">
    <ul class="flex gap-2">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="link lowercase">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>
