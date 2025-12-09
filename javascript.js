console.log("HELLo world");
let rockbtn=document.querySelector('#rock');
let paperbtn=document.querySelector('#paper');
let scissorsbtn=document.querySelector('#scissor');
let hSelection;
let cSelection;
let hscore=0;
let cscore=0;
let round=document.querySelector('#round');
let choice=document.querySelector('#choice');
let results=document.querySelector('#results');
let score=document.querySelector('#score');
let winner=document.querySelector('#winner');
let gameOver = false;
let replaybtn=document.querySelector('#replay');
 score.textContent=`Your Score=${hscore}; Computer Score= ${cscore}`;
rockbtn.addEventListener('click',()=>{
    if (gameOver) return;
    hSelection="rock";
    cSelection= getComputerChoice();
    choice.textContent=`Computer: ${cSelection}\n Human: ${hSelection}`;
    playRound(cSelection, hSelection);
});
paperbtn.addEventListener('click',()=>{
    if (gameOver) return;
    hSelection="paper";
    cSelection= getComputerChoice();
    choice.textContent=`Computer:${cSelection} Human:${hSelection}`;
    playRound(cSelection, hSelection);
});
scissorsbtn.addEventListener('click',()=>{
    if (gameOver) return;
    hSelection="scissors";
    cSelection= getComputerChoice();
    choice.textContent=`Computer:${cSelection}
        Human:${hSelection}
    `;
    playRound(cSelection, hSelection);
});
function getComputerChoice()
{
let x=Math.random()
if(x<0.33)
{
    return "rock";
}
else if(x<0.67)
{
return "paper";
}
else
{return "scissors"}
}
function playRound(cchoice,hchoice){
    if(cchoice==hchoice)
    {
     results.textContent="Its a tie";
    }
    else if(cchoice=="rock")
    {
        if(hchoice="paper")
        {results.textContent="YOU WIN! Paper beats Rock.";
            hscore++;
        }
        else if(hchoice="scissors")
        {results.textContent="YOU LOSE!Rock beats Scissors.";
            cscore++;
        }
    }
    else if(cchoice=="paper"){
        if(hchoice=="rock")
        {results.textContent="YOU LOSE!Paper beats Rock.";
            cscore++;
        }
        else if(hchoice="scissors")
        {
            results.textContent="YOU WIN!Scissors beats Paper.";
            hscore++;
        }
    }
    else{
        if(hchoice=="paper")
                {results.textContent="YOU LOSE!Scissors beats Paper.";
                    cscore++;
                }
            else if(hchoice=="rock"){
                    results.textContent="YOU WIN!Rock beats scissors.";
                    hscore++;
                }
        }
        score.textContent=`Your Score=${hscore}; Computer Score= ${cscore}`;
        if (cscore==5)
        {
            winner.textContent="YOU LOST :(";
            gameOver = true;
        }
        if(hscore==5)
        {
            winner.textContent="YOU WON :)"
            gameOver = true;
        }
        if(gameOver)
        {
            replaybtn.textContent="Replay?";
            replaybtn.style.display="block";
            replaybtn.addEventListener('click',()=>{
                gameOver=false;
                hscore=0;
                cscore=0;
                choice.textContent="";
                results.textContent="";
                score.textContent="";
                winner.textContent="";
                replaybtn.style.display="none";
            });
        }
    }
/*for (let i=0;i<5;i++){
    hSelection= getHumanChoice().toLowerCase();
    cSelection= getComputerChoice();
    console.log(`Computer:-${cSelection}`);
    console.log(`You:-${hSelection}`);
    playRound(cSelection, hSelection);
}*/
