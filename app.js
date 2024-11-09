let h2 = document.querySelector("h2");
let body = document.querySelector('.body');
let hsd = document.createElement('div');
let scrs= [];
let scr;
let divs = ['one','two','three','four'];
let user = [];
let ans = [];
let level =0;
let gameStart = false;
document.addEventListener('keypress',function(){
    if(gameStart == false){
        gameStart = true;
        levelUp();
        hsd.remove();
    }
});

function highScr(){
    scr = scrs[0];
    for(let i=0; i<scrs.length; i++){
        if(scrs[i]>scr){
            scr = scrs[i];
        }
    }
    hsd.classList.add('hsd');
    hsd.innerText = `Your High Score Was : ${scr}`;
    hsd.style.color = 'black';
    hsd.style.fontSize = '26px';
    body.append(hsd);
}


function outStyle(btn){
    btn.classList.add('outStyle');
    setTimeout(function(){
        btn.classList.remove('outStyle');
    },200);
}

function inpStyle(btn){
    btn.classList.add('inpStyle');
    setTimeout(function(){
        btn.classList.remove('inpStyle');
    },200);
}

function levelUp(){
    ++level;
    console.log(level);
    h2.innerText= `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randBtn = divs[randIdx];
    outStyle(document.querySelector(`.${randBtn}`));
    ans.push(randBtn);
    // console.log(user);
    user = [];
}

function checkAns(idx){
    if(user[idx]==ans[idx]){
        if(ans.length==user.length){
            setTimeout(levelUp,800);
        }
    }
    else{
        h2.innerHTML=`Game Over! Press any key to start..\n Your Score : ${level-1}`;
        scrs.push(level-1);
        console.log(scrs);
        highScr();
        reset();
        document.querySelector('body').classList.add('out');
        setTimeout(function(){
            document.querySelector('body').classList.remove('out'); 
        },200);
    }
}
function btnPress(){
    let btn = this;
    inpStyle(btn);
    user.push(btn.getAttribute('id'));
    checkAns(user.length-1);

}
let allBtns = document.querySelectorAll('.outer div');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}


function reset(){
    gameStart=false;
    level=0;
    user=[];
    ans=[];
    // hsd.style.display= 'none';
}















