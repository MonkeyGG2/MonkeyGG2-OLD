const themeSwitch = document.getElementById("themebox")
const currentTheme = localStorage.getItem("theme");

if (currentTheme == null) {
    localStorage.setItem("theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    if (currentTheme == "light") {
        themeSwitch.checked = true;
    }
    else if (currentTheme == "dark") {
        themeSwitch.checked = false;
    }
    else {}
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", "light");
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", "dark")
    }    
}

themeSwitch.addEventListener('change', switchTheme, false);