<template>
    <button
        class="btn"
        :class="`btn-${variant}`"
    >
        <slot name="icon" />
        <slot>
            {{ title }}
        </slot>
    </button>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
    variant?: 'primary' | 'neutral',
    title?: string ,
    icon?: boolean,
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
}
</style>