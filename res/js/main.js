const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");


let numberOfCookies = 0;
let cookieIncrease = 1;
let upgradePrice = 150;

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
    upgradePrice *= 2.5;

  }
  Math.round(upgradePrice)

  counter.innerText = "kráterů: " + numberOfCookies;
  upgrade.innerText = "upgrade: " + upgradePrice;

  upgrade.style.transform = "scale(0.9)"
  setTimeout(function() {

    upgrade.style.transform = "scale(1)"
  }, 100);
}


