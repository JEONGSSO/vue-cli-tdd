import Home from '@/components/Home.vue';
import Picker from '@/components/Picker.vue';
import Slider from '@/components/Slider.vue';

import Todo from '@/components/Todo/Todo.vue';

import Trello from '../components/Trello/Home.vue';
import Board from '../components/Trello/Board.vue';

export default [
  { path: '/', component: Home, name: 'Home' },
  { path: '/picker', component: Picker, name: 'Color Picker' },
  { path: '/slider', component: Slider, name: 'Slider' },
  {
    path: '/todo',
    component: Todo,
    name: 'Todo',
  },
  {
    path: '/trello',
    component: Trello,
    name: 'Trello',
  },
  {
    path: '/trello/b/:bid',
    component: Board,
    name: 'Board',
    children: [
      {
        path: 'c/:cid',
        component: Board,
        name: 'Card',
      },
    ],
  },
];
