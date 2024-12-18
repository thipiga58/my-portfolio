// Function to load external HTML
function loadHTML(elementId, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load: ' + filePath);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback(); // Execute callback after loading content
        })
        .catch(error => console.error(error));
}

// Function to set up the navigation toggle
function setupMenuToggle() {
    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close');
    const nav = document.querySelector('.nav');
    const navLink = document.querySelectorAll('.nav-link');

    // Ensure elements exist before attaching event listeners
    if (menuOpen && menuClose && nav) {
        menuOpen.addEventListener('click', menuToggle);
        menuClose.addEventListener('click', menuToggle);

        navLink.forEach((link) => {
            link.addEventListener('click', menuToggle);
        });

        function menuToggle() {
            nav.classList.toggle('active');
        }
    }
}

// Load the header and footer, then initialize the menu toggle
loadHTML('header-placeholder', '/my-portfolio/components/header.html', setupMenuToggle);
loadHTML('footer-placeholder', '/my-portfolio/components/footer.html');