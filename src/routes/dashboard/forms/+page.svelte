<script lang="ts">
	let forms = [
		{
			title: 'Personalfragebogen für sozialversicherungspflichtige Arbeitnehmer',
			link: '/dashboard/forms/personalfragebogen-fuer-sozialversicherungspflichtige-arbeitnehmer'
		}
	];
</script>

<h1>Forms</h1>

<div class="forms">
	{#each forms as form}
		<div class="form">
			<h2>{form.title}</h2>
			<a href={form.link}>Sie können den Fragebogen hier ausfüllen</a>
		</div>
	{/each}
</div>

<style lang="scss">
	.forms {
		.form {
			border: 1px solid var(--border-color);
			padding: 10px 20px;
			max-width: 80vw;
		}
	}
</style>
