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
                '18': '4.5rem',
                '85': '85%',
                '90': '90%',
            },
            height: {
                '18': '4.5rem',
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
            screens: {
                xs: '530px',
                '3xl': '1680px',
                '4xl': '1920px',
                '5xl': '2560px',
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
                '.clip-right-triangle': {
                    'clip-path': 'polygon(100% 0, 0% 100%, 100% 100%)',
                },
            })
        }),
    ],
}
export default config
