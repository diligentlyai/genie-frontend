<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Tabs from './tabs.svelte';
	import Filepicker from '../../lib/components/custom/filepicker.svelte';
	import { Button } from '$lib/components/ui/button';
	let formElement: HTMLFormElement
	let hiddenJsonInputValue: string;

	function handleSubmit() {
		if (!formElement) return
		const data: Record<string, string | Blob> = {}
		const inputs = formElement.querySelectorAll('input')
		for (let i = 0; i < inputs.length; i++) {
			const input = inputs.item(i)
			if (input.name == "json") continue
			if (input.type == "file" && !!input.files?.[0]) {
				// data[input.name] = input.files[0]
			} else {
				data[input.name] = input.value
			}
		}
		const textareas = formElement.querySelectorAll('textarea')
		for (let i = 0; i < textareas.length; i++) {
			const textarea = textareas.item(i)
			data[textarea.name] = textarea.value
		}
		const selects = formElement.querySelectorAll('select')
		for (let i = 0; i < selects.length; i++) {
			const select = selects.item(i)
			data[select.name] = select.value
		}
		hiddenJsonInputValue = JSON.stringify(data)
	}
</script>

<svelte:head><title>DiligentlyAI - Genie</title></svelte:head>

<div class="p-5 mx-auto max-w-screen-md space-y-3">
<section class=" pl-16 p-5 relative space-y-4">
	<h1 class="text-4xl font-bold">Diligently AI</h1>
	<h3>Lead generation focused on increasing quality over quantity.</h3>
	<img src="/favicon.png" class="absolute top-1 left-4 w-10 aspect-square" alt="logo" />
</section>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<form
bind:this={formElement}
on:submit={handleSubmit}
	enctype="multipart/form-data" method="post" action="https://formsubmit.co/95bf24aaf0e026f44afd2d96613be9c0"
>
	<input name="json" id="json" bind:value={hiddenJsonInputValue} class="hidden" />	
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
		<div class="flex align-baseline gap-5">
			<div class="mt-6 w-32">
				<Filepicker>Upload file</Filepicker>
			</div>
			<div>
				<Label for="companyNameColumn" id="companyNameColumn">Company Name Column</Label>
				<Input name="companyNameColumn" id="companyNameColumn" placeholder="companyName"/>
			</div>
			<div>
				<Label for="websiteColumn" id="websiteColumn">Website Column</Label>
				<Input name="websiteColumn" id="websiteColumn" placeholder="website"/>
			</div>
		</div>
	</section>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<section class="block space-y-2" on:mouseenter={handleSubmit}>
		<Button class="block ml-auto" type="submit">Find accounts and contacts</Button>
		<p>
			<span class="ml-auto block w-fit"
				>Because we get real time updated information, we take a few days to get results.</span
			>
		</p>
	</section>
</form>
</div>