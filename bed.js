Status = "";
bed_image = "";

function preload(){
    bed_image = loadImage("https://cdn.shopify.com/s/files/1/0044/1208/0217/products/MARTHURQBWOSTRWNT-1_900x.jpg?v=1644997045");
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
    object_Detector.detect(bed_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(bed_image,0,0,640,350);
}