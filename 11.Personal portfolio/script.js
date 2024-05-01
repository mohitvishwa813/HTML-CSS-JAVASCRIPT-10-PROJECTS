const typed_text= document.querySelector(".typed-text");
const cursor=document.querySelector(".cursor");
const words=["Frontend Developer","Javascript Developer","React.js Developer"];
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

const mywork=document.querySelector("#work");
const linkedin=document.querySelector("#linked");
const p1git=document.querySelector("#p1");
const p2git=document.querySelector("#p2");
const p3git=document.querySelector("#p3");
const p4git=document.querySelector("#p4");
const insta=document.querySelector("#insta");
mywork.addEventListener('click',()=>{
  window.location.href="https://github.com/mohitvishwa813";
})
linkedin.addEventListener('click',()=>{
  window.location.href="www.linkedin.com/in/mohit-vishwakarma-876627287";
})



p1git.addEventListener('click',()=>{
  window.location.href="https://github.com/mohitvishwa813/images_search_engine";
})
p2git.addEventListener('click',()=>{
  window.location.href="https://github.com/mohitvishwa813/Donation-Website/tree/main/DonationWebsite";
})

p3git.addEventListener('click',()=>{
  window.location.href="https://github.com/mohitvishwa813/Rest-countries-Api-project/tree/main/RestCountriesApi";
})
p4git.addEventListener('click',()=>{
  window.location.href="https://github.com/mohitvishwa813/UrlShortner/tree/main/Urlshortner";
})

insta.addEventListener('click',()=>{
  window.location.href="https://www.instagram.com/mohitvishwakarma333?igsh=MW9iMmY4ZzB6ZXZxaQ==";
})


var element = document.getElementById('someElement');
if (element !== null) {
    var text = element.textContent;
    // Do something with text
} else {
    console.error("Element not found");
}
