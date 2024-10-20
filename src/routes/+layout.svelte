<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import Sidebar from '$lib/components/sidebar.svelte';
	import userTheme from '$lib/stores/theme-store';

	let isReady = false;
	onMount(() => {
		if (typeof document !== 'undefined') {
			document.body.setAttribute('data-theme', $userTheme);
		}
		isReady = true;
	});

	$: if (typeof document !== 'undefined') {
		document.body.setAttribute('data-theme', $userTheme);
	}
</script>

<div>
	{#if isReady}
		<section class="drawer lg:drawer-open min-h-screen">
			<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
			<section class="drawer-content">
				<Navbar />
				<div class="px-4 md:px-10 lg:px-5 py-4">
					<slot></slot>
				</div>
			</section>

			<Sidebar />
		</section>
	{/if}

	{#if !isReady}
		<section class="h-screen w-full bg-gray-900 flex items-center justify-center">
			<span class="loading loading-ring loading-lg"></span>
		</section>
	{/if}
</div>
