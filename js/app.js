var elementsTable = [];
var elementsChossen = [];
var answer = "";
var y = 0;
var k = 0;
var point = 0;
var timer = 0 ; 
var reward = 0;

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
        point = 0;
        statistic.innerHTML = "<h1>Liczba punków: "+point + "</h1>" ;
        if(demo.getAttribute("class") != "hide"){
            countDownDate = new Date().getTime()+60*1000;
        }
    }
}

function gameStart(e){
    console.log(e.target.id);
    randomElements();
    document.getElementById("startButton").classList.add("hide");
    document.getElementById("resetBtn").classList.remove("hide");
    document.getElementById("inputAuto").classList.remove("hide");
    document.getElementById("demo").classList.remove("hide");
    document.getElementById("licz").classList.remove("hide");

    if(demo.getAttribute("class") != "hide"){
        countDownDate = new Date().getTime()+60*1000;
    }


}
function checkQestion(event){
    if(event.keyCode == 13){
    
        inputAuto = document.getElementById("inputAuto").value;
        if(inputAuto == answer){
            randomElement.classList.remove("checked");
            randomElement.classList.add("goodAnswer");
            point++;
            
            document.getElementById("slajd").classList.remove("hide");


            
        }
        else{
            randomElement.classList.remove("checked");
            randomElement.classList.add("badAnswer");
        }
        statistic.innerHTML = "<h1>Liczba punków: "+point + "</h1>" ;
        
        randomElements();
    }
}

// Set the date we're counting down to
var countDownDate = new Date().getTime()+60*60*1000;
	  
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % ( 30)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
  
  
  
  

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





