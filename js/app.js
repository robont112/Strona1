var startPoint = "x";
var remis = 0;
var p = [ 1, 2, 3, 4, 5];
console.log(p[2]);
table.addEventListener("click",clickField);
function  clickField(e){
  
    if (e.target.innerHTML == ""){
        remis++;

    e.target.innerHTML = startPoint;
    if (startPoint == "x"){
        startPoint = "o";
    } else{
        startPoint = "x"
    }
    for(x=1 ; x< 10 ; x++ ){
        p[x] = document.getElementById("p"+x).innerHTML;
    }


    }
// p1 = document.getElementById("p1").innerHTML;
// p2 = document.getElementById("p2").innerHTML;
// p3 = document.getElementById("p3").innerHTML;
// p4 = document.getElementById("p4").innerHTML;
// p5 = document.getElementById("p5").innerHTML;
// p6 = document.getElementById("p6").innerHTML;
// p7 = document.getElementById("p7").innerHTML;
// p8 = document.getElementById("p8").innerHTML;
// p9 = document.getElementById("p9").innerHTML;

    wyn1 = p[1]+p[2]+p[3];
    wyn2 = p[4]+p[5]+p[6];
    wyn3 = p[7]+p[8]+p[9];
    wyn4 = p[1]+p[4]+p[7];
    wyn5 = p[2]+p[5]+p[8];
    wyn6 = p[3]+p[6]+p[9];
    wyn7 = p[1]+p[5]+p[9];
    wyn8 = p[3]+p[5]+p[7];
    console.log(wyn1);

 
    if(wyn1 == "xxx"){  
      
        for(x=1 ; x< 4 ; x++ ){

            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>' ;
          }
          table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";


    }
    if(wyn2 == "xxx"){  
        for(x=4 ; x< 7 ; x++ ){

            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>' ;
     

    }
    table.removeEventListener("click",clickField);
    document.getElementById("resetButton").className = "visibleButton";
}
    if(wyn3 == "xxx"){  
        for(x=7 ; x< 10 ; x++ ){

            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>' ;
  

    }
    table.removeEventListener("click",clickField);
    document.getElementById("resetButton").className = "visibleButton";
}
    if(wyn4 == "xxx"){  
        for(x=1 ; x<8 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
    }

        if(wyn5 == "xxx"){
            for(x=2 ; x<9 ; x+=3){
                document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
            }
            table.removeEventListener("click",clickField);
            document.getElementById("resetButton").className = "visibleButton";
        }


    if(wyn6 == "xxx"){  
        for(x=3 ; x<10 ; x+=3){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";
    }

    }
    if(wyn7 == "xxx"){  
        for(x=1 ; x<10 ; x+=2){
            document.getElementById("p"+x).innerHTML = '<div class="winColor">x</div>'
        }
        table.removeEventListener("click",clickField);
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn8 == "xxx"){  
        document.getElementById("p3").innerHTML = '<div class="winColor">x</div>' ;
        document.getElementById("p5").innerHTML = '<div class="winColor">x</div>' ;
        document.getElementById("p7").innerHTML = '<div class="winColor">x</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    // ooo
    if(wyn1 == "ooo"){  
        document.getElementById("p1").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p2").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p3").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn2 == "ooo"){  
        document.getElementById("p4").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p6").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn3 == "ooo"){  
        document.getElementById("p7").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p8").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p9").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn4 == "ooo"){  
        document.getElementById("p1").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p4").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p7").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn5 == "ooo"){  
        document.getElementById("p2").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p8").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn6 == "ooo"){  
        document.getElementById("p3").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p6").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p9").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn7 == "ooo"){  
        document.getElementById("p1").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p9").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";

    }
    if(wyn8 == "ooo"){  
        document.getElementById("p3").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p5").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("p7").innerHTML = '<div class="winColor">o</div>' ;
        document.getElementById("resetButton").className = "visibleButton";
    }
    resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click",resetButtonF)
    function resetButtonF(e) {
        document.getElementById("p1").innerHTML = "";
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p3").innerHTML = "";
        document.getElementById("p4").innerHTML = "";
        document.getElementById("p5").innerHTML = "";
        document.getElementById("p6").innerHTML = "";
        document.getElementById("p7").innerHTML = "";
        document.getElementById("p8").innerHTML = "";
        document.getElementById("p9").innerHTML = "";
        document.getElementById("resetButton").className = "invisibleButton";
        startPoint = "x";
        remis = 0 ;

    }
    if(remis == 9){
        document.getElementById("resetButton").className = "visibleButton";
    }
    
    


