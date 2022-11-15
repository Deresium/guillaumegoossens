<template>
    <div class="withMargin">
        <h1>Musique</h1>
        <div class="routing">
            <router-link :to="{name: 'spotifyMusic'}">Spotify</router-link>
            <router-link :to="{name: 'youtubeMusic'}">Youtube</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.routing{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 50px;
}

.routing a {
    border: 1px solid white;
    padding: 15px;
    text-decoration: none;
    font-size: large;
    font-weight: 400;
}

.router-link-active {
    color: black;
    background-color: white
}
</style>