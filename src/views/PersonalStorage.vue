<template>
    <div class="storage-container">
        <h1>Storage</h1>
        <div class="action-bar">
            <b>My files</b>
            <BaseButton
                title="Add new"
                variant="primary"
                class="add-button"
            >
                <template #icon>
                    <FontAwesomeIcon 
                    :icon="faPlus"
                    />
                </template>
            </BaseButton>
        </div>
        <StorageTable />
    </div>
</template>

<script setup lang="ts">
import StorageTable from '@/components/StorageTable.vue';
import BaseButton from '@/components/BaseButton.vue';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
