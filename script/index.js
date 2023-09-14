const page = document.querySelector('.homepage')
const btn_begin = document.querySelector(".begin");
const vh = window.innerHeight/100

// 首页的动画效果
const boat = document.getElementById("index13") 
const fish1 = document.getElementById("index01") 
const fish2 = document.getElementById("index14") 

// right
const index02 = document.getElementById("index02")
const index03 = document.getElementById("index03")
const index04 = document.getElementById("index04")
const index05 = document.getElementById("index05")
const index06 = document.getElementById("index06")
const index07 = document.getElementById("index07")
const index08 = document.getElementById("index08")
const index09 = document.getElementById("index09")
const index10 = document.getElementById("index10")
const index11 = document.getElementById("index11")
const index12 = document.getElementById("index12")
const index13 = document.getElementById("index13")

const index15 = document.getElementById("index15")
const index16 = document.getElementById("index16")
const index17 = document.getElementById("index17")
const index18 = document.getElementById("index18")
const index19 = document.getElementById("index19")
const index20 = document.getElementById("index20")
const index21 = document.getElementById("index21")
const index22 = document.getElementById("index22")
const index23 = document.getElementById("index23")
const index24 = document.getElementById("index24")
const index25 = document.getElementById("index25")
const index26 = document.getElementById("index26")


function anmation1(moveY){
    if(moveY !== 0 && moveY <=80*vh){
        boat.style.top =`${10 + moveY*0.9}vh`
        fish1.style.top=`${106 + moveY*0.2}vh`
        fish2.style.top=`${16 + moveY*0.6}vh`
        index02.style.left = `${6 - moveY*0.02}vw`
        index04.style.left = `${-2 - moveY*0.2}vw`
        index05.style.left = `${-15 - moveY*0.03}vw`
        index06.style.left = `${30 - moveY*0.03}vw`
        index08.style.left = `${-13 - moveY*0.01}vw`
        index11.style.left = `${-6 - moveY*0.03}vw`
        index12.style.left = `${19 - moveY*0.2}vw`
        
        index15.style.right = `${-5 - moveY}vw`
        index16.style.right = `${-6 - moveY*0.2}vw`
        index17.style.right = `${16 + moveY*0.2}vw`
        index18.style.right = `${11 - moveY*0.2}vw`
        index19.style.right = `${1 - moveY*0.2}vw`
        index20.style.right = `${-36 - moveY*0.2}vw`
        index21.style.right = `${-2 - moveY*0.2}vw`
        index22.style.right = `${-12 - moveY*0.2}vw`
        index23.style.right = `${24 - moveY*0.2}vw`
        index24.style.right = `${18 - moveY*0.2}vw`
        index25.style.right = `${11 - moveY*0.2}vw`
        index26.style.right = `${-1 - moveY*0.2}vw`
        
        
    }else if(moveY > 80*vh && moveY <= 150*vh){
        boat.style.top =`${10 + moveY*0.9}vh`
        fish1.style.top=`${106 + moveY*0.2}vh`
        fish2.style.top=`${16 + moveY*0.6}vh`
        index03.style.left = `${12 - moveY*0.05}vw`
        index07.style.left = `${-2 - moveY*0.01}vw`
        index10.style.left = `${-3 - moveY*0.04}vw`    
    }
}
function anmation2(moveY){
    if(moveY !== 0 && moveY <=80*vh){
        index15.style.right = `${-5 - moveY*0.01}vw`
        index17.style.right = `${16 - moveY*0.05}vw`
        index18.style.right = `${11 - moveY*0.01}vw`
        index19.style.right = `${1 - moveY*0.2}vw`
        index20.style.right = `${-36 - moveY*0.05}vw`
        index21.style.right = `${-2 - moveY*0.05}vw`
        index22.style.right = `${-12 - moveY*0.05}vw`
        index24.style.right = `${18 - moveY*0.5}vw`
        index25.style.right = `${11 - moveY*0.05}vw`
        index26.style.right = `${-1 - moveY*0.01}vw`         
    }else if(moveY > 80*vh && moveY <= 150*vh){
        index21.style.right = `${-2 - moveY*0.05}vw`
        index16.style.right = `${-6 - moveY*0.05}vw`
        index22.style.right = `${-12 - moveY*0.05}vw`
        index23.style.right = `${24 - moveY*0.05}vw`
    }
}


function skip(){
    setInterval(function(){
        location.href = './history.html'
    }, 1000)
}


var flag = 0;
var moveY = 0
var time = null;
const title = document.querySelector('.Topic1')
// 点击后运动
function move(){
    clearInterval(time);
    btn_begin.addEventListener('click', (e)=>{
        title.classList.remove('title_in')
        title.classList.add('title_hide')
        btn_begin.classList.add('hide')
        
        if(flag == 0)
        {                
            btn_begin.style.opacity = '0'
            flag++;
            time = setInterval(()=>{
                if(page.scrollTop >= 80*vh){
                    skip();
                    clearInterval(time);
                }
                else{
                    page.scrollTop  = page.scrollTop + 3
                    moveY = moveY +  0.4
                    anmation1(moveY);
                    anmation2(moveY);
                }
            },10);
        }
        else return;
        })
}
move();
