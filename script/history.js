// 轮播图
const left = document.querySelector(".btn-left");
const right = document.querySelector(".btn-right");
const comp = document.querySelectorAll(".img-comp");
const img  = document.querySelectorAll(".images>img");

const mousein = document.querySelector(".h_one>.left");

var index = 0;
var time;

function show(i){
    for(let j = 0;j <comp.length; j++)
    {
        img[j].style.opacity = `0`;
    }
    img[i].style.opacity = `1`;
}
function add(){
    if(index >= comp.length-1)
    {
        index = 0;
    }
    else 
    {
        index++;
    }
}
function decs(){
    if(index < 1)
    {
        index = comp.length - 1;
    }
    else 
    {
        index--;
    }
}
function timer(){
    time = setInterval(()=>{
        index++;
        add();
        decs();
        show(index);
    }, 3000)
}
left.addEventListener("click",()=>{
    decs();
    console.log(index);
    show(index);
    clearInterval(time);
    timer();
});
  
right.addEventListener("click",()=>{
    add();
    console.log(index);
    show(index);
    clearInterval(time);
    timer();
});                  

for(let i = 0;i <comp.length; i++)
{
    comp[i].addEventListener("click",()=>{
        index = i
        show(i)
        clearInterval(time);
        timer();
    })   
}
timer();

mousein.addEventListener('mousemove',()=>{
    function show(){
        left.style.visibility = 'visible';
        right.style.visibility = 'visible';
    }
    setTimeout(show, 100);
})
mousein.addEventListener('mouseout',()=>{
    function hide(){
        left.style.visibility = 'hidden';
        right.style.visibility = 'hidden';
    }
    setTimeout(hide, 100);
})





