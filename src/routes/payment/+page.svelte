<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { account_price_id, publishableKey } from '$lib/keys';
	import { loadStripe } from '@stripe/stripe-js';
	import { onMount } from 'svelte';
	let failure = false;
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
		// const numContacts = parseInt(params.get('numContacts') ?? '0');
		if (Number.isNaN(numAccounts) || numAccounts == 0) throw new Error('No items in cart');
		console.log({ numAccounts, account_price_id });
		const stripe = await loadStripe(publishableKey);
		if (!stripe) throw new Error('Failed to load stripe');
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: account_price_id,
					quantity: numAccounts
				}
			],
			mode: 'payment',
			successUrl: `${window.location.origin}/success?name=${params.get('name')}`,
			cancelUrl: `${window.location.origin}/close`
		});
		if (error) throw new Error(`Checkout failed with error: ${error}`);
	}
</script>

<svelte:head><title>DiligentlyAI - Genie - Payment</title></svelte:head>
<div class="px-16">
	<h4 class="text-2xl mt-10">
		<div class="mx-auto flex gap-8 items-center justify-center">
			Redirecting to Stripe
			<div class="w-8 h-8 border-l-2 border-green-700 rounded-full animate-spin"></div>
		</div>
	</h4>
	{#if failure}
		<p>Something go wrong?</p>
		<Button on:click={() => checkout()}>Try again</Button>
	{/if}
</div>
