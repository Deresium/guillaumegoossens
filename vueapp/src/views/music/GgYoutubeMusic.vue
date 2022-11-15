<template>
    <div class="videos">
        <div class="video">
            <h2>On existe encore</h2>
            <div class="iframeVideo">
                <iframe
                    src="https://www.youtube.com/embed/GYGsmF5cWLU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        </div>
        <div class="video">
            <h2>Quelle importance</h2>
            <div class="iframeVideo">
                <iframe
                    src="https://www.youtube.com/embed/eIT1AzX84-A"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        </div>
        <div class="video">
            <h2>L'indestructible</h2>
            <div class="iframeVideo">
                <iframe
                    src="https://www.youtube.com/embed/YqLcryZU9XA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        </div>
        <div class="video">
            <h2>Tant à donner</h2>
            <div class="iframeVideo">
                <iframe
                    src="https://www.youtube.com/embed/LfBXv3J1YWc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        </div>
        <div class="video">
            <h2>Ce qui manque</h2>
            <div class="iframeVideo">
                <iframe
                    src="https://www.youtube.com/embed/3RsjEN1S2IE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.iframeVideo {
    height: 0px;
    padding-bottom: 56.2%;
    position: relative;
}

.iframeVideo iframe {
    width: 100%;
    height: 100%;
    position: absolute;
}

.video{
    margin-bottom: 100px;
}

@media(min-width: 900px){
    .videos{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .video{
        width: 45%;
    }
}
</style>