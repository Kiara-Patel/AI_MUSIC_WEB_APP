scorelw=0
scorerw=0
leftWristx=0;
rightWristx=0
leftWristy=0;
rightWristy=0

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(900,600)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}

function modelLoaded(){
console.log("Model is Loaded")
}

function gotPoses(results)
{
if(results.length>0){
console.log(results)
leftWristx=100+results[0].pose.leftWrist.x;
leftWristy=results[0].pose.leftWrist.y
scorelw=results[0].pose.keypoints[9].score
rightWristx=results[0].pose.rightWrist.x
scorerw=results[0].pose.keypoints[10].score
rightWristy=results[0].pose.rightWrist.y
}
}

function draw(){
image(video,0,0,900,600)
stroke("black")
fill("green")
if(scorelw>0.2){
circle(leftWristx, leftWristy, 20)
numberlw=Number(leftWristy)
rd=floor(numberlw)
volume=rd/500
song.setVolume(volume)
document.getElementById("volume").innerHTML="Volume= "+volume

}
}




function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
    }