const clock = document.querySelector(".clock");

let sec= 0;
let min= 0;
let hr= 0;
let intervalId;

let second = 0;
const startStopwatch = () =>{
   intervalId= setInterval(()=>{
    if (sec < 59) {
        sec++;
    }else if (min >= 59){
        hr++;
        min = 0;
    } else {
        sec = 0;
        min ++;
    }
    const seconds = String(sec).padStart(2,"0")
    const minutes = String(min).padStart(2,"0")
    const hours = String(hr).padStart(2,"0")
       
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 100)
}

const stopStopwatch=()=>{
      clearInterval(intervalId)
}


function palindrome() { 
    for(let i=100;i<=100000;i++){
        var a, b, no, temp = 0; 
         no=i;
         b = no;  
            while (no > 0)  
            {  
            a = no % 10;  
            no = parseInt( no / 10);  
            temp = temp*10 + a;  
            }  
            if (temp == b)  
            {  
            console.log(temp) 
            }  
            } 
            }
    palindrome()