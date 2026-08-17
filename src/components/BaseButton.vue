<template>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
    variant?: 'primary' | 'neutral',
    title?: string ,
    icon?: boolean,
}>(), {
    variant: 'primary',
});
</script>
<style scoped lang="scss">
</style>