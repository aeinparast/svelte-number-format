<script>
  import NumberFormat from '../lib/NumberFormat.svelte'

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
