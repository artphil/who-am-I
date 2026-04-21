        <script lang="ts">
        import { PERSON_NAME } from '@/utils/constants';

        import { t } from '@/utils/translate';
        import PersonFeatures from './PersonFeatures.vue'

        export default {
          name: 'PersonPerfil',
          components: {
            PersonFeatures
          },
          props: {
            correctCharacter: {
              type: Object,
              required: true
            },
            selectedCharacter: {
              type: Object,
              required: true
            }
          },
          methods: {
            isCorrect(attr: string, value: string) {
              const correctValue = this.correctCharacter[attr]
              if (Array.isArray(correctValue)) {
                return correctValue.includes(value)
              }
              return correctValue === value;
            },
            getFeatures() {
              return Object.fromEntries(
                Object.entries(this.selectedCharacter).filter(([key]) => !key.startsWith('_')))
            },
          },
          data() {
            return {
              t,
              PERSON_NAME,
            }
          }
        };
</script>

<template>
  <div class="person-perfil">
    <div class="perfil-header">
      <h2>{{ t(selectedCharacter[PERSON_NAME]) }}</h2>
    </div>

    <div class="perfil-content">
      <div v-if="selectedCharacter.image" class="perfil-image">
        <img :src="selectedCharacter.image" :alt="selectedCharacter[PERSON_NAME]" />
      </div>

      <div class="perfil-attributes">
        <PersonFeatures v-for="(value, key, index) in getFeatures()" :title="key" :features="value"
          :correctFeatures="correctCharacter[key]" :key="index" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.person-perfil {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 20px;
  background: var(--color-background-modal);
}

.perfil-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #333;
}

.perfil-image {
  margin-bottom: 20px;
}

.perfil-image img {
  max-width: 100%;
  border-radius: var(--border-radius);
}

.perfil-attributes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
</style>
