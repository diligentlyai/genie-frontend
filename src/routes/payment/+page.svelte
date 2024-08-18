<script>
	import Button from '$lib/components/ui/button/button.svelte';
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
        const accountPriceid = 'prod_QfOLJTuKvDUfMS'
		const numAccounts = parseInt(params.get('numAccounts') ?? '0');
        // const contactPriceId = 'prod_QfONGooRUUhoEw'
		// const numContacts = parseInt(params.get('numContacts') ?? '0');
		if (Number.isNaN(numAccounts) || numAccounts == 0) throw new Error("No items in cart");
		const stripe = await loadStripe(
			'pk_live_51O2guJGvSx9gKzNOvCql221PDRPlq564tmqXcekOJjc6Vti8FpTrPnx6Ib4LNhlzSMFDovhhz3TJ3Yy5uefRHzir000QpRy0t8'
		);
		if (!stripe) throw new Error("Failed to load stripe");
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{
					price: accountPriceid,
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
