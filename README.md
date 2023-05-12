# Vue Truncate Readmore

A Vue.js plugin to truncate and expand text content with a customizable read more/less button.

## Features

- Truncate text content to a specified number of characters
- Display a customizable read more/less button to support multilanguages 
- Activate the plugin based on a minimum character count to prevent truncating short text content
- Smooth auto scrolling to the content when collapsed and outside of the viewport
- Supports Vue 2.x and Vue 3.x JS/TS

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Global Registration](#global-registration)
  - [Local Registration](#local-registration)
- [Contributing](#contributing)
- [License](#license)


## Installation

```bash
npm install vue-truncate-read-more
```

or

```bash
yarn add vue-truncate-read-more
```

## Usage

### Global Registration

In your main.js file:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import TruncateReadMore from 'vue-truncate-read-more';

const app = createApp(App);
app.use(TruncateReadMore);
app.mount('#app');
```

### Local Registration

In your Vue component:

```javascript
import TruncateReadMore from 'vue-truncate-read-more';

export default {
  components: {
    TruncateReadMore
  },
};
```

### Template

Assuming data is coming from the server as HTML with markups

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

You can also use the plugin as a wrapper around your content or any compoenent that render text:

```html
<truncate-read-more
  :truncate-value="200"
  :only-if-more-than-value="275"
>
    <template #html>
        <div>
        <!-- Your long content -->
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

## Contributing
Contributions are welcome! To contribute to the project, please follow these steps:

Fork the repository
Create a new branch for your feature or bug fix
Make your changes and commit them with a clear message
Push your changes to your fork
Submit a pull request to the main repository
Please make sure to follow the code style and conventions used in the project.

If you find a bug or have a feature request, please open an issue on the repository.

## License
This project is licensed under the MIT License