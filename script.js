let user_score=0;
let comp_score=0;
const userPoints=document.querySelector("#user_id");
const compPoints=document.querySelector("#comp_id");
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const compChoice=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return compChoice[index];
}

const showWinner=(userwin,compChoice,userChoice)=>
    {
        if(userwin){

            msg.innerText=`User Won! Your ${userChoice} beats  ${compChoice} `;
            msg.style.backgroundColor="green";
            user_score++;
            userPoints.innerText=`${user_score}`;
        }
        else{
             msg.innerText=`User Loss! Computer ${compChoice} beats  ${userChoice} `;
              msg.style.backgroundColor="red";
              comp_score++;
              compPoints.innerText=`${comp_score}`;
        }
    }

const playGame=(userChoice)=>
{
  //generate computer choice
 let compChoice= genCompChoice();
 
 if(compChoice===userChoice)
    {
           msg.innerText="Draw! Play Again";
            msg.style.backgroundColor="black";
    }
  else 
  {
    let userwin=true;
    if(userChoice==="rock")
        {//scissors or paper
             userwin=compChoice==="paper"?false:true;
        }
    else  if(userChoice==="paper")
        {//scissors or rock
             userwin=compChoice==="scissors"?false:true;
        }
    else
    { //rock or paper
               userwin=compChoice==="rock"?false:true;
    }
      showWinner(userwin,compChoice,userChoice);
  }
 
   


}
choices.forEach(choice=>{
  
  
    choice.addEventListener("click",()=>
    {
          const userChoice=choice.getAttribute("id");
          playGame(userChoice);
    })
});