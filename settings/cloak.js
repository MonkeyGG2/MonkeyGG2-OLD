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
            errorBox.textContent == "Invalid URL. Must follow https://example.com OR example.com OR www.example.com"
        }

        document.getElementById("cloakInputSubmit").click();
    }
}

cloakSwitch.addEventListener('change', switchCloak, false);