const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",function(e){
  //event.pageX -->across;
  // console.log('pageX,e.pageX');
   //event.pageY -->up and down;
  //console.log('pageY,e.pageY');
moveCursor(e.pageX, e.pageY);
});

const moveCursor=function(pageX,pageY){
cursor.style.left=pageX +"px";
cursor.style.top=pageY +"px";
}