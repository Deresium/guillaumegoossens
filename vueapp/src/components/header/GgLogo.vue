<template>
    <svg @click="goToHome" xmlns="http://www.w3.org/2000/svg" width="557" height="60" viewBox="0 0 557 60">
        <g id="logoGG" transform="translate(-107 -96)">
            <path id="infinity-svgrepo-com" d="M14.5,35.5C5.125,35.5,2,28.627,2,21.751S5.125,8,14.5,8C27,8,45.754,35.5,58.255,35.5c9.376,0,12.5-6.876,12.5-13.751S67.631,8,58.255,8C45.754,8,27,35.5,14.5,35.5Z" transform="translate(440.281 105.749)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
            <text id="GUILLAUME" transform="translate(107 145)" fill="#fff" font-size="50" font-family="Belleza-Regular, Belleza"><tspan class="txtSvg" x="0" y="0">GUILLAUME</tspan></text>
            <text id="G" transform="translate(401 145)" fill="#fff" font-size="50" font-family="Belleza-Regular, Belleza"><tspan class="txtSvg" x="0" y="0">G</tspan></text>
            <text id="SSENS" transform="translate(518 142)" fill="#fff" font-size="50" font-family="Belleza-Regular, Belleza"><tspan class="txtSvg" x="0" y="0">SSENS</tspan></text>
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