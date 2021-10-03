var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(710);
        block_image_object.scaleToHeight(410);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
    });
}

function playSound(){
   x.play();
}
