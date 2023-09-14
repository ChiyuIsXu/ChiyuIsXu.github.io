//入场检测
const vh = window.innerHeight/100;
const fullPafeHeight = document.querySelector('.fullpage')
var pageScrollTop = fullPafeHeight.scrollTop

const h_two_left = document.querySelector('.h_two>.top1 .left')
const h_two_right = document.querySelector('.h_two>.top1 .right')
const h_two_content = document.querySelector('.h_two>.top2>.content')

const h_ballon1 = document.querySelector('.solarSpecific:nth-child(1)')
const h_ballon2 = document.querySelector('.solarSpecific:nth-child(2)')
const h_ballon3 = document.querySelector('.solarSpecific:nth-child(3)')
const h_ballon4 = document.querySelector('.solarSpecific:nth-child(4)')

const h_four1 = document.querySelector('.h_four > .top1 .item:nth-child(1)')
const h_four2 = document.querySelector('.h_four > .top1 .item:nth-child(2)')
const h_four3 = document.querySelector('.h_four > .top1 .item:nth-child(3)')
const h_four4 = document.querySelector('.h_four > .top1 .item:nth-child(4)')
const h_four5 = document.querySelector('.h_four > .top1 .item:nth-child(5)')
const h_four_content = document.querySelector('.h_four >.content')

const para1 = document.querySelector('.h_five .first')
const para2 = document.querySelector('.h_five .second')

const h_five_top = document.querySelector('.h_five>.top')
const h_five_bottom = document.querySelector('.h_five>.bottom')
// setInterval(()=>{
//     console.log(fullPafeHeight.scrollTop)
// },1000)
var flag = 0;

function dect(){
    setInterval(()=>{
        if( fullPafeHeight.scrollTop >= 100*vh && fullPafeHeight.scrollTop <200*vh)
        {
            // alert('True');
            h_two_left.classList.add('h_left_in')
            h_two_right.classList.add('h_right_in')
            h_two_content.classList.add('h_content_in')
        }
        if( fullPafeHeight.scrollTop >= 200*vh && fullPafeHeight.scrollTop <300*vh)
        {
            h_ballon1.classList.add('h_ballon')
            h_ballon2.classList.add('h_ballon',)
            h_ballon3.classList.add('h_ballon')
            h_ballon4.classList.add('h_ballon')
            // setInterval(()=>{
            //     if(flag == 0){
            //             flag++;
            //         }
            //     else{
            //         h_ballon1.classList.add('h_ballon_move')
            //         h_ballon2.classList.add('h_ballon_move')
            //         h_ballon3.classList.add('h_ballon_move')
            //         h_ballon4.classList.add('h_ballon_move')
            //         // h_ballon1.classList.remove('h_ballon')
            //         // h_ballon2.classList.remove('h_ballon')
            //         // h_ballon3.classList.remove('h_ballon')
            //         // h_ballon4.classList.remove('h_ballon')
            //     }
            // },20)
            
        }
        if( fullPafeHeight.scrollTop >= 300*vh && fullPafeHeight.scrollTop <400*vh){
            h_four1.classList.add('h_four1')
            h_four2.classList.add('h_four2')
            h_four3.classList.add('h_four3')
            h_four4.classList.add('h_four4')
            h_four5.classList.add('h_four5')
            h_four_content.classList.add('h_four_content')
        }
        if( fullPafeHeight.scrollTop >= 400*vh && fullPafeHeight.scrollTop <500*vh)
        {
            // alert('True');
            h_five_top.classList.add('h_five_top')
            h_five_bottom.classList.add('h_five_bottom')
            // h_two_right.classList.add('h_right_in')
            para1.classList.add('h_five_show')
            para2.classList.add('h_five_show')
        }
    },100)

}
dect();


