const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");


let numberOfCookies = 0;
let cookieIncrease = 1;
let upgradePrice = 150;
let autoclickUpgradePrice = 0;
let clicksPerSecond = 0;
let autoclickCookieIncrease = 0;
let autoclickInterval;


cookie.onclick = () => {

    numberOfCookies += cookieIncrease;
    counter.innerText = "kráterů: " + numberOfCookies;

    cookie.style.transform = "scale(0.8)";
    
    cookie.style.borderRadius = "40px";
    setTimeout(function() {
        cookie.style.transform = "scale(1.2)";
        cookie.style.borderRadius = "25px";
        
      }, 80);

}

upgrade.onclick = () => {
  
  if (numberOfCookies >= upgradePrice){
    cookieIncrease ++;
    numberOfCookies -= upgradePrice;
    upgradePrice *= 2;

  }

  counter.innerText = "kráterů: " + numberOfCookies;
  upgrade.innerText = "upgrade: " + upgradePrice;

  upgrade.style.transform = "scale(0.9)"
  setTimeout(function() {

    upgrade.style.transform = "scale(1)"
  }, 100);
}


autoclickUpgrade.onclick = () => {

  if(numberOfCookies >= 100){
    numberOfCookies -= 100;
    counter.innerText = "kráterů: " + numberOfCookies;
    autoclickCookieIncrease++;
    clearInterval(autoclickInterval);

    autoclickInterval = setInterval(() =>{
      numberOfCookies += autoclickCookieIncrease; 
      counter.innerText = "kráterů: " + numberOfCookies;
    }, 500);
  }
}

