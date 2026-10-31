function toggle_menu() {
    const leftSidebar = document.getElementById("left-sidebar");
    leftSidebar.classList.toggle("active");
}

document.getElementById("hamburger-menu").addEventListener("click", toggle_menu);

const navItems = document.querySelectorAll(".nav-selection");

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        document.querySelector(".nav-selection.active")?.classList.remove("active");
        navItem.classList.add("active");

        document.querySelector(".nav-selection i.active")?.classList.remove("active");
        navItem.querySelector("i").classList.add("active");
    });
});