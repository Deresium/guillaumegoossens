<template>
    <div class="home">
        <div class="topTitle">
            <img class="guillaumePic" src="../assets/guillaume.jpg" alt="Guillaume"/>
            <h1>Guillaume Goossens</h1>
        </div>

        <div class="leftColumn">
            <h1>Guillaume<br/>Goossens</h1>
            <p class="quote">
                <span>Ouvre une fenêtre sur votre âme</span>
                <span>Et vous touche en plein coeur</span>
            </p>

            <div class="actionButtons">
                <router-link :to="{name: 'artist'}">Artiste</router-link>
                <router-link :to="{name: 'spotifyMusic'}">Musique</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home{
    margin-bottom: 30px;
    margin-top: 30px;
}

.topTitle {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.guillaumePic {
    width: 95%;
}

h1{
    color: white;
    font-family: 'Merriweather', serif;
    font-weight: bold;
}

.topTitle h1 {
    font-size: 30px;
}

.leftColumn h1{
    display: none;
}

.quote {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: large;
    font-family: 'Merriweather', serif;
    font-weight: 300;
}

.quote span {
    display: block;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
}

.actionButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.actionButtons a {
    display: block;
    text-decoration: none;
    padding: 20px;
    width: 70%;
    border: white 1px solid;
    text-align: center;
    font-size: large;
    font-weight: 400;
}

.actionButtons a:first-child {
    margin-bottom: 20px;
}

.actionButtons a:last-child {
    color: black;
    background-color: white;
}

@media (min-width: 500px) {
    .topTitle h1 {
        font-size: 45px;
    }
}

@media(min-width: 730px){
    .topTitle h1{
        font-size: 70px;
    }

    .guillaumePic{
        width: 75%;
    }

    .quote{
        font-size: x-large;
    }
}

@media (min-width: 1400px) {
    .topTitle h1{
        display: none;
    }

    .leftColumn h1{
        display: block;
        text-align: center;
    }

    .home{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    .guillaumePic {
        width: 70%;
    }

    .leftColumn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-left: 30px solid #242424;
        width: 30%;
        padding-left: 100px;
    }

    h1{
        font-size: 85px;
    }

    .quote{
        align-items: flex-start;
        font-size: x-large;
    }

    .actionButtons{
        flex-direction: row;
        align-items: flex-start;
    }

    .actionButtons a{
        font-size: x-large;
    }

    .actionButtons a:first-child{
        margin-right: 30px;
    }
}
</style>