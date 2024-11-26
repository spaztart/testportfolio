class HeaderNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="LogoContainer">
                    <div class="menu-icon" id="menuIcon">
                        <span class="menu-line"></span>
                        <span class="menu-line"></span>
                    </div>
                    <a href="index.html"><div class="logo">JC</div></a>
                </div>

                <div class="dropdown">
                    <button class="dropdown-btn" id="selectTheme">
                        Select mode
                    </button>
                    <div class="dropdown-content">
                        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/Default-theme.css', 'Default Theme')">Default Theme</a>
                        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/dark-theme.css', 'Dark Theme')">Dark Theme</a>
                        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/cyberwave.css', 'Cyberwave')">Cyberwave</a>
                        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/green.css', 'Matrix')">Matrix</a>
                        <!-- Add more themes as needed -->
                    </div>
                </div>
            </header>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const menuIcon = this.querySelector('.menu-icon');
        const sidebar = document.getElementById('sidebar');
        const header = document.querySelector('header'); // Select the header element
    
        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-open');
            menuIcon.classList.toggle('open'); // Toggle the 'open' class on menu icon
    
            if (sidebar.classList.contains('sidebar-open')) {
                header.classList.add('transparent-header'); // Add class when sidebar is open
            } else {
                header.classList.remove('transparent-header'); // Remove class when sidebar is closed
            }
        });
    
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 960 || window.innerWidth <= 640) {
                sidebar.classList.remove('sidebar-open');
                menuIcon.classList.remove('open'); // Remove the 'open' class on menu icon when sidebar is closed
                header.classList.remove('transparent-header'); // Remove class when sidebar is closed
            }
        });
    }

    selectTheme(theme) {
        // Add your logic to handle theme selection
        // For example, you can update the stylesheet or dispatch a custom event
    }
}

customElements.define('header-nav', HeaderNav);