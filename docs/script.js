let inputWeapon = document.querySelector('.i-1');
let inputScroll = document.querySelector('.i-2');
let toggleWarrior = document.querySelector('.toggle-warrior');
let ToggleMage = document.querySelector('.toggle-mage');
let ToggleArmor = document.querySelector('.toggle-armor');
let output = document.querySelector('.result');
const MAGE_CHANCE = 0.6;
const NORMAL_CHANCE = 0.3;
const ARMOR_CHANCE_ARR = [0, 0, 0, 0, 63, 60, 56, 53, 50, 46, 43, 40, 36, 33, 30]
console.log('всё очнь плохо!')


let calculateAll = () => {
    let out = '';
    let stepPrice = 0;
    let startPrice = +inputWeapon.value + (+inputScroll.value * 3);
    stepPrice = startPrice;
        out = `+3 - ${startPrice} KK <br>`;
        if (toggleWarrior.checked || ToggleMage.checked) {
            for (let i = 4; i < 15; i++) {
                stepPrice = (stepPrice + ((+inputScroll.value +  stepPrice) * (toggleWarrior.checked ? NORMAL_CHANCE : MAGE_CHANCE)));
                stepPrice = Math.round(stepPrice);
                out += `+${i} -   ${stepPrice} KK <br>`
            }
        } else {
            for (let i = 4; i < 15; i++) {
                stepPrice = (stepPrice + ((+inputScroll.value +  stepPrice) * (ARMOR_CHANCE_ARR[i] / 100)));
                stepPrice = Math.round(stepPrice);
                out += `+${i} -   ${stepPrice} KK <br>`
            }

        }



    output.innerHTML = out;
}


inputWeapon.addEventListener('input', calculateAll);
inputScroll.addEventListener('input', calculateAll);
toggleWarrior.addEventListener('input', calculateAll);
ToggleMage.addEventListener('input', calculateAll);
ToggleArmor.addEventListener('input', calculateAll);
