
document.addEventListener("DOMContentLoaded",()=>{

  let players = ["playerOne", "playerTwo"]
  let p1=[];
  let p2 = [];

 //console.log(JSON.stringify(p1)==JSON.stringify(p1))
  let currentPlayer = 0;
  document.getElementById("player").innerHTML = players[currentPlayer];
   for(let i = 0; i<35; i++){
     let block = document.createElement("div");
     block.setAttribute("class", "block");
     block.setAttribute("id", i);
     block.addEventListener("click",()=>{
       switch(currentPlayer){
         case 0:
         block.setAttribute("class", players[currentPlayer]);
        p1.push(i);
        for(let f = 0 ; f < 5 ; f++){
          for(let j = f; j<f+5; j++){
            let newarr = [];
            newarr.push(j);
            newarr.push(j+7);
            newarr.push(j+14);
            //console.log(newarr);
            if(JSON.stringify(p1)==JSON.stringify(newarr)){
            alert(`${players[0]} Has Won`);
            document.getElementById("result").innerHTML = players[0] + " Wins!";
            }
          }
        }
        currentPlayer = 1;
        document.getElementById("player").innerHTML = players[currentPlayer];
         break;
         case 1:
         block.setAttribute("class", players[currentPlayer]);
         p2.push(i);
         for(let f = 0 ; f < 6 ; f++){
           for(let j = f; j<f+6; j++){
             let newarr = [];
             newarr.push(j);
             newarr.push(j+7);
             newarr.push(j+14);
             //console.log(newarr);
             if(JSON.stringify(p1)==JSON.stringify(newarr)){
             alert(`${players[0]} Has Won`);
             document.getElementById("result").innerHTML = players[0] + " Wins!";
             }
           }
         }
         currentPlayer = 0;
         document.getElementById("player").innerHTML = players[currentPlayer];
         break;

         default:
         break;
       }
     })
     document.getElementById("grid").append(block);
   }
   for(let i = 0; i<7; i++){
     let block = document.createElement("div");
     block.setAttribute("class", "taken");
     block.setAttribute("id", i);
     block.addEventListener("click",()=>{
       switch(currentPlayer){
         case 1:
         alert(`${players[0]} Has Won`);
         document.getElementById("result").innerHTML = players[0] + " Wins!";
         break;
         case 2:
         alert(`${players[1]} Has Won`);
         document.getElementById("result").innerHTML = players[1] + " Wins!";
         break;
         default:
         break;

       }
     })

     document.getElementById("grid").append(block);

   }
})
