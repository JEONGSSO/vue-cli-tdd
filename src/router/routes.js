import Home from '@/components/Home.vue';
import Picker from '@/components/Picker.vue';
import Slider from '@/components/Slider.vue';

import Todo from '@/components/Todo/Todo.vue';

import Trello from '../components/Trello/Home.vue';

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.token;
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  // eslint-disable-next-line no-unused-expressions
  isAuth ? next() : next(loginPath);
};

export default [
  { path: '/', component: Home, name: 'Home' },
  { path: '/picker', component: Picker, name: 'Color Picker' },
  { path: '/slider', component: Slider, name: 'Slider' },
  {
    path: '/todo',
    component: Todo,
    name: 'Todo',
    beforeEnter: requireAuth,
  },
  {
    path: '/trello',
    component: Trello,
    name: 'Trello',
    beforeEnter: requireAuth,
    children: [
      {
        path: 'b/:bid',
        component: Trello,
        name: 'Board',
        beforeEnter: requireAuth,
        children: [
          {
            path: 'c/:cid',
            component: Trello,
            name: 'Card',
            beforeEnter: requireAuth,
          },
        ],
      },
    ],
  },
];
