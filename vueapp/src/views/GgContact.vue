<template>
    <div class="withMargin">
        <h1>Contact</h1>
        <div class="pageContent">
            <div class="guillaume">
                <img src="../assets/guillaume2.jpg" alt="guillaume pic"/>
                <GgLogo/>
            </div>
            <div class="form">
                <GgContactForm/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GgContactForm from "../components/contact/GgContactForm.vue";
import GgLogo from "../components/header/GgLogo.vue";
</script>

<style scoped>
.pageContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 80%;
    margin-bottom: 30px;
}

.form{
    width: 100%;
}

.guillaume {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

@media (min-width: 900px) {
    .pageContent {
        flex-direction: row-reverse;
        align-items: flex-start;
    }

    .guillaume {
        width: 50%;
    }

    .form{
        width: 50%;
    }
}

</style>