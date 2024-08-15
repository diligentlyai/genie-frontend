<script>
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
</script>

<form class="p-5 mx-auto max-w-screen-md">
	<section class=" pl-16 p-5 relative">
        <div class="absolute top-6 left-4 w-8 aspect-square bg-secondary"></div>
		<h1 class="text-4xl font-bold">Diligently AI</h1>
		<h3 class="mt-4">Lead generation focused on increasing quality over quantity.</h3>
	</section>
	<section>
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
</form>
