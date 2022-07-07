<template>
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
        <div v-if="selectedType === 'CONCERT'">
            <label>
                <span>Rue</span>
                <input type="text" v-model="street"/>
            </label>
            <label>
                <span>Code Postal</span>
                <input type="text" v-model="zipCode"/>
            </label>
            <label>
                <span>Ville</span>
                <input type="text" v-model="town"/>
            </label>
        </div>
        <label class="labelCheckbox">
            <input type="checkbox" v-model="favorite"/>
            <span>Favoris</span>
        </label>
        <label class="labelCheckbox">
            <input type="checkbox" v-model="showEvent"/>
            <span>Montrer l'évènement</span>
        </label>

        <label>Photo</label>
        <div class="dropImg">
            <GgDropImg :event-id="eventId" drop-img-type="EVENT"/>
        </div>

        <button type="submit">Sauver les modifications</button>
    </form>

    <button class="deleteButton" @click="deleteEvent">Supprimer l'évènement</button>

    <GgModal v-model="showDeleteModal">
        <div class="middle">
            <p>Confirmer la suppression</p>
            <div class="buttons">
                <button @click="cancelDelete">Annuler</button>
                <button @click="confirmDelete">Supprimer</button>
            </div>
        </div>
    </GgModal>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import GgDropImg from "./GgDropImg.vue";
import Event from "../../models/Event";
import axiosServer from "../../axios/axiosServer";
import GgModal from "../../components/GgModal.vue";
import router from "../../router/router";
import EventRequester from "../../requesters/EventRequester";

const {params} = useRoute();
const showDeleteModal = ref(false);

const eventId = computed((): number => {
    if (typeof params.eventId === 'string') {
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

const loadEvent = async () => {
    const event = await EventRequester.getEventById(eventId.value);
    selectedType.value = event.getType();
    selectedDate.value = event.getDate().split('T')[0];
    label.value = event.getLabel();
    description.value = event.getDescription();
    street.value = event.getStreet();
    zipCode.value = event.getZipCode();
    town.value = event.getTown();
    website.value = event.getWebsite();
    favorite.value = event.getFavorite();
    showEvent.value = event.getShowEvent();
};

loadEvent();

const commitEvent = async () => {
    const event = new Event(eventId.value, selectedType.value, selectedDate.value, label.value, description.value, street.value, zipCode.value, town.value, website.value, false, favorite.value, showEvent.value);
    await axiosServer.put('/event', {event});
    await router.push({name: 'adminEvent'});
};

const deleteEvent = async () => {
    showDeleteModal.value = true;
};

const cancelDelete = () => {
    showDeleteModal.value = false;
};

const confirmDelete = async () => {
    await axiosServer.delete(`/event/${eventId.value}`);
    await router.push({name: 'adminEvent'});
}
</script>

<style scoped>
form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
}

label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
}

.labelCheckbox {
    flex-direction: row;
    align-items: center;
}

.middle {
    background-color: #242424;
    padding: 15px;
    border-radius: 10px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.deleteButton {
    background-color: red;
    margin-bottom: 20px;
    border: red 1px solid;
}

.dropImg{
    width: 100%;
}

</style>