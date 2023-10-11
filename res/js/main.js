const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");


let scale = false;
let numberOfCookies = 0;

cookie.onclick = () => {

    numberOfCookies++;
    counter.innerText = "kráterů: " + numberOfCookies;

    cookie.style.transform = "scale(0.8)";
    
    cookie.style.borderRadius = "40px";
    setTimeout(function() {
        cookie.style.transform = "scale(1.2)";
        cookie.style.borderRadius = "25px";
        
      }, 80);
}


