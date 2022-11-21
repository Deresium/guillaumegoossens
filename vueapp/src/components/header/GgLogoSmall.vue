<template>
    <svg @click="goToHome" xmlns="http://www.w3.org/2000/svg" width="395" height="41" viewBox="0 0 395 41">
        <g id="logoGG_small" transform="translate(-107 -112)">
            <path id="infinity-svgrepo-com" d="M9.882,25.34C3.97,25.34,2,21,2,16.67S3.97,8,9.882,8c7.882,0,19.7,17.34,27.586,17.34,5.911,0,7.882-4.335,7.882-8.67S43.379,8,37.467,8C29.586,8,17.763,25.34,9.882,25.34Z" transform="translate(345.985 115.83)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
            <text id="GUILLAUME" transform="translate(107 145)" fill="#fff" font-size="36" font-family="Belleza-Regular, Belleza"><tspan class="txtSvg" x="0" y="0">GUILLAUME</tspan></text>
            <text id="G" transform="translate(318 145)" fill="#fff" font-size="36" font-family="Belleza-Regular, Belleza"><tspan class="txtSvg" x="0" y="0">G</tspan></text>
            <text id="SSENS" transform="translate(397 145)" fill="#fff" font-size="36" font-family="Belleza-Regular, Belleza"><tspan class="txtSvg" x="0" y="0">SSENS</tspan></text>
        </g>
    </svg>
</template>

<script setup lang="ts">
import router from "../../router/router";

const goToHome = async()=> {
    await router.push({name: 'home'});
}
</script>

<style scoped>
svg{
    cursor: pointer;
}

tspan.txtSvg{
    font-family: 'Belleza', sans-serif;
    font-weight: 400;
}
</style>