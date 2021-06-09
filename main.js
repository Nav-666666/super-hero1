var canvas = new fabric.Canvas('mycanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_image = "";

function player_update()
fabric.image.fromURL("player.png", function (img) {
    player_image = Img;

    player_image.scaleToWidth(150);
    player_image.scaleToHeight(150);
    player_image.set({
        img ="https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing"
    });
    CanvasGradient.add(player_image);

    function new_image(get_image) {
        fabric.image.fromURL(get_image, function (img) {
            block_image_object = Img;
    
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top: player_y,
                left: player_x
            });
            canvas.add(block_image_object);
        });
    
    }
});