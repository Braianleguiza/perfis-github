// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit", // Enable Just-In-Time (JIT) mode for faster compilation and smaller build size
    purge: ["./src/**/*.{html,js,svelte,ts}"], // Purge unused CSS from the final build
    darkMode: "media", // Set to 'media' or 'class' if you want to enable dark mode

    theme: {
        extend: {
            fontFamily: {
                Inter: ["Inter", ...defaultTheme.fontFamily.sans], // Replace the default sans-serif font with
            },
            // Add custom theme extension if needed
        },
    },

    plugins: [
        require("@tailwindcss/typography"), // Typography plugin for Tailwind CSS
        require("@tailwindcss/forms"), // Form styles plugin for Tailwind CSS
        require("daisyui"), // Add the DaisyUI plugin
        // Add other plugins if needed
    ],
};
