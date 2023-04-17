// import TruncateReadMore from './src/TruncateReadMore.vue';

// const plugin = {
//   install: (app) => {
//     app.component('TruncateReadMore', TruncateReadMore)
//   },
// }

// export default plugin



import TruncateReadMore from './src/TruncateReadMore.vue';

const install = (app, options) => {
  if (app.version.startsWith('2.')) {
    // Vue 2 installation
    const Vue = app;
    const componentConfig = {
      ...TruncateReadMore,
      install: undefined,
    };

    Vue.component('TruncateReadMore', componentConfig);
  } else if (app.version.startsWith('3.')) {
    // Vue 3 installation
    app.component('TruncateReadMore', TruncateReadMore);
  } else {
    console.error('This plugin is only compatible with Vue 2.x and Vue 3.x.');
  }
};

export default {
  install,
};

export { TruncateReadMore };