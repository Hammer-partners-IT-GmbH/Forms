<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import '$lib/css/app.css';
</script>

<Nav />
<main>
	<slot />
</main>

<style lang="scss">
	main {
		max-width: 40rem;
		margin: 0 auto;
	}
</style>
