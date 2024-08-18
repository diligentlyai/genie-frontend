<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import * as Select from '$lib/components/ui/select';
	let accountRows = [1];
	let contactRows = [1];
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
			<Card.Content class="space-y-4">
				{#each accountRows as id}
					<div id={`account-${id}`} class="flex items-end gap-2">
						<div class="w-32">
							<Label for={`account-${id}-feature-name`}> Feature Name</Label>
							<Input id={`account-${id}-feature-name`} name={`account-${id}-feature-name`}/>
						</div>
						<div class="flex-grow">
							<Label for={`account-${id}-description`}> Description</Label>
							<Input id={`account-${id}-description`} name={`account-${id}-description`}/>
						</div>
						<div class="w-32">
							<Label for={`account-${id}-type`}>Type</Label>
							<Select.Root name={`account-${id}-type`}>
								<Select.Trigger class="w-full">
								<Select.Value />
								</Select.Trigger>
								<Select.Content>
								<Select.Item value="constraint">Constraint</Select.Item>
								<Select.Item value="keyword">Keyword</Select.Item>
								<Select.Item value="true-false">True/False</Select.Item>
								</Select.Content>
							</Select.Root>
						</div>
						
						<Button
							class="ml-auto"
							on:click={() => {
								accountRows = accountRows.filter((i) => i != id);
							}}>Remove</Button
						>
					</div>
				{/each}
				<Button
					class='min-w-40'
					on:click={() => {
						accountRows.push(Math.max(...accountRows, 0) + 1);
						accountRows = accountRows;
					}}>Add New Feature</Button
				>
				<div>
					<Label for="numAccounts" class="block"
					>How many accounts do you need?</Label
				>
				<Input type="number" id="numAccounts" name="numAccounts" />
				</div>
				<div>
					<Label for="accountQualificationProcess" class="block"
					>Describe your account qualification process</Label
				>
					<Textarea id="accountQualificationProcess" name="accountQualificationProcess" />
				</div>
				</Card.Content>
		</Tabs.Content>
		<Tabs.Content value="contacts">
			<Card.Header>
				<Card.Title>Define your ICP Contact</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				{#each contactRows as id}
					<div id={`contact-${id}`} class="flex items-end gap-2">
						<div class="w-32">
							<Label for={`contact-${id}-role-name`}> Role Name</Label>
							<Input id={`contact-${id}-role-name`}/>
						</div>
						<div class="flex-grow">
							<Label for={`contact-${id}-description`}> Description</Label>
							<Input id={`contact-${id}-description`}/>
						</div>
						<div class="w-32">
							<Label for={`contact-${id}-type`}>Type</Label>
							<Select.Root name={`contact-${id}-type`}>
								<Select.Trigger class="w-full">
								<Select.Value />
								</Select.Trigger>
								<Select.Content>
								<Select.Item value="buyer">Buyer</Select.Item>
								<Select.Item value="user">User</Select.Item>
								<Select.Item value="both">Both</Select.Item>
								</Select.Content>
							</Select.Root>
						</div>
						<Button
							class="ml-auto"
							on:click={() => {
								contactRows = contactRows.filter((i) => i != id);
							}}>Remove</Button
						>
					</div>
				{/each}
				<Button
					class='min-w-40'
					on:click={() => {
						contactRows.push(Math.max(...contactRows, 0) + 1);
						contactRows = contactRows;
					}}>Add New Role</Button
				>
				<div>
					<Label for="numContacts" class="block"
					>How many contacts do you need per account?</Label
					>
					<Input type="number" id="numContacts" name="numContacts" />
				</div>
				<div>
					<Label for="contactQualificationProcess" class="block"
					>Describe your contact qualification process</Label
					>
					<Textarea id="contactQualificationProcess" name="contactQualificationProcess" />
				</div>
			</Card.Content>
		</Tabs.Content>
	</Card.Root>
</Tabs.Root>
