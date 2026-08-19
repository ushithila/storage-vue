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
        background-color: var(--button-primary-color);
        color: var(--button-text-primary-color);

        &:hover {
            background-color: var(--button-primary-hover-color);
        }
        
        &:active {
            background-color: var(--button-primary-active-color);
        }
    }

    &-neutral {
        color: var(--text-color);

        &:hover {
            background-color: var(--border-color);
        }
    }
}
</style>