<template>
    <div class="app">
        <div class="exceptFooter">
            <GgHeader/>
            <router-view/>
        </div>
        <GgFooter/>
    </div>
</template>

<script setup lang="ts">
import GgHeader from "./components/header/GgHeader.vue";
import GgFooter from "./components/footer/GgFooter.vue";
import DecryptCookie from "./DecryptCookie";

new DecryptCookie().tryLoginUser();
</script>


<style>
body {
    margin: 0;
    padding: 0;
    /*background-color: #636363;*/
    background-color: black;
    position: relative;
}

.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.marginView{
    margin-left: 20px;
    margin-right: 20px;
}

* {
    font-family: 'Lato', sans-serif;
    color: white;
}


input, textarea, select{
    background-color: #636363;
    border: white 1px solid;
    color: white;
}

.desktop {
    display: none;
}

h1 {
    font-family: 'Merriweather', serif;
}

button{
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
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
