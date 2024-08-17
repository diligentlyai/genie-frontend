<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	let accountIds = [1];
	let contactIds = [1];
</script>

<Tabs.Root>
	<Tabs.List class="ml-auto w-[200px] grid grid-cols-2">
		<Tabs.Trigger value="accounts">Accounts</Tabs.Trigger>
		<Tabs.Trigger value="contacts">Contacts</Tabs.Trigger>
	</Tabs.List>
	<Card.Root>
		<Tabs.Content value="accounts">
			<Card.Header>
				<Card.Title>Define your ICP Account</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-2">
				{#each accountIds as id}
					<div id={`account-${id}`}>
						{id}<Button
							class="ml-6"
							on:click={() => {
								accountIds = accountIds.filter((i) => i != id);
							}}>Remove</Button
						>
					</div>
				{/each}
				<Button
					on:click={() => {
						accountIds.push(Math.max(...accountIds, 0) + 1);
						accountIds = accountIds;
					}}>New</Button
				>
				<Label for="numAccounts" class="block"
					>How many accounts do you need?</Label
				>
				<Input type="number" id="numAccounts" name="numAccounts" />
				<Label for="accountQualificationProcess" class="block"
					>Describe your account qualification process</Label
				>
				<Textarea id="accountQualificationProcess" name="accountQualificationProcess" />
			</Card.Content>
		</Tabs.Content>
		<Tabs.Content value="contacts">
			<Card.Header>
				<Card.Title>Define your ICP Contact</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-2">
				{#each contactIds as id}
					<div id={`contact-${id}`}>
						{id}<Button
							class="ml-6"
							on:click={() => {
								contactIds = contactIds.filter((i) => i != id);
							}}>Remove</Button
						>
					</div>
				{/each}
				<Button
					on:click={() => {
						contactIds.push(Math.max(...contactIds, 0) + 1);
						contactIds = contactIds;
					}}>New</Button
				>
				<Label for="numContacts" class="block"
					>How many contacts do you need per account?</Label
				>
				<Input type="number" id="numContacts" name="numContacts" />
				<Label for="contactQualificationProcess" class="block"
					>Describe your contact qualification process</Label
				>
				<Textarea id="contactQualificationProcess" name="contactQualificationProcess" />
			</Card.Content>
		</Tabs.Content>
	</Card.Root>
</Tabs.Root>
