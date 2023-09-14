//入场检测
const vh = window.innerHeight/100;
const fullPafeHeight = document.querySelector('.fullpage')
var pageScrollTop = fullPafeHeight.scrollTop

const c_one_content = document.querySelector('.c_one > .atricle > .content')
const c_two_content = document.querySelectorAll('.c_two > .content > #msg .temp')

const c_three1 = document.querySelector('.c_three > .content > img:nth-child(1)')
const c_three2 = document.querySelector('.c_three > .content > img:nth-child(2)')
const c_three3 = document.querySelector('.c_three > .content > img:nth-child(3)')
const c_three4 = document.querySelector('.c_three > .content > img:nth-child(4)')
const c_three5 = document.querySelector('.c_three > .content > img:nth-child(5)')
const c_three6 = document.querySelector('.c_three > .content > img:nth-child(6)')
const c_three7 = document.querySelector('.c_three > .content > img:nth-child(7)')
const c_three8 = document.querySelector('.c_three > .content > img:nth-child(8)')

const c_four_content = document.querySelector('.c_four > .article > .content')



function dect(){
    setInterval(()=>{
        if( fullPafeHeight.scrollTop >= 0 && fullPafeHeight.scrollTop < 100*vh)
        {
            c_one_content.classList.add('c_one_content')
        }
        if( fullPafeHeight.scrollTop >= 100*vh && fullPafeHeight.scrollTop <200*vh)
        {
            for(let i =0; i<c_two_content.length; i++)
            {
                c_two_content[i].classList.add('c_two_content')
            }
        }
        if( fullPafeHeight.scrollTop >= 200*vh && fullPafeHeight.scrollTop <300*vh)
        {
            c_three1.classList.add('c_three1')
            c_three2.classList.add('c_three2')
            c_three3.classList.add('c_three3')
            c_three4.classList.add('c_three4')
            c_three5.classList.add('c_three5')
            c_three6.classList.add('c_three6')
            c_three7.classList.add('c_three7')
            c_three8.classList.add('c_three8')
        }
        if( fullPafeHeight.scrollTop >= 300*vh && fullPafeHeight.scrollTop <400*vh)
        {
            c_four_content.classList.add('c_four_content')
        }
    },100)

}
dect();


