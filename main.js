video="";
status="";
objects=[];
function preload(){
    video=createVideo('video.mp4');
}
function setup(){
    canvas=createCanvas(370,370);
    canvas.center();
    video.hide();
}
function start()
{
objectdetector=ml5.objectDetector('cocossd',modeloaded);
document.getElementById('status').innerHTML="status - detecting objects";
}
function modeloaded()
{
    console.log("Model Is Loaded !!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
} 
function gotresults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(video,0,0,370,370);
if (status!=""){
    objectdetector.detect(video,gotresults);
    for(index=0;index<objects.length;index++){
       document.getElementById("status").innerHTML = "Status : Detected Objects";
       document.getElementById("number_of_objects").innerHTML = "No. Of Objects Detcted Are : " + objects.length;
       fill("#FF0000");
       percent=floor(objects[index].confidence*100);
       text(objects[index].label + " " + percent + "%",objects[index].x,objects[index].y);
       nofill();
       stroke('#FF0000');
       rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height);
    }
}
}
