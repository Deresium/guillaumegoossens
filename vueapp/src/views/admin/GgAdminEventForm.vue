<template>
    <h2>Ajouter un évènement</h2>
    <form @submit="commitEvent" novalidate="novalidate">
        <label>
            <span>Type</span>
            <select v-model="selectedType">
                <option value="RELEASE">Sortie</option>
                <option value="CONCERT">Concert</option>
            </select>
        </label>
        <label>
            <span>Date</span>
            <input type="date" v-model="selectedDate">
        </label>
        <label>
            <span>Titre</span>
            <input type="text" v-model="label">
        </label>
        <label>
            <span>Description</span>
            <textarea v-model="description"/>
        </label>
        <label>
            <span>Site web</span>
            <input type="text" v-model="website"/>
        </label>
        <label>Photo</label>
        <GgDropImg :event-id="eventId"/>
    </form>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import GgDropImg from "./GgDropImg.vue";

const {params} = useRoute();

const eventId = computed((): number|null => {
    if(typeof params.eventId === 'string'){
        return parseInt(params.eventId);
    }
    return null;
});

const selectedType = ref("CONCERT");
const selectedDate = ref(new Date().toISOString().split('T')[0]);
const label = ref("");
const description = ref("");
const street = ref("");
const zipCode = ref("");
const town = ref("");
const website = ref("");
const picture = ref(false);
const favorite = ref(false);

const commitEvent = () => {

}
</script>

<style scoped>
label{
    display: block;
    margin-bottom: 10px;
}

label span{
    display: block;
}

</style>