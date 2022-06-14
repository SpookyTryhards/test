img = "";
status = "";

function setup()
{
canvas = createCanvas(650, 500);
canvas.center();

objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function draw()
{
image(img, 0, 0, 650, 500);
fill("#596166");
text("Dog", 45, 75);
noFill();
stroke("#596166");
rect(30, 60, 450, 350);

fill("#596166");
text("Cat", 320, 100);
noFill();
stroke("#596166");
rect(300, 90, 270, 320);
}

function preload()
{
img = loadImage("dog_cat.jpg");
}

function modelLoaded()
{
console.log("Model Loaded.");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if (error) {
    console.log(error);

}
else {
    console.log(results);
}
}

