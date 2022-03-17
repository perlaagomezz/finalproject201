'use strict'

console.log('hello friends');

(function(){
    var bCanPreview = true; 
    
    var canvas = document.getElementById('picker');
    var ctx = canvas.getContext('2d');

  
    var image = new Image();
    image.onload = function () {
        ctx.drawImage(image, 0, 0, image.width, image.height); 
    }

    
    var imagesrc="images/colorwheel2.png";
    switch ((canvas).attr('var')) {
        case '2':
            imagesrc="images/colorwheel2.png";
            break;
    
    }
    image.src = imageSrc;

    $('#picker').mousemove(function(e) { 
        if (bCanPreview) {
          
            var canvasOffset = $(canvas).offset();
            var canvasX = Math.floor(e.pageX - canvasOffset.left);
            var canvasY = Math.floor(e.pageY - canvasOffset.top);

           
            var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
            var pixel = imageData.data;

                        var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
            $('.preview').css('backgroundColor', pixelColor);

           
            $('#rVal').val(pixel[0]);
            $('#gVal').val(pixel[1]);
            $('#bVal').val(pixel[2]);
            $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);

            var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
            $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6));
        }
    });
    $('#picker').click(function(e) { 
        bCanPreview = !bCanPreview;
    });
    $('.preview').click(function(e) { 
        $('.colorpicker').fadeToggle("slow", "linear");
        bCanPreview = true;
    });
});

