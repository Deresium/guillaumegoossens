<template>
    <teleport to="body">
        <div v-if="modelValue" @click.self="closeModal" class="fullModal">
            <slot></slot>
        </div>
    </teleport>
</template>

<script setup lang="ts">

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    }
});

const closeModal = () => emit('update:modelValue', false);

</script>

<style scoped>
.fullModal{
	z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(30, 30, 30, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>