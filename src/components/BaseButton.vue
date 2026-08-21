<template>
    <button
        type="button"
        :disabled="disabled"
        class="btn"
        :class="[
            `btn-${variant}`,
            `btn-${size}`,
        ]"
        @click="$emit('btn-click')"
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

        &:hover {
            background-color: var(--button-primary-hover);
        }
        
        &:active {
            background-color: var(--button-primary-active);
        }

        &:disabled {
            background-color: var(--button-disabled);
        }
    }

    &-neutral {
        color: var(--button-neutral);

        &:hover {
            background-color: var(--border);
        }

        &:disabled {
            color: var(--button-disabled);
        }

    }

    &-xs {
        height: 1.5rem;
        width: 1.5rem;

        :slotted(svg) {
            height: 0.75rem;
            width: 0.75rem;
        }
    }

    &-s {
        height: 2rem;
        width: 2rem;

        :slotted(svg) {
            height: 0.75rem;
            width: 0.75rem;
        }
    }

    &-md {
        height: 2.5rem;
        width: 2.5rem;

        svg {
            height: 1rem;
            width: 1rem;
        }
    }

    &:disabled {
        pointer-events: none;
        cursor: default;
    }
}
</style>