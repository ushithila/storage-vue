<template>
    <main>
        <StorageHeader />
        <StorageTable />
    </main>
</template>

<script setup lang="ts">
import StorageHeader from '@/components/StorageHeader.vue';
import StorageTable from '@/components/StorageTable.vue';
 
</script>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 5rem);
    border: 1px solid var(--container-color);
    border-radius: 10px;
    background: var(--secondary-background-color);
    margin: 1.5rem;
    padding-bottom: 0.5rem;
}
</style>
