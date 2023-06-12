// Add the Toggle Functionality with JavaScript

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    menu.classList.toggle("active");

    // Toggle the menu icon between hamburger and close icon
    const icon = toggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu);

// Add the Dropdown Functionality with JavaScript

const items = document.querySelectorAll(".item");

/* Activate Submenu */
function toggleItem() {
    this.classList.toggle("submenu-active");
}

/* Event Listeners */
for (let item of items) {
    const submenu = item.querySelector(".submenu");
    if (submenu) {
        item.addEventListener("click", toggleItem);
        item.addEventListener("keypress", toggleItem);
    }
}

// Let Users Close the Submenu By Clicking Anywhere on the Page

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    const submenu = menu.querySelector(".submenu-active");
    if (submenu && !submenu.contains(e.target)) {
        submenu.classList.remove("submenu-active");
    }
}

/* Event Listener */
document.addEventListener("click", closeSubmenu);
