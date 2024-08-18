<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Myselect from '$lib/components/custom/myselect.svelte';
	import { numAccounts, numContacts } from './store';
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
			<Card.Content class="space-y-6">
				<div class="space-y-2">
					{#each accountRows as id}
						<div id={`account-${id}`} class="flex items-end gap-2">
							<div class="w-32 lg:w-64">
								<Label for={`account-${id}-feature-name`}>Feature Name</Label>
								<Input
									id={`account-${id}-feature-name`}
									name={`account-${id}-feature-name`}
									required={id == accountRows[0]}
								/>
							</div>
							<div class="flex-grow">
								<Label for={`account-${id}-description`}>Description</Label>
								<Input
									id={`account-${id}-description`}
									name={`account-${id}-description`}
									required={id == accountRows[0]}
								/>
							</div>
							<div class="w-32">
								<Label for={`account-${id}-type`}>Type</Label>
								<Myselect
									id={`account-${id}-type`}
									options={[
										{ value: 'constraint', text: 'Constraint' },
										{ value: 'keyword', text: 'Keyword' },
										{ value: 'true-false', text: 'True/False' }
									]}
								/>
							</div>
							<Button
								class="ml-auto"
								variant="destructive"
								on:click={() => {
									accountRows = accountRows.filter((i) => i != id);
								}}>Remove</Button
							>
						</div>
					{/each}
					<Button
						class="min-w-40"
						on:click={() => {
							accountRows.push(Math.max(...accountRows, 0) + 1);
							accountRows = accountRows;
						}}>Add New Feature</Button
					>
				</div>
				<div>
					<Label for="numAccounts">How many accounts do you need?</Label>
					<Input
						type="number"
						id="numAccounts"
						name="numAccounts"
						required
						min="1"
						bind:value={$numAccounts}
					/>
				</div>
				<div>
					<Label for="accountQualificationProcess">
						Describe your account qualification process
					</Label>
					<Textarea id="accountQualificationProcess" name="accountQualificationProcess" />
				</div>
				<div>
					<Label for="accountCommonDataSources">
						List your commonly used data sources (Ex: company's website, LinkedIn, etc.)
					</Label>
					<Textarea id="accountCommonDataSources" name="accountCommonDataSources" />
				</div>
			</Card.Content>
		</Tabs.Content>
		<Tabs.Content value="contacts">
			<Card.Header>
				<Card.Title>Define your ICP Contact</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-6">
				<div class="space-y-2">
					{#each contactRows as id}
						<div id={`contact-${id}`} class="flex items-end gap-2">
							<div class="w-32 lg:w-64">
								<Label for={`contact-${id}-role-name`}>Role Name</Label>
								<Input id={`contact-${id}-role-name`} name={`contact-${id}-role-name`} />
							</div>
							<div class="flex-grow">
								<Label for={`contact-${id}-description`}>Description</Label>
								<Input id={`contact-${id}-description`} name={`contact-${id}-description`} />
							</div>
							<div class="w-32">
								<Label for={`contact-${id}-type`}>Type</Label>
								<Myselect
									id={`contact-${id}-type`}
									options={[
										{ value: 'buyer', text: 'Buyer' },
										{ value: 'user', text: 'User' },
										{ value: 'both', text: 'Both' }
									]}
								/>
							</div>
							<Button
								class="ml-auto"
								variant="destructive"
								on:click={() => {
									contactRows = contactRows.filter((i) => i != id);
								}}>Remove</Button
							>
						</div>
					{/each}
					<Button
						class="min-w-40"
						on:click={() => {
							contactRows.push(Math.max(...contactRows, 0) + 1);
							contactRows = contactRows;
						}}>Add New Role</Button
					>
				</div>
				<div>
					<Label for="numContacts">How many contacts do you need per account?</Label>
					<Input
						type="number"
						id="numContacts"
						name="numContacts"
						min="1"
						bind:value={$numContacts}
					/>
				</div>
				<div>
					<Label for="contactQualificationProcess">
						Describe your contact qualification process
					</Label>
					<Textarea id="contactQualificationProcess" name="contactQualificationProcess" />
				</div>
			</Card.Content>
		</Tabs.Content>
	</Card.Root>
</Tabs.Root>
