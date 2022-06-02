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
    background-color: #636363;
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

.desktop {
    display: none;
}

h1 {
    font-family: 'Merriweather', serif;
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
