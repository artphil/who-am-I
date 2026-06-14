<script setup lang="ts">
import { t } from '../utils/translate';
</script>

<template>
  <div class="title-container">
    <h1 class="title">{{ t('MESSAGE.GAME_TITLE') }}</h1>
    <div class="wrapper">
      <p class="description"> {{ t('DESCRIPTION.GAME') }} </p>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
}

.wrapper {
  padding: 8px 0;
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
