<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	let rawFileName: string;
	let fileInput: HTMLInputElement;

	$: fileExists = !!rawFileName;
	$: cleanedFileName = fileExists && rawFileName.slice(rawFileName.lastIndexOf('\\') + 1);
</script>

<input
	type="file"
	multiple={false}
	id="file"
	name="file"
	bind:this={fileInput}
	bind:value={rawFileName}
	style="display: none;"
/>

<div class="block min-h-20">
	<Button on:click={() => fileInput.click()}><slot /></Button>
	{#if fileExists}
		<div class="mt-2 overflow-ellipsis line-clamp-1 break-before-avoid">{cleanedFileName}</div>
	{/if}
</div>
