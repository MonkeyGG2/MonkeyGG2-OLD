function makeclone(){
    if((window.top.location.href!="about:blank")){
        var url = window.location.href;
        win = window.open();
        if(!win || win.closed || typeof win.closed=='undefined') { 
            alert('Please allow Pop-Ups - By disabling popups, you allow this website to show up in your history. We need to open a popup to show this page in about:blank, also known as "cloaking".');
        }else{
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
        }
    }
}

function mask(){
    var e = window.top.document;
    var link = e.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = localStorage.getItem("maskURL");
    e.getElementsByTagName('head')[0].appendChild(link);
    e.title = localStorage.getItem("maskTitle");
}

function addCss(){
    const e = document.createElement('style');
    e.innerHTML = `
    :root {
        --bg-color: #2f3136;
        --second-bg-color: #202225;
        --font-color: #dcddde;
        --block-color: #36393f;
        --hover-color: #565b65;
        --main-font: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        --second-font: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }
      
      [data-theme="light"] {
        --bg-color: #e4e5f1;
        --second-bg-color: #9394a5;
        --font-color: #202225;
        --block-color: #dcddde;
        --hover-color: #fafafa;
      }
      
    button.in-game-button {
        cursor: pointer;
        position: absolute;
        z-index: 9999;
        top: 61px;
        left: 0;
        width: 75px;
        height: 50px;
        background: var(--hover-color);
        border-radius: 0 290486px 290486px 0;
        color: #000;
        padding: 0 10px;
        line-height: 50px;
        min-height: 50px;
        border: none;
        border-bottom: 3px solid var(--font-color);
        will-change: transform;
        animation: bounceY 2s .5s;
        transition: transform .5s cubic-bezier(.55,0,.1,1);
        display: flex;
        align-items: center;
        justify-content: center
    }
    
    button.in-game-button svg {
        pointer-events: none;
        color: var(--font-color);
        margin-right: .625rem;
        display: inline-block
    }
    
    button.in-game-button img {
        pointer-events: none;
        width: 33px
    }
    
    button.in-game-button:active {
        background: #aaa
    }
    
    button.in-game-button[attr-active=true] {
        transform: translateX(0)
    }

    button.in-game-button:not(hover) {
        transform: translateX(-32px)
    }

    button.in-game-button:hover {
        transform: translateX(0px)
    }
    
    @media(max-height: 350px) and (orientation:landscape) {
        button.in-game-button[attr-active=true] {
            transform:translateX(-75px)
        }
    }
    
    button.in-game-button[attr-snapped=true] svg {
        display: none
    }
    
    button.in-game-button[attr-snapped=true] img {
        transform: translate(-5px)
    }

    #refresh{right:0;border-radius: 290486px 0 0 290486px;left:auto}

    #refresh:not(hover) {
        transform: translateX(32px);
    }

    #refresh:hover {
        transform: translateX(0px);
    }
    `;  
    document.getElementsByTagName('head')[0].appendChild(e);
}
function addBtnHome(){
    var e = document.createElement('button');
    e.className = 'in-game-button';
    e.id = 'inGame';
    e.innerHTML = `
    <svg class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg><!-- <i class="fas fa-chevron-left"></i> Font Awesome fontawesome.com -->
    <img src="/favicon.png" width="36" height="36" alt="Logo">
    `;
    document.getElementsByTagName('body')[0].appendChild(e);
}

function addBtnRefresh() {
    var e = document.createElement('button');
    e.className = 'in-game-button';
    e.id = "refresh";
    e.innerHTML = `
    <img src="/refresh.png" width="40" height="36" alt="Logo">
    <svg class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="#565b65" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg><!-- <i class="fas fa-chevron-left"></i> Font Awesome fontawesome.com -->
    `;
    document.getElementsByTagName('body')[0].appendChild(e);
}

if (window.location.pathname != "/games/") {
    window.addEventListener('load', function() {
        addCss();
        addBtnHome();
        addBtnRefresh();
        var btn = document.getElementById("inGame");
        btn.addEventListener("click", returnHome);
        dragElement(document.getElementById("inGame"));
        var rfrsh = document.getElementById("refresh");
        rfrsh.addEventListener("click", refreshPage);
        dragElement(document.getElementById("refresh"));
        
    });

    var hold = false;
    var click = 0;
}
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
        
    
    
}

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    window.click = 1;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

}

function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;

    if(window.click == 1){
        window.hold = true;
        window.click = 0;
    }
    setTimeout(function (){ window.hold = false}, 100);
}
}
function returnHome(){
    if(window.hold == true){
        return;
    }
    location.href = "/games";
}

function refreshPage() {
    location.reload();
}

var cjs = document.createElement("script");
cjs.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
document.head.appendChild(cjs);

function getMainSave() {
    var mainSave = {};
  
    localStorageSave = Object.entries(localStorage);
  
    localStorageSave = btoa(JSON.stringify(localStorageSave));
  
    mainSave.localStorage = localStorageSave;
  
    cookiesSave = document.cookie;
  
    cookiesSave = btoa(cookiesSave);
  
    mainSave.cookies = cookiesSave;
  
    mainSave = btoa(JSON.stringify(mainSave));
  
    mainSave = CryptoJS.AES.encrypt(mainSave, "save").toString();
  
    return mainSave;
  }
  
  function downloadMainSave() {
    var data = new Blob([getMainSave()]);
    var dataURL = URL.createObjectURL(data);
  
    var fakeElement = document.createElement("a");
    fakeElement.href = dataURL;
    fakeElement.download = "monkey.data";
    fakeElement.click();
    URL.revokeObjectURL(dataURL);
  }

  function getMainSaveFromUpload(data) {
    data = CryptoJS.AES.decrypt(data, "save").toString(CryptoJS.enc.Utf8);
  
    var mainSave = JSON.parse(atob(data));
    var mainLocalStorageSave = JSON.parse(atob(mainSave.localStorage));
    var cookiesSave = atob(mainSave.cookies);
  
    for (let item in mainLocalStorageSave) {
      localStorage.setItem(mainLocalStorageSave[item][0], mainLocalStorageSave[item][1]);
    }
  
    document.cookie = cookiesSave;
  }
  
  function uploadMainSave() {
    var hiddenUpload = document.createElement("input");
    hiddenUpload.type = "file";
    hiddenUpload.accept = ".data";
    document.body.appendChild(hiddenUpload);
    hiddenUpload.click();
  
    hiddenUpload.addEventListener("change", function (e) {
      var files = e.target.files;
      var file = files[0];
  
      if (!file) {
        return;
      }
  
      var reader = new FileReader();
  
      reader.onload = function (e) {
        getMainSaveFromUpload(e.target.result);
  
        var uploadResult = document.querySelector(".uploadResult");
        uploadResult.innerText = "Uploaded save!";
        setTimeout(function () {
          uploadResult.innerText = "";
        }, 3000);
      };
  
      reader.readAsText(file);

      document.body.removeChild(hiddenUpload);
    });
  }

  function getDB() {
    const req = window.indexedDB.open("file");

    req.onupgradeneeded = (event) => {
        db = event.target.result;

        db.createObjectStore("file", { keyPath: "name"});
    }

    req.onsuccess = (event) => {
        db = event.target.result;
    }
  }

  let db = null;
  try {getDB();} catch {}

  function autoSaveSetup() {
    let response = document.getElementsByClassName("autoSaveResult")[0];

    if (!window.indexedDB || db == null) {
        response.textContent = "Your browser does not support this feature";
        setTimeout(function () {
            uploadResult.innerText = "";
          }, 3000);  
    }

    window.showSaveFilePicker({
        suggestedName: "monkey.data",
        types: [{
            description: "MonkeyGG2 Data File",
            accept: { "text/plain": [".data"] },
        }]
    }).then((handle) => {
        let data = new Blob([getMainSave()]);

        handle.createWritable().then((writable) => {
            writable.write(data).then(() => {
                writable.close().then(() => {});
            });
        });

        let txn = db.transaction("file", 'readwrite');
        let store = txn.objectStore("file");
    
        store.put({
            name: "monkey.data",
            handle: handle
        });    
    });
}

function autoSave() {
    if (!window.indexedDB || db == null) {
        return;
    }

    const txn = db.transaction("file", "readonly");
    const store = txn.objectStore("file");

    let query = store.get("monkey.data");

    query.onsuccess = (event) => {
        if (event.target.result) {
            const handle = event.target.result.handle;
            var data = new Blob([getMainSave()]);
            
            handle.createWritable().then((writable) => {
                writable.truncate(0).then(() => {
                    writable.write(data).then(() => {
                        writable.close().then(() => {});
                    });
                })
            });
        }
    }

    query.onerror = () => {
        return;
    }
}

setInterval(autoSave, 60000);
setInterval(() => {
    if (document.hidden) {
        return;
    }

    if (localStorage.getItem("xp") == null) {
        localStorage.setItem("xp", CryptoJS.AES.encrypt((Math.floor(Math.random() * 50) + 50).toString(), "xp").toString());
        return;
    }

    xp = CryptoJS.AES.decrypt(localStorage.getItem("xp"), "xp").toString(CryptoJS.enc.Utf8)

    parsed = parseInt(xp);
    if (parsed == NaN) {
        return;
    }

    localStorage.setItem("xp", CryptoJS.AES.encrypt((parsed + (Math.floor(Math.random() * 50) + 50)).toString(), "xp").toString())
}, 60000); // xp


if (localStorage.getItem("cloneURL") == null) {
    localStorage.setItem("cloneURL", "https://mail.google.com");
}

if (localStorage.getItem("clone") == null) {
    localStorage.setItem("clone", true);
}   
if (localStorage.getItem("clone") == 'true'){
    if (window.top.location.href!="about:blank")
        document.addEventListener("click", (event) => {event.preventDefault(); makeclone()});
    makeclone();
}

if (localStorage.getItem("maskURL") == null) {
    localStorage.setItem("maskURL", "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png");
}

if (localStorage.getItem("maskTitle") == null) {
    localStorage.setItem("maskTitle", "My Drive - Google Drive");
}

if (localStorage.getItem("mask") == null) {
    localStorage.setItem("mask", false);
}

if (localStorage.getItem("mask") == 'true'){
    mask();
}

// c = clone, b = back, m = mask, y = reload, f = go to search bar
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'f' && e.ctrlKey) {
        var search = document.getElementById("searchBar");
        if (search){
            e.preventDefault();
            window.scrollTo(0, 0);
            search.select();
        }
    }
    if (e.ctrlKey && e.shiftKey) {
        if (e.key.toLowerCase() === 'c') {
            e.preventDefault();
            makeclone();
        }
        else if (e.key.toLowerCase() === 'b') {
            e.preventDefault();
            returnHome()
        }
        else if (e.key.toLowerCase() === 'm') {
            e.preventDefault();
            mask();
        }
        else if (e.key.toLowerCase() === 'y') {
            e.preventDefault();
            window.location.reload(true);
        }
        else if (e.key.toLowerCase() === 'v') {
            e.preventDefault();
            if (document.getElementById("screen-overlay")){
                var element = document.getElementById("screen-overlay"); 
                element.parentNode.removeChild(element);
            }else{
                var a, b, c;
                c = "https://www.bing.com/";
                b = document.createElement("iframe");
                b.setAttribute("src", c);
                b.setAttribute("id", "screen-overlay");
                b.setAttribute("style", "position: fixed; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999999999; background-color: #fff;");
                a=document.getElementsByTagName("body")[0];
                a.appendChild(b);
            }
        }
        else if (e.key.toLowerCase() === 'a') {
            e.preventDefault();
            DELAY = 0.1;
            var autoClickerStyleElement = document.createElement("style");
            autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
            document.body.appendChild(autoClickerStyleElement);
    
            function addClicker(e) {
            if (!e.isTrusted) {
                return;
            }
            if (e.target.classList.contains("auto-clicker-target")) {
                e.target.classList.remove("auto-clicker-target");
            } else {
                e.target.classList.add("auto-clicker-target");
            }
            document.body.removeChild(autoClickerStyleElement);
            document.body.removeEventListener("click", addClicker);
            e.preventDefault();
            autoClick(e.target);
            }
    
            function autoClick(element) {
            if (element.classList.contains("auto-clicker-target")) {
                element.click();
                setTimeout(function() {
                autoClick(element);
                }, DELAY);
            }
            }
            document.body.addEventListener("click", addClicker, 0);
        }    
    }
});

if (!document.getElementsByTagName("link")) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "/favicon.ico";
}
