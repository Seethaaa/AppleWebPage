// let seetha6=document.getElementById("seetha6")
// console.log(seetha6);

// seetha6.onclick=function()
// {
//     let seee6=document.getElementsByTagName("article")
//     console.log(seee6[0]);
    
//     seee6[0].style.height="0px"
//     seee6[0].style.overflow="hidden"
//     seee6[0].style.transition="ease all 3s";
 
// }

// seetha6.onmouseleave=function(){
//     let seee6=document.getElementsByTagName("article")
//     console.log(seee6[0]);
    
//     seee6[0].style.height="330px"
//     seee6[0].style.overflow="hidden"
//     seee6[0].style.transition="ease all 3s";
// }
let seetha6=document.getElementById("seetha6")
console.log(seetha6);

seetha6.onclick=function()
{
    let article=document.getElementsByTagName("article")
    console.log(article);
    console.log(article[0]);
    let res=article[0].classList.toggle("true")
if(res){
    article[0].style.display="block"
    //aside.style.filter="blur(4px)"
}
else{
    article[0].style.display="none"
//     aside.style.filter="none"
}
}


