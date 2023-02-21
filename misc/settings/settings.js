const toggleSwitch = document.getElementById("themebox")
const currentTheme = localStorage.getItem("theme");
const maskSwitch = document.getElementById("maskbox");
const cloakSwitch = document.getElementById("cloakbox");
const errorBox = document.getElementById("errorMsg");
const messageBox = document.getElementById("cloak-status")
const currentCloak = localStorage.getItem("clone");
const currentMask = localStorage.getItem("mask");
const regex = /^(https:\/\/)?([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/;

if (currentCloak == null) {
    localStorage.setItem("clone", "true");
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

if (currentMask == null) {
    localStorage.setItem("mask", "false");
} else {    
    if (currentMask == "true") {
        maskSwitch.checked = true;
        messageBox.textContent = "Enabled";
    }
    else if (currentMask == "false") {
        maskSwitch.checked = false;
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

function switchMask(e) {
    if (e.target.checked) {
        localStorage.setItem("mask", "true");
    }
    else {
        localStorage.setItem("mask", "false");
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
    makeclone()
}

function maskURL() {
    input = document.getElementById("maskImageInput");
    value = input.value;
    
    if (!value.startsWith("http")) {
        value = "https://" + value;
    }

    localStorage.setItem("maskURL", value);
    mask()
}

function maskTitle() {
    input = document.getElementById("maskTitleInput");
    value = input.value;
    localStorage.setItem("maskTitle", value);
    mask()
}

function checkIfEnter(e, fish) {
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

maskSwitch.addEventListener('change', switchMask, false);