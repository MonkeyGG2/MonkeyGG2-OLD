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
        var script = win.document.createElement("script");
        script.src = "https://3kh0.github.io/js/main.js";
        win.document.body.appendChild(script);
        window.location.replace("https://mail.google.com")
    }
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