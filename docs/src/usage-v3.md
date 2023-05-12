# Usage v3
## Template
in Vue 3.x you can use pascal case:
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
