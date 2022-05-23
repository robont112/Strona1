var pierwiastki = [];
var elementRandom = [];
var odp1 = "";
var y = 0;
var k = 0;
var point = 0;
container = document.getElementsByClassName("symbol");

for(x=0; x<container.length; x++){
    if(container[x].textContent != "DE" 
    &&container[x].textContent != "DEL" 
    &&container[x].textContent != "57-71" 
    && container[x].textContent != "89-103"){
    pierwiastki[y] = container[x];
    y++
}

}
function randomElements(){
    if(elementRandom.length < pierwiastek.length){
        random = Math.floor(Math.random() * pierwiastek.length) ;
    odp1 = pierwiastek[random][1];
    wylosowany = pierwiastki[random].parentNode ;
    if(elementRandom.includes(random)){
        randomElements();
    }else{
        wylosowany.setAttribute("class","checked");
    elementRandom.push(random);
     console.log(elementRandom);

    }
    }
}


easy = document.getElementById("easy");
medium = document.getElementById("medium");
hard = document.getElementById("hard");

easy.addEventListener("click",gameStart);
medium.addEventListener("click",gameStart);
hard.addEventListener("click",gameStart);


function gameStart(e){
    console.log(e.target.id);
    randomElements();
    startBtn.classList.add("hide");
    inputAuto.classList.remove("hide");
}

function checkQestion(event){
    if(event.keyCode == 13){

        inputAuto = document.getElementById("inputAuto").value;
        if(inputAuto == odp1){
            wylosowany.classList.remove("checked");
            wylosowany.classList.add("goodAnswer");
        }
        else{
            wylosowany.classList.remove("checked");
            wylosowany.classList.add("badAnswer");
        }
        randomElements();
    }
}

if(elementRandom.length == pierwiastki.length){

}