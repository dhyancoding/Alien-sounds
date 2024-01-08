
function Start_Classification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Xmm9MNY4r/model.json", model_ready)
}

function model_ready(){
    classifier.classify(getResults)
}

function getResults(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("result_label").innerHTML = "I can hear " + result[0].label
        document.getElementById("confidence_label").innerHTML = "Accuracy " + (result[0].confidence*100).toFixed(2) + " %"
        a1 = document.getElementById("a1")
        a2 = document.getElementById("a2")
        a3 = document.getElementById("a3")
        a4 = document.getElementById("a4")

        if(result[0].label == "Clap"){
            a1.src = "aliens-01.gif"
            a2.src = "aliens-02.png"
            a3.src = "aliens-03.png"
            a4.src = "aliens-04.png"
        }

        if(result[0].label == "Snap"){
            a1.src = "aliens-01.png"
            a2.src = "aliens-02.gif"
            a3.src = "aliens-03.png"
            a4.src = "aliens-04.png"
        }

        if(result[0].label == "Click"){
            a1.src = "aliens-01.png"
            a2.src = "aliens-02.png"
            a3.src = "aliens-03.gif"
            a4.src = "aliens-04.png"
        }

        if(result[0].label == "Background Noise"){
            a1.src = "aliens-01.png"
            a2.src = "aliens-02.png"
            a3.src = "aliens-03.png"
            a4.src = "aliens-04.gif"
        }
    }
}

let sky = document.querySelector('.sky');

function createDiv(size) {
  
  let circle = document.createElement('div');
  circle.classList.add('circle');
  
  let randRange5 = Math.floor(Math.random() * 5) + 1;
  circle.classList.add(`blink_${randRange5}`);
  
  let widthAndHeight = random(size, 'px');
  circle.style.height = circle.style.width = widthAndHeight;
  
  circle.style.left = random(window.innerWidth, 'px');
  circle.style.top = random(window.innerHeight, 'px');
  // circle.style.backgroundColor = randomColor();
  
  sky.appendChild(circle);
}

let [starSlider, sizeSlider] = document.querySelectorAll('.slider');
let [stars, size] = document.querySelectorAll('.value');

[starSlider, sizeSlider].forEach(slider => {
  slider.addEventListener('change', () => {
    stars.textContent = starSlider.value;
    size.textContent = sizeSlider.value;
  });
  slider.addEventListener('change', () => {
    paintStars(starSlider.value, sizeSlider.value);
  });
});



function paintStars(stars, size) {
  while (sky.firstChild) {
    sky.removeChild(sky.firstChild);
  }
  for (let i = 0; i < stars; i++) {
    createDiv(size);
  }
}


function random(range, unit) {
  let randNum = Math.floor(Math.random() * range) + 1;
  return `${randNum}${unit}`;
}

paintStars(50, 5);