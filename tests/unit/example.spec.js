import VueRouter from 'vue-router';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import App from '../../src/App.vue';
import routes from '../../src/router/routes';
import store from '../../src/store/index';

const localVue = createLocalVue();
const router = new VueRouter({ routes });
localVue.use(Vuex);
localVue.use(VueRouter);

let app;
let data;
// eslint-disable-next-line no-unused-vars
let totalCount;

const mockcallback = jest.fn((f) => f + 2);
describe('뷰 테스트', () => {
  // beforeEach(() => { // it 테스트 전에 정의할 값들을 만들때 좋다. DRY로 중복되는 코드를 한번에 쓰자.
  // });
  it('얕은 마운트 data 접근 테스트', () => {
    const wrapper = shallowMount(App, {
      localVue,
      router,
      store,
    });
    expect(wrapper.vm.$data.test).toBe('good');
  });

  it.skip('마운트 라우팅 push 테스트', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
    });
    router.push('/slider');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.title').text()).toBe('Slider');
  });

  // it('addBtn Click todoList item add Test', () => {
  //   const input = app.find('.inputTxt');
  //   const addbtn = app.find('.addBtn');
  //   input.setValue('gg');
  //   addbtn.trigger('click');
  //   expect(data.todoList).toEqual([{ text: 'good' }, { text: 'gg' }]);
  // });

  // it('removeBtn Click todoList item remove Test', () => {
  //   const btn = app.find('.removeBtn');
  //   btn.trigger('click');
  //   expect(data.todoList).toEqual([]);
  // });

  it.skip('target item Quantity increse', () => {
    const btn = app.find('.increse');
    btn.trigger('click');
    expect(data.todoList[0].quantity).toBe(4);
  });

  it.skip('target item Quantity decrese', () => {
    const btn = app.find('.decrese');
    btn.trigger('click');
    expect(data.todoList[0].quantity).toBe(2);
  });

  it.skip('mockTest', () => {
    [1].forEach(mockcallback);
    expect(mockcallback.mock.results[0].value).toBe(3);
  });
});
