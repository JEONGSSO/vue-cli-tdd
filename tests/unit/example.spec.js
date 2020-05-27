import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

let app;
let data;
describe('vue Test', () => {
  beforeEach(() => { // it 테스트 전에 정의할 값들을 만들때 좋다. DRY로 중복되는 코드를 한번에 쓰자.
    app = shallowMount(App);
    data = app.vm.$data;
  });

  it('addBtn Click todoList add Test', () => {
    const input = app.find('.inputTxt');
    const addbtn = app.find('.addBtn');
    input.setValue('gg');
    addbtn.trigger('click');
    expect(data.todoList).toEqual(['gg']);
  });

  it('removeBtn Click todoList remove Test', () => {
    const btn = app.find('.removeBtn');
    btn.trigger('click');
    expect(data.todoList).toEqual([]);
  });
});
