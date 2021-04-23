module.exports = {
    purge: {
        content: [
            "./resources/**/*.antlers.html",
            "./resources/**/*.blade.php",
            "./content/**/*.md",
        ],
    },
    mode: 'jit',
    theme: {
        extend: {
            fontFamily: {
                sans: "Poppins",
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require("tailwindcss-debug-screens"),
    ],
};
