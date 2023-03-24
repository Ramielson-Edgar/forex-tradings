
const eurGpb= document.querySelector('.EURGPB')
const eurUsd= document.querySelector('.EURUSD')
const gpbUsd= document.querySelector('.GPBUSD')
const usdJpy= document.querySelector('.USDJPY')



function random(min, max, text) {
    const counterCount = min + Math.random() * (max - min);
    const roundedCounter = Number(counterCount).toFixed(2)
    const result = roundedCounter.slice(0, -1)
 
    text.innerHTML =result;
}

let eurGpbInterval = null
let eurUsdInterval = null
let gpbUsdInterval = null
let usdJpyInterval = null

eurGpbInterval = setInterval(() => {
    random(1.5, 2,eurGpb)
}, 2000);

eurUsdInterval = setInterval(() => {
    random(0.4, 0.8,eurUsd)
}, 2000);

gpbUsdInterval = setInterval(() => {
    random(0.5, 0.9,gpbUsd)
}, 2000);
 
usdJpyInterval = setInterval(() => {
    random(0.6, 1, usdJpy)
}, 2000);

 
 