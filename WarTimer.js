let secondeTotal = 1800;
let secondesTimerTab = [];
let initialTimerTab = [29,                                   
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, //14 = 280 sec
    28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,         //12 = 336 sec
    36, 36, 36, 36, 36, 36, 36, 36, 36,                     // 9 = 324 sec
    44, 44, 44, 44, 44, 44, 44,                             // 7 = 308 sec
    52, 52, 52, 52, 52,                                     // 5 = 260 sec
    60, 60, 60, 60, 60];                                    // 5 = 300 sec

let index = 0;
let alreadyOn = false;
let color10 = "red";
let color5 = "orange";
let color0 = "green";
let basicColor = "white";
let interval;

function startTimer() {
    if (!alreadyOn) {
        alreadyOn = true;
        document.getElementById("startTimer").style.display = "none";
        secondesTimerTab = initialTimerTab.slice();
        secondesTimerTab[0] = parseInt(document.getElementById("valueSeconde").value) - 1;
        secondeTotal += parseInt(document.getElementById("valueSeconde").value) - 1;
        const preTimerElement = document.getElementById("preTimer");
        const preTimerInputElement = document.getElementById("valueSeconde");
        const timerElement = document.getElementById("timer");
        const timerBlockElement = document.getElementById("respawnTimer");
    
        preTimerElement.style.display = "none";
        preTimerInputElement.style.display = "none";
        timerBlockElement.style.display = "block";

        let valueSeconde = secondesTimerTab[0] + 1;
        let minutes = parseInt(valueSeconde / 60, 10);
        let secondes = parseInt(valueSeconde % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        secondes = secondes < 10 ? "0" + secondes : secondes;

        timerElement.innerText = `${minutes}:${secondes}`;

        interval = setInterval(() => {
            diminuerSeconde();
        }, 1000);
    }
}

function stopTImer() {
    clearInterval(interval);
    alreadyOn = false;
    secondeTotal = 1800;
    index = 0;
    document.getElementById("startTimer").style.display = "block";
    const preTimerElement = document.getElementById("preTimer");
    const preTimerInputElement = document.getElementById("valueSeconde");
    const timerBlockElement = document.getElementById("respawnTimer");
    preTimerElement.style.display = "block";
    preTimerInputElement.style.display = "block";
    timerBlockElement.style.display = "none";
    document.getElementById("warTimer").style.display = "none";
    document.getElementById("respawnTimerText").innerHTML = "";
}

function diminuerSeconde() {
    const timerElement = document.getElementById("timer");
    const timerTotalElement = document.getElementById("timerTotal");

    if (secondeTotal == 1800) {
        document.getElementById("warTimer").style.display = "block";
        document.getElementById("respawnTimerText").innerHTML = "Next respawn in";
    }

    let minutes = parseInt(secondesTimerTab[index] / 60, 10);
    let secondes = parseInt(secondesTimerTab[index] % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    let minutesTotal = parseInt(secondeTotal / 60, 10);
    let secondesTotal = parseInt(secondeTotal % 60, 10);
    minutesTotal = minutesTotal < 10 ? "0" + minutesTotal : minutesTotal;
    secondesTotal = secondesTotal < 10 ? "0" + secondesTotal : secondesTotal;

    timerElement.innerText = `${minutes}:${secondes}`;
    timerTotalElement.innerText = `${minutesTotal}:${secondesTotal}`;

    if (secondeTotal < 1800) {
        timerElement.style.color = secondesTimerTab[index] == initialTimerTab[index] ? color0 : (secondesTimerTab[index] <= 10 ? (secondesTimerTab[index] <= 5 ? color5 : color10) : basicColor);
        switch(secondesTimerTab[index]) {
            case 30 :
                document.getElementById('respawn30').play();
                break;
            case 25 :
                document.getElementById('respawn25').play();
                break;
            case 20 && initialTimerTab[index] != 20 :
                document.getElementById('respawn20').play();
                break;
            case 15 :
                document.getElementById('respawn15').play();
                break;
            case 10 :
                document.getElementById('respawn10').play();
                break;
            default:
                break;
    
        }
    }
    

    secondeTotal = secondeTotal <= 0 ? 0 : secondeTotal - 1;
    secondesTimerTab[index] = secondesTimerTab[index] <= 0 ? 0 : secondesTimerTab[index] - 1;

    if(secondesTimerTab[index] == 0) {
        index++;
    }
    
}

function changeValueStart() {
    console.log("test");
    let valueSeconde = document.getElementById("valueSeconde").value;
    document.getElementById("secBeforeStart").innerHTML = valueSeconde;
}