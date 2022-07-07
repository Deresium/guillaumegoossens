<template>
    <h2>Photos</h2>
    <div class="drop">
        <GgDropImg drop-img-type="PICTURE" @image-sent="loadPictures"/>
    </div>
    <div :ref="setRefGallery" class="gallery">
        <div class="divImg" v-for="pictureId in pictures" :key="pictureId">
            <img
                class="imgGallery"
                :src="getUrlPicture(pictureId)"
                alt="picture gallery"
            />
            <img class="deleteIcon" src="../../assets/icons/delete.svg" alt="delete icon"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import GgDropImg from "./GgDropImg.vue";
import axiosServer from "../../axios/axiosServer";
import {onMounted, ref} from "vue";
import Sortable from "sortablejs";

const pictures = ref(new Array<number>());
const galleryDiv = ref();

const loadPictures = async () => {
    const response = await axiosServer.get('/pictures');
    pictures.value = response.data;
};
loadPictures();

const getUrlPicture = (pictureId: number) => {
    return `${import.meta.env.VITE_APP_URL_SERVER}/api/picture/${pictureId}`;
};

const setRefGallery = (el: any) => {
    galleryDiv.value = el;
};

onMounted(() => {
    new Sortable(galleryDiv.value, {
        onEnd: async (evt) => {
            const picturesIds = pictures.value;
            const picture = picturesIds[evt.oldIndex];
            picturesIds.splice(evt.oldIndex, 1);
            picturesIds.splice(evt.newIndex, 0, picture);

            await axiosServer.put('/pictures', {
                picturesIds
            })
        }
    });
});


</script>

<style scoped>
.gallery {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.divImg{
    margin-bottom: 20px;
    position: relative;
}

.drop {
    margin-bottom: 50px;
}

.deleteIcon {
    display: none;
    z-index: 2;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
}

.imgGallery:hover + .deleteIcon, .deleteIcon:hover {
    display: block;
    cursor: pointer;
}

@media (min-width: 1000px) {

}

</style>