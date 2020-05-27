import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('vue Test', () => {
  it('renders props.msg when passed', () => {
    const app = shallowMount(App);
    const btn = app.find('.addBtn');
    expect(btn.text('추가')).toBe('추가');
  });
});
