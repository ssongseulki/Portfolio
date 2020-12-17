 /* main-typing */
 var typingBool = false;
 var typingIdx = 0;
 var liIndex = 0;
 var liLength = $(".typing-txt>ul>li").length;

 var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
 typingTxt = typingTxt.split("");
 if (typingBool == false) {
   typingBool = true;
   var tyInt = setInterval(typing, 100);
 }
 function typing() {
   $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
   if (typingIdx < typingTxt.length) {
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
     typingIdx++;
   } else {
     if (liIndex < liLength - 1) {
       liIndex++;
       typingIdx = 0;
       typingBool = false;
       typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
       clearInterval(tyInt);
       setTimeout(function () {
         tyInt = setInterval(typing, 100);
       }, 1000);
     } else if (liIndex == liLength - 1) {
       clearInterval(tyInt);
       setTimeout(function () {
         typingBool = false;
         liIndex = 0;
         typingIdx = 0;
         typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
         $(".typing ul li").html("");
         tyInt = setInterval(typing, 100);
       }, 1000);
     }
   }
 }

 /* modal */
 var modal = document.getElementsByClassName("modal");
 var btn = document.getElementsByClassName("myBtn");
 var span = document.getElementsByClassName("close");
 var funcs = [];

 function Modal(num) {
   return function () {
     btn[num].onclick = function () {
       modal[num].style.display = "block";
       console.log[num];
     };

     span[num].onclick = function () {
       modal[num].style.display = "none";
     };
   };
 }

 for (var i = 0; i < btn.length; i++) {
   funcs[i] = Modal(i);
 }
 for (var j = 0; j < btn.length; j++) {
   funcs[j]();
 }
 window.onclick = function (event) {
   if (event.target.className == "modal") {
     event.target.style.display = "none";
   }
 };

function alertMessage() {
    alert("jsp파일로 깃허브 웹 페이지 제공이 불가한 점 양해 부탁드립니다.   소스 코드 확인은 'Project Repo'를 클릭하세요. ");
}