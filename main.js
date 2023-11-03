song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song_song1 = "";
song_song2 = "";



function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload() {
    song1 = loadSound("Music1(Jackpot).mp3");
    song2 = loadSound("Music2(Xenogenesis).mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
    
    fill("#00CCFF");
    stroke("#00CCFF");

     song_song1 = song1.isPlaying();

                 if (scoreLeftWrist > 0.2) {
     
                circle(leftWristX,leftWristY,40);

    song2.stop();

    if (song_song1 == false) {

        song1.play();

    } else {
        document.getElementById("song_id").innerHTML = "Song Name: Jackpot by TheFatRat";
    }
        
        }
        fill("#00CCFF");
    stroke("#00CCFF");
        song_song2 = song2.isPlaying();

        if (scoreRightWrist > 0.2) {
     
            circle(rightWristX,rightWristY,40);

    song1.stop();

if (song_song2 == false) {

    song2.play();

} else {
    document.getElementById("song_id").innerHTML = "Song Name: Xenogenesis by TheFatRat";
}
    
    }

    }
    
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
 
function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);  
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist =" + scoreRightWrist +"scoreLeftWrist =" + scoreLeftWrist )

        leftWristX = results[0].pose.leftWrist.x; 
        leftWristY = results[0].pose.leftWrist.y; 
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.leftWrist.x; 
        rightWristY = results[0].pose.leftWrist.y; 
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

    }
}
