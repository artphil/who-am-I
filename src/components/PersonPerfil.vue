        <script lang="ts">
        import { t } from '@/utils/translate';
        import FeatureTag from './FeatureTag.vue';

        export default {
          name: 'PersonPerfil',
          components: {
            FeatureTag
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
          },
          data() {
            return {
              t
            }
          }
        };
</script>

<template>
  <div class="person-perfil">
    <div class="perfil-header">
      <h2>{{ t(selectedCharacter.name) }}</h2>
    </div>

    <div class="perfil-content">
      <div v-if="selectedCharacter.image" class="perfil-image">
        <img :src="selectedCharacter.image" :alt="selectedCharacter.name" />
      </div>

      <div class="perfil-attributes">

        <div class="attribute">
          <span class="attribute-label">{{ t('GENDER') }}:</span>
          <FeatureTag v-for="(value, key) in selectedCharacter.gender" :key="key" :text="value" :isCorrect="isCorrect('gender', value)" />
        </div>

        <div class="attribute">
          <span class="attribute-label">{{ t('AGE') }}:</span>
          <FeatureTag v-for="(value, key) in selectedCharacter.age" :key="key" :text="value" :isCorrect="isCorrect('age', value)" />
        </div>

        <div class="attribute">
          <span class="attribute-label">{{ t('FEATURE') }}:</span>
          <FeatureTag v-for="(value, key) in selectedCharacter.features" :key="key" :text="value"
            :isCorrect="isCorrect('features', value)" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.person-perfil {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: #f9f9f9;
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
  border-radius: 8px;
}

.perfil-attributes {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.attribute {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.attribute-label {
  font-weight: 600;
  color: #333;
}

.attribute-value {
  color: #666;
}
</style>
