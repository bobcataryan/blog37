Webcam.set({
    width:400,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("webcam");
Webcam.attach("#webcam");



function take_pic(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img class='img-responsive' id='result_img' src="+data_uri+">"
});
}



console.log('ml5.version',ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zKQX9wuBW/model.json',modelLoaded);


function modelLoaded(){
    console.log("modelLoaded");
}

function identify(){
    img=document.getElementById("result_img");
    classifier.classify(img,gotResult);
}

function gotResult(error, results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("objects").innerHTML=results[0].label;
    decimal=results[0].confidence.toFixed(3)*100;
    document.getElementById("accuracy").innerHTML=decimal+"%"
}
}





