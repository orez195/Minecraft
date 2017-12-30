var width = 15;
var bodyGame = $('.bodyGame');
var countDirt = 0;
var countGrassDirt = 0;
var countRock = 0;
var countLeaf = 0;
var countTree = 0;


// creating main body of the game

for (var x = 0; x < width; x++) { //creating divs for the layout of the game
    for (var y = 0; y < 15; y++) {
        var skyPic = $("<div/>");
        skyPic.addClass("varSky skyPic");
        bodyGame.append(skyPic);

        if ((x > 8 && x < 11) && (y > 0 && y < 4)) { //replacing the skypic class with all the feautures in the game
            skyPic.removeClass("varSky");
            skyPic.addClass("varLeaf");
        } if (x > 11) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varDirt");

        } if (x == 11) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varGrassDirt");

        } if ((x == 10) && (y > 11 && y < 15)) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varRock");

        } if ((x > 1 && x < 4) && (y > 2 && y < 7)) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varCloud");

        } if ((x == 1) && (y == 4)) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varCloud");

        } if ((x == 4) && (y == 5)) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varCloud");

        } if (x > 7 && x < 11 && y == 9) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varTree");

        } if ((x > 4 && x < 8) && (y > 7 && y < 11)) {
            skyPic.removeClass("varSky");
            skyPic.addClass("varLeaf");
        }

    }
}

$("#pickAxe").click(removeRocks); //setting up rock and pickaxe functionality
$("#rockBlock").click(putRock);

function removeRocks() {

    $(".varRock").on("click", function () {
        $(this).removeClass("varRock");
        $(this).addClass("varSky");
        countRock++;
        $("#rockBlock").text(countRock);
    })

    $(".varGrassDirt").off("click");
    $(".varDirt").off("click");   
    $(".varLeaf").off("click");
    $(".varTree").off("click");
}

function putRock() {
    if (countRock > 0) {
        $(".varSky").on("click", function () {
            $(this).removeClass("varGrassDirt");
            $(this).removeClass("varTree");
            $(this).removeClass("varLeaf");
            $(this).removeClass("varSky");
            $(this).addClass("varRock");
            countRock--;
            $("#rockBlock").text(countRock);
        })
    }
}


$("#shovel").click(removeDirtAndGrassDirt); //setting up dirt and grass dirt functionality
$("#grassDirtBlock").click(putGrassDirt);
$("#dirtBlock").click(putDirt);

function removeDirtAndGrassDirt() {

    $(".varGrassDirt").on("click", function () {
        $(this).removeClass("varGrassDirt");
        $(this).addClass("varSky");
        countGrassDirt++;
        $("#grassDirtBlock").text(countGrassDirt);
    })

    $(".varDirt").on("click", function () {
        $(this).removeClass("varDirt");
        $(this).addClass("varSky");
        countDirt++;
        $("#dirtBlock").text(countDirt);
    })

    $(".varRock").off("click");
    $(".varLeaf").off("click");
    $(".varTree").off("click");

}

function putDirt() {
    if (countDirt > 0) {
        $(".varSky").on("click", function () {
            $(this).removeClass("varGrassDirt");
            $(this).removeClass("varTree");
            $(this).removeClass("varLeaf");
            $(this).removeClass("varRock");
            $(this).removeClass("varSky");
            $(this).addClass("varDirt");
            countDirt--;
            $("#dirtBlock").text(countDirt);
        })
    }
}

function putGrassDirt() {
    if (countGrassDirt > 0) {
        $(".varSky").on("click", function () {
            $(this).removeClass("varDirt");
            $(this).removeClass("varTree");
            $(this).removeClass("varLeaf");
            $(this).removeClass("varRock");
            $(this).removeClass("varSky");
            $(this).addClass("varGrassDirt");
            countGrassDirt--;
            $("#grassDirtBlock").text(countGrassDirt);
        })
    }
}

$("#axe").click(removeLeafAndTree); //setting up leaf and tree functionality
$("#treeBlock").click(putTree);
$("#leafBlock").click(putLeaf);

function removeLeafAndTree() {

    $(".varLeaf").on("click", function () {
        $(this).removeClass("varLeaf");
        $(this).addClass("varSky");
        countLeaf++;
        $("#leafBlock").text(countLeaf);
    })

    $(".varTree").on("click", function () {
        $(this).removeClass("varTree");
        $(this).addClass("varSky");
        countTree++;
        $("#treeBlock").text(countTree);
    })

    $(".varGrassDirt").off("click"); 
    $(".varDirt").off("click");
    $(".varRock").off("click");

}

function putTree() {
    $(".varSky").on("click", function () {
        $(this).removeClass("varGrassDirt");
        $(this).removeClass("varDirt");
        $(this).removeClass("varRock");
        $(this).removeClass("varSky");
        $(this).removeClass("varLeaf");
        $(this).addClass("varTree");
        countTree--;
        $("#treeBlock").text(countTree);
    })
}

function putLeaf() {
    $(".varSky").on("click", function () {
        $(this).removeClass("varGrassDirt");
        $(this).removeClass("varDirt");
        $(this).removeClass("varTree");
        $(this).removeClass("varRock");
        $(this).removeClass("varSky");
        $(this).addClass("varLeaf");
        countLeaf--;
        $("#leafBlock").text(countLeaf);
    })
}

$(".tools").on("click", function () { //blue shadow for active boxes
    $(".tools").css("backgroundColor", "black");
    $(this).css("backgroundColor", "blue");
    $(".blocks").css("border", ".1px solid white");
})

$(".blocks").on("click", function () {
    $(".blocks").css("border", ".1px solid white");
    $(this).css("border", ".1px solid blue");
    $(".tools").css("backgroundColor", "black");
})

$("#resetBtn").click(function() {
    location.reload();
});