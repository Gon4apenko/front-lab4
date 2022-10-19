const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

console.log(randColor());


const color = document.getElementById('education');

color.addEventListener('click', function onClick(event) {

    const e = document.getElementById('education');
    e.style.backgroundColor = randColor();
    e.style.color = randColor();
});


const color1 = document.querySelector('.hobby1');

color1.addEventListener('click', function onClick(event) {

    const e = document.querySelector('.hobby1');
    e.style.backgroundColor = randColor();
    e.style.color = randColor();
});

function zoomin(){
    var myImg = document.getElementById("barcelona");
    var currWidth = myImg.clientWidth;
    if(currWidth == 500){
        alert("Maximum zoom-in level reached.");
    } else{
        myImg.style.width = (currWidth + 50) + "px";
    } 
}
function zoomout() {
    var myImg = document.getElementById("barcelona");
    var currWidth = myImg.clientWidth;
    if(currWidth == 50){
        alert("Maximum zoom-out level reached.");
    } else{
        myImg.style.width = (currWidth - 50) + "px";
    }
}

function addImg() {
    let image = document.getElementById("barcelona")
    image.style.display = 'block';
}

function deleteImg() {
    let image = document.getElementById("barcelona");
    image.style.display = "none";
}