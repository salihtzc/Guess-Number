const check = document.querySelector(".check");
const msg = document.querySelector(".msg");
const body = document.querySelector("body");
let rastgele =  Math.ceil(Math.random() * 20);
console.log(rastgele);


const again = document.querySelector(".again");
let score = 10;
let TopScore = 0;
console.log(rastgele);


check.onclick=()=>{

  const guess = document.querySelector(".guess");

  while (score > 0){
    if (rastgele == guess.value){

        body.style.backgroundColor="green";
        msg.textContent="Congratulations!"
        
    
        document.querySelector(".number").textContent= rastgele ;    
      if( score > TopScore){
      document.querySelector(".top-score").textContent = score;
      }

       
        break;
    }
    else if (rastgele < guess.value){
        score--;
        document.querySelector(".score").textContent = score;
        body.style.backgroundColor="red";
        msg.textContent="Azaltin";

        break;
    }
    else if (rastgele > guess.value){
        score--;
        document.querySelector(".score").textContent = score;
        body.style.backgroundColor="red";
        msg.textContent="Artirin";

        break;
    }
 } 
 if (score==0){
    msg.textContent="Sorry you lost";
    body.style.backgroundColor="red";
    document.querySelector(".score").textContent = score;

 }
}

//? Again butonuna basıldığında
again.onclick=()=> {
    rastgele =  Math.ceil(Math.random() * 20);
    console.log(rastgele);
    score = 10;
    msg.textContent="Starting..";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#2D3436";
    document.querySelector(".guess").value= "";

}