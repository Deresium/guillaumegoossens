<template>
    <div class="withMargin">
        <h1>Artiste</h1>
        <div class="bio">
            <p class="firstP">Issu de la culture Rock Folk et Blues, multi instrumentiste, il éveille les consciences
                avec ses textes
                profonds et riches de sens, le tout, dans un style simple, authentique et spontané.</p>


            <p class>En 2019 sort le premier titre «On existe encore» accompagné d'un clip. L’album «C'est à toi»
                sortira un
                an
                plus tard, avec les titres «L'ère d'avoir», «La caresse des ondes» ou encore «Mourir d'amour».</p>

            <div class="imgSection">
                <img class="imgBio" src="../assets/cestatoi.png" alt="c'est à toi cover"/>
                <div class="paragraphSection">
                    <p>«C’est à toi» fait référence au libre arbitre, à la perception, à l’interprétation du sens et à
                        la
                        capacité
                        d’entendre ce qui réside en chacun de nous.</p>
                    <p class="quote">«Une chanson, c'est transmettre une perspective de sa propre réalité».</p>

                    <p>Un album complet, composé de 8 titres balayant plusieurs univers musicaux. Une histoire colorée
                        passant
                        par
                        le rock, la folk et l’électro-minimaliste.</p>

                    <p>4 clips accompagnent cet album avec «On existe encore», «Tant à donner», «Quelle importance» et
                        «L'indestructible», réalisé entre 2019 et 2021.</p>
                </div>
            </div>

            <p>C'est dans les innombrables chaos que naissent les plus aimables des formes. En 2021 sortent des
                titres
                aux
                couleurs de notre époque «Notre seule issue», «Ce qui manque» et «Citoyen inconnu» et fait appel à
                l'essentiel.</p>

            <p>Commence alors la rédaction d'un nouvel album baptisé «Tout dépendra» qui sortira en décembre
                2022.</p>

            <div class="imgSection">
                <div class="paragraphSection">
                    <p>De plus en plus présent sur la scène, seul accompagné de sa guitare, c'est aujourd'hui avec 3
                        musiciens
                        que
                        Guillaume se produit et ne cesse d'enchanter le public.</p>
                    <p class="quote">«Mon chemin est celui de donner les cris qui viennent de mon âme quand je parviens à ressentir
                        leurs
                        vibrations».</p>
                </div>
                <img class="imgBio" src="../assets/live.png" alt="on stage"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.firstP {
    font-weight: bold;
    margin-bottom: 50px;
    font-size: large;
}

.imgBio {
    width: 100%;
}

.quote{
    font-style: italic;
}

@media (min-width: 800px) {
    .imgSection {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .paragraphSection {
        width: 55%;
    }

    .imgBio {
        width: 40%;
    }
}

</style>