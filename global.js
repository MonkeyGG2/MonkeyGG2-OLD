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
        window.location.replace(localStorage.getItem("cloneURL"));
        window.close();
    }
}

function addbutton(){
    const btn = document.createElement("button");
    btn.innerText = "Back";
    btn.id="go-back";
    btn.onclick=function(){window.location.href='/';};

    btn.style.cssText= "box-sizing:inherit;position:absolute;z-index:9999;left:0;width:75px;height:50px;border-radius:0290486px290486px0;color:#000;padding:010px;line-height:50px;min-height:50px;border:none;border-bottom:3pxsolid#b5b5b5;will-change:transform;animation:bounceY2s.5s;transition:transform.5scubic-bezier(.55,0,.1,1);display:flex;align-items:center;justify-content:center;background:#1ec2e5;top:51px;"

    const tab = document.createElement("button");
    tab.id="tab";
    tab.style.cssText = "background-color:blue;border-radius: 290486px 0 0 290486px;cursor: pointer; z-index: 9999; color: #000; height: 50px; padding: 19px 10px; border: none;";
    tab.style.width="15px";
    document.body.appendChild(tab);
    document.body.appendChild(btn);

    function drag(e) {
    tab.style.transform = `translate(${e.pageX - 20}px, ${e.pageY - 10}px)`;
    btn.style.transform = `translate(${e.pageX - 20}px, ${e.pageY - 10}px)`;
    }
    tab.addEventListener("mousedown", () =>
    document.addEventListener("mousemove", drag)
    );
    tab.addEventListener("mouseup", () =>
    document.removeEventListener("mousemove", drag)
    );
}

if (localStorage.getItem("cloneURL") == null) {
    localStorage.setItem("cloneURL", "https://mail.google.com");
}

if (localStorage.getItem("clone") == null) {
    localStorage.setItem("clone", confirm("Do want auto cloak?\n\nif you don't remember you can still press ctrl q\n\nnote: we will make a settings page later where this can be changed"));
    clone();
} else if (localStorage.getItem("clone") == 'true') {
    makeclone();
}

if (!(window.location.href=="/")){
    addbutton();
}

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'q' && e.ctrlKey) {
        e.preventDefault();
        makeclone();
    }
    else if (e.key.toLowerCase() === 'm' && e.ctrlKey) {
        e.preventDefault();
        window.location.href="/";
    }
});