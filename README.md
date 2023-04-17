# Vue Truncate Readmore

A Vue.js plugin to truncate and expand text content with a customizable read more/less button.

## Features

- Truncate text content to a specified number of characters
- Display a customizable read more/less button to support multilanguages 
- Activate the plugin based on a minimum character count to prevent truncating short text content
- Smooth auto scrolling to the content when collapsed and outside of the viewport
- Supports Vue 2.x and Vue 3.x JS/TS

## Installation

```bash
npm install vue-truncate-readmore
```

or

```bash
yarn add vue-truncate-readmore
```

## Usage

### Global Registration

In your main.js file:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import TruncateReadmore from 'vue-truncate-readmore';

const app = createApp(App);
app.use(TruncateReadmore);
app.mount('#app');
```

### Local Registration

In your Vue component:

```javascript
import TruncateReadmore from 'vue-truncate-readmore';

export default {
  components: {
    TruncateReadmore
  },
};
```

### Template

In your Vue component's template:

```html
<truncate-read-more
  :truncate-value="200"
  :only-if-more-than-value="275"
>
  <template #html>
    <div
      v-html="data.html"
    />
  </template>
</truncate-read-more>
```

or in Vue 3.x you can use pascal case:

```html
<TruncateReadMore
  :truncate-value="200"
  :only-if-more-than-value="275"
>
    <template #html>
        <div
        v-html="data.html"
        />
    </template>
</TruncateReadMore>
```

### As a Wrapper

You can also use the plugin as a wrapper around your content:

```html
<truncate-read-more
  :truncate-value="200"
  :only-if-more-than-value="275"
>
    <template #html>
        <div>
        <!-- Your long text content -->
        </div>
    </template>
</truncate-read-more>
```

## Demo link
[Stack Blitz Demo](https://vue-e4fd7y.stackblitz.io)



## Props

| Prop                  | Type    | Default | Description                                                                                      |
|-----------------------|---------|---------|--------------------------------------------------------------------------------------------------|
| truncateValue         | Number  | null    | The number of characters to truncate the text to.                                                |
| onlyIfMoreThanValue   | Number  | null    | Activate the truncate feature only if the text character count is greater than this value.      |
| readMoreButtonText    | String  | 'Read more' | The text displayed on the read more button.                                                    |
| readLessButtonText    | String  | 'Read less' | The text displayed on the read less button.                                                    |

## License

MIT