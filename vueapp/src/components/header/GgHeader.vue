<template>
    <header>
        <div class="headerPhone">
            <GgLogoSmall/>
            <button class="hamburgerButton" @click="showFullMenu=true">
                <img class="menuIcon" src="../../assets/icons/menu.svg" alt="menu icon"/>
            </button>
        </div>
        <div class="headerDesktop">
            <GgLogoSmall/>
            <div class="menuLinks">
                <router-link :to="{name: 'artist'}">Artiste</router-link>
                <router-link :to="{name: 'spotifyMusic'}">Musique</router-link>
                <router-link :to="{name: 'diary'}">Actualité</router-link>
                <router-link :to="{name: 'gallery'}">Galerie</router-link>
                <router-link :to="{name: 'contact'}">Contact</router-link>
            </div>
            <div class="menuMedia">
                <a target="_blank" rel="noopener"
                   href="https://open.spotify.com/artist/6SzrU2vncO3th26VYZBbBa?si=hWQu77UOSeyHNDAubhiHZg">
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
        </div>
        <GgFullMenu v-model="showFullMenu"/>
    </header>
</template>

<script setup lang="ts">
import GgLogo from "./GgLogo.vue";
import {ref} from "vue";
import GgFullMenu from "./GgFullMenu.vue";
import GgLogoSmall from "./GgLogoSmall.vue";

const showFullMenu = ref(false);


</script>

<style scoped>
header {
    background-color: #242424;
    margin: 0;
    padding: 10px;
}

.headerPhone {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headerDesktop {
    display: none;
}

.menuIcon {
    width: 35px;
    height: 35px;
}

.hamburgerButton{
    background-color: transparent;
    border: none;
}

@media (min-width: 1000px) {
    .headerPhone {
        display: none;
    }

    .headerDesktop {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menuLinks {
        flex-grow: 1;
        display: flex;
        justify-content: space-evenly;
    }

    .menuLinks a {
        font-weight: 300;
        font-size: x-large;
        color: white;
        text-decoration: none;
    }

    .menuMedia {
        display: flex;
        justify-content: space-between;
    }

    .menuMedia a {
        display: block;
    }

    .menuMedia a {
        margin-right: 10px;
    }

    .menuMedia img {
        width: 25px;
        height: 25px;
    }
}


</style>