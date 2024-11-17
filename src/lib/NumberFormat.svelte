<script lang="ts">
	import { onMount } from 'svelte'

	export let value: number | string = '' // The bound value
	export let format: string = '' // Custom format, e.g., "#,###.##"
	export let mask: string = '' // Optional mask, e.g., "(###) ###-####"
	export let decimalSeparator: string = '.' // Decimal separator
	export let thousandSeparator: string = ',' // Thousand separator
	export let onInput: (formattedValue: string, rawValue: string) => void = () => {}

	let inputElement: HTMLInputElement

	// Format the input value based on the given format/mask
	const formatValue = (rawValue: string): string => {
		if (mask) {
			// Apply mask logic
			let masked = ''
			let maskIndex = 0
			for (let i = 0; i < rawValue.length && maskIndex < mask.length; i++) {
				if (mask[maskIndex] === '#') {
					masked += rawValue[i]
					maskIndex++
				} else {
					masked += mask[maskIndex]
					maskIndex++
					i-- // Retry this character with the next mask segment
				}
			}
			return masked
		}

		// Format number according to separators
		if (format) {
			const [integerPart, fractionalPart] = rawValue.split(decimalSeparator)
			const formattedInt = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator)
			return fractionalPart ? `${formattedInt}${decimalSeparator}${fractionalPart}` : formattedInt
		}

		return rawValue
	}

	const handleInput = (event: Event) => {
		const rawValue = (event.target as HTMLInputElement).value.replace(/[^0-9.]/g, '')
		const formattedValue = formatValue(rawValue)
		onInput(formattedValue, rawValue)
		inputElement.value = formattedValue
	}

	onMount(() => {
		inputElement.value = formatValue(value.toString())
	})
</script>

<input bind:this={inputElement} on:input={handleInput} />
