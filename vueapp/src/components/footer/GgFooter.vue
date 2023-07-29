<template>
<footer>
    <router-link :to="{name: 'confidentialite'}">Règles de confidentialité</router-link>
    <p>Réalisé par <a target="_blank" href="https://www.creatiview.be" rel="noopener">Creatiview</a></p>
</footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #242424;
}

p{
    margin: 0;
}
</style>