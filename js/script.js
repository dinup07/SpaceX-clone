const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrolltarted = false;

btn.addEventListener('click',navToggle);
document.addEventListener('scroll',scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const pos = window.scrollY;

    if(pos>75 && !scrolltarted){
        countUp();
        scrolltarted = true;
    }
    else if(pos<75 && scrolltarted){
        reset();
        scrolltarted = false; 
    }
}


function countUp() {
  counters.forEach((counter)=>{
    counter.innerText = '0';
    
    const updateCounter = ()=>{
        //get count target 
       const target = +counter.getAttribute('data-target');
       //get current count value
       const c = +counter.innerText;

       //Create an increment
       const increment = target/100;
       
       //if counter is less than target, add increment
       if(c<target){
        //Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`; 

        setTimeout(updateCounter ,50);
       }
       else{
        counter.innerText = target;
       }
    };
    updateCounter();
 });
}

function reset(){
    counters.forEach((counter)=> counter.innerText = '0');
}
