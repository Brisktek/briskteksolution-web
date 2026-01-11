/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brisk-navy-100': '#171F3B', // This is your "Brisk Navy 100" color
            },
        },
    },
    plugins: [],
}