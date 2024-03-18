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
                vmax: 'calc(100vmax * 1.5)',
            },
            height: {
                vmax: 'calc(100vmax * 1.5)',
            },
            colors: {
                orange: {
                    400: '#f48915',
                    600: '#ed4809',
                },
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
            fontSize: {
                '10xl': '10rem',
            },
            rotate: {
                '20': '20deg',
            },
            boxShadow: {
                soft: 'rgba(149, 157, 165, 0.2) 0 0.5em 1.5em',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.stroke-text': {
                    '-webkit-text-stroke': '1px',
                    '-webkit-text-stroke-color': '#fff',
                },
            })
        }),
    ],
}
export default config
