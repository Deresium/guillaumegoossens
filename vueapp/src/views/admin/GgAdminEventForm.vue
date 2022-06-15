<template>
    <h2>Ajouter un évènement</h2>
    <form @submit.prevent="commitEvent" novalidate="novalidate">
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

        <button type="submit">Sauver les modifications</button>
    </form>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import GgDropImg from "./GgDropImg.vue";
import Event from "../../models/Event";
import axiosServer from "../../axios/axiosServer";

const {params} = useRoute();

const eventId = computed((): number => {
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
const favorite = ref(false);
const showEvent = ref(false);

const commitEvent = async() => {
    const event = new Event(eventId.value, selectedType.value, selectedDate.value, label.value, description.value, street.value, zipCode.value, town.value, website.value, false, favorite.value, showEvent.value);
    await axiosServer.put('/event', {event});
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