setTimeout(function(){
    for (var i = 1; i <= 30; i++) {
        e.history.pushState(0, 0, i.toString());
    }
    e.close();
},1000);