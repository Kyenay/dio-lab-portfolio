const toggleTheme = document.getElementById("toggleTheme");
const page = document.documentElement;

function changeTheme() {
    const currentTheme = page.getAttribute("data-theme");

    if (currentTheme === "dark") page.setAttribute("data-theme", "light")
    else page.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
