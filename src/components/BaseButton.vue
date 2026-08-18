<template>
    <button
        class="btn"
        :class="`btn-${variant}`"
    >
        <FontAwesomeIcon 
            v-if='icon'
            :icon="icon" 
        />
        {{ title }}
    </button>
</template>
<script setup lang="ts">
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

withDefaults(defineProps<{
    variant?: 'primary' | 'neutral',
    title?: string ,
    icon?: IconDefinition,
}>(), {
    variant: 'primary',
});
</script>
<style scoped lang="scss">

.btn{
    &-primary {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        height: 2.5rem;
        padding: .625rem;
        background-color: var(--button-color);
        border-radius: 6px;
        color: var(--secondary-background-color);
        transition: 0.3s;
        font-size: 14px;

        &:hover {
            background-color: var(--button-hover-color);
        }
        
        &:active {
            background-color: var(--search-active-color);
        }
    }

    &-neutral{
        color: var(--text-color);
        height: 2rem;
        width: 2rem;
        border-radius: .25rem;
        transition: .3s;

        &:hover {
            background-color: var(--border-color);
        }
    }
}
</style>