var canvas = new fabric.Canvas("myCanvas");
block_imagewidth = 30;
block_imageheight = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_object = "";

function player_uptdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_imagewidth);
        block_object.scaleToHeight(block_imageheight);
        block_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed together");
        block_imagewidth = block_imagewidth + 10;
        block_imageheight = block_imageheight + 10;
        document.getElementById("current_width").innerHTML = block_imagewidth;
        document.getElementById("current_height").innerHTML = block_imageheight;
    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift pressed together");
        block_imagewidth = block_imagewidth - 10;
        block_imageheight = block_imageheight - 10;
        document.getElementById("current_width").innerHTML = block_imagewidth;
        document.getElementById("current_height").innerHTML = block_imageheight;
    }
    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "87"){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keyPressed == "71"){
        new_image("ground.png");
        console.log("g");
    }
    if(keyPressed == "76"){
        new_image("light_green.png");
        console.log("l");
    }
    if(keyPressed == "84"){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keyPressed == "82"){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keyPressed == "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(keyPressed == "68"){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keyPressed == "85"){
        new_image("unique.png");
        console.log("u");
    }
    if(keyPressed == "67"){
        new_image("cloud.jpg");
        console.log("c");
    }

}

function up(){
    if(player_y >=0){
        player_y = player_y - block_imageheight;
        console.log('block height =' + block_imageheight);
        console.log('when up is pressed x =' + player_x, 'y =' + player_y);
        canvas.remove(player_object);
        player_uptdate();
    }
}

function down(){
    if(player_y <=500){
        player_y = player_y + block_imageheight;
        console.log('block height =' + block_imageheight);
        console.log('when down is pressed x =' + player_x, 'y =' + player_y);
        canvas.remove(player_object);
        player_uptdate();
    }
}

function left(){
    if(player_x > 0){
        player_x = player_x - block_imagewidth;
        console.log('block width =' + block_imagewidth);
        console.log('when left is pressed x =' + player_x, 'y =' + player_y);
        canvas.remove(player_object);
        player_uptdate();
    }
}
function right(){
    if(player_x <=850){
        player_x = player_x + block_imagewidth;
        console.log('block width =' + block_imagewidth);
        console.log('when right is pressed x =' + player_x, 'y =' + player_y);
        canvas.remove(player_object);
        player_uptdate();
    }
}