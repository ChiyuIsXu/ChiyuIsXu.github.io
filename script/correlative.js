const intro = document.querySelector('#intro')
const para = document.querySelector('#para')
const back = document.querySelector('#back')

const msg = document.querySelector('#msg')

intro.addEventListener('mouseenter',function(){
    msg.innerHTML = 
    `
    <p>中文名：二十四节气（光阴的故事）金银纪念币</p><br>
    <p>外文名：Twenty four solar terms (story of time) gold and silver commemorative coins</p><br>
    <p>发行机构：中国人民银行</p><br>
    <p>发行时间：2022年8月7日</p><br>
    <p>类型：贵金属纪念币</p><br>
    <p>全套枚数：28枚，其中金质纪念币4枚，银质纪念币24枚</p>
    `
})

back.addEventListener('mouseenter',function(){
    msg.innerHTML = 
    `
    <p>发行背景</p><br>
    <p>二十四节气是古人在长期的生产实践中逐步认识到季节更替和气候变化的规律，把一年分为立春、雨水、惊蛰、春分等二十四个节气。二十四节气用以反映四季、气温、降雨、物候等方面的变化，这是我国古代劳动人民掌握农事季节的经验总结，是中国传统历法体系及其相关实践活动的重要组成部分。</p><br>
    <p>二十四节气于2016年被联合国评为人类非物质文化遗产代表作，被誉为“中国的第五大发明”，是中国目前最有影响力的非物质文化遗产之一。<br>
    作为我国古代劳动人民对时令等变化规律所独创的知识体系，中国人民银行发行二十四节气（光阴的故事）金银纪念币，彰显了中华民族的历史文化、时空智慧与生态观念。“光阴的故事”主题讲述的是一个人们如何与时光相处的故事，展现华夏源远流长的节气文化和精神气节。</p><br>
    `
})
para.addEventListener('mouseenter',function(){
    msg.innerHTML = 
    `
    <table>
        <thead>
            <tr>
                <th>币名</th>
                <th>材质</th>
                <th>重量</th>
                <th>质量</th>
                <th>形状</th>
                <th>规格</th>
                <th>面额</th>
                <th>成色</th>
                <th>最大发行量</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3克圆形金质纪念币</td>
                <td>纯金</td>
                <td>3克</td>
                <td>精制</td>
                <td>圆形</td>
                <td>直径18毫米</td>
                <td>50元</td>
                <td>99.9%</td>
                <td>4×30000枚</td>
            </tr>
            <tr>
                <td>8克正方形银质纪念币</td>
                <td>纯银</td>
                <td>8克</td>
                <td>精制</td>
                <td>方形</td>
                <td>23毫米×23毫米	</td>
                <td>3元</td>
                <td>99.9%</td>
                <td>24×60000枚</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>

    `
})