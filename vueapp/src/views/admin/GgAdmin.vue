<template>
    <div v-if="!isLoggedInAdmin">
        <GgGoogleSignin/>
    </div>

    <p>{{ isLoggedIn }}</p>
</template>

<script setup lang="ts">
import GgGoogleSignin from "../../components/GgGoogleSignin.vue";
import {useUserStore} from "../../store/user/userStore";
import {computed} from "vue";
const userStore = useUserStore();

const isLoggedInAdmin = computed(() => userStore.isAdmin);
</script>

<style scoped>

</style>