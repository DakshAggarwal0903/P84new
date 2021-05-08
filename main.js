canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1wid = 50;
car1height = 100;
car1img = "car1.png"
car1_x = 10;
car1_y = 10;
background_img = "Bg.jpg"

car2wid =50;
car2height = 100;
car2img = "car2.png"
car2_x = 10;
car2_y = 100;
function screenload(){
    nimg = new Image();
    nimg.onload = uploadbg;
    nimg.src = background_img;
    nimgc1 = new Image();
    nimgc1.onload = uploadcar1;
    nimgc1.src = car1img;
    nimgc2 = new Image();
    nimgc2.onload = uploadcar2;
    nimgc2.src = car2img;
  }
  function uploadbg(){
    ctx.drawImage(nimg,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(nimgc1,car1_x, car1_y ,car1height, car1wid);
}
function uploadcar2(){
    ctx.drawImage(nimgc2, car2_x, car2_y, car2height, car2wid);
}
window.addEventListener("keydown",kdn);
function kdn(e){
    keypress = e.keyCode;
    console.log(keypress);
if(keypress == '38'){
    c1up();
    console.log("Up arrow key");
}
if(keypress == '40'){
    c1down();
    console.log("Down arrow key");
}
if(keypress == '37'){
    c1left();
    console.log("Left arrow key");
}
if(keypress == '39'){
    c1right();
    console.log("Right arrow key");
}
if(keypress == '87'){
    c2up();
    console.log("Up arrow key");
}
if(keypress == '83'){
    c2down();
    console.log("Down arrow key");
}
if(keypress == '65'){
    c2left();
    console.log("   ");
}
if(keypress == '68'){
    c2right();
    console.log("D key");
}
if(car1_x > 700){
    console.log("Car 1 won");
    document.getElementById("game_status").innerHTML = "Car 1 Won!!!";
}
if(car2_x > 700){
    console.log("Car 2 won");
    document.getElementById("game_status").innerHTML = "Car 2 Won!!!";
}
}
function c1up(){
    
    if(car1_y >=0){
        car1_y = car1_y - 10;
        console.log("When Up key is pressed, x = "+car1_x+" and y = "+car1_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function c1down(){
    
    if(car1_y <=500){
        car1_y = car1_y + 10;
        console.log("When down key is pressed, x = "+car1_x+" and y = "+car1_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function c1left(){
    
    if(car1_x >=0){
        car1_x = car1_x - 10;
        console.log("When left key is pressed, x = "+car1_x+" and y = "+car1_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function c1right(){
    
    if(car1_x <=710){
        car1_x = car1_x + 10;
        console.log("When right key is pressed, x = "+car1_x+" and y = "+car1_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function c2up(){
    
    if(car2_y >=0){
        car2_y = car2_y - 10;
        console.log("When W key is pressed, x = "+car2_x+" and y = "+car2_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function c2down(){
    
    if(car2_y <=500){
        car2_y = car2_y + 10;
        console.log("When S key is pressed, x = "+car2_x+" and y = "+car2_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function c2left(){
    
    if(car2_x >=0){
        car2_x = car2_x - 10;
        console.log("When A key is pressed, x = "+car2_x+" and y = "+car2_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function c2right(){
    
    if(car2_x <=710){
        car2_x = car2_x + 10;
        console.log("When D key is pressed, x = "+car2_x+" and y = "+car2_y)
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
if(car1_x > 700){
    console.log("Car 1 won");
    document.getElementById("game_status").innerHTML = "Car 1 Won!!!";
}
if(car2_x > 700){
    console.log("Car 2 won");
    document.getElementById("game_status").innerHTML = "Car 2 Won!!!";
}