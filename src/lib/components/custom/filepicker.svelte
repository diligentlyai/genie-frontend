<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	let rawFileName: string;
	let fileInput: HTMLInputElement

	$: fileExists = !!rawFileName
	$: cleanedFileName = fileExists && rawFileName.slice(rawFileName.lastIndexOf('\\') + 1)

</script>

<input
	type="file"
	multiple={false}
	bind:this={fileInput}
	bind:value={rawFileName}
	style="display: none;"
/>

<div class="block min-h-16">
	<Button on:click={() => fileInput.click()}><slot /></Button>
	{#if fileExists}
		<div>{cleanedFileName}</div>
	{/if}
</div>