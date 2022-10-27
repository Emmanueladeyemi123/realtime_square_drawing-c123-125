noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
    background("grey");
    fill("blue");
    stroke("yellow");
    square(noseX,noseY,difference);
    document.getElementById("spuare_sides").innerHtml="Width and height of the square will be= "+difference+"px";
}
function modelLoaded() {
    console.log("posenet has started");
}
function gotPoses(results) {
if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Xposition of nose is "+noseX+"Y position of nose is "+noseY);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
        console.log("Xposition of leftwrist is "+leftwristX+"X position of rightwrist is "+rightwristX+"distance between them is"+difference);


}

}