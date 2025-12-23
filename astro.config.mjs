// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@deno/astro-adapter';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
	output: 'server',
  	adapter: deno(),
	integrations: [
		starlight({
			title: 'libfinite',
			plugins: [
				starlightImageZoom(),
				starlightLinksValidator()
			],
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/XU4zK5jjMc' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CubixEntertainment/libfinite' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About Libfinite', slug: 'guides/libfinite' },
						{ label: 'Setup', slug: 'guides/getting-started' },
						{ label: 'Specification', slug: 'guides/the-spec' },
						{ label: 'Example Project', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [
						{
							label: 'FiniteShell',
							autogenerate: { directory: 'reference/FiniteShell' },
						},
						{
							label: 'FiniteDraw',
							autogenerate: { directory: 'reference/FiniteDraw' },
						},
						{
							label: 'FiniteRender',
							autogenerate: { directory: 'reference/FiniteRender' },
						},
						{
							label: 'FiniteAudio',
							autogenerate: { directory: 'reference/FiniteAudio' },
						},
						{
							label: 'FiniteInput',
							autogenerate: { directory: 'reference/FiniteInput' },
						}
					]
				},
				{
					label: 'Demoes',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Cube', slug: 'examples/cube' },
						{ label: 'Setup', slug: 'guides/getting-started' },
						{ label: 'Specification', slug: 'guides/the-spec' },
						{ label: 'Example Project', slug: 'guides/example' },
					],
				},
			],
			customCss: [
				// Fontsource files for to regular and semi-bold font weights.
				'@fontsource-variable/kumbh-sans',
				'./src/styles/font.css',
			],
		}),
	],
});
