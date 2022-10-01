const cloakSwitch = document.getElementById("cloakbox")
const currentCloak = localStorage.getItem("clone");
const messageBox = document.getElementById("cloak-status")

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

function switchCloak(e) {
    if (e.target.checked) {
        localStorage.setItem("theme", "light");
        messageBox.textContent = "Enabled";
    }
    else {
        localStorage.setItem("theme", "dark");
        messageBox.textContent = "Disabled";
    }    
}

cloakSwitch.addEventListener('change', switchCloak, false);