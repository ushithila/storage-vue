<template>
    <button
        type="button"
        :disabled="disabled"
        class="btn"
        :class="[
            `btn-${variant}`,
            `btn-${size}`,
        ]"
    >
        <slot name="icon" />
        {{ title }}
    </button>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
    variant?: "primary" | "neutral",
    title?: string, 
    size?: "xs" | "s" | "md",
    disabled?: boolean,
}>(), {
    variant: "primary",
    size: "md",
});
</script>
<style scoped lang="scss">
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    font-family: Open Sans;
    font-size: 14px;
    transition: .3s;

    &-primary {
        background-color: var(--button-primary);
        color: var(--button-text-primary);

        &:hover:enabled {
            background-color: var(--button-primary-hover);
        }
        
        &:active {
            background-color: var(--button-primary-active);
        }
    }

    &-neutral {
        color: var(--button-neutral);

        &:hover:enabled {
            background-color: var(--border);
        }
    }

    &-xs {
        height: 1.5rem;
        width: 1.5rem;
    }

    &-s {
        height: 2rem;
        width: 2rem;
    }

    &-md {
        height: 2.5rem;
        width: 2.5rem;
    }

    &:disabled {
        &.btn-primary {
            background-color: var(--button-disabled);
            cursor: default;
        }

        &.btn-neutral {
            color: var(--button-disabled);
        }
    }   
}
</style>