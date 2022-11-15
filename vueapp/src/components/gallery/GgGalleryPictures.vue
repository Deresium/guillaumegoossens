<template>
    <div v-if="adminControls" class="drop">
        <GgDropImg drop-img-type="PICTURE" @image-sent="loadPictures"/>
    </div>

    <div :ref="setRefGallery" class="gallery">
        <div class="divImg" v-for="pictureId in pictures" :key="pictureId">
            <img
                class="imgGallery"
                :src="getUrlPicture(pictureId)"
                alt="picture gallery"
                @click="showFullSize(pictureId)"
            />
            <img v-if="adminControls" class="deleteIcon" @click="deleteImg(pictureId)"
                 src="../../assets/icons/delete.svg" alt="delete icon"/>
        </div>
    </div>
    <div v-if="pictureIdFullSize" class="fullSizeImgDiv" @click="removeFullSizePicture">
        <img class="fullSizePicture" :src="getUrlFullSizePicture" alt="picture"/>
    </div>
</template>

<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import axiosServer from "../../axios/axiosServer";
import Sortable from "sortablejs";
import GgDropImg from "../../views/admin/GgDropImg.vue";

const props = defineProps({
    adminControls: {
        type: Boolean,
        required: true,
    }
});

const pictures = ref(new Array<number>());
const galleryDiv = ref();
const pictureIdFullSize = ref();

const loadPictures = async () => {
    const response = await axiosServer.get('/pictures');
    pictures.value = response.data;
};
loadPictures();

const getUrlPicture = (pictureId: number) => {
    return `${import.meta.env.VITE_APP_URL_SERVER}/api/picture/${pictureId}`;
};

const getUrlFullSizePicture = computed(() => {
    return `${import.meta.env.VITE_APP_URL_SERVER}/api/picture/${pictureIdFullSize.value}`;
});

const setRefGallery = (el: any) => {
    galleryDiv.value = el;
};

const deleteImg = async (pictureId: number) => {
    if (!props.adminControls) {
        return;
    }

    await axiosServer.delete(`/pictures/${pictureId}`);
    const index = pictures.value.indexOf(pictureId);
    pictures.value.splice(index, 1);
};

const showFullSize = (pictureId: number) => {
    pictureIdFullSize.value = pictureId;
};

const removeFullSizePicture = () => {
    pictureIdFullSize.value = null;
};

onMounted(() => {
    if (!props.adminControls) {
        return;
    }

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
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.divImg {
    margin-bottom: 20px;
    position: relative;
}

.divImg:hover{
    cursor: pointer;
}

.imgGallery {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.drop {
    margin-bottom: 50px;
}

.deleteIcon {
    z-index: 2;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
}

/*.imgGallery:hover + .deleteIcon, .deleteIcon:hover {
    display: block;
    cursor: pointer;
}*/

.fullSizeImgDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(36, 36, 36, .8);
    cursor: pointer;
}

.fullSizePicture {
    max-width: 95%;
    max-height: 95%;
}

@media (min-width: 900px) {
    .imgGallery{
        width: 300px;
        height: 300px;
    }
}

</style>