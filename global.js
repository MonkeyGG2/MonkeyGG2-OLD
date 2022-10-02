function makeclone(){
    if(!(window.top.location.href=="about:blank")){
        var url = window.location.href
        var urlObj = new window.URL(window.location.href);
        win = window.open();
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.referrerpolicy = "no-referrer";
        iframe.allow = "fullscreen";
        iframe.src = url.toString();
        win.document.body.appendChild(iframe);
        window.location.replace(localStorage.getItem("cloneURL"))
    }
}

function addbutton(){
    const button = document.createElement("button");
    button.innerText = "Back";
    button.id="go-back";
    button.onclick=function(){window.location.href='/';};
    button.style="z-index:5000;position: absolute;top:2%;left:2%;cursor:pointer;";
    document.body.appendChild(button);
    elmnt = document.getElementById("go-back");
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

if (localStorage.getItem("cloneURL") == null) {
    localStorage.setItem("cloneURL", "https://mail.google.com")
}

if (localStorage.getItem("clone") == null) {
    localStorage.setItem("clone", confirm("Do want auto cloak?\n\nif you don't remember you can still press ctrl q\n\nnote: we will make a settings page later where this can be changed"));
    clone();
} else if (localStorage.getItem("clone") == 'true') {
    makeclone();
}

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'q' && e.ctrlKey) {
        e.preventDefault();
        makeclone()
    }
    else if (e.key.toLowerCase() === 'm' && e.ctrlKey) {
        e.preventDefault();
        window.location.href="/";
    }
});