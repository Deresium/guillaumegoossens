<template>
    <label class="labelInputFile" @dragenter.prevent="dragEnterHandler" @dragleave="dragLeaveHandler" @dragover.prevent
           @drop.prevent="dropHandler">
        <input
            type="file"
            accept="image/*"
            @change="onChangeFile"
        />

        <img v-if="isEventDropImg" :class="insideInputStyle" class="imgProduct" :src="getSrcImg" alt="product img"/>
        <span v-if="isPictureDropImg" :class="insideInputStyle" class="dropPicture"/>
    </label>
</template>

<script setup lang="ts">
import {computed, ref} from "vue"
import {dragAndDrop} from "../../hooks/dragAndDrop";
import axiosServer from "../../axios/axiosServer";

const props = defineProps({
    eventId: {
        type: Number,
        required: false
    },
    dropImgType: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['imageSent']);

const acceptTab = new Array<string>();
acceptTab.push('image/*');

const handleDataTransfer = async (dataTransfer: DataTransfer) => {
    await sendImageToServer(dataTransfer.files[0]);
};

const {
    dragLeaveHandler,
    dragEnterHandler,
    isHover,
    checkFile,
    dropHandler
} = dragAndDrop(acceptTab, handleDataTransfer);
const counterForReload = ref(0);


const onChangeFile = async (event: any) => {
    const file: File = event.target.files[0];
    await sendImageToServer(file);
};

const sendImageToServer = async (file: File) => {
    if (!file) {
        return;
    }
    if (!checkFile(file)) {
        alert('Type non-accepté');
        return
    }

    try {
        const formData = new FormData();
        formData.append('file', file, file.name);
        await axiosServer.post(getUrlPost.value, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        counterForReload.value++;
        emit('imageSent');
    } catch (error) {
        alert('Une erreur est survenue');
    }
};

const getSrcImg = computed(() => {
    if(isEventDropImg.value){
        return `${import.meta.env.VITE_APP_URL_SERVER}/api/event/${props.eventId}/image?counter=${counterForReload.value}`
    }
    return null;

});

const getUrlPost = computed(() => {
    if(isEventDropImg.value){
        return `/event/${props.eventId}/image`;
    }else if(isPictureDropImg.value){
        return '/picture';
    }
    return null;
});

const isEventDropImg = computed(() => {
    return props.dropImgType === 'EVENT';
});

const isPictureDropImg = computed(() => {
    return props.dropImgType === 'PICTURE';
});

const insideInputStyle = computed(() => ({
    'isHoverStyle': isHover.value
}));
</script>

<style scoped>
.imgProduct {
    width: 100%;
    border: solid 1px white;
    display: block;
    min-height: 20vh;
}

input {
    display: none;
}

img.isHoverStyle, span.isHoverStyle {
    border: solid 5px white;
}

.dropPicture{
    display: block;
    height: 200px;
    border: solid 1px #242424;
}

</style>