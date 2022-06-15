<template>
    <h2>Events</h2>
    <table>
        <tr>
            <th>label</th>
            <th>description</th>
            <th>Date</th>
        </tr>
        <tr
            v-for="event in events"
            :key="event.getEventId()"
        >
            <td>{{ event.affichLabel() }}</td>
            <td>{{ event.affichDescription() }}</td>
            <td>{{ showDateFormat(event.getDate()) }}</td>
            <td><button @click="updateEvent(event.getEventId())">Modifier</button></td>
        </tr>
    </table>
    <button type="button" @click="addEvent">Ajouter un event</button>
</template>

<script setup lang="ts">
import router from "../../router/router";
import axiosServer from "../../axios/axiosServer";
import EventParser from "../../parsers/EventParser";
import EventRequester from "../../requesters/EventRequester";
import Event from "../../models/Event";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const events = ref(new Array<Event>());
const {d} = useI18n({useScope: 'global'});

EventRequester.getAllEvents(true).then(response => {
    events.value = response;
});

const showDateFormat = (date: string): string => {
    if(!date){
        return "Aucune date"
    }
    return d(date);
};

const addEvent = async () => {
    const response = await axiosServer.post('/event');
    const event = EventParser.parseEvent(response.data);
    await router.push({name: 'adminEventForm', params: {eventId: event.getEventId()}});
};

const updateEvent = async(eventId: number) => {
    await router.push({name: 'adminEventForm', params: {eventId}})
}
</script>

<style scoped>


</style>