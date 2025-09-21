console.log("HELLo world");

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
function getHumanChoice()
{
    return prompt("Enter rock,paper or scissors");
}
let hscore=0;
let cscore=0;
function playRound(cchoice,hchoice){
    if(cchoice==hchoice)
    {console.log("its a tie");}
    else if(cchoice=="rock")
    {
        if(hchoice="paper")
        {console.log("YOU WIN! Paper beats Rock.")
            hscore++;
        }
        else if(hchoice="scissors")
        {console.log("YOU LOSE!Rock beats Scissors.")
            cscore++;
        }
    }
    else if(cchoice=="paper"){
        if(hchoice=="rock")
        {console.log("YOU LOSE!Paper beats Rock.")
            cscore++;
        }
        else if(hchoice="scissors")
        {
            console.log("YOU WIN!Scissors beats Paper.")
            hscore++;
        }
    }
    else{
        if(hchoice=="paper")
                {console.log("YOU LOSE! scissors beats Paper.")
                    cscore++;
                }
            else if(hchoice=="rock"){
                    console.log("YOU WIN!Rock beats scissors.")
                    hscore++;
                }
        }
        console.log(`Your Score=${hscore}; Computer Score= ${cscore}`);
    }
    let hSelection;
    let cSelection;
for (let i=0;i<5;i++){
    hSelection= getHumanChoice().toLowerCase();
    cSelection= getComputerChoice();
    console.log(`Computer:-${cSelection}`);
    console.log(`You:-${hSelection}`);
    playRound(cSelection, hSelection);
}
if (cscore==hscore)
{
    console.log("Its a Tie");
}
else if(cscore>hscore)
{
    console.log("Computer WON");
}
else if(hscore>cscore)
{
    console.log("YOU WON!");
}