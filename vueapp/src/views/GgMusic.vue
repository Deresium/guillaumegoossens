<template>
    <div class="withMargin">
        <h1>Musique</h1>
        <div class="routing">
            <router-link :to="{name: 'spotifyMusic'}">Musique</router-link>
            <router-link :to="{name: 'youtubeMusic'}">Vidéos</router-link>
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
    border: 1px solid rgba(255, 255, 255, .3);
    padding: 15px;
    text-decoration: none;
    font-size: large;
    font-weight: 400;
    border-radius: 15px;
    box-shadow: 2px 2px 25px 0 rgba(255, 255, 255, .3);
}

.router-link-active {
    color: black;
    background-color: rgba(255, 255, 255, .8)
}
</style>