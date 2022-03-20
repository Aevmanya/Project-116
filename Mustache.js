Mustache_x= 0
Mustache_y= 0


function preload(){
Mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
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
Mustache_x = results[0].pose.nose.x - 27;
Mustache_y = results[0].pose.nose.y;
console.log(results);
console.log("mustache x =" + Mustache_x);
console.log("mustache y =" + Mustache_y);
};
};

function take_snapshot(){
save('filter_image.png');
};

function draw(){
image(video, 0, 0, 300, 300)
image(Mustache, Mustache_x, Mustache_y, 50, 50)
}