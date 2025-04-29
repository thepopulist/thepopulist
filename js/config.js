const SITE_CONFIG = {
    // Basic site information
    site: {
        title: 'The Populist',
        tagline: 'Reclaiming populism for the people',
        description: 'A digital political magazine breaking the attention monopoly held by the Media',
        language: 'en-GB',
        baseUrl: 'https://thepopulist.github.io/thepopulist/',
        logoPath: 'img/logo.png'
    },

    // Contact information
    contact: {
        email: 'thepopulist@gmail.com',
        formAction: 'https://formcarry.com/s/6BeGtOYsnxK'
    },

    // Social media profiles
    social: {
        twitter: {
            url: 'https://x.com/thepopulistuk',
            icon: 'img/icons/twitter.svg'
        },
        instagram: {
            url: 'https://instagram.com/thepopulistuk',
            icon: 'img/icons/instagram.svg'
        }
        // Add more platforms as needed
    },

    // Site navigation structure
    navigation: [
        // { title: 'Home', url: '/' },
        { title: 'About', url: '/' },
        { title: 'Articles', url: '/articles/' }
    ],

    // Article categories
    categories: [
        'Politics', 'Economics', 'Society', 'Media'
    ],
};

// Make available globally
window.SITE_CONFIG = SITE_CONFIG;