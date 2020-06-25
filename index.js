
var holdMole = []
var count = 0;
var totalMoleAppear = 0;
var lastHole;
var score = 0;
var highScore = 0;


/*level-second-num, level-first-num*/
var levelSecondNum = document.querySelector(".level-second-num");
var levelFirstNum = document.querySelector(".level-first-num");

/*HIT third-num-hit, second-num-hit, first-num-hit */
var hitThirdNum = document.querySelector(".hit-third-num");
var hitSecondNum = document.querySelector(".hit-second-num");
var hitFirstNum = document.querySelector(".hit-first-num");

/*MOLE*/
var appearanceThirdNum = document.querySelector(".appearance-third-num");
var appearanceSecondNum = document.querySelector(".appearance-second-num");
var appearanceFirstNum = document.querySelector(".appearance-first-num");

/*Score*/
var scoreFifthNum = document.querySelector(".score-fifth-num");
var scoreFourthNum = document.querySelector(".score-fourth-num");
var scoreThirdNum = document.querySelector(".score-third-num");
var scoreSecondNum = document.querySelector(".score-second-num");
var scoreFirstNum = document.querySelector(".score-first-num");

/*high score*/
var highScoreFifthNum = document.querySelector(".high-score-fifth-num")
var highScoreFourthNum = document.querySelector(".high-score-fourth-num")
var highScoreThirdNum = document.querySelector(".high-score-third-num")
var highScoreSecondNum = document.querySelector(".high-score-second-num")
var highScoreFirstNum = document.querySelector(".high-score-first-num")

/*check for highscore in sessionStorage*/
if(sessionStorage.getItem("hs")){
    highScore = sessionStorage.getItem("hs");
    whatHighScoreSlot(score, highScore);
}



/*CONST LEVEL*/
const LEVEL_ONE = 1300;
const LEVEL_TWO = 1200;
const LEVEL_THREE = 1100;
const LEVEL_FOUR = 1000;
const LEVEL_FIVE = 900;
const LEVEL_SIX = 800;
const LEVEL_SEVEN = 700;
const LEVEL_EIGHT = 600;
const LEVEL_NINE = 500;
const LEVEL_TEN = 400;

for(let i = 1; i < 10; i++){
    holdMole.push("hold"+i+"-mole");
}
for (let i = 0; i < holdMole.length; i++){
    holdMole[i] = document.querySelector(".hold"+ (i+1) + "-mole");
}

for(let i = 0; i < holdMole.length; i++){
    holdMole[i].addEventListener("click", function(){
        count += 1;
        score += 100;
        whatScoreSlot(score);
        whatHighScoreSlot(score, highScore);
        whatHitSlot(count);
        //hitPoint.innerHTML = "Score: " + count;
        holdMole[i].style.transform = "translate(0,5em)";
    })
}

function whatspeed(countHit){
    switch(true){
        case (countHit<= 20):
            return LEVEL_ONE;
        case (countHit<=40):
            return LEVEL_TWO;
        case (countHit<=60):
            return LEVEL_THREE;
        case (countHit<=80):
            return LEVEL_FOUR;
        case (countHit<=100):
            return LEVEL_FIVE;
        case (countHit<=120):
            return LEVEL_SIX;
        case (countHit<=140):
            return LEVEL_SEVEN;
        case (countHit<=160):
            return LEVEL_EIGHT;
        case (countHit<=180):
            return LEVEL_NINE;
        default:
            return LEVEL_TEN;
    }
}

function whatlevel(countHit){
    switch(true){
        case (countHit<= 20):
            return 1;
        case (countHit<=40):
            return 2;
        case (countHit<=60):
            return 3;
        case (countHit<=80):
            return 4;
        case (countHit<=100):
            return 5;
        case (countHit<=120):
            return 6;
        case (countHit<=140):
            return 7;
        case (countHit<=160):
            return 8;
        case (countHit<=180):
            return 9;
        default:
            return 10;
    }
}

/*which slot to change for level in HTML*/
function whatLevelSlot(num) {
    if(num < 10){
        levelFirstNum.innerHTML = +num;
    }else {
        levelFirstNum.innerHTML = "0";
        levelSecondNum.innerHTML = "1";
    }
}

/*which slot to change for HIT in HTML*/
function whatHitSlot(countHit){
    if (countHit< 10) {
        let splitCountHit= countHit.toString().split("");
        let countFirst = splitCountHit[0];
        hitFirstNum.innerHTML = countFirst;
    }else if(countHit < 100){
        let splitCountHit= countHit.toString().split("");
        let countFirst = splitCountHit[1];
        let countSecond = splitCountHit[0];
        hitFirstNum.innerHTML = countFirst;
        hitSecondNum.innerHTML = countSecond;
    }else {
        let splitCountHit= countHit.toString().split("");
        let countFirst = splitCountHit[2];
        let countSecond = splitCountHit[1];
        let countThird = splitCountHit[0];
        hitFirstNum.innerHTML = countFirst;
        hitSecondNum.innerHTML = countSecond;
        hitThirdNum.innerHTML = countThird;
    }
}

/*which slot to change for MOLE in HTML*/
function whatMoleSlot(totalMoleAppear){
    if (totalMoleAppear< 10) {
        let splitCountHit= totalMoleAppear.toString().split("");
        let countFirst = splitCountHit[0];
        appearanceFirstNum.innerHTML = countFirst;
    }else if(totalMoleAppear < 100){
        let splitCountHit= totalMoleAppear.toString().split("");
        let countFirst = splitCountHit[1];
        let countSecond = splitCountHit[0];
        appearanceFirstNum.innerHTML = countFirst;
        appearanceSecondNum.innerHTML = countSecond;
    }else {
        let splitCountHit= totalMoleAppear.toString().split("");
        let countFirst = splitCountHit[2];
        let countSecond = splitCountHit[1];
        let countThird = splitCountHit[0];
        appearanceFirstNum.innerHTML = countFirst;
        appearanceSecondNum.innerHTML = countSecond;
        appearanceThirdNum.innerHTML = countThird;
    }
}

/*hole to appear*/
function holeToPop(){
    var randomIndex = Math.floor(Math.random() * holdMole.length);
    if(randomIndex == lastHole){
        randomIndex = Math.floor(Math.random() * holdMole.length);
    }else {
        //var randomNum = Math.floor(Math.random() * 3) + 1;
        totalMoleAppear += 1;
        lastHole = randomIndex;
        whatMoleSlot(totalMoleAppear);
        holdMole[randomIndex].style.transform = "translate(0,0.5em)";
        setTimeout(function hideMole(){
            holdMole[randomIndex].style.transform = "translate(0,5em)";
        },whatspeed(count))
    }
}

function whatScoreSlot(currentScore){
    if (currentScore< 10) {
        let splitCountHit= currentScore.toString().split("");
        let countFirst = splitCountHit[0];
        scoreFirstNum.innerHTML = countFirst;
    }else if(currentScore < 100){
        let splitCountHit= currentScore.toString().split("");
        let countFirst = splitCountHit[1];
        let countSecond = splitCountHit[0];
        scoreFirstNum.innerHTML = countFirst;
        scoreSecondNum.innerHTML = countSecond;
    }else if (currentScore < 1000) {
        let splitCountHit= currentScore.toString().split("");
        let countFirst = splitCountHit[2];
        let countSecond = splitCountHit[1];
        let countThird = splitCountHit[0];
        scoreFirstNum.innerHTML = countFirst;
        scoreSecondNum.innerHTML = countSecond;
        scoreThirdNum.innerHTML = countThird;
    }else if (currentScore < 10000){
        let splitCountHit= currentScore.toString().split("");
        let countFirst = splitCountHit[3];
        let countSecond = splitCountHit[2];
        let countThird = splitCountHit[1];
        let countFourth = splitCountHit[0];
        scoreFirstNum.innerHTML = countFirst;
        scoreSecondNum.innerHTML = countSecond;
        scoreThirdNum.innerHTML = countThird;
        scoreFourthNum.innerHTML = countFourth;
    }else {
        let splitCountHit= currentScore.toString().split("");
        let countFirst = splitCountHit[4];
        let countSecond = splitCountHit[3];
        let countThird = splitCountHit[2];
        let countFourth = splitCountHit[1];
        let countFifth = splitCountHit[0];
        scoreFirstNum.innerHTML = countFirst;
        scoreSecondNum.innerHTML = countSecond;
        scoreThirdNum.innerHTML = countThird;
        scoreFourthNum.innerHTML = countFourth;
        scoreFifthNum.innerHTML = countFifth;
    }
}

function whatHighScoreSlot(currentScore, currentHighScore){
    if(currentScore > currentHighScore){
        if (currentScore< 10) {
            let splitCountHit= currentScore.toString().split("");
            let countFirst = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
        }else if(currentScore < 100){
            let splitCountHit= currentScore.toString().split("");
            let countFirst = splitCountHit[1];
            let countSecond = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
        }else if (currentScore < 1000) {
            let splitCountHit= currentScore.toString().split("");
            let countFirst = splitCountHit[2];
            let countSecond = splitCountHit[1];
            let countThird = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
            highScoreThirdNum.innerHTML = countThird;
        }else if (currentScore < 10000){
            let splitCountHit= currentScore.toString().split("");
            let countFirst = splitCountHit[3];
            let countSecond = splitCountHit[2];
            let countThird = splitCountHit[1];
            let countFourth = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
            highScoreThirdNum.innerHTML = countThird;
            highScoreFourthNum.innerHTML = countFourth;
        }else {
            let splitCountHit= currentScore.toString().split("");
            let countFirst = splitCountHit[4];
            let countSecond = splitCountHit[3];
            let countThird = splitCountHit[2];
            let countFourth = splitCountHit[1];
            let countFifth = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
            highScoreThirdNum.innerHTML = countThird;
            highScoreFourthNum.innerHTML = countFourth;
            highScoreFifthNum.innerHTML = countFifth;
        }
    }else {
        if (currentHighScore< 10) {
            let splitCountHit= currentHighScore.toString().split("");
            let countFirst = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
        }else if(currentHighScore < 100){
            let splitCountHit= currentHighScore.toString().split("");
            let countFirst = splitCountHit[1];
            let countSecond = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
        }else if (currentHighScore < 1000) {
            let splitCountHit= currentHighScore.toString().split("");
            let countFirst = splitCountHit[2];
            let countSecond = splitCountHit[1];
            let countThird = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
            highScoreThirdNum.innerHTML = countThird;
        }else if (currentHighScore < 10000){
            let splitCountHit= currentHighScore.toString().split("");
            let countFirst = splitCountHit[3];
            let countSecond = splitCountHit[2];
            let countThird = splitCountHit[1];
            let countFourth = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
            highScoreThirdNum.innerHTML = countThird;
            highScoreFourthNum.innerHTML = countFourth;
        }else {
            let splitCountHit= currentHighScore.toString().split("");
            let countFirst = splitCountHit[4];
            let countSecond = splitCountHit[3];
            let countThird = splitCountHit[2];
            let countFourth = splitCountHit[1];
            let countFifth = splitCountHit[0];
            highScoreFirstNum.innerHTML = countFirst;
            highScoreSecondNum.innerHTML = countSecond;
            highScoreThirdNum.innerHTML = countThird;
            highScoreFourthNum.innerHTML = countFourth;
            highScoreFifthNum.innerHTML = countFifth;
        }
    }
}

function updateHighScoreOrNot(currentScore, currentHighScore){
    if (currentScore > currentHighScore){
        sessionStorage.setItem("hs", currentScore);
    }
}

/*should highscore be update to sessionStorage or not*/
setInterval(function(){
    updateHighScoreOrNot(score, highScore);
}, 100)

setInterval(function(){
    whatLevelSlot(whatlevel(count));
    //speed.innerHTML = "Mole Appeared: " + totalMoleAppear;
    holeToPop();
}, whatspeed(count))
