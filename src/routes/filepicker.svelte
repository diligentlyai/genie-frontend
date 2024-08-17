<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	let fileInput: HTMLInputElement;
	let file: string;

	function triggerFileInput() {
		fileInput.click();
		console.log(file);
	}
</script>

<input
	type="file"
	multiple={false}
	on:change={(x) => {
		console.log(x);
		file = x.target?.value;
	}}
	bind:this={fileInput}
	style="display: none;"
/>

<Button on:click={triggerFileInput}>Upload File</Button>

{#if file}
	<div>{file.slice(file.lastIndexOf('\\') + 1)}</div>
{/if}
