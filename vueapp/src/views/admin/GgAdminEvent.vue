<template>
    <h2>Events</h2>
    <button class="btnAddEvent" type="button" @click="addEvent">Ajouter un event</button>
    <div class="overflow">
        <table class="events">
            <tr>
                <th>Type</th>
                <th>label</th>
                <th>description</th>
                <th>Date</th>
                <th>Adresse</th>
                <th>Favori</th>
                <th>Afficher</th>
                <th>Actions</th>
            </tr>
            <tr
                v-for="event in events"
                :key="event.getEventId()"
            >
                <td><span v-if="event.getType()">{{ t(`types.${event.getType()}`) }}</span></td>
                <td>{{ event.affichLabel() }}</td>
                <td>{{ event.affichDescription() }}</td>
                <td>{{ showDateFormat(event.getDate()) }}</td>
                <td>{{ event.affichAddress() }}</td>
                <td>
                    {{ event.affichFavorite() }}
                </td>
                <td>
                    {{ event.affichShowEvent() }}
                </td>
                <td>
                    <button @click="updateEvent(event.getEventId())">Modifier</button>
                </td>
            </tr>
        </table>
    </div>
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
const {d, t} = useI18n({useScope: 'global'});

EventRequester.getAllEvents(true).then(response => {
    events.value = response;
});

const showDateFormat = (date: string): string => {
    if (!date) {
        return "Aucune date"
    }
    return d(date);
};

const addEvent = async () => {
    const response = await axiosServer.post('/event');
    const event = EventParser.parseEvent(response.data);
    await router.push({name: 'adminEventForm', params: {eventId: event.getEventId()}});
};

const updateEvent = async (eventId: number) => {
    await router.push({name: 'adminEventForm', params: {eventId}})
}
</script>

<style scoped>
.overflow{
    overflow-x: scroll;
}

.events td{
    padding: 10px;
    width: 200px;
    text-align: center;
}

.btnAddEvent{
    font-size: large;
    margin-bottom: 20px;
}

</style>