Lipstick_x= 0
Lipstick_y= 0


function preload(){
Lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
};

function setup(){
canvas= createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

Posenet= ml5.poseNet(video, modelLoaded);
Posenet.on('pose', gotresult);
};

function modelLoaded(){
console.log("Model Loaded")
}

function gotresult(results){

if(results.length> 0){
Lipstick_x = results[0].pose.nose.x - 25;
Lipstick_y = results[0].pose.nose.y + 15;
console.log(results);
console.log("lipstick x =" + Lipstick_x);
console.log("lipstick y =" + Lipstick_y);
};
};

function take_snapshot(){
save('filter_image.png');
};

function draw(){
image(video, 0, 0, 300, 300)
image(Lipstick, Lipstick_x, Lipstick_y, 50, 50)
}