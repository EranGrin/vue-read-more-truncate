import TruncateReadMore from './src/TruncateReadMore.vue';

import { isVue2, isVue3 } from 'vue-demi'
const installVue2 = (Vue) => {
  Vue.component('truncate-read-more', TruncateReadMore);
};

const installVue3 = (app) => {
  app.component('truncate-read-more', TruncateReadMore);
};

const VueTruncateReadMore = {
  install: (instance) => {
    if (isVue3) {
      installVue3(instance);
    } else if (isVue2) {
      installVue2(instance);
    }
  },
};

// Export the component and the plugin object
export { TruncateReadMore, VueTruncateReadMore };