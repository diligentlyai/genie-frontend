<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Tabs from './tabs.svelte';
	import Filepicker from '../../lib/components/custom/filepicker.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as emailjs from '@emailjs/browser';
	import { email_public_key, email_service, email_template } from '$lib/keys';
	let formElement: HTMLFormElement;
	const reservedNames = ['file', 'json'];
	let isSubmitting = false;
	const inputTagnames = ['input', 'textarea', 'select'];

	function handleSubmit(e: SubmitEvent) {
		if (!formElement) return;
		e.preventDefault();
		isSubmitting = true;
		const data: Record<string, string> = {};
		function pullValuesOutOfInputList(
			list: NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
		) {
			for (let i = 0; i < list.length; i++) {
				const input = list.item(i);
				if (reservedNames.includes(input.name) || input.name.startsWith('_')) continue;
				data[input.name] = input.value;
			}
		}
		inputTagnames.forEach((tag) => {
			pullValuesOutOfInputList(formElement.querySelectorAll(tag));
		});
		const relevantParams = new URLSearchParams();
		relevantParams.append('name', data['name']);
		relevantParams.append('numContacts', data['numContacts']);
		relevantParams.append('numAccounts', data['numAccounts']);
		relevantParams.append('email', data['email']);

		emailjs.init({
			publicKey: email_public_key
		});

		const templateParams = {
			name: data['name'],
			json_block: JSON.stringify(data),
			email: data['email']
		};

		emailjs.send(email_service, email_template, templateParams).then(
			(response) => {
				isSubmitting = false;
				console.log('SUCCESS!', response.status, response.text);
			},
			(error) => {
				console.log('FAILED...', error);
			}
		);
	}
</script>

<svelte:head><title>DiligentlyAI - Genie - Form</title></svelte:head>

<form bind:this={formElement} on:submit={handleSubmit} class="space-y-3">
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
	<!-- <section class="space-y-2">
		<h4>Provide starting account list</h4>
		<div class="flex align-baseline gap-5">
			<div class="mt-6 w-32">
				<Filepicker>Upload file</Filepicker>
			</div>
			<div>
				<Label for="companyNameColumn" id="companyNameColumn">Company Name Column</Label>
				<Input name="companyNameColumn" id="companyNameColumn" placeholder="companyName" />
			</div>
			<div>
				<Label for="websiteColumn" id="websiteColumn">Website Column</Label>
				<Input name="websiteColumn" id="websiteColumn" placeholder="website" />
			</div>
		</div>
	</section> -->
	<section class="block space-y-2">
		<Button class="block ml-auto min-w-64" type="submit" disabled={isSubmitting}>
			{#if isSubmitting}
				<span class="flex items-center justify-around">
					Redirecting to payment...
					<div class="w-6 h-6 border-green-700 border-l-2 animate-spin rounded-full" />
				</span>
			{:else}
				Find accounts and contacts
			{/if}
		</Button>
		<p>
			<span class="ml-auto block w-fit"
				>Because we get real time updated information, we take a few days to get results.</span
			>
		</p>
	</section>
</form>
