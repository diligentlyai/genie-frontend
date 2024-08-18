<script lang="ts">
	import { onMount } from 'svelte';

	let name: string;
	onMount(() => {
		name = new URLSearchParams(window.location.search).get('name') ?? '';
	});
</script>

<svelte:head><title>DiligentlyAI - Genie - Payment</title></svelte:head>
<div class="px-16">
	<h4 class="min-h-16 text-xl">
		{#if name}
			We've recieved your submission & payment, {name}!
		{/if}
	</h4>
	<p>We're looking forward to working with you.</p>
	<p class="mt-4">
		The tab containing your information is likely still open. Feel free to close it.
	</p>
</div>
