document.addEventListener("DOMContentLoaded", function () {
    // Calculate path prefix for relative URLs
    const pathPrefix = window.location.pathname.includes('/articles/') ? '../' : '';

    // Load header
    fetch(`${pathPrefix}components/header.html`)
        .then(response => response.text())
        .then(data => {
            const logoPath = `${pathPrefix}${SITE_CONFIG.site.logoPath}`;
            data = data.replace('#LOGO_PATH#', logoPath);

            document.getElementById('header').innerHTML = data;
            // Initialize navigation after header is loaded
            initNavigation();
        });

    // Load footer
    fetch(`${pathPrefix}components/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            // Update dynamic elements after footer is loaded
            updateFooter();
        });

    // Set page title dynamically
    updatePageTitle();
});

function updateFooter() {
    // Get the prefix for correct path resolution
    const pathPrefix = window.location.pathname.includes('/articles/') ? '../' : '';

    // Get the footer HTML
    fetch(`${pathPrefix}components/footer.html`)
        .then(response => response.text())
        .then(data => {
            // Replace all placeholders
            data = data.replace('#TWITTER_URL#', SITE_CONFIG.social.twitter.url);
            data = data.replace('#TWITTER_ICON#', `${pathPrefix}${SITE_CONFIG.social.twitter.icon}`);

            data = data.replace('#INSTAGRAM_URL#', SITE_CONFIG.social.instagram.url);
            data = data.replace('#INSTAGRAM_ICON#', `${pathPrefix}${SITE_CONFIG.social.instagram.icon}`);

            data = data.replace('#EMAIL_URL#', `mailto:${SITE_CONFIG.contact.email}`);
            data = data.replace('#EMAIL_TEXT#', SITE_CONFIG.contact.email);

            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
}

function initNavigation() {
    buildNavigation();
}

function updatePageTitle() {
    const pageTitle = document.title;
    if (!pageTitle.includes(SITE_CONFIG.site.title)) {
        document.title = pageTitle ?
            `${pageTitle} - ${SITE_CONFIG.site.title}` :
            SITE_CONFIG.site.title;
    }
}

function buildNavigation() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const navList = document.createElement('ul');
    navList.className = 'nav__list';

    SITE_CONFIG.navigation.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav__item';

        const a = document.createElement('a');
        a.href = item.url;
        a.className = 'nav__link';
        a.textContent = item.title;

        // Highlight current page
        if (window.location.pathname.endsWith(item.url) ||
            (item.url !== '/' && window.location.pathname.includes(item.url))) {
            a.classList.add('active');
        }

        li.appendChild(a);
        navList.appendChild(li);
    });

    nav.appendChild(navList);
}