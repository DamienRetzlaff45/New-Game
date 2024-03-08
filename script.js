let magicPower = 0;
let clickPower = 1;
let autoClickPower = 1;

let autoclickerCost = 100;
let upgradeOneCost = 50;

let autoclickerEnabled = false;

let autoclickerInterval;

document.getElementById('start').addEventListener('click', function () {
    document.getElementById('description').style.visibility = 'hidden';
    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('object').style.visibility = 'visible';
    document.getElementById('magic-power').style.visibility = 'visible';
    document.getElementById('arcane-autonomy').style.visibility = 'visible';
    document.getElementById('aetherial-amplification').style.visibility = 'visible';
});

function updateScore() {
    document.getElementById('magic-power').textContent = 'MP: ' + magicPower;
}

document.getElementById('object').addEventListener('click', function () {
    magicPower += clickPower;
    updateScore();
});

document.getElementById('arcane-autonomy').addEventListener('click', function () {
    if (magicPower >= autoclickerCost && !autoclickerEnabled) {
        magicPower -= autoclickerCost;
        autoclickerEnabled = true;
        autoClickPower += 1;
        updateScore();
        enableAutoclicker();
        // Change border color
        document.getElementById('arcane-autonomy').style.border = '2px solid green';
    } else if (autoclickerEnabled === true) {
        autoclickerEnabled = false;
        clearInterval(autoclickerInterval);
        document.getElementById('arcane-autonomy').style.border = '2px solid red';
    } else {
        console.log('Not enough money!');
    }
});

function enableAutoclicker() {
    autoclickerInterval = setInterval(function () {
        magicPower += 1;
        updateScore();
    }, 1000); // Adjust speed as needed
}

document.getElementById('aetherial-amplification').addEventListener('click', function () {
    if (magicPower >= upgradeOneCost) {
        magicPower -= upgradeOneCost;
        updateScore();
        clickPower += 2;
        upgradeOneCost = Math.ceil(upgradeOneCost * 1.3);
        neverLetEvanCook();
        console.log(clickPower);
    }
});

function neverLetEvanCook() {
    document.getElementById('aetherial-amplification').innerHTML = `Add Potency To Your magic <br> +2 per manual click (${upgradeOneCost} MP)`;
}