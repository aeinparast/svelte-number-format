# svelte-number-format

Number input component with prefixes and masks for [Svelte 3](https://svelte.dev).

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-number-format
```

## Props

- `value` - the value of the input
- `placeholder` - the placeholder of the input (optional)
- `displayType` - can be `text` or `input` (by default: `input`)
- `prefix` - set characters before the input (optional)
- `mask` - the mask of the input, (example: "+{7}(000)000-00-00") (optional)

## Example

```html
<script lang="ts">
  import NumberFormat from 'svelte-number-format'
  let inputValue = ''

  $: console.log(inputValue)
</script>

<NumberFormat
  mask="+{7}(000)000-00-00"
  bind:value="{inputValue}"
  displayType="input"
/>
```

## License

MIT &copy; [Pitis Radu](https://github.com/pitis)
