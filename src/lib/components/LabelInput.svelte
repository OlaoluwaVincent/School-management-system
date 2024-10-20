<script lang="ts">
	export let placeholder: string;
	export let type: string = 'text';
	export let name: string = '';
	export let classnames: string = '';

	export let showButton = false;
	$: showPassword = type === 'password';

	function toggle() {
		if (type === 'password' && showPassword) {
			type = 'text';
		} else if (type === 'text') {
			type = 'password';
		}
	}
</script>

<label for={name} class="input input-bordered flex items-center gap-2 {classnames}">
	<input {type} class="grow" {placeholder} id={name} />

	{#if showButton}
		<button class="inline badge badge-info badge-xs" on:click={toggle}>
			{showPassword ? 'Show' : 'Hide'}
		</button>
	{/if}
</label>
