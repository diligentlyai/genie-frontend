<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { account_price_id, contact_price_id, publishableKey } from '$lib/keys';
	import type { RedirectToCheckoutClientOptions } from '@stripe/stripe-js';
	import { loadStripe } from '@stripe/stripe-js';
	import { fail } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	let failure = false;
	let failedBecauseContacts = false;
	onMount(() =>
		setTimeout(async () => {
			try {
				await checkout();
			} catch (e) {
				console.error('Something went wrong...', e);
				failure = true;
			}
		}, 300)
	);
	async function checkout() {
		const params = new URLSearchParams(window.location.search);
		const numAccounts = parseInt(params.get('numAccounts') ?? '0');
		if (Number.isNaN(numAccounts) || numAccounts == 0) throw new Error('No items in cart');
		const lineItems: RedirectToCheckoutClientOptions['lineItems'] = [
			{
				price: account_price_id,
				quantity: numAccounts
			}
		];
		if (params.get('includeContacts')) {
			const numContacts = parseInt(params.get('numContacts') ?? '0');
			if (Number.isNaN(numContacts) || numContacts == 0) {
				failedBecauseContacts = true;
				throw new Error("Requested to include contacts but didn't specify how many");
			}
			lineItems.push({
				price: contact_price_id,
				quantity: numContacts * numAccounts
			});
		}
		const stripe = await loadStripe(publishableKey);
		if (!stripe) throw new Error('Failed to load stripe');
		const { error } = await stripe.redirectToCheckout({
			lineItems,
			mode: 'payment',
			successUrl: `${window.location.origin}/success?name=${params.get('name')}`,
			cancelUrl: `${window.location.origin}/close`
		});
		if (error) throw new Error(`Checkout failed with error: ${error}`);
	}
</script>

<svelte:head><title>DiligentlyAI - Genie - Payment</title></svelte:head>
<div class="px-16">
	{#if !failure}
		<h4 class="text-2xl mt-10">
			<div class="mx-auto flex gap-8 items-center justify-center">
				Redirecting to Stripe
				<div class="w-8 h-8 border-l-2 border-green-700 rounded-full animate-spin"></div>
			</div>
		</h4>
	{:else}
		<h4 class="text-2xl mt-6">
			<div class=" text-red-500">Error</div>
		</h4>
		{#if failedBecauseContacts}
			<p>Switch to the contacts tab and fill out the requested number of contacts</p>
		{:else}
			<p>Something go wrong?</p>
			<Button on:click={() => checkout()}>Try again</Button>
		{/if}
	{/if}
</div>
