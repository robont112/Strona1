var pierwiastki = [];
var y = 0;
container = document.getElementsByClassName("symbol");
// console.log(container.length);
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

for(x = 0 ;  x < container.length ;  x++){

    if(container[x].textContent == pierwiastki[random])
    wylosowany = container[x];
}
console.log(wylosowany)
wylosowany = wylosowany.parentNode ;

wylosowany.setAttribute("class","checked");
console.log(wylosowany);

 