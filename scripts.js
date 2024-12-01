/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// It is the function that draws fractal tree
// We use recursion, each time we rotate and do the same thing
var myCanvas = document.getElementById("my_canvas");
var pic = myCanvas.getContext("2d");
function draw(startX, startY, len, angle, branchWidth) {
    pic.lineWidth = branchWidth;
    pic.beginPath();
    pic.save();
    pic.strokeStyle = "white";
    pic.fillStyle = "white";
    pic.translate(startX, startY);
    pic.rotate(angle * Math.PI/180);
    pic.moveTo(0, 0);
    pic.lineTo(0, -len);
    pic.stroke();  
    // The if below is used to make sure that it does stop at some point
    // Also, we can choose when to stop
    if(len < 5) {
        pic.restore();
        return;
    } 
    draw(0, -len, len*0.8, angle-15, branchWidth*0.7);
    draw(0, -len, len*0.8, angle+15, branchWidth*0.7);
    pic.restore();
    
    }
    draw(500, 700, 140, 2 , 20)
    
//In this function, we draw 2 branches, and then rotate at some angle, for each branch recusivly
// Picture differs depending on initial inputs, we cheeched a lot of variants, and in the end liked it