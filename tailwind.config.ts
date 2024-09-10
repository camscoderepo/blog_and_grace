
import { join } from 'path';
import type { Config } from 'tailwindcss';
import { CustomTheme } from './CustomTheme';
// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'ultrawide': '2560px', // Custom breakpoint for ultrawide screens
      }
    },
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
      themes: {
        custom: [
          CustomTheme
        ]
      }
    })
	]
} satisfies Config;

export default config;
						