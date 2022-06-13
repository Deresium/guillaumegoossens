<template>
    <div class="divAdmin">
        <h1>Interface d'administration</h1>
        <div v-if="!isLoggedIn">
            <GgGoogleSignin/>
        </div>

        <div v-if="!isLoggedInAdmin">
            <p>Zone réservée aux admins</p>
        </div>

        <div v-if="isLoggedInAdmin">
            <div class="adminMenu">
                <router-link :to="{name: 'adminEvent'}">Gestion des events</router-link>
                <router-link :to="{name: 'adminPicture'}">Gestion des photos</router-link>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script setup lang="ts">
import GgGoogleSignin from "../../components/GgGoogleSignin.vue";
import {useUserStore} from "../../store/user/userStore";
import {computed} from "vue";

const userStore = useUserStore();

const isLoggedInAdmin = computed(() => userStore.isAdmin);
const isLoggedIn = computed(() => userStore.isLoggedIn);
</script>

<style scoped>
.divAdmin{
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
}

.adminMenu{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.adminMenu a{
    text-decoration: none;
    margin-bottom: 10px;
    font-size: large;
    border: 1px solid white;
    padding: 5px;
    border-radius: 5px;
}

</style>