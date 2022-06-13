<template>
    <h2>Events</h2>
    <button type="button" @click="addEvent">Ajouter un event</button>
</template>

<script setup lang="ts">
import router from "../../router/router";
import axiosServer from "../../axios/axiosServer";
import EventParser from "../../parsers/EventParser";

const addEvent = async() => {
    const response = await axiosServer.post('/event');
    const event = EventParser.parseEvent(response.data);
    await router.push({name: 'adminEventForm', params: {eventId: event.getEventId()}});
}
</script>

<style scoped>


</style>