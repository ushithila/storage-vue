<template>
    <div class="storage-container">
        <h1>Storage</h1>
        <div class="action-bar">
            <b>My files</b>
            <BaseButton
                title="Add new"
                variant="primary"
                class="add-button"
                @btn-click="console.log('Add button clicked')"            
            >
                <template #icon>
                    <FontAwesomeIcon 
                    :icon="faPlus"
                    />
                </template>
            </BaseButton>
        </div>
        <StorageTable            
            v-for="(item, index) in sampleData"
            :key="`${index}-${item.name}`"
            :name="item.name"
            :date="item.createdAt"
            :size="item.size"
        />
        <Pagination 
          v-model="currentPage"
          :total-pages="totalPages"
        />
    </div>
</template>

<script setup lang="ts">
import StorageTable from '@/components/StorageTable.vue';
import BaseButton from '@/components/BaseButton.vue';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Pagination from '@/components/Pagination.vue';
import { ref } from 'vue';

const currentPage = ref(1);
const totalPages = ref(10);

const sampleData = ref([
    {
    "name": "/",
    "size": 0,
    "createdAt": "2025-06-27T18:16:50.136Z",
  },
  {
    "name": "projects",
    "size": 0,
    "createdAt": "2025-06-15T02:19:45.377Z",
  },
  {
    "name": "home",
    "size": 0,
    "createdAt": "2024-11-21T10:13:12.982Z",
  },
  {
    "name": "var",
    "size": 0,
    "createdAt": "2025-11-13T17:56:10.375Z",
  },
  {
    "name": "usr",
    "size": 0,
    "createdAt": "2023-05-10T06:32:55.253Z",
  },
  {
    "name": "etc",
    "size": 0,
    "createdAt": "2025-02-26T21:23:21.442Z",

  },
]);
</script>

<style scoped lang="scss">
.storage-container {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 5rem);
    border: 1px solid var(--container);
    border-radius: 10px;
    margin: 1.5rem;
    padding-bottom: 0.5rem;
    background: var(--secondary-background);
}

h1 {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    margin: 0;
    min-height: 4.5rem;
    color: var(--header);
    font-family: sans-serif;
    font-size: 24px;
}

.action-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--section-border);
    border-bottom: 1px solid var(--section-border);
    font-size: 20px;
}

.add-button {
    width: fit-content;
    padding: 0 .625rem;
}
</style>
