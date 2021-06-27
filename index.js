// 게임 시작 버튼 만들기

const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $answer =document.querySelector('.answer');
const $randomMake = document.querySelector('.randomMake');
const $randomTag = document.querySelector('.randomTag');
const $popUp = document.querySelector('.popUp');
const $playTxt = document.querySelector('.playTxt');
const $replayIcon = document.querySelector('.replayIcon');
const $subMitBtn = document.querySelector('input[type="submit"]')
// 게임 시작 버튼을 클릭 했을때, 랜덤한 세 자리 숫자 만들기 (사용자에게 보여주진 않습니다.)
let count =[];
let n = 0;
let answer = [];

function randomValue(){
    answer = [];
for(let j=0; j<3;j++){
    let strong = Math.floor(Math.random()*9+1);
    answer.push(strong);
    answer.join('');
}  
console.log(answer.join(''));

// 숫자 입력칸 만들기
// 사용자가 엔터키를 클릭 했을때, 입력값이 세자리 숫자가 아닌 경우 경고창 띄워주기
$form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let strike = 0;
    let boll =0;
        let value = $input.value;
        
            
            if(answer.join('') === value){
                rePlayBanner('홈런');
                $popUp.style.visibility = 'visible'
                return;
            }
            if(value.length === 3){
                count.push(value);
                count.join(',');
                console.log(count);
                for(let k=n; k<3;k++){
                    const com = $input.value.indexOf(answer[k]);
                    console.log(com);
                    if(com != -1){
                        strike++;
                    }else if(com === -1){
                        boll++;
                    }
                }
                $answer.innerHTML += `<div>${strike}스트라이크, ${boll}볼 입니다.</div>`   
            }//else if(value.length !== 3){
               // alert('세자리 숫자를 입력해주세요');
               // console.log('세자리 입력!');
             //}
            if(count.length>=10){
                rePlayBanner('10회 초과되었습니다 실패!');
                $popUp.style.visibility = 'visible'
                return count;
            }
 
           
        $input.value='';
        $input.focus();
});

return;
}
function initGame(){//초기화 함수
    count=[];
    k = 0;
    count.length = 0;
    $answer.innerHTML ='';
    $input.value='';
    $input.focus();
}
let started=false;
//내가 입력한 값 546 랜덤 값 234
$randomMake.addEventListener('click',()=>{
    if(!started){
        started==true;
        console.log('시작');
        startGame();
    }
});
function startGame(){
    initGame();
    randomValue();
    $randomMake.style.visibility= 'hidden';
    $subMitBtn.style.visibility= 'visible';
}


$replayIcon.addEventListener('click',()=>{
    startGame();
    $popUp.style.visibility = 'hidden';
});
function rePlayBanner(text){
    $playTxt.innerText = text;
    $popUp.style.visibility = 'visible';
}

// 사용자가 엔터키를 클릭 했을때, 2단계에서 생성한 숫자와 사용자의 입력값 비교하기
// 각 자리 별로 비교하고, 같은 자리에 같은 숫자가 몇개 있는지 판별합니다. (스트라이크 갯수)
// 각 자리 별로 비교하고, 다른 자리에 같은 숫자가 몇개 있는지 판별합니다. (볼 갯수)
// 화면에 스트라이크와 볼의 갯수를 표기합니다.
// 사용자가 10회까지 시도할 수 있도록 제한합니다.
// 게임 재시작 버튼을 만들고, 재시작 할 수 있도록 합니다.