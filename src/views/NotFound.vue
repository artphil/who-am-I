<script setup lang="ts">
import { useRouter } from 'vue-router'
import { t } from '@/utils/translate';

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>{{ t('NOT_FOUND_PAGE') }}</p>

    <button @click="goHome">
      {{ t('BACK_HOME') }}
    </button>
  </div>
</template>

<style scoped>
.not-found {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  font-family: sans-serif;
  text-align: center;
}

h1 {
  font-size: 64px;
  margin: 0;
}

p {
  font-size: 18px;
  opacity: 0.7;
}

button {
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
</style>
