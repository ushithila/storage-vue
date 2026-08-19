<template>
    <button
        class="btn"
        :class="`btn-${variant}`"
    >
        <slot name="icon" />
        {{ title }}
    </button>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
    variant?: 'primary' | 'neutral',
    title?: string 
}>(), {
    variant: 'primary',
});
</script>
<style scoped lang="scss">
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;

    &-primary {
        background-color: var(--button-primary);
        color: var(--button-text-primary);

        &:hover {
            background-color: var(--button-primary-hover);
        }
        
        &:active {
            background-color: var(--button-primary-active);
        }
    }

    &-neutral {
        color: var(--button-neutral);

        &:hover {
            background-color: var(--border);
        }
    }
}
</style>