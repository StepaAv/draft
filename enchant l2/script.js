let inputWeapon = document.querySelector('.i-1');
let inputScroll = document.querySelector('.i-2');
let toggleWarrior = document.querySelector('.toggle-warrior');
let ToggleMage = document.querySelector('.toggle-mage');
let output = document.querySelector('.result');
const MAGE_CHANCE = 0.6;
const NORMAL_CHANCE = 0.3;


let calculateAll = () => {
    let out = '';
    let stepPrice = 0;
    let startPrice = +inputWeapon.value + (+inputScroll.value * 3);
    stepPrice = startPrice;
        out = `+3 - ${startPrice} KK <br>`;
    for (let i = 4; i < 15; i++) {
            console.log(stepPrice)
            stepPrice = (stepPrice + ((+inputScroll.value +  stepPrice) * (toggleWarrior.checked ? NORMAL_CHANCE : MAGE_CHANCE)));
            stepPrice = Math.round(stepPrice);
            out += `+${i} -   ${stepPrice} KK <br>`
    }


    output.innerHTML = out;
}


inputWeapon.addEventListener('input', calculateAll);
inputScroll.addEventListener('input', calculateAll);
toggleWarrior.addEventListener('input', calculateAll);
ToggleMage.addEventListener('input', calculateAll);