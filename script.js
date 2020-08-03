let num1;
let num2;
document.getElementById("humenBtn").addEventListener("click", ()=>{
    let randomNumber1=Math.floor(Math.random() * 6) + 1;
    num1=randomNumber1;
    let randomImageScource="images/dice" + randomNumber1 + ".png";
    let img=document.querySelectorAll('img')[0];
      img.setAttribute("src", randomImageScource);
      document.getElementById('ComputerBtn').style.backgroundColor='green';
      document.getElementById('humenBtn').style.backgroundColor='red';
      var comColor =document.getElementById('result');
      comColor.innerHTML= 'Computer turn';
      comColor.style.color="orange";
     
 
      winwrGame();
     
});

document.getElementById("ComputerBtn").addEventListener("click", ()=>{
    let randomNumber2=Math.floor(Math.random() * 6) + 1;
     num2=randomNumber2;
    let randomImageScource2="images/dice" + randomNumber2 + ".png";
    let img2=document.querySelectorAll('img')[1];
   
    img2.setAttribute("src", randomImageScource2);
  
    var click2= document.getElementById('humenBtn');
     click2.style.backgroundColor='green';
   document.getElementById('ComputerBtn').style.backgroundColor='red';
  var userColor =document.getElementById('result');
   userColor.innerHTML= 'User turn';
   userColor.style.color="green";
    winwrGame2();
});
 
 
function winwrGame(){
 
   var currentnumber = document.getElementById('humen');
    var result1=document.getElementById('humen').innerHTML =  parseInt(currentnumber.textContent) + num1;
    if(result1 >= 50){
    
      document.getElementById('result').innerHTML='<i class="fas fa-user"></i>' + ' '  +  'User win';
    }
};

function winwrGame2(){
 
var currentnumber2 = document.getElementById('computer');
var result2= document.getElementById('computer').innerHTML =  parseInt(currentnumber2.textContent) + num2;
if(result2 >= 50){
  document.getElementById('result').innerHTML='<i class="fas fa-desktop"></i>' + ' '  +  'Computer win';
 
}

};

