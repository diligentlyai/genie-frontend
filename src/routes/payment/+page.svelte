<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { account_price_id, publishableKey } from '$lib/keys';
    import { loadStripe } from '@stripe/stripe-js';
	import { onMount } from 'svelte';

    let params = new URLSearchParams();
    $: name = params.get("name") ?? ""
    let failure = false;
    onMount(async () => {
        params = new URLSearchParams(window.location.search);
        try {
            await checkout()
        } catch (e) {
            failure = true;
            console.error("Something went wrong...", e)
        }
    })
    async function handleClick() {
        try {
            await checkout()
        } catch (e) {
            console.error("Something went wrong...", e)
        }
    }
	async function checkout() {
		const numAccounts = parseInt(params.get('numAccounts') ?? '0');
		// const numContacts = parseInt(params.get('numContacts') ?? '0');
		if (Number.isNaN(numAccounts) || numAccounts == 0) throw new Error("No items in cart");
        console.log({numAccounts, account_price_id})
		const stripe = await loadStripe(
			publishableKey
		);
		if (!stripe) throw new Error("Failed to load stripe");
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: account_price_id,
					quantity: numAccounts
				}
			],
			mode: 'payment',
			successUrl: `${window.location.origin}/success`,
			cancelUrl: `${window.location.href}&cancel=true`
		});
        if (error) throw new Error(`Checkout failed with error: ${error}`)
	}
</script>

<svelte:head><title>DiligentlyAI - Genie - Payment</title></svelte:head>
<div class="px-16">
    <h4>
        {#if name}
        We've recieved your submission, {name}!
        {:else}
        We've recieved your submission!
        {/if}
    </h4>
    <p>We're looking forward to working with you.</p>
    {#if failure}
        <Button on:click={handleClick}>Click here to continue to checkout with Stripe</Button>
    {/if}
</div>
