let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".hide");
let resetbtn=document.querySelector("#reset");
let turn0=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("you have clicked a button");
        if(turn0){      
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const enableBoxes=()=>{
    for(let box of boxes){
       box.disabled=true;
    }
}
const resetgame=()=>{
    box.innerText=" ";
        msgcontainer.classList.add("hide");
        turn0=true;
        enableBoxes();
 }





const disableBoxes=()=>{
    for(let box of boxes){
       box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
const checkwinner=()=>{
    for(let value of winPattern){
     let pos1value =boxes[value[0]].innerText;
     let pos2value=boxes[value[1]].innerText;
     let pos3value=boxes[value[2]].innerText;
     if(pos1value!="" && pos2value!="" && pos3value!=""){
        if(pos1value===pos2value && pos2value===pos3value){
             console.log("winner",pos1value);
             showWinner(pos1value);
        }
     }
    }
}
resetbtn.addEventListener("click",resetgame());