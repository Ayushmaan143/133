

Status = "";
car_image = "";

function preload(){
    car_image = loadImage("https://www.cnet.com/a/img/resize/080d138f746aa5f432605731a65ef2ec12fd0091/hub/2019/01/13/6ae85e42-8420-4404-82be-7cc48e28586b/2020-toyota-supra-ogi-1.jpg?auto=webp&fit=crop&height=675&width=1200");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(car_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(car_image,0,0,640,350);
}