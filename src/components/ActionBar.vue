<template>
    <div class="action-bar">
        <ol>
            <li>
                <b> My files </b>
            </li>
        </ol>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.action-bar {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--section-border);
    border-bottom: 1px solid var(--section-border);
    font-size: 20px;
}
</style>