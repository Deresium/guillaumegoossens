<template>
    <div class="withMargin">
        <h1>Galerie Photo</h1>
        <GgGalleryPictures :admin-controls="false"/>
    </div>
</template>

<script setup lang="ts">
import GgGalleryPictures from "../components/gallery/GgGalleryPictures.vue";
</script>

<style scoped>

</style>