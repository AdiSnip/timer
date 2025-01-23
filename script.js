let sec = document.querySelector("#sec");
let time = document.querySelector(".time")
let min = document.querySelector("#min");
let hour = document.querySelector("#hour");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let timeloop;
let audio = document.querySelector("#timeraudio");

start.addEventListener("click",()=>{
    if (min.value>59 || sec.value>59 || hour.value>24 || min.value<0 || sec.value<0 || hour.value<0) {
        alert("you inputted wrong value")
        hour.value = 0;
        min.value = 0;
        sec.value = 0;
    }
    if(hour.value == 0 && min.value == 0 && sec.value == 0){
      alert("input time")
    }else if(hour.value > 0 || min.value > 0 || sec.value > 0){
        
        timeloop = setInterval(()=>{
            if (hour.value == 0 && min.value == 0 && sec.value == 0) {
                clearInterval(timeloop);
                audio.play();
            }else{
               //for min
               if (sec.value<=0 && hour.value>=0 && min.value>0) {
                min.value--
                }
                // for hour
                if(min.value <= 0 && sec.value<=0){
                    
                    if (hour.value>0) {
                        hour.value--;
                        min.value = 59
                    }
                }
                
                // for sec
                if(sec.value <= 0){
                    sec.value = 59;
                }else{
                    sec.value -= 1;
                }
            }
            
            
        },1000)
    }
     
})
stop.addEventListener("click",()=>{
    clearInterval(timeloop);
})
reset.addEventListener("click",()=>{
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
    clearInterval(timeloop);
})