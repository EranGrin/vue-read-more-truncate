# Usage as a Wrapper

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