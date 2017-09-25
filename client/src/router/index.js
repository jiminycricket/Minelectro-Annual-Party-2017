import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/page/Home';
import Vote from '@/components/page/Vote';
import Success from '@/components/page/Success';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/vote',
      name: 'Vote',
      component: Vote,
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
    },
  ],
});
