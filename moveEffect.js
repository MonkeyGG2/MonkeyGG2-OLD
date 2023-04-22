Array.from(document.getElementById("subpageList").getElementsByTagName("li"))
    .forEach(item =>{
        item.onmousedown = scroll(item);
    });

function scroll(item) {
    window.scroll
}