//入场检测
const vh = window.innerHeight/100;
const fullPafeHeight = document.querySelector('.fullpage')
var pageScrollTop = fullPafeHeight.scrollTop
const f_one_in1 = document.querySelector('.f_one > .left > .item:nth-child(1)')
const f_one_in2 = document.querySelector('.f_one > .left > .item:nth-child(2)')
const f_one_in3 = document.querySelector('.f_one > .left > .item:nth-child(3)')
const f_one_in4 = document.querySelector('.f_one > .left > .item:nth-child(4)')

const f_two_content = document.querySelectorAll('.f_two > .content p')

const f_five1 = document.querySelector('.f_five .item:nth-child(1)')
const f_five2 = document.querySelector('.f_five .item:nth-child(2)')
const f_five3 = document.querySelector('.f_five .item:nth-child(3)')
const f_five4 = document.querySelector('.f_five .item:nth-child(4)')
const f_five5 = document.querySelector('.f_five .item:nth-child(5)')

function dect(){
    setInterval(()=>{
        if( fullPafeHeight.scrollTop >= 0 && fullPafeHeight.scrollTop <100*vh)
        {
            f_one_in1.classList.add('f_one_in1');
            f_one_in2.classList.add('f_one_in2');
            f_one_in3.classList.add('f_one_in3');
            f_one_in4.classList.add('f_one_in4');
        }
        if( fullPafeHeight.scrollTop >= 100*vh && fullPafeHeight.scrollTop <200*vh)
        {
            for(let i =0; i<f_two_content.length; i++)
            {
                f_two_content[i].classList.add('f_two_content');
            }

        }
        if( fullPafeHeight.scrollTop >= 200*vh && fullPafeHeight.scrollTop <300*vh)
        {
            
        }
        if( fullPafeHeight.scrollTop >= 300*vh && fullPafeHeight.scrollTop <400*vh){

        }
        if( fullPafeHeight.scrollTop >= 400*vh && fullPafeHeight.scrollTop <500*vh)
        {
            f_five1.classList.add('f_item1')
            f_five2.classList.add('f_item2')
            f_five3.classList.add('f_item3')
            f_five4.classList.add('f_item4')
            f_five5.classList.add('f_item5')
        }
    },100)

}
dect();
