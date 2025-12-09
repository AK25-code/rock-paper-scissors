console.log("HELLo world");
let rockbtn=document.querySelector('#rock');
let paperbtn=document.querySelector('#paper');
let scissorsbtn=document.querySelector('#scissor');
let hSelection;
let cSelection;
let hscore=0;
let cscore=0;
let round=document.querySelector('#round');
let yourchoice=document.querySelector('#yourchoice');
let computerchoice=document.querySelector('#computerchoice');
let results=document.querySelector('#results');
let yourscore=document.querySelector('#yourscore');
let computerscore=document.querySelector('#computerscore');
let winner=document.querySelector('#winner');
let gameOver = false;
let replaybtn=document.querySelector('#replay');
 yourscore.textContent=`Your=${hscore}`;
 computerscore.textContent=`Computer= ${cscore}`;
rockbtn.addEventListener('click',()=>{
    if (gameOver) return;
    hSelection="rock";
    cSelection= getComputerChoice();
    computerchoice.textContent=`Computer: ${cSelection}`;
    yourchoice.textContent=`Human: ${hSelection}`
    playRound(cSelection, hSelection);
});
paperbtn.addEventListener('click',()=>{
    if (gameOver) return;
    hSelection="paper";
    cSelection= getComputerChoice();
   computerchoice.textContent=`Computer: ${cSelection}`;
    yourchoice.textContent=`Human: ${hSelection}`
    playRound(cSelection, hSelection);
});
scissorsbtn.addEventListener('click',()=>{
    if (gameOver) return;
    hSelection="scissors";
    cSelection= getComputerChoice();
    computerchoice.textContent=`Computer: ${cSelection}`;
    yourchoice.textContent=`Human: ${hSelection}`
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
        yourscore.textContent=`Your=${hscore}`;
        computerscore.textContent=`Computer= ${cscore}`;
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
                yourchoice.textContent="";
                computerchoice.textContent="";
                results.textContent="";
                winner.textContent="";
                replaybtn.style.display="none";
                yourscore.textContent=`Your=${hscore}`;
                computerscore.textContent=`Computer= ${cscore}`;
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
