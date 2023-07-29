<template>
    <div class="withMargin">
        <h1>Actualité</h1>
        <div class="page">
            <div class="events">
                <div class="event" v-for="event in events" :key="event.getEventId()">
                    <img class="imgEvent" v-if="event.getPicture()" :src="getImageSrc(event.getEventId())"
                         alt="img event"/>
                    <div class="eventContent">
                        <div class="infosEvent">
                            <p class="label">{{ event.getLabel() }} - {{ d(event.getDate()) }}</p>
                            <p v-if="event.getDescription()">{{ event.getDescription() }}</p>
                            <p v-if="event.affichAddress()" class="address">{{ event.affichAddress() }}</p>
                            <p v-if="event.getWebsite()" class="website">
                                <a :href="event.getWebsite()" rel="noopener"
                                   target="_blank">{{ event.getWebsiteText() }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import Event from "../models/Event";
import EventRequester from "../requesters/EventRequester";
import {useI18n} from "vue-i18n";
import {computed, ref} from "vue";

let events = ref(new Array<Event>());

const svgImg = ref('');

EventRequester.getAllEvents(false).then(eventsResponse => {
    events.value = eventsResponse;
});

const {d} = useI18n({useScope: 'global'});

const getImageSrc = (eventId: number) => {
    return `${import.meta.env.VITE_APP_URL_SERVER}/api/event/${eventId}/image`;
}

</script>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.events {
    width: 100%;
}

.buttons {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 50px;
}

.buttons button {
    font-size: x-large;
}

.event {
    position: relative;
    padding: 5px;
    margin-bottom: 50px;
    border-radius: 15px;
    box-shadow: 2px 2px 25px 0 rgba(255, 255, 255, .3);
    box-sizing: border-box;
}

.infosEvent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.label {
    font-weight: bold;
}

.icon img {
    width: 50px;
}

.date {
    display: inline-block;
    background-color: white;
    color: black;
    padding: 10px;
    font-weight: bold;
}

.imgEvent {
    max-height: 90%;
    max-width: 90%;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .3;
}

.eventContent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 900px) {
    .buttons {
        width: 50%;
    }

    .imgEvent {
        max-width: 400px;
    }
}

</style>