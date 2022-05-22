import GgHome from "../views/GgHome.vue";
import GgArtist from "../views/GgArtist.vue";
import GgContact from "../views/GgContact.vue";
import GgDiary from "../views/GgDiary.vue";
import GgGallery from "../views/GgGallery.vue";
import GgMusic from "../views/GgMusic.vue";

export default [
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
        path: '/agenda',
        name: 'diary',
        component: GgDiary,
        meta: {title: 'Guillaume Goossens - Agenda'}
    },
    {
        path: '/galerie',
        name: 'gallery',
        component: GgGallery,
        meta: {title: 'Guillaume Goossens - Galerie'}
    },
    {
        path: '/musique',
        name: 'music',
        component: GgMusic,
        meta: {title: 'Guillaume Goossens - Musique'}
    }
]