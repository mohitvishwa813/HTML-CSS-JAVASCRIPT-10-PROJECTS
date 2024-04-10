let arrow=document.querySelector("#arrow");
window.addEventListener("scroll",()=>{
let position=window.scrollY;// scroll in y 
  
  if(position<=5){//if value of position in grater than 5
    arrow.classList.toggle('fade-in')
        arrow.classList.toggle('fade-out')
}
 });

