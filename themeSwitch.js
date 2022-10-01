const toggleSwitch = document.getElementById("checkbox")
const currentTheme = localStorage.getItem("theme");

if (currentTheme == null) {
    localStorage.setItem("theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    if (currentTheme == "light") {
        toggleSwitch.checked = true;
    }
    else if (currentTheme == "dark") {
        toggleSwitch.checked = false;
    }
    else {
        return;
    }
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

toggleSwitch.addEventListener('change', switchTheme, false);