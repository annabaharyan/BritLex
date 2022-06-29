let btn=document.querySelectorAll(".grey-btn");
  for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function () {
      btn[i].style.background = "#6a6e6e";
     });
  btn[i].addEventListener("mouseleave",function () {
   btn[i].style.background = "#263238";
 })}