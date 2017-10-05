import Vue from 'vue';
import Router from 'vue-router';
import SectionAll from '@vc/Section/All.vue';
import SectionFolders from '@vc/Section/Folders.vue';
import SectionTags from '@vc/Section/Tags.vue';
import SectionRecent from '@vc/Section/Recent.vue';
import SectionFavourites from '@vc/Section/Favourites.vue';
import SectionShared from '@vc/Section/Shared.vue';
import SectionSecurity from '@vc/Section/Security.vue';
import SectionTrash from '@vc/Section/Trash.vue';

Vue.use(Router);

export default new Router(
    {
        routes: [
            {name:"All", path: '*', components: {main: SectionAll}},
            {name:"Folders", path: '/show/folders/:folder?', components: {main: SectionFolders}},
            {name:"Tags", path: '/show/tags/:tag?', components: {main: SectionTags}},
            {name:"Recent", path: '/show/recent', components: {main: SectionRecent}},
            {name:"Favourites", path: '/show/favourites', components: {main: SectionFavourites}},
            {name:"Shared", path: '/show/shared', components: {main: SectionShared}},
            {name:"Security", path: '/show/security/:status?', components: {main: SectionSecurity}},
            {name:"Trash", path: '/show/trash', components: {main: SectionTrash}}
        ]
    }
);