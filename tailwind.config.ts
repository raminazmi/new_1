import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6366f1",
                    light: "#818cf8",
                    dark: "#4f46e5",
                },
                secondary: {
                    DEFAULT: "#ec4899",
                    light: "#f472b6",
                    dark: "#db2777",
                },
                accent: {
                    DEFAULT: "#f59e0b",
                    light: "#fbbf24",
                    dark: "#d97706",
                },
            },
            fontFamily: {
                tajawal: ["'Tajawal'", "sans-serif"],
                inter: ["'Inter'", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-in-right": "slideInRight 0.6s ease-out forwards",
                "slide-in-left": "slideInLeft 0.6s ease-out forwards",
                "scale-in": "scaleIn 0.5s ease-out forwards",
                float: "float 3s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideInRight: {
                    from: { opacity: "0", transform: "translateX(-30px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                slideInLeft: {
                    from: { opacity: "0", transform: "translateX(30px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                scaleIn: {
                    from: { opacity: "0", transform: "scale(0.9)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            boxShadow: {
                colored: "0 10px 40px -10px rgba(99, 102, 241, 0.3)",
            },
        },
    },
    plugins: [],
};
export default config;
