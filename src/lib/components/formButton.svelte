<script lang="ts">
	export let classnames: string = '';
	export let loading = false;
	export let text = 'Submit';
</script>

<button class="btn btn-sm btn-primary btn-block text-primary-content {classnames}">
	{#if loading}
		<span class="loading loading-spinner"></span>
	{/if}
	{text}
</button>
