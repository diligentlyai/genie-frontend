<script lang='ts'>
	import { cn } from "$lib/utils";

    export let options: { value: string, text: string }[]
    export let id: string
    export let className: string = ''
    let select: HTMLSelectElement;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
on:click={() => select.click()}
class={cn(
    'relative h-10 w-full',
    'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
)}>
<img src="/down-arrow.svg" class="absolute right-3 top-3 w-3 h-3" alt='downarrow'/>
   <select {id} name={id} bind:this={select} 
   class='absolute w-full max-w-full overflow-hidden h-full top-0 left-0 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
>
    {#each options as { value, text }}
    <option {value}>
        {text}
    </option>
    {/each}
</select>
</div>

<style>
    select {
        background: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        appearance: none;
}
</style>