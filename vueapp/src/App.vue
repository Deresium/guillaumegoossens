<template>
    <div class="app">
        <GgHeader/>
        <router-view/>
    </div>
</template>

<script setup lang="ts">
import GgHeader from "./components/header/GgHeader.vue";
</script>


<style>
body{
    margin: 0;
    padding: 0;
    background-color: #636363;
    position: relative;
}

* {
    font-family: 'Lato', sans-serif;
    color: white;
}

.desktop {
    display: none;
}

@media (min-width: 900px) {
    .phone {
        display: none;
    }

    .desktop {
        display: block;
    }
}
</style>
