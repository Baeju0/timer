let min = document.querySelector(".timer #m");
let sec = document.querySelector(".timer #s");
let setTimeDiv= document.querySelector(".timer");

const startBtn = document.querySelector(".timer #start");
const stopBtn = document.querySelector(".timeDisplay #stop");
const resetBtn = document.querySelector(".timeDisplay #reset");

let startM = document.querySelector(".timeDisplay #minStart");
let startS = document.querySelector(".timeDisplay #secStart");



function handleStartClick() {
    let minV = Number(min.value);
    let secV = Number(sec.value);

    setTimeDiv.style.display = "none";
    stopBtn.style.display = "inline";
    resetBtn.style.display = "inline";

    let intervalId = setInterval(function() {
        if (secV > 0) {
            startM.innerText = minV + " : ";
            startS.innerText = secV;
            secV--;
        } else if(minV > 0) {
            minV--;
            startM.innerText = minV + " : ";
            secV += 59;
            startS.innerText = secV;
        } else if (stopBtn.onclick || resetBtn.onclick) {
           return [minV, secV];
        } else if(secV === 0 && minV === 0){
            alert("타이머 종료!");
            clearInterval(intervalId);
        }},1000);
        return [minV, secV];
    }


    function handleStopClick() {
        // 어떻게 현재 타임을 그대로 멈추나?
        const [m, s] = handleStartClick();
        startM = m;
        startS = s;
    }

    function handleResetClick() {
        // 리셋 버튼
        setTimeDiv.style.display = "inline";
        stopBtn.style.display = "none";
        resetBtn.style.display = "none";

        // const [m,s] = handleStartClick();
        // startM = 0;
        // startS = 0;
    }



startBtn.addEventListener("click", handleStartClick); // 시작 버튼
stopBtn.addEventListener("click",handleStopClick); // 정지 버튼
resetBtn.addEventListener("click", handleResetClick); // 초기화 버튼


// console.dir(setTimeDiv);