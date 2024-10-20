<script>
	import AddUser from '$lib/components/addUser.svelte';
	import UserSimulation from 'carbon-icons-svelte/lib/UserSimulation.svelte';
</script>

<section class="grid grid-cols-3 lg:grid-cols-10 lg:grid-rows-3 gap-2 gap-y-6 md:gap-6 lg:gap-5">
	<div
		class="card bg-accent text-accent-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-1 row-span-1"
	>
		<div class="card-body">
			<h2 class="card-title flex items-start justify-between">
				<b class="card-title text-sm lg:text-base xl:text-xl">Teachers</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No of Teachers</p>
		</div>
	</div>
	<div
		class="card bg-secondary text-secondary-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-3 row-span-1"
	>
		<div class="card-body">
			<h2 class="card-title flex items-start justify-between">
				<b class="card-title text-sm lg:text-base xl:text-xl">Students</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No. of Students</p>
		</div>
	</div>
	<div
		class="card bg-warning text-warning-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-5 row-span-1"
	>
		<div class="card-body">
			<h2 class="card-title flex items-start justify-between">
				<b class="card-title text-sm lg:text-base xl:text-xl">Users</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No. of Unregistered users</p>
		</div>
	</div>

	<!-- Classes -->
	<div
		class="card bg-info text-info-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-1 row-span-1"
	>
		<div class="card-body">
			<h2
				class="card-title flex items-start flex-row-reverse justify-between text-sm lg:text-base xl:text-xl"
			>
				<b class="card-title">JSS1</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No of Teachers</p>
		</div>
	</div>
	<div
		class="card bg-success text-success-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-3 row-span-1"
	>
		<div class="card-body">
			<h2
				class="card-title flex items-start flex-row-reverse justify-between text-sm lg:text-base xl:text-xl"
			>
				<b class="card-title">JSS2</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No. of Students</p>
		</div>
	</div>
	<div
		class="card bg-error text-error-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-5 row-span-1"
	>
		<div class="card-body">
			<h2
				class="card-title flex items-start flex-row-reverse justify-between text-sm lg:text-base xl:text-xl"
			>
				<b class="card-title">JSS3</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No. of Unregistered users</p>
		</div>
	</div>

	<!-- senior -->
	<div
		class="card bg-accent text-accent-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-1 row-span-1"
	>
		<div class="card-body">
			<h2 class="card-title flex items-start justify-between text-sm lg:text-base xl:text-xl">
				<b class="card-title">SS1</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No of Teachers</p>
		</div>
	</div>
	<div
		class="card bg-secondary text-secondary-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-3 row-span-1"
	>
		<div class="card-body">
			<h2 class="card-title flex items-start justify-between text-sm lg:text-base xl:text-xl">
				<b class="card-title">SS2</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No. of Students</p>
		</div>
	</div>
	<div
		class="card bg-warning text-warning-content w-full card-compact col-span-1 lg:col-span-2 lg:col-start-5 row-span-1"
	>
		<div class="card-body">
			<h2 class="card-title flex items-start justify-between text-sm lg:text-base xl:text-xl">
				<b class="card-title">SS2</b>
				<span>
					<UserSimulation class="text-gray-800 size-6 lg:size-8" />
				</span>
			</h2>
			<p>No. of Unregistered users</p>
		</div>
	</div>

	<!-- Add User -->
	<div
		class="card row-start-4 col-span-3 md:mx-[10%] lg:mx-0 lg:col-span-4 col-start-1 lg:col-start-7 lg:row-start-1 row-span-3 bg-accent p-3"
	>
		<div class="flex items-center justify-center h-full">
			<AddUser />
		</div>
	</div>
</section>
