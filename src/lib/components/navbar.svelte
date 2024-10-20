<script lang="ts">
	import MenuIcon from 'carbon-icons-svelte/lib/Menu.svelte';
	import ShoppingCartIcon from 'carbon-icons-svelte/lib/ShoppingCart.svelte';

	// function handleLogout() {
	// 	pb.authStore.clear();
	// }
</script>

<nav class="navbar drop-shadow-md">
	<label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">
		<MenuIcon size={32} />
	</label>

	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Class</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 items-center">
			<li>
				<a href="/documentation" class="link hidden md:block" rel="noopener noreferrer">
					Documentation
				</a>
			</li>
		</ul>
	</div>
</nav>
