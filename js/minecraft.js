var width = 15;
var bodyGame = $('.bodyGame');

// creating main body of the game

for (var x=0; x < width; x++) {
    for (var y=0; y < 11; y++) {
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
    for (var y=11; y < 12; y++) {
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
    for (var y=12; y < width; y++) {
        var dirtPic = $("<div/>");
        dirtPic.addClass("dirtPic skyPic");
        bodyGame.append(dirtPic);
        dirtPic.css("background-image", "url(./images/dirt.png)");
        dirtPic.css('width', '40px');
        dirtPic.css('height', '40px');
        dirtPic.css('float', 'left')
    }
}