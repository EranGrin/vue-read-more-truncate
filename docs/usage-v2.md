# Usage v2

## Template

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