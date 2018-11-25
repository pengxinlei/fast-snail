import Vue from 'vue';
import SLoading from '../packages/loading/main';

const Constructor = Vue.extend(SLoading);

const loadingCom = new Constructor();
loadingCom.vm = loadingCom.$mount();
const loadingEl = loadingCom.vm.$el;

export default {
  bind (el, { value }) {
    if (value) {
      el.appendChild(loadingEl);
    }
  },
  componentUpdated (el, { value }) {
    if (value) {
      el.appendChild(loadingEl);
    } else {
      el.removeChild(loadingEl);
    }
  },
  unbind (el) {
    el.removeChild(loadingEl);
  }
};