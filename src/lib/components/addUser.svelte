<script>
	import FormButton from './formButton.svelte';
	import LabelInput from './labelInput.svelte';
</script>

<form class="card max-w-xl card-compact items-center space-y-3 md:space-y-2 w-full">
	<h1 class="card-title">Add Staff/Student</h1>
	<div class="card-body w-full text-white">
		<LabelInput placeholder="Auto-generated ID" name="student/staff ID" disabled />
		<LabelInput placeholder="First Name" name="firstName" />
		<LabelInput placeholder="Last Name" name="lastName" />
		<LabelInput placeholder="Enter Email" name="email" />
		<FormButton
			text="Create"
			classnames="btn-secondary text-secondary-content mt-4 btn-md text-lg"
		/>
	</div>
</form>
