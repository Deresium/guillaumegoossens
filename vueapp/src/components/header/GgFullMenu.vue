<template>
    <teleport to="body">
        <div class="phone">
            <transition name="showFromMiddle">
                <div v-show="localModelValue" class="fullMenu">
                    <button class="buttonExit" @click="localModelValue=false">
                        <img class="clearIcon" src="../../assets/icons/clear.svg" alt="clear icon"/>
                    </button>
                    <div class="divRoutes">
                        <GgRoutes v-model="localModelValue"/>
                    </div>
                </div>
            </transition>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import {computed} from "vue";
import GgRoutes from "./GgRoutes.vue";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    }
});


const localModelValue = computed({
    get: () => props.modelValue,
    set: (value: any) => {
        emit('update:modelValue', value);
    }
});

</script>

<style scoped>
.fullMenu {
    position: fixed;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    top: 0;
    left: 0;
    background-color: #242424;
    min-width: 100%;
    min-height: 100vh;
}

.buttonExit {
    background-color: transparent;
    border: none;
}

.clearIcon {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    margin-top: 20px;
}

.divRoutes {
    margin-top: 30px;
    width: 100%;
}

.showFromMiddle-enter-active {
    animation: openFromMiddle 0.3s forwards;
}

.showFromMiddle-leave-active {
    animation: closeFromMiddle 0.3s forwards;
}

@keyframes openFromMiddle {
    from {
        transform: scale(0.5, 0.5);
        border-radius: 50%;
        opacity: 0;
    }
    to {
        transform: scale(1, 1);
        border-radius: 0;
        opacity: 1;
    }
}

@keyframes closeFromMiddle {
    from {
        transform: scale(1, 1);
        border-radius: 0;
        opacity: 1;
    }
    to {
        transform: scale(0.5, 0.5);
        border-radius: 50%;
        opacity: 0;
    }
}
</style>