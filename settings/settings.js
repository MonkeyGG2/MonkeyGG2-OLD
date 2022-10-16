const toggleSwitch = document.getElementById("themebox")
const currentTheme = localStorage.getItem("theme");

const cloakSwitch = document.getElementById("cloakbox");
const errorBox = document.getElementById("errorMsg");
const messageBox = document.getElementById("cloak-status")
const currentCloak = localStorage.getItem("clone");
const regex = /^(https:\/\/)?([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/;

if (currentCloak == null) {
    localStorage.setItem("clone", "false");
} else {    
    if (currentCloak == "true") {
        cloakSwitch.checked = true;
        messageBox.textContent = "Enabled";
    }
    else if (currentCloak == "false") {
        cloakSwitch.checked = false;
        messageBox.textContent = "Disabled";
    }
    else {}
}

if (currentTheme == null) {
    localStorage.setItem("theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    if (currentTheme == "light") {
        toggleSwitch.checked = true;
    }
    else {
        toggleSwitch.checked = false;
    }
}

function switchCloak(e) {
    if (e.target.checked) {
        localStorage.setItem("clone", "true");
        messageBox.textContent = "Enabled";
    }
    else {
        localStorage.setItem("clone", "false");
        messageBox.textContent = "Disabled";
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

function cloakURL() {
    input = document.getElementById("cloakInput");
    value = input.value;
    
    if (!value.startsWith("http")) {
        value = "https://" + value;
    }

    localStorage.setItem("cloneURL", value);

    if (confirm(`Success! Changed cloak URL to ${value}. Do you want to cloak now?`)) {
        makeclone()
    }
}

function checkIfEnter(e) {
    if (e.key === ("Enter" || "enter" || "ENTER")) {
        e.preventDefault();
        text = document.getElementById("cloakInput").value

        if (!regex.test(text)) {
            return errorBox.textContent == "Invalid URL. Must follow https://example.com OR example.com OR www.example.com"
        }

        if (text.startsWith("https://monkeygg2" || "https://metagg2") || text.startsWith("monkeygg2" || "metagg2")) {
            return errorBox.textContent == "Please do not use this website as the URL"
        }

        document.getElementById("cloakInputSubmit").click();
    }
}

cloakSwitch.addEventListener('change', switchCloak, false);

toggleSwitch.addEventListener('change', switchTheme, false);