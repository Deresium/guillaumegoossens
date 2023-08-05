<template>
    <div class="withMargin">
        <h1>Artiste</h1>
        <div class="bio">
            <p class="firstP">Issu de la culture Rock Folk, il éveille les consciences
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

            <p>"C'est dans les innombrables chaos que naissent les plus aimables des formes". En 2021 sortent des
                titres aux couleurs d'une sombre époque «Notre seule issue», «Ce qui manque» et «Citoyen inconnu» et fait appel à
                l'essentiel.</p>

            <p>Commence alors la rédaction d'un nouvel album baptisé «Tout dépendra» sorti le 5 mai 2023.</p>

            <div class="imgSection">
                <img class="imgBio" src="../assets/pochette_album.jpg" alt="pochette album"/>
                <div class="paragraphSection">
                    <p>Si "C'est à toi" illustre le concept de perception, "Tout dépendra" en est la suite logique en ajoutant les notions de dualité et d'impermamence.</p>
                    <p>L'album est constitué de 13 titres dans un style plus rock que le précédent et les thèmes abordés sont ici plus universel.</p>
                    <p>Tout dépendra incite à la réflexion et nous invite à accueillir notre réalité.</p>
                    <p>Ce nouvel album est également le moment d'inclure quelques anciennes chansons, telles que:</p>
                    <p>- Ce qui manque: sortie en février 2021 accompagnée du clip.</p>
                    <p>- Le fil de la vie: véritable point de départ du projet.</p>
                    <p>- Les regrets: reliquat du groupe Ex Vivo revisitée en version Piano/voix. La chanson sert un second clip sorti en avril 2023</p>
                    <p>"Ce que c'était, ce que sera<br/>Tout dépendra"</p>
                </div>
            </div>

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
                <img class="imgBio" src="../assets/live.jpg" alt="on stage"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.firstP {
    font-weight: bold;
    margin-bottom: 30px;
    font-size: large;
}

.imgBio {
    width: 100%;
}

.quote{
    font-style: italic;
}

p{
    text-align: justify;
}
@media (min-width: 800px) {
    .imgSection {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .paragraphSection {
        width: 65%;
    }

    .imgBio {
        width: 30%;
    }
}

</style>