video="";

function preload(){
    video=createVideo('video.mp4');
}

function setup(){
    canvas=createCanvas(370,370);
    canvas.center();
   
    

    
}
function draw(){
    image(video,0,0,370,370);
}

function start()
{

}