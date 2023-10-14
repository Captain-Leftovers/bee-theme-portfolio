import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			transitionTimingFunction: {
				'customBezier': 'cubic-bezier(0.76, 0, 0.24, 1)',
			  },
			backgroundImage: {},
			colors: {
				primary: '#0D0D0D',
				secondary: '#CE4760',
				accent: '#FFD600',
				background: '#F2F2F2',
				'gray-mid': '#999999',
			},
			animation: {
				'fly-l': 'fly-l 0.5s infinite alternate',
				'fly-r': 'fly-r 0.5s infinite alternate',
				fill: 'fill 1s ease-in-out forwards',
			},
		},
		keyframes: {
			fill: {
				'0%': {
					scaleY: '%',
				},
				'100%': {
					scaleY: '100%',
				},
			},

			'fly-l': {
				'100%': {
					transform: 'rotate(30deg) rotateX(15deg)',
				},
			},

			'fly-r': {
				'100%': {
					transform: 'rotate(-30deg) rotateX(-15deg)',
				},
			},
		},
	},
	plugins: [],
}
export default config
