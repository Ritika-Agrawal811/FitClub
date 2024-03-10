import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            width: {
                '85': '85%',
                '90': '90%',
            },
            colors: {
                orange: '#f48915',
                primary: '#3c3f45',
                gray: {
                    100: '#D9D9D9',
                    200: '#9c9c9c',
                    500: '#656565',
                    600: '#464D53',
                    900: '#363d42',
                },
            },
            background: {
                'orange-gradient': 'linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)',
            },
            fontFamily: {
                arial: 'Arial, Helvetica, sans-serif',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.stroke-text': {
                    '-webkit-text-stroke': '2px',
                    '-webkit-text-stroke-color': '#fff',
                },
            })
        }),
    ],
}
export default config
