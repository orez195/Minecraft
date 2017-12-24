var width = 20;
var bodyGame = $('.bodyGame');

for (var x=0; x < width; x++) {
    for (var y=0; y < 14; y++) {
        var skyPic = $("<div/>");
        skyPic.addClass("skyPic");
        bodyGame.append(skyPic);
        skyPic.css("background-image", "url(./images/sky.jpg)");
        skyPic.css('width', '40px');
        skyPic.css('height', '40px');
        skyPic.css('float', 'left')
    }
}

for (var x=0; x < width; x++) {
    for (var y=14; y < 15; y++) {
        var grassDirtPic = $("<div/>");
        grassDirtPic.addClass("grassDirtPic skyPic");
        bodyGame.append(grassDirtPic);
        grassDirtPic.css("background-image", "url(./images/grassdirt.jpg)");
        grassDirtPic.css('width', '40px');
        grassDirtPic.css('height', '40px');
        grassDirtPic.css('float', 'left')
    }
}

for (var x=0; x < width; x++) {
    for (var y=15; y < width; y++) {
        var dirtPic = $("<div/>");
        dirtPic.addClass("dirtPic skyPic");
        bodyGame.append(dirtPic);
        dirtPic.css("background-image", "url(./images/dirt.png)");
        dirtPic.css('width', '40px');
        dirtPic.css('height', '40px');
        dirtPic.css('float', 'left')
    }
}

/* for (var x=0; x < width; x++) {
    for (var y=0; y < width/3; y++) {
        var dirtPic;
        dirtPic.addClass("dirtPic");
        skyPic.prepend(dirtPic);
        dirtPic.css("background-image", "url(./images/dirt.png)");
        dirtPic.css('width', '40px');
        dirtPic.css('height', '40px');
        dirtPic.css('float', 'left')
    }
}
/*
$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container');
        }
    }
});

for (var x=0; x <= width; x++) {
    for (var y=0; y <= width; y++) {
        var cell = document.createElement("DIV");
        cell.setAttribute('class', 'cell');
        grid.appendChild(cell);
        cell.addEventListener("mousedown", changeEnable);
        cell.addEventListener("mouseover", changeColor);
        cell.addEventListener("mouseup", changeEnable);
    }
}
*/