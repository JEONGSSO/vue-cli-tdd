import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

let app;
let data;
let totalCount;
const mockcallback = jest.fn((f) => f + 2);
describe('Test', () => {
  beforeEach(() => { // it 테스트 전에 정의할 값들을 만들때 좋다. DRY로 중복되는 코드를 한번에 쓰자.
    app = shallowMount(App);
    data = app.vm.$data;
    totalCount = app.find('.totalCount');
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

  it('target item Quantity increse', () => {
    const btn = app.find('.increse');
    btn.trigger('click');
    expect(data.todoList[0].quantity).toBe(4);
  });

  it('target item Quantity decrese', () => {
    const btn = app.find('.decrese');
    btn.trigger('click');
    expect(data.todoList[0].quantity).toBe(2);
  });

  it('mockTest', () => {
    [1].forEach(mockcallback);
    expect(mockcallback.mock.results[0].value).toBe(3);
  });
});
