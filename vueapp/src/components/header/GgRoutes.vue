<template>
    <div class="routes">
        <router-link @click="localModelValue=false" :to="{name: 'artist'}">Artiste</router-link>
        <router-link @click="localModelValue=false" :to="{name: 'diary'}">Actualité</router-link>
        <router-link @click="localModelValue=false" :to="{name: 'spotifyMusic'}">Musique</router-link>
        <router-link @click="localModelValue=false" :to="{name: 'gallery'}">Galerie</router-link>
        <router-link @click="localModelValue=false" :to="{name: 'contact'}">Contact</router-link>
    </div>
    <div class="socialMedia">
        <a target="_blank" rel="noopener"
           href="https://open.spotify.com/artist/6SzrU2vncO3th26VYZBbBa?si=AQK2sgYSRNCatRueFsvwkQ">
            <img src="../../assets/icons/spotify.svg" alt="spotify icon"/>
        </a>
        <a target="_blank" rel="noopener"
           href="https://www.youtube.com/channel/UCST7yA48BwRuvpUAfSxUxSQ">
            <img src="../../assets/icons/youtube.svg" alt="youtube icon"/>
        </a>
        <a target="_blank" rel="noopener"
           href="https://www.facebook.com/GuillaumeGoossensMusique">
            <img src="../../assets/icons/facebook.svg" alt="facebook icon"/>
        </a>
        <a target="_blank" rel="noopener"
           href="https://www.instagram.com/guillaume_goossens_musique/">
            <img src="../../assets/icons/instagram.svg" alt="instagram icon"/>
        </a>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

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

.routes{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.routes > a {
    text-decoration: none;
    font-weight: 300;
    font-size: xx-large;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
}

.socialMedia{
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.socialMedia > a:not(:last-child){
    margin-right: 20px;
}

</style>