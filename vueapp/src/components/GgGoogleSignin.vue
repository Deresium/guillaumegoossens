<template>
    <div :ref="setRef"></div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import Login from "../Login";

const refButtonGoogle = ref(null);
const setRef = (el: any) => {
    refButtonGoogle.value = el;
};

onMounted(() => {
    window.onload = function () {
        // @ts-ignore
        google.accounts.id.initialize({
            client_id: "941656270037-ift0kkr21f1a2dtakaal1o3tlb7cndod.apps.googleusercontent.com",
            callback: onSignIn
        });

        // @ts-ignore
        google.accounts.id.renderButton(
            refButtonGoogle.value,
            {theme: "outline", size: "large"}  // customization attributes
        );

        // @ts-ignore
        //google.accounts.id.prompt(); // also display the One Tap dialog
    }
});

async function onSignIn(googleUser: any){
    await new Login(googleUser.credential).login();
}

/*const render = () => {
    const signin = localStorage.getItem('signinLoaded');
    console.log('rendering');
    if (signin !== 'true')
        setTimeout(render, 100);
    else {
        // @ts-ignore
        // eslint-disable-next-line
        gapi.signin2.render('google-signin-btn', {
            onsuccess: onSignIn,
            longtitle: true
        });
    }
};

onMounted(() => {
    render();
});*/

</script>

<style scoped>

</style>