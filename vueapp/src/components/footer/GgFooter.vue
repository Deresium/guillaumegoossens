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
    align-items: center;
    justify-content: flex-end;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #242424;
}

footer p{
    margin-left: 20px;
}
</style>