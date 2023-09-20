<script lang="ts">
	import { page } from '$app/stores';

	import logo from '$lib/assets/logo/logo.png';

	type link = {
		name: string;
		href: string;
	};

	const links: link[] = [
		{
			name: 'Forms',
			href: '/forms'
		}
	];
</script>

<nav>
	<ul class="no-bullets">
		<li class:current={$page.url.pathname === '/'}>
			<a href="/">
				<img src={logo} alt="Home" class="logo" />
			</a>
		</li>
		{#each links as { name, href }}
			<li class:current={$page.url.pathname.startsWith(href)}>
				<a {href}>
					<span class="name">{name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding-block: 1rem;
		position: sticky;
		top: 0;
		background-color: var(--nav-color);
		z-index: 1;
	}

	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin: 0 2rem;
	}

	.logo {
		--size: 2rem;
		width: var(--size);
		height: var(--size);
		outline: 0.1rem solid var(--border-color);
	}

	a {
		text-decoration: none;
	}

	li {
		position: relative;
		display: flex;
		align-items: center;
		padding-block: 0.1rem;
	}

	li.current::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -0.15rem;
		height: 0.1rem;
		background-color: var(--accent-color);
		border-radius: 100vw;
	}

	.name {
		font-size: var(--small-font);
	}

	@media (max-width: 38rem) {
		nav {
			padding-block: 0.5rem;
		}

		li:not(.current) .name {
			/* visually hidden */
			position: absolute;
			left: -100000px;
		}
	}
</style>
