video="";
status="";
function preload(){
    video=createVideo('video.mp4');
}

function setup(){
    canvas=createCanvas(370,370);
    canvas.center();
    video.hide();
   
    

    
}
function draw(){
    image(video,0,0,370,370);
    
}

function start()
{
objectdetector=ml5.objectDetector('cocossd',modeloaded);
document.getElementById('status').innerHTML="status - detecting objects";


}
function modeloaded()
{
    console.log("Model Is Loaded !!");
    status=True;
    video.loop();
    video.speed(1);
    video.volume(0);
}