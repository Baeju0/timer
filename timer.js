let min = document.querySelector(".timer #m");
let sec = document.querySelector(".timer #s");
let setTimeDiv= document.querySelector(".timer");

const startBtn = document.querySelector(".timer #start");
const stopBtn = document.querySelector(".timeDisplay #stop");
const resetBtn = document.querySelector(".timeDisplay #reset");
const reStartBtn = document.querySelector(".timeDisplay #reStart");

let startM = document.querySelector(".timeDisplay #minStart");
let startS = document.querySelector(".timeDisplay #secStart");

let minV = 0;
let secV = 0;

let intervalId;


function handleStartClick() {
    minV = Number(min.value);
    secV = Number(sec.value);

    setTimeDiv.style.display = "none";
    stopBtn.style.display = "inline";
    resetBtn.style.display = "inline";

    timeS();
}

function timeS() {
    intervalId = setInterval(function() {
        // 분이 남았을 때
        if (minV > 0 && secV === 0) {
            startM.innerText = minV + " : ";
            startS.innerText = secV;
            minV--;
            secV += 59;
        } else if (minV === 0 && secV === -1) { // 분이 0, 초가 -1과 같을 때
            alert("타이머 종료!");
            clearInterval(intervalId);
        } else {
            startM.innerText = minV + " : ";
            startS.innerText = secV;
            secV--;
        }
    },1000);
}


function handleStopClick() {
    reStartBtn.style.display = "inline";
    clearInterval(intervalId);
}

function handleRestartClick() {
    reStartBtn.style.display = "none";
    timeS();
}

function handleResetClick() {
    // 리셋 버튼
    location.reload(); // 초기 상태로 다시 로드
}


startBtn.addEventListener("click", handleStartClick); // 시작 버튼
stopBtn.addEventListener("click",handleStopClick); // 정지 버튼
resetBtn.addEventListener("click", handleResetClick); // 초기화 버튼
reStartBtn.addEventListener("click", handleRestartClick); // 재개 버튼


// console.dir(setTimeDiv);