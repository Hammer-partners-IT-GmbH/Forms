<script>
	import { enhance } from '$app/forms';
	import Beschftigung from '$lib/components/personalfragebogen/Beschäftigung.svelte';
	import Entlohnung from '$lib/components/personalfragebogen/Entlohnung.svelte';
	import PersonalInformation from '$lib/components/personalfragebogen/Persöhnliche_Information.svelte';
	import Steuer from '$lib/components/personalfragebogen/Steuer.svelte';
</script>

<h1>Personalfragebogen für sozialversicherungspflichtige Arbeitnhemer</h1>

<p class="error">Felder, die mit einem * makiert wurden, sind Pflichtfelder.</p>

<form method="POST" autocomplete="on" use:enhance>
	<PersonalInformation />
	<Beschftigung />
	<Entlohnung />
	<Steuer />

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
