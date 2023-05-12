## Global Registration

In your main.js file:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import TruncateReadMore from 'vue-truncate-read-more';

const app = createApp(App);
app.use(TruncateReadMore);
app.mount('#app');
```

## Local Registration

In your Vue component:

```javascript
import TruncateReadMore from 'vue-truncate-read-more';

export default {
  components: {
    TruncateReadMore
  },
};
```