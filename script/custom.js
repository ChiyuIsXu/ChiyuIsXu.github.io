const detail01 = document.querySelector('#detail01')
const detail02 = document.querySelector('#detail02')
const detail03 = document.querySelector('#detail03')
const detail04 = document.querySelector('#detail04')
const detail05 = document.querySelector('#detail05')
const I1 = document.querySelector('#I1')
const I2 = document.querySelector('#I2')
const I3 = document.querySelector('#I3')

const intro = document.querySelector('.intro')

detail01.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>川西一带雨水节气的主要习俗之一是女婿去给岳父岳母送节。送节的礼品则通常是两把藤椅，上面缠着一丈二尺长的红带，这称为“接寿”，意思是祝岳父岳母长命百岁。</p><br>
    <p>    送节的一个典型礼品就是“罐罐肉”：用沙锅炖了猪脚和雪山大豆，海带，再用红纸，红绳封了罐口，给岳父岳母送去。这是对辛辛苦苦将女儿养育成人的岳父岳母表示感谢和敬意。</p><br>
    <p>如果是新婚女婿送节，岳父岳母还要回赠雨伞，让女婿出门奔波，能遮风挡雨，也有祝愿女婿人生旅途顺利平安的意思。</p><br>
    `
    function Message(){
        I1.src = './images/customs/custom/习俗图片-立春/1lichun.png'
        I2.src = './images/customs/custom/习俗图片-立春/2lichun.png'
        I3.src = './images/customs/custom/习俗图片-立春/3lichun.png'    
    }
        setTimeout(Message, 200)
})
detail02.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>据清嘉庆本《澄海县志》载：</p><br>
    <p>每年的立春日，官府必须率人马到郊外举行迎春大典，然后举行“鞭春牛”活动。</p> <br>
    <p>早在周朝时，就有春日鞭春牛的活动。每年立春节前，各州府事先制好泥塑芒神和土牛。到了立春这一天，官府带着迎春队伍，浩浩荡荡地来到东郊八里处事先准备好的芒神亭和土牛台。迎春队伍中的人一律穿青色衣服，用青色车子、擎青色旗帜，人们吹着牛角号、唱着“青阳曲”，舞动羽毛仪仗，跳着云翘舞，隆重举行迎春仪式。打春牛意在策励农耕。</p><br>
    <p>潮汕地处韩江三角洲土壤肥沃。农业甚发达，因而与劝农有关的这一习俗得以在潮汕地区保留下来，但具体事项已有所改变。</p><br>
    `
    function Message(){
        I1.src =     './images/customs/custom/习俗图片-雨水/4yvshui.png'
        I2.src =     './images/customs/custom/习俗图片-雨水/5yvshui.png'
        I3.src =     './images/customs/custom/习俗图片-雨水/6yvshui.png'
    }
        setTimeout(Message, 200)
})
detail03.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>    春分前清气上升，微风飘荡，正是放风筝的好时节。在潍坊，放风筝是一具有悠久历史传统的民俗文化。</p><br>
    <p>“一百四日小寒食，冶游争上白狼河。纸鸢儿子秋千女，乱比新来春燕多。”这是清道光年间潍县学者、诗人郭麐描写当年人们郊游赏春场景的一首竹枝词——清明时节，春和景明，花开似锦，春阳满路，白浪河沙滩上，踏青春游的人们纷至沓来，人们放风筝、荡秋千，热闹非凡。</p><br>
    `
    function Message(){
        I1.src = './images/customs/custom/习俗图片-春分/10chunfen.png'
        I2.src = './images/customs/custom/习俗图片-春分/11chunfen.png'
        I3.src = './images/customs/custom/习俗图片-春分/12chunfen.png'    
    }
        setTimeout(Message, 200)
})
detail04.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>    乌镇有句民谣：“三月三、庙门开，乡下蚕娘出门槛，东亦逛、西亦颠，轧朵蚕花回家来。”生动地再现了当地养蚕人的生活。乌镇地处杭嘉湖平原腹地，栽桑养蚕已有上千年的历史。古代人们养蚕靠天时，蚕农们为了祈求神灵的庇护，形成诸多的蚕乡习俗。</p><br>
    <p>    蚕花会在香市期间，赶香市时，农村妇女们烧烧香，祭祭神灵，或添置一些蚕具、农具和日用品，除此之外还有一项很特别的民俗活动，那就是在庙里烧过香之后，还要到土地庙前面的水潭里洗洗手，俗称“洗蚕花手”。据说，在那里洗过手以后，养起蚕来就特别顺手，蚕也会无病无灾。</p><br>
    `
    function Message(){
        I1.src = './images/customs/custom/习俗图片-清明/13qingming.png'
        I2.src = './images/customs/custom/习俗图片-清明/14qingming.png'
        I3.src = './images/customs/custom/习俗图片-清明/15qingming.png'    
    }
        setTimeout(Message, 200)
})
detail05.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>    对于渔家而言，谷雨流行祭海习俗。谷雨时节正是春海水暖之时，百鱼行至浅海地带，是下海捕鱼的好日子。俗话说“骑着谷雨上网场”，为了能够出海平安、满载而归，谷雨这天渔民要举行海祭，祈祷海神保佑。</p><br>
    <p>至目前，岱山部分渔村仍沿袭着这一传统的民间习俗，保留了祭海的粗犷、纯朴的原生态文化风貌，展示着东海海域渔民龙信仰的独特传统文化与深厚的民俗内涵。</p><br>

    `
    function Message(){
        I1.src = './images/customs/custom/习俗图片-谷雨/16guyv.png'
        I2.src = './images/customs/custom/习俗图片-谷雨/17guyv.png'
        I3.src = './images/customs/custom/习俗图片-谷雨/18guyv.png'    
    }
        setTimeout(Message, 200)
})
detail06.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>芒种已近五月间，百花开始凋残、零落，民间多在芒种日举行祭祀花神仪式，饯送花神归位，同时表达对花神的感激之情，盼望来年再次相会。每逢花朝，文人雅士便相邀雅集，赏花之余，饮酒赋诗，高吟竟日。白居易有“春江花朝秋月夜”之句，李商隐有“不拣花朝与雪朝”之咏。</p><br>
    <p>近年来，广州、武汉、杭州、南京、苏州等地络绎复办花朝节，举行花展、书展、诗会等系列文化活动，让深藏于典籍中的岁时风雅，穿越浩瀚时空重现浪漫。（打泥巴仗，嫁树）</p><br>
    `
    function Message(){
        I1.src ='./images/customs/custom/习俗图片-芒种/19mangzhong.png'
        I2.src ='./images/customs/custom/习俗图片-芒种/20mangzhong.png'
        I3.src ='./images/customs/custom/习俗图片-芒种/21mangzhong.png'    
    }
    setTimeout(Message, 200)
})
detail07.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>每年农历六月六之前，鲁南地区的人们都要选择一天吉日，在这一天用新成熟的小麦制作食物，责荐献天地、祖先——当地人把这种习俗称为“过夏麦”。</p><br>
    <p>    杨侃在《皇畿赋》中记载，“雪拥冬苗,雨滋夏穗,当新麦以时荐,故清跸而亲至。”可见其历史悠久。捞新麦，磨新面，包饺子，庆祝麦收，人们对吃食的渴望早已超过了一碗面食，但夏至制作的这碗饺子已成为传承过去和现在的纽带，寄托着古往今来人们对自然的感恩和丰收的希冀。</p><br>
    `
    function Message(){
        I1.src = './images/customs/custom/习俗图片-夏至/23xiazhi.png'
        I2.src = './images/customs/custom/习俗图片-夏至/24xiazhi.png'
        I3.src = './images/customs/custom/习俗图片-夏至/25xiazhi.png'   
    }
    setTimeout(Message, 200)
})

detail08.addEventListener('mouseenter',function(){
    intro.innerHTML = 
    `
    <p>白露时节是太湖人祭禹王的日子——禹王就是传说中的治水英雄大禹。这时秋水横溢，鱼蟹生膘，太湖两岸的渔民会在白露时节赶往位于太湖中央小岛上的禹王庙祭祀大禹。届时，人们就会赶庙会、打锣鼓、跳舞蹈，并许愿将把秋冬之际捕捞的第一条肥鱼献给禹王，以求在捕捞季获得好收成。</p><br>
    `
    function Message(){
        I1.src = './images/customs/custom/习俗图片-白露/26bailu.png'
        I2.src = './images/customs/custom/习俗图片-白露/27bailu.png'
        I3.src = './images/customs/custom/习俗图片-白露/28bailu.png'  
    }
    setTimeout(Message, 200)
})
