<script>
	import FormButton from '$lib/components/formButton.svelte';
	import LabelInput from '$lib/components/labelInput.svelte';
</script>

<form class="card max-w-xl card-compact items-center space-y-4">
	<h1 class="card-title md:text-3xl">Login</h1>
	<div class="body space-y-4">
		<LabelInput placeholder="Enter Student/Staff ID" name="student/staff ID" />
		<LabelInput type="password" showButton placeholder="Enter Student/Staff ID" name="password" />
	</div>

	<div class="card-actions w-full">
		<FormButton text="Login" />
	</div>
	<!-- <p>Don't have an account</p> -->
</form>
