var elementsTable = [];
var elementsChossen = [];
var answer = "";
var y = 0;
var k = 0;
var point = 0;
container = document.getElementsByClassName("symbol");

for(x=0; x<container.length; x++){
    if(container[x].textContent != "DE" 
    &&container[x].textContent != "DEL" 
    &&container[x].textContent != "57-71" 
    && container[x].textContent != "89-103"){
    elementsTable[y] = container[x];
    y++
}
}

function randomElements(){
    if(elementsChossen.length < elements.length){
    randomNumer = Math.floor(Math.random() * elements.length) ;
    answer = elements[randomNumer][1];
    randomElement = elementsTable[randomNumer].parentNode ;
    if(elementsChossen.includes(randomNumer)){
        randomElements();
    }
    else{
        randomElement.setAttribute("class","checked");
        elementsChossen.push(randomNumer);
        }
        console.log(randomElement);
        console.log(randomElement);
        console.log("odp "+answer);
    }
}


easy = document.getElementById("easy");
medium = document.getElementById("medium");
hard = document.getElementById("hard");
resetBtn = document.getElementById("resetBtn");

easy.addEventListener("click",gameStart);
medium.addEventListener("click",gameStart);
hard.addEventListener("click",gameStart);
resetBtn.addEventListener("click",resetGame);

function resetGame(){
    for(x = 0; x < elements.length; x++){
        elementsTable[x].parentNode.classList.remove("goodAnswer");
        elementsTable[x].parentNode.classList.remove("badAnswer");
        elementsTable[x].parentNode.classList.remove("checked");
        elementsTable[x].parentNode.classList.add("grey");
        elementRandom = [];
    }
}

function gameStart(e){
    console.log(e.target.id);
    randomElements();
    document.getElementById("startButton").classList.add("hide");
    document.getElementById("resetBtn").classList.remove("hide");
    document.getElementById("inputAuto").classList.remove("hide");
}
function checkQestion(event){
    if(event.keyCode == 13){
    
        inputAuto = document.getElementById("inputAuto").value;
        if(inputAuto == answer){
            randomElement.classList.remove("checked");
            randomElement.classList.add("goodAnswer");
            point++;
        }
        else{
            randomElement.classList.remove("checked");
            randomElement.classList.add("badAnswer");
        }
        statistic.innerHTML = "<h1>Liczba punków: "+point + "</h1>" ;
        
        randomElements();
    }
}

