import TruncateReadmore from './src/TruncateReadmore.vue';

const installVue2 = (Vue) => {
  Vue.component('truncate-readmore', TruncateReadmore);
};

const installVue3 = (app) => {
  app.component('truncate-readmore', TruncateReadmore);
};

const VueTruncateReadmore = {
  install: (instance) => {
    const isVue3 = instance.version && instance.version.startsWith('3');
    if (isVue3) {
      installVue3(instance);
    } else {
      installVue2(instance);
    }
  },
};

// Export the component and the plugin object
export { TruncateReadmore, VueTruncateReadmore };