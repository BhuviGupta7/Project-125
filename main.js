difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(200, 150);

    canvas = createCanvas(550, 550);
    canvas.position(900, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized')
}

function draw() {
    background('#E6E6FA'); 

    textSize(difference);
    fill('#000000');
    text('Bhuvi', 50, 400);
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}
