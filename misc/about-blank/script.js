var win
//thing for aboutblank
function aboutblank(url){
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
  iframe.src = url; win.document.body.appendChild(iframe);
}

//change title and favicon of new tab
function changefat(doc, title, image){
	doc.title=title;
  var icon=doc.querySelector(`link[rel='icon']`);
  if (!icon) {
    icon = doc.createElement('link');
    icon.rel='icon';
    icon.setAttribute("href",image);
    doc.head.appendChild(icon);
	}
}

function start(){
	aboutblank(document.getElementById("url").value);
  if (document.getElementById("check").value){
  	changefat(win.document, document.getElementById("title").value, document.getElementById("image").value);
  }
}