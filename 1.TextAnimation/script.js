const typed_text= document.querySelector(".typed-text");
const cursor=document.querySelector(".cursor");
const words=["Awesome","fun","life","Famous","👑"];
const typingDelay=200;
const erasingDelay=200;
//delay btw current and next text;
const newletter=2000;
let index=0;
let charindex=0;

document.addEventListener("DOMContentLoaded",()=>{
  if(words.length){
setTimeout(type,newletter)}
})


function type(){
if(charindex < words[index].length){
  typed_text.textContent/*append*/+= words[index].charAt(charindex);
  charindex++;
  setTimeout(type,typingDelay);
}
  else{
setTimeout(erase,newletter);
  }
}
function erase(){
if(charindex>0){
typed_text.textContent=words[index].substring(0,charindex-1);
charindex--;
  setTimeout(erase,erasingDelay);
}
else{
index++;
if(index>=words.length){//when a all elemnts of words is completed than agin start with first index
index=0;
}
setTimeout(type,typingDelay+1100);
}}