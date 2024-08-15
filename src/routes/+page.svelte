<script>
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Tabs from './tabs.svelte';
	import Filepicker from './filepicker.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<form class="p-5 mx-auto max-w-screen-md space-y-3">
	<section class=" pl-16 p-5 relative space-y-4">
		<h1 class="text-4xl font-bold">Diligently AI</h1>
		<h3>Lead generation focused on increasing quality over quantity.</h3>
		<div class="absolute top-2 left-4 w-8 aspect-square bg-secondary"></div>
	</section>
	<section class="space-y-2">
		<h4 class="text-2xl font-medium">Contact Details</h4>
		<div class="flex flex-row gap-5">
			<div class="w-[40%]">
				<Label for="name">Name</Label>
				<Input id="name" name="name" />
			</div>
			<div class="w-[60%]">
				<Label for="email">Email</Label>
				<Input id="email" name="email" />
			</div>
		</div>
	</section>
	<section>
		<Tabs />
	</section>
	<section class="space-y-2">
		<h4>Provide starting account list</h4>
		<Filepicker />
	</section>
	<section class="block space-y-2">
		<Button class="block ml-auto">Find accounts and contacts</Button>
		<Button class="block ml-auto">Find accounts</Button>
		<p>
			<span class="ml-auto block w-fit"
				>Because we get real time updated information, we take a few days to get results.</span
			>
			<span class="ml-auto block w-fit"
				>If you need more than 50 matching accounts just email ben@diligently.ai to get billing set
				up.</span
			>
		</p>
	</section>
</form>
