import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
     
      },
      colors: {
				primary: '#0D0D0D',
				secondary: '#CE4760',
				accent: '#FFD600',
				background: '#F2F2F2',
			},
      animation: {
				'fly-l': 'fly-l 0.5s infinite alternate',
				'fly-r': 'fly-r 0.5s infinite alternate',
			},
    },
    keyframes: {
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
