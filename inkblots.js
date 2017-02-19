var mouseX1;
var mouseY1;
var x = 0;
var y = 0;
var dx;
var dy;
var px = 0;
var py = 0;
var pdx;
var pdy;
var weight;
var easing = 0.2;
var mouseR = 1;
var colour = 0;
    
function setup(){
    
   createCanvas(400, 500);
   //stroke(255);
   background(210, 180, 140, 180);
   
}


function draw(){
    
    //background(192, 64, 0);
    
    stroke(0);
    strokeWeight(1);
    fill(255, 20, 0);
    ellipse(100, 400, 30, 30);
    fill(0);
    ellipse(150, 400, 30, 30);
    fill(255);
    ellipse(200, 400, 30, 30);
    fill(128);
    
    rect(379, 0, 20, 20);
    
    strokeCap(SQUARE);
    strokeWeight(4);
    line(382, 3, 397, 18);
    line(382, 18, 397, 3);
	
	dx = mouseX - x;
	x += dx*easing;
    dy = mouseY - y;
	y += dy*easing;
	
	pdx = pmouseX - px;
	px += pdx*easing;
    pdy = pmouseY - py;
	py += pdy*easing;  
    
    if(mouseIsPressed){
        if((mouseY > 385) &&  (mouseY < 415) && (mouseX > 85) && (mouseX < 115)){
          colour = 'red';
        } else if((mouseY > 385) &&  (mouseY < 415) && (mouseX > 135) && (mouseX < 165)){
          colour = 0;
        } else if((mouseY > 385) &&  (mouseY < 415) && (mouseX > 185) && (mouseX < 215)){
          colour = 255;
        } else if((mouseY <= 20) && (mouseX >= 380)){
            setup();
        } else{
        
        stroke(colour);
        strokeCap(ROUND);

		
		weight = 1/dist(x, y, px, py);
		
        strokeWeight(weight);
		
        line(x, y, px, py);
		
		
        }
    }
    


}


function mouseReleased(){
    
    mouseR=1;

}
