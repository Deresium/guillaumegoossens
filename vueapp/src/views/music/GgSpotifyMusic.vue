<template>
    <div class="spotifyAlbums">
        <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/album/6sGDwcqW6KWNSkyfdLFK4V?utm_source=generator&theme=0"
                width="100%"
                height="380"
                frameBorder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />

        <iframe
                style="border-radius:12px"
                src="https://open.spotify.com/embed/album/3LPY9YtJT3rLDZRM53TYJQ?utm_source=generator&theme=0"
                width="100%"
                height="380"
                frameBorder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.spotifyAlbums {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}

</style>