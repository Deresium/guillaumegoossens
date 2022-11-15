<template>
    <form @submit.prevent="sendFormContact" novalidate>
        <label>
            <span>Nom</span>
            <input v-model="name" type="text" name="name"/>
            <span v-if="errorName">{{ errorName }}</span>
        </label>
        <label>
            <span>Prénom</span>
            <input v-model="firstName" type="text" name="firstName"/>
        </label>
        <label>
            <span>Email</span>
            <input v-model="email" type="email" name="email"/>
            <span v-if="errorEmail">{{ errorEmail }}</span>
        </label>
        <label>
            <span>Message</span>
            <textarea v-model="message" name="message"/>
            <span v-if="errorMessage">{{ errorMessage }}</span>
        </label>
        <button class="sendButton" type="submit">Envoyer</button>
    </form>
    <div class="confirmSend" v-if="confirmSend">
        <p>Merci pour votre message. Je reviens vers vous au plus vite !</p>
    </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import axiosServer from "../../axios/axiosServer";
import validator from "validator";


const name = ref('');
const firstName = ref('');
const email = ref('');
const message = ref('');

const errorName = ref('');
const errorEmail = ref('');
const errorMessage = ref('');

const confirmSend = ref(false);

const sendFormContact = async() =>{
    try {
        checkForm();
        if(errorName.value || errorEmail.value || errorMessage.value){
            return;
        }

        await axiosServer.post('/contact', {
            name: name.value,
            firstName: firstName.value,
            email: email.value,
            message: message.value
        });

        confirmSend.value = true;
        name.value = '';
        firstName.value = '';
        email.value = '';
        message.value = '';

        errorName.value = '';
        errorEmail.value = '';
        errorMessage.value = '';

    }catch(error){
        alert('Désolé, une erreur est survenue');
    }
};

const checkForm = () => {
    if(!name.value){
        errorName.value = 'Le nom est obligatoire';
    }

    if(!email.value){
        errorEmail.value = 'l\'email est obligatoire';
    } else if(!validator.isEmail(email.value)){
        errorEmail.value = 'L\'email n\'est pas valide';
    }

    if(!message.value){
        errorMessage.value = 'Le message est obligatoire';
    }
};

watch(name, () => {
    if(name.value) {
        errorName.value = '';
    }
});

watch(email, () => {
   if(email.value && validator.isEmail(email.value)) {
       errorEmail.value = '';
   }
});

watch(message, () => {
    if(message.value){
        errorMessage.value = '';
    }
});
</script>

<style scoped>
form{
    width: 100%;
}

label{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

textarea{
    min-height: 100px;
}

.sendButton{
    font-weight: 300;
    margin-top: 20px;
    background-color: black;
    border: 1px solid white;
    font-size: x-large;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}

input, textarea{
    border: solid 1px white;
    color: white;
    background-color: black;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>