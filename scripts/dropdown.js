document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown visibility on button click
    dropdownBtn.addEventListener('click', function () {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Retrieve and apply selected theme from localStorage
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        applyTheme(selectedTheme);
    }
});

// Array of theme paths and names
const themes = [
    { path: 'styles/themes/Default-theme.css', name: 'Default Theme' },
    { path: 'styles/themes/Dark-theme.css', name: 'Dark Theme' },
    { path: 'styles/themes/cyberwave.css', name: 'Cyberwave' },
    { path: 'styles/themes/green.css', name: 'Hacker' },
    // Add more themes here
];

// Function to select a random theme
function selectRandomTheme() {
    const currentThemePath = localStorage.getItem('selectedTheme');
    const availableThemes = themes.filter(theme => theme.path !== currentThemePath);

    if (availableThemes.length === 0) {
        console.warn('No alternative themes available');
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableThemes.length);
    const selectedTheme = availableThemes[randomIndex];
    selectTheme(selectedTheme.path, selectedTheme.name);
}

// Function to select a theme
function selectTheme(themePath, themeName) {
    document.getElementById('selectTheme').textContent = themeName;
    document.querySelector('.dropdown-content').style.display = 'none';

    // Save and restore scroll position
    const scrollPosition = window.scrollY;
    applyTheme(themePath);
    requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
    });

    // Store selected theme in localStorage
    localStorage.setItem('selectedTheme', themePath);
}

// Function to apply a theme
function applyTheme(themePath) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    themeStylesheet.setAttribute('href', themePath);
}
