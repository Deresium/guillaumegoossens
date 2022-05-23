<template>
    <div class="iframeVideo">
        <iframe
            src="https://www.youtube.com/embed/GYGsmF5cWLU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.iframeVideo {
    height: 0px;
    padding-top: 25px;
    padding-bottom: 56.2%;
    position: relative;
}
.iframeVideo iframe {
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>