import Vue from 'vue';
import Router from 'vue-router';

// import Login from '@/components/login.vue' 
import Dynamic from '@/components/view/dynamic.vue' 
import Index from '@/components/view/index.vue'
import Photo from '@/components/view/photo.vue'
import MessageBoard from '@/components/view/message_board.vue'
import Article from '@/components/view/article.vue'
import Releation from '@/components/view/releation.vue'
import MostReleation from  '@/components/view/most_releation.vue'

import Edit from '@/components/edit.vue' 

Vue.use(Router);

export default new Router({
	routes: [
    // {
    //   path: '/',
    //   redirect: '/login',
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    // },
    {
        path: '/index',
        name: 'Index',
        component: Index,
    },
    {
        path: '/dynamic',
        name: 'Dynamic',
        component: Dynamic,
	},
	{
        path: '/article',
        name: 'Article',
        component: Article,
	},
	{
        path: '/most_releation',
        name: 'MostReleation',
        component: MostReleation,
	},
	{
        path: '/releation',
        name: 'Releation',
        component: Releation,
	},
    {
        path: '/photo',
        name: 'Photo',
        component: Photo,
    },
    {
		path: '/messageBoard',
		name: 'MessageBoard',
		component: MessageBoard,
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit,
    }
  ],
})