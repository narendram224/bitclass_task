module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-black)'
            },
            boxShadow: {
                shade1: 'var(--box-shadow-1)',
                shade2: 'var(--box-shadow-2)'
            },
            borderRadius: {
                primary: 'var(--border-radius)'
            },
            fontSize: {
                xss: '0.6rem'
            },
            screens: {
                xs: '400px'
            },
            textColor: {
                primary: 'var(--color-primary)',
                secondary: '#ffed4a',
                danger: '#e3342f'
            },
            minWidth: {
                11: '345px',
                12: '295px'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [[require("tailwind-gradient-mask-image")]]
};
