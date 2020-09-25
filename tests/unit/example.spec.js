import { shallowMount } from '@vue/test-utils';
import c4it from '@c4it/ui';
import App from '@/App.vue';
import Vue from 'vue';
// import '@c4it/ui/dist/index.css';
// import '@/icons';

Vue.use(c4it.Button);
Vue.use(c4it.SvgIcon);

describe('App.vue', () => {
  it('test App.vue background color', () => {
    // const msg = 'new message';
    const wrapper = shallowMount(App);
    console.log(wrapper.html());
    // expect(wrapper.text()).toMatch();
  });
});
