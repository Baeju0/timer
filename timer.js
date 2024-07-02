let min = document.querySelector(".timer #m");
let sec = document.querySelector(".timer #s");
let setTimeDiv= document.querySelector(".timer");

const startBtn = document.querySelector(".timer #start");
const stopBtn = document.querySelector(".timeDisplay #stop");
const resetBtn = document.querySelector(".timeDisplay #reset");

let startM = document.querySelector(".timeDisplay #minStart");
let startS = document.querySelector(".timeDisplay #secStart");

    function handleStartClick() {
       let intervalId = setInterval(function() {
        if (sec.value > 0) {
            sec.value--;
            startM.innerText = min.value + " : ";
            startS.innerText = sec.value;
        } else if(min.value > 0) {
            min.value--;
            startM.innerText = min.value + " : ";
            sec.value += 59;
            startS.innerText = sec.value;
        } else if(sec.value === 0 && min.value === 0){
            alert("타이머 종료!"); // 실행 안 됨
            clearInterval(intervalId);
        }},1000);
    }


    function displayTime() {
        setTimeDiv.style.display = "none";
        stopBtn.style.display = "inline";
        resetBtn.style.display = "inline";
    }


    function handleStopClick() {
        clearInterval(intervalId);
    }


startBtn.addEventListener("click", handleStartClick);
stopBtn.addEventListener("click",handleStopClick);

// 시작 버튼을 누르면 사용자가 입력한 분, 초의 타이머 시작
// 1초마다 렌더링 되는 페이지를 보여줘야 됨(타이머의 카운트다운)
// min의 값과 sec의 값을 가져와서 시작?
//


console.dir(setTimeDiv);

// 1초 = 1000ms