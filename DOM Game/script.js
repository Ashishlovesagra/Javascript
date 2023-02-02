
let initialscore=100
let highscore=null;
var randomnumber = generateRandomInteger(100);
function reloadgame(){
    document.getElementById('guessid').value="";
    document.getElementsByClassName('score').textContent=100 ;
    document.getElementById('sc').textContent="Start guessing..." ;
    document.body.style.backgroundColor="yellow";
    document.getElementsByClassName('number').style.height="192px" ;
    document.getElementsByClassName('number').textContent="?";
     randomnumber = generateRandomInteger(100);
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
   
  function maincheck(){
          
       let inputnumber= document.getElementById('guessid').value ;

    if(initialscore!==0){
       if(inputnumber>randomnumber ){
       document.getElementById('sc').textContent="Your Guess Is High" ;
           initialscore--
         document.getElementsByClassName('score').textContent=initialscore;
       }
       else if(inputnumber<randomnumber){
        document.getElementById('sc').textContent="Your Guess Is Low" ;
        initialscore--
        document.getElementsByClassName('score').textContent=initialscore;
       }
       else{

        document.getElementById('sc').textContent="🔥 🔥 Hurray You Won 🔥 🔥"
        document.body.style.backgroundColor="green";
        initialscore--
        document.getElementsByClassName('score').textContent=initialscore;
        document.getElementsByClassName('number').textContent=randomnumber;
        document.getElementsByClassName('number').style.height="160px";
         highscore=initialscore
          document.getElementsByClassName('highscore').textContent=highscore;
          document.getElementsByClassName('check').style.visibility="hidden" ;
        
             
        
       }
    } else{
        document.getElementsByClassName('message').textContent="Game Over 🙂 🙂 your score is 0"
        
    }
       
   }