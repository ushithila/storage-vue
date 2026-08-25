<template>
    <div class="storage-container">
        <h1>Storage</h1>
        <div class="action-bar">
            <b>My files</b>
            <base-button
                title="Add new"
                variant="primary"
                class="add-button"
                @btn-click="console.log('Add button clicked')"            
            >
                <template #icon>
                    <font-awesome-icon 
                    :icon="faPlus"
                    />
                </template>
            </base-button>
        </div>
        <storage-table 
            :items="sampleData" 
            :selected="selected"
            @select="(ind: number) => {
                if(selected.includes(ind)) {
                    selected.splice(selected.indexOf(ind), 1);
                }else{
                    selected.push(ind);
                }
                console.log(ind, selected);
            }"
        />{{ selected }}
        <pagination 
          v-model="currentPage"
          :total-pages="totalPages"
        />
    </div>
</template>

<script setup lang="ts">
import StorageTable from '@/components/StorageTable.vue';
import BaseButton from '@/components/BaseButton.vue';
import Pagination from '@/components/Pagination.vue';
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FileEntry } from '@/interfaces/FileEntry';

const currentPage = ref(1);
const totalPages = ref(10);

const selected = ref<number[]>([]);

const sampleData: Array<FileEntry> = [
    {
    "id": "347fc4be-5ced-4369-a08c-ddb9c171bc71",
    "name": "/",
    "path": "/",
    "parentPath": null,
    "parentId": null,
    "type": "directory",
    "size": 0,
    "createdAt": "2025-06-27T18:16:50.136Z",
    "modifiedAt": "2024-04-04T14:35:27.433Z"
  },
  {
    "id": "b25c002f-99b0-48be-8ed0-1ea035251cec",
    "name": "projects",
    "path": "/projects",
    "parentPath": "/",
    "parentId": "347fc4be-5ced-4369-a08c-ddb9c171bc71",
    "type": "file",
    "size": 0,
    "createdAt": "2025-06-15T02:19:45.377Z",
    "modifiedAt": "2025-08-27T04:26:50.115Z"
  },
  {
    "id": "237bf115-8182-48c6-8f09-2bf9f6e19bcc",
    "name": "home",
    "path": "/home",
    "parentPath": "/",
    "parentId": "347fc4be-5ced-4369-a08c-ddb9c171bc71",
    "type": "directory",
    "size": 0,
    "createdAt": "2024-11-21T10:13:12.982Z",
    "modifiedAt": "2025-01-10T23:12:53.607Z"
  },
];
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
