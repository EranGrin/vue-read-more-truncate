import TruncateReadMore from './src/TruncateReadMore.vue';

const installVue2 = (Vue) => {
  Vue.component('truncate-read-more', TruncateReadMore);
};

const installVue3 = (app) => {
  app.component('truncate-read-more', TruncateReadMore);
};

const VueTruncateReadMore = {
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
export { TruncateReadMore, VueTruncateReadMore };