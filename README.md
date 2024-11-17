# svelte-number-format

Svelte Number Format is a custom input component for [Svelte 5](https://svelte.dev). It ensures that a user can only enter text that meets specific numeric or string patterns, and formats the input value for display.

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-number-format
```

## Props

| **Prop**            | **Type**                                   | **Description**                                                       |
| ------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| `value`             | `string \| number`                         | Initial value to display.                                             |
| `format`            | `string`                                   | Custom number format (e.g., `#,###.##`).                              |
| `mask`              | `string`                                   | Input mask (e.g., `"(###) ###-####"`).                                |
| `decimalSeparator`  | `string`                                   | Character for the decimal separator (default: `.`).                   |
| `thousandSeparator` | `string`                                   | Character for the thousand separator (default: `,`).                  |
| `onInput`           | `(formatted: string, raw: string) => void` | Callback function invoked with the formatted and raw values on input. |

## Example

```js
<script>
	import NumberFormat from 'svelte-number-format'

	let formattedValue = ''
	let rawValue = ''
</script>

<NumberFormat
	value={1234567.89}
	format="#,###.##"
	decimalSeparator="."
	thousandSeparator=","
	onInput={(formatted, raw) => {
		formattedValue = formatted
		rawValue = raw
	}}
/>

<p>Formatted: {formattedValue}</p>
<p>Raw: {rawValue}</p>

```

## License

MIT &copy; [Pitis Radu](https://github.com/pitis)
