//  count ,save, increment btn,save btn ,clear;
let count=document.querySelector('#count');
let save=document.querySelector('#save');
let increment=document.querySelector('.increment-btn');
let savebtn=document.querySelector('.save-btn');
let clear=document.querySelector('.clear-btn');

let cn=0;
increment.addEventListener('click',()=>{
  cn=cn+1;
  count.innerText=cn;
    // count.textContent=cn;     this is also working
})
savebtn.addEventListener('click',()=>{
  let countstr=cn + " , ";
  save.textContent+=countstr;
  count.innerHTML=0;
  cn=0;
  
})


clear.addEventListener('click',()=>{
  save.innerText=" ";
         cn=0;  
   count.innerHTML=0;
})