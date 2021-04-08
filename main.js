var leftx=0;
var lefty=0;
var rightx=0;
var righty=0;
var nosex=0;
var nosey=0;
var difference=0;
function preload(){
}

function setup(){
canvas=createCanvas(600,600);
canvas.position(1000,200);
video=createCapture(VIDEO);
video.position(200,300);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("model has been loaded.")
}

function gotposes(result){
        if(result.length>0){
            console.log(result);
             leftx= result[0].pose.leftWrist.x;
             lefty= result[0].pose.leftWrist.y;
            rightx= result[0].pose.rightWrist.x;
            righty= result[0].pose.rightWrist.y;
            nosex= result[0].pose.nose.x;
            nosey= result[0].pose.nose.y;
            difference=floor(leftx-rightx) ;
            console.log(difference);
            console.log("This is left wrist x "+ leftx);
            console.log("This is left wrist y "+ lefty);
            console.log("This is right wrist x "+ rightx);
            console.log("This is right wrist y "+ righty);
           document.getElementById("result").innerHTML=difference;
        }
}

function draw(){
    background("teal");
    fill("aqua");
   square(nosex,nosey,difference);
}