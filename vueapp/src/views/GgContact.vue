<template>
    <div class="withMargin">
        <h1>Contact</h1>
        <div class="pageContent">
            <div class="guillaume">
                <img src="../assets/guillaume2.jpg" alt="guillaume pic"/>
                <div class="logo">
                    <GgLogoSmall/>
                </div>
                <div class="infoContact">
                    <a href="mailto:guillaumegoossensmusique@gmail.com">guillaumegoossensmusique@gmail.com</a>
                    <a href="tel:+32474450317">+32 474 45 03 17</a>
                </div>
            </div>
            <div class="form">
                <GgContactForm/>
            </div>
        </div>
        <div class="pro">
            <h2>Espace Pro</h2>
            <div class="linksPdf">
                <a href="./public/communique_presse.pdf" download="communique presse">Télécharger le<br/>Communiqué de presse</a>
                <a href="./public/fiche_technique.pdf" download="fiche technique">Télécharger la<br/>Fiche techique</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GgContactForm from "../components/contact/GgContactForm.vue";
import GgLogo from "../components/header/GgLogo.vue";
import GgLogoSmall from "../components/header/GgLogoSmall.vue";
</script>

<style scoped>
.pageContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 100%;
    margin-bottom: 30px;
}

.form {
    width: 100%;
}

.guillaume {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

.logo {
    width: 90%;
    display: flex;
    justify-content: center;
}

.infoContact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.infoContact > a {
    margin-bottom: 10px;
    margin-top: 10px;
}

.pro{
    margin-top: 100px;
}

.linksPdf{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
}

.pro a{
    display: block;
    text-align: center;
    margin-bottom: 20px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
}

h2{
    text-align: center;
}

@media (min-width: 900px) {
    .pageContent {
        flex-direction: row-reverse;
        align-items: flex-start;
    }

    .guillaume {
        width: 50%;
    }

    .form {
        width: 50%;
    }

    img {
        width: 80%;
    }

    .pro{
        width: 40%;
    }
}

</style>