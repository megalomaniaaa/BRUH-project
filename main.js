noseX=0
noseY=0
function preload()
{
    clown_nose=loadImage("https://i.postimg.cc/KY8LXzbp/Seek-Png-com-nose-png-270298.png")
}
function setup()
{
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}

function modelLoaded()
{
    console.log("modelloaded")
}

function draw()
{
    image(video,0,0,300,300)
    image(clown_nose,noseX-80,noseY-80,150,150)
    //fill("red")
    //stroke("black")
    //circle(noseX,noseY,20)
}

function take_snapshot()
{
    save("filterimage.png")
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("nosex="+noseX)
        console.log("nosey="+noseY)
    }
}