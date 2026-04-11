<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <h1 class="title">{{ title }}</h1>
  <div class="wrapper">
    <p class="description">
      Find who is the mysterious christian.
    </p>
  </div>
</template>

<style scoped></style>
