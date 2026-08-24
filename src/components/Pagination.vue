<template>
  <div class="pagination-container">
    <ul>
      <li>
        <BaseButton 
          variant="neutral"
          size="xs"
          @btn-click="console.log('First button clicked')"
        >
          <template #icon>
            <Skip />
          </template>
        </BaseButton>
      </li>
      <li>
        <BaseButton 
          variant="neutral"
          size="xs"
          class="btn-pagination"    
          @btn-click="console.log('Previous button clicked')"
        >
          <template #icon>
              <Chevron />
          </template>
        </BaseButton>
      </li>
      <li>{{ currentPage }} of {{ totalPages }}</li>
      <li>
        <BaseButton 
          variant="neutral"
          size="xs"
          class="forward"    
          @btn-click="console.log('Next button clicked')"    
        >
          <template #icon>
            <Chevron />
          </template>
        </BaseButton>
      </li>
      <li>
        <BaseButton 
          variant="neutral"
          size="xs"
          class="forward"    
          @btn-click="console.log('Last button clicked')"    
        >
          <template #icon>
              <Skip />
          </template>
        </BaseButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Chevron from '@/svg/ChevronArrow.vue';
import BaseButton from './BaseButton.vue';
import Skip from '@/svg/Skip.vue';

const currentPage = defineModel<number>({ default: 1 }); 

defineProps<{
   totalPages: number,
}>();
</script>

<style scoped lang="scss">
.pagination-container {
    display: flex;
    justify-content: right;
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--section-border);
    margin-top: auto;
}

ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

  li {
      &:nth-child(3) {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 .75rem;
        gap: .25rem;
      }
  }
} 

.forward { 
  transform: rotate(180deg);
}
</style>