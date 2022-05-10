nazwa = document.getElementById("nazwa");
 console.log(nazwa);

 nazwa.addEventListener("click" , animation);
 
 function animation(e){
     console.log(e.target);
     nazwa.classList.add('animate__animated', 'animate__bounceOutLeft');
    }