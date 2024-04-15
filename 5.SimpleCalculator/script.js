const btn =document.querySelector("#btn");
const btn1 =document.querySelector("#btn1");
let result=document.querySelector(".result");
// let num1=document.querySelector(".num1").value;
// let num2=document.querySelector(".num2").value;
// let operator=document.querySelector("#selectop").value;

/* above is not working because num1,num2 ,operator are fethed outside the event listener*/

btn.addEventListener('click',()=>{
  let num1=document.querySelector(".num1").value;
let num2=document.querySelector(".num2").value;
let operator=document.querySelector("#selectop").value;
  
  switch(operator){
case "plus":
  result.innerHTML= Number(num1)+Number(num2);
      break;
    
    case "min":
  result.innerHTML= Number(num1)-Number(num2);
      break;
      
      case "dive":
  result.innerHTML= Number(num1)/Number(num2);
      break;
      
      case "mult":
  result.innerHTML= Number(num1)*Number(num2);
      break;
      
  }
  
});
/*for clear*/
btn1.addEventListener('click',()=>{
  result.innerText="Result";
})