import {RouteRecordRaw} from "vue-router";
import GgHome from "../views/GgHome.vue";
import GgArtist from "../views/GgArtist.vue";
import GgContact from "../views/GgContact.vue";
import GgDiary from "../views/GgDiary.vue";
import GgGallery from "../views/GgGallery.vue";
import GgMusic from "../views/GgMusic.vue";
import GgSpotifyMusic from "../views/music/GgSpotifyMusic.vue";
import GgYoutubeMusic from "../views/music/GgYoutubeMusic.vue";
import GgAdmin from "../views/admin/GgAdmin.vue";
import GgAdminEvent from "../views/admin/GgAdminEvent.vue";
import GgAdminPicture from "../views/admin/GgAdminPicture.vue";
import GgAdminEventForm from "../views/admin/GgAdminEventForm.vue";
import GgConfidentialite from "../views/GGConfidencialite.vue";

export const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: GgHome,
        meta: {title: 'Guillaume Goossens - Home'}
    },
    {
        path: '/artiste',
        name: 'artist',
        component: GgArtist,
        meta: {title: 'Guillaume Goossens - Artiste'}
    },
    {
        path: '/contact',
        name: 'contact',
        component: GgContact,
        meta: {title: 'Guillaume Goossens - Contact'}
    },
    {
        path: '/actualite',
        name: 'diary',
        component: GgDiary,
        meta: {title: 'Guillaume Goossens - Actualité'}
    },
    {
        path: '/galerie',
        name: 'gallery',
        component: GgGallery,
        meta: {title: 'Guillaume Goossens - Galerie'}
    },
    {
        path: '/confidentialite',
        name: 'confidentialite',
        component: GgConfidentialite,
        meta: {title: 'Guillaume Goossens - Règle de confidentialité'}
    },
    {
        path: '/musique',
        name: 'music',
        component: GgMusic,
        meta: {title: 'Guillaume Goossens - Musique'},
        children: [
            {
                path: '',
                redirect: () => {
                    return {name: 'spotifyMusic'}
                }
            },
            {
                path: 'spotify',
                name: 'spotifyMusic',
                component: GgSpotifyMusic,
                meta: {title: 'Guillaume Goossens - Musique Spotify'}
            },
            {
                path: 'youtube',
                name: 'youtubeMusic',
                component: GgYoutubeMusic,
                meta: {title: 'Guillaume Goossens - Musique Youtube'}
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: GgAdmin,
        meta: {title: 'Guillaume Goossens - Admin'},
        children: [
            {
                path: '',
                redirect: () => {
                    return {name: 'adminEvent'}
                }
            },
            {
                path: 'event',
                name: 'adminEvent',
                component: GgAdminEvent,
                meta: {title: 'Guillaume Goossens - Admin Event'}
            },
            {
                path: 'picture',
                name: 'adminPicture',
                component: GgAdminPicture,
                meta: {title: 'Guillaume Goossens - Admin Picture'}
            },
            {
                path: 'event/:eventId',
                name: 'adminEventForm',
                component: GgAdminEventForm,
                meta: {title: 'Guillaume Goossens - Admin Event'}
            }
        ]
    }
];