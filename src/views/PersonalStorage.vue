<template>
    <main>
        <h1>Storage</h1>
        <ActionBar />
        <StorageTable />
    </main>
</template>
<script setup lang="ts">
import ActionBar from '@/components/ActionBar.vue';
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

h1 {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    margin: 0;
    min-height: 4.5rem;
    color: var(--header-color);
    font-family: sans-serif;
    font-size: 24px;
}
</style>
