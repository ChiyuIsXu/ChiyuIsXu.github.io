//入场检测
const vh = window.innerHeight/100;
const fullPafeHeight = document.querySelector('.fullpage')
var pageScrollTop = fullPafeHeight.scrollTop

const c_two_content = document.querySelector('.c_two>.top2>.content')

const c_three_intro = document.querySelectorAll('.c_three>.top > .right > .intro .temp')
const c_three_imagroup = document.querySelector('.c_three>.top >.right> .relativeImageGroup')



function dect(){
    setInterval(()=>{
        if( fullPafeHeight.scrollTop >= 100*vh && fullPafeHeight.scrollTop <200*vh)
        {
            c_two_content.classList.add('c_two_content');

        }
        if( fullPafeHeight.scrollTop >= 200*vh && fullPafeHeight.scrollTop <300*vh)
        {
            for(let i = 0 ; i < c_three_intro.length; i++){
                c_three_intro[i].classList.add('c_three_intro');

            }
            c_three_imagroup.classList.add('c_three_imagroup');
        }
    },100)

}
dect();


