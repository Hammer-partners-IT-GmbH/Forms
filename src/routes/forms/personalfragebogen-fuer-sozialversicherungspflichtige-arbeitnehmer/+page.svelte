<script>
	import { enhance } from '$app/forms';
	import Occupation from '$lib/components/personalfragebogen/occupation.svelte';
	import PersonalInformation from '$lib/components/personalfragebogen/personal_information.svelte';
</script>

<h1>Personalfragebogen für sozialversicherungspflichtige Arbeitnhemer</h1>

<p class="error">Felder, die mit einem * makiert wurden, sind Pflichtfelder.</p>

<form method="POST" autocomplete="on" use:enhance>
	<PersonalInformation />
	<Occupation />

	<button>Einreichen</button>
</form>

<style lang="scss">
	:global(label) {
		font-size: var(--medium-font);
	}

	:global(.required-label::after) {
		content: ' * ';
		color: red;
	}
</style>
