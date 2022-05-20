var pierwiastki = [];
var y = 0;
var odp1 = "" ;
container = document.getElementsByClassName("symbol");
// console.log(container.length);

function randomElement(){

for(x=0; x<container.length; x++){
        if(container[x].textContent != "DE" 
        &&container[x].textContent != "DEL" 
        &&container[x].textContent != "57-71" 
        && container[x].textContent != "89-103"){
        pierwiastki[y] = container[x].textContent;
        y++
    }
}
for(x=0; x<pierwiastki.length; x++){
    // console.log("x;" +x+ ","+pierwiastki[x]);
}
random = Math.floor(Math.random() * pierwiastki.length) ;
console.log(pierwiastki[random]);

odp1 = pierwiastek[random][1];
console.log("odp1:"+odp1);

for(x = 0 ;  x < container.length ;  x++){

    if(container[x].textContent == pierwiastki[random])
    wylosowany = container[x];
}
console.log(wylosowany)
wylosowany = wylosowany.parentNode ;

wylosowany.setAttribute("class","checked");
console.log(wylosowany);
}

easy = document.getElementById("easy");
medium = document.getElementById("medium");
hard = document.getElementById("hard");

easy.addEventListener("click",gameStart);
medium.addEventListener("click",gameStart);
hard.addEventListener("click",gameStart);

function gameStart(e){
    console.log(e.target.id);
    randomElement();
    startBtn.classList.add("hide");
    inputAuto.classList.remove("hide");

}
function checkQestion(event){
if(event.keyCode == 13){

    console.log("działa");



    inputAuto = document.getElementById("inputAuto").value;
    console.log(inputAuto)

    random = Math.floor(Math.random() * pierwiastki.length) ;
    console.log(pierwiastki[random]);
    
    odp1 = pierwiastek[random][1];
    console.log("odp1:"+odp1);
    
    for(x = 0 ;  x < container.length ;  x++){
    
        if(container[x].textContent == pierwiastki[random])
        wylosowany = container[x];
    }
    console.log(wylosowany)
    wylosowany = wylosowany.parentNode ;
    
    wylosowany.setAttribute("class","checked");
    console.log(wylosowany);
    
    if(odp1 == inputAuto){
        wylosowany.classList.remove("checked");
     
        wylosowany.classList.add("goodAnswer");
    
        inputAuto = document.getElementById("inputAuto").value;
        console.log(inputAuto)
    }
    if(odp1 != inputAuto){
        wylosowany.classList.remove("checked");
     
        wylosowany.classList.add("badAnswer");
    
        inputAuto = document.getElementById("inputAuto").value;
        console.log(inputAuto)
    
        
    }
    
   


}
    
    
}









