

//轮播图
const oBannerRight = document.querySelector('.banner_right');
const oUllis = document.querySelectorAll('.banner_ul>li');
// console.log(oUllis)
const oUl = document.querySelector('.banner_ul');
const oOl = document.querySelector('.banner_ol');
// console.log(oOl)
let time;
let index = 1;
let oLiWidth = oUllis[0].clientWidth;
let bool = '原始值';
// 通过函数,生成焦点li标签
setFocus();
cloneLi();
autoLoop();
setFocusStyle();
inOut();
leftRight();
setFocusClick();
hid();


// 1.获取ol里面的li
function setFocus (){
     str = '';
     oUllis.forEach( function(v,k){
         if(k===0){
             str += `<li class="active" index="${k+1}"></li>`
         }else{
             str +=`<li index="${k+1}"></li>`
         }
     })
     oOl.innerHTML= str;
     
}
// 2.克隆原始轮播图片
function cloneLi(){
    const firstLi = oUllis[0];
    const lastLi = oUllis[oUllis.length-1];
    const cloneFirstLi = firstLi.cloneNode(true);
    const cloneLastLi = lastLi.cloneNode(true);
    oUl.appendChild(cloneFirstLi);
    oUl.insertBefore(cloneLastLi,firstLi);
    oUl.style.width=( oUllis.length + 2 ) * oLiWidth + 'px';
    oUl.style.left = -oLiWidth + 'px';
}
// 3.自动轮播
function autoLoop(){
    time = setInterval( ()=>{
        index++;
        move( oUl , { left: -index*oLiWidth } );
        // 自动轮播,运动一开始就切换焦点
        
    } , 4000);
}
//4.轮播终止函数
function loopEnd(){
    if(index === oUllis.length+1){
        index = 1;
        oUl.style.left = -index*oLiWidth + 'px';
    }else if( index === 0 ){
        index = oUllis.length;
        oUl.style.left = -index*oLiWidth + 'px';
    }
    bool = '原始值';
}

 // 5.设定焦点按钮函数
 function setFocusStyle(){
    // 1,获取所有的焦点按钮
    const oOllis = document.querySelectorAll('ol>li');

    // 2,循环遍历所有的ol>li
    oOllis.forEach( (v,k)=>{
        v.className = '';
        if( v.getAttribute('index') == index ){
            v.className = 'active';
        }
    } )
}

       // 鼠标移入移出
       function inOut(){
        oBanner.addEventListener( 'mouseenter' , ()=>{
            clearInterval(time);
        } )

        oBanner.addEventListener( 'mouseleave' , ()=>{
            autoLoop();
        } )
    }

    // 左右切换
    function leftRight(){
        oBanner.addEventListener( 'click' , e=>{
            e = e || window.event;
            if(e.target.getAttribute('name') === 'left'){
                if(bool !== '原始值'){
                    return;
                }
                bool = '随便,不是原始值就行';
                index--;
                move(oUl , {left: -index*oLiWidth} , loopEnd);
                // 点击焦点,触发图片切换,一开始就切换焦点样式
                setFocusStyle();
            }else if(e.target.getAttribute('name') === 'right'){
                if(bool !== '原始值'){
                    return;
                }
                bool = '随便,不是原始值就行';
                index++;
                move(oUl , {left: -index*oLiWidth} , loopEnd);
                // 点击焦点,触发图片切换,一开始就切换焦点样式
                setFocusStyle();
            }
        } )
    }

    // 焦点切换
    function setFocusClick(){
        oOl.addEventListener('click' , e=>{
            e = e || window.event;
            if(e.target.tagName === 'LI'){
                if(bool !== '原始值'){
                    return;
                }
                bool = '随便,不是原始值就行';
                index = e.target.getAttribute('index')-0;
                move(oUl , {left: -index*oLiWidth} , loopEnd);
                // 点击焦点,触发图片切换,一开始就切换焦点样式
                setFocusStyle();
            }
        })
    }

    // 防止点击过快
    // 定义判断,判断是否是原始值
    // 不是执行 return

    // 浏览器最小化
    function hid(){
        document.addEventListener( 'visibilitychange' , ()=>{
            if(document.visibilityState === 'visible'){
                autoLoop();
            }else if(document.visibilityState === 'hidden'){
                clearInterval(time);
            }
        } )
    }

























//添加滚动条监听事件
$(window).scroll( function(){
    if( $(window).scrollTop() > 400){
        $('.searchTop').slideDown(1000);
        $('.storeNav').fadeIn(1000);
    }else{
        $('.searchTop').slideUp(1000);
        $('.storeNav').fadeOut(1000);
    }

    // 通过位置的判断,实现页面滚动,侧边栏有不同的样式效果
$('.storey li').each(function(key,item){
    //滚动条位置
    // console.log($(window).scrollTop());
    //li距离页面顶部位置
    // console.log($(item).offset().top)
    if( $(window).scrollTop() >  $(item).offset().top){
        $('.storeNav li').eq(key).addClass('active').siblings().removeClass('active');
    }


})
})

//点击返回顶部
$('[name="back"]').click(function(){
    $('html').animate({scrollTop:0},2000)
})


//点击右侧的导航栏，能够对应到左侧的内容区域
$('.storeNav li').each(function(key,item){
      if( $(item).attr('name')!=='back'){
          $(item).click(function(){
              $('html').animate({scrollTop:$('.storey li').eq(key).offset().top-200},1000)
          })
      }
})
//运动函数
function move(element , type , callback){
    // 创建对象存储定时器
    const obj = {};

    // for...in循环参数2
    for(let key in type){
        // 创建定时器,使用对象存储
        obj[key] = setInterval(()=>{
            // 1,获取 key 属性的原始数据
            let iniVal = key === 'opacity' ? myGetStyle(element,key)*100 : parseInt( myGetStyle(element,key) );

            // 2,计算步长
            let speed = key === 'opacity' ? ( type[key]*100 - iniVal ) / 5 : ( type[key] - iniVal ) / 5;

            // 3,步长取整
            speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );

            // 4,初始值累加步长
            iniVal += speed;

            // 5,将新的初始值,赋值给标签属性
            element.style[key] = key === 'opacity' ? iniVal/100 : `${iniVal}px`;

            // 6,判断是否已经达到目标位置
            if( key === 'opacity' ){
                if( iniVal === type[key]*100 ){
                    // 终止定时器
                    clearInterval(obj[key]);
                    // 删除对象中的数据单元
                    delete( obj[key] );
                }
            }else{
                if( iniVal === type[key] ){
                    // 终止定时器
                    clearInterval(obj[key]);
                    // 删除对象中的数据单元
                    delete( obj[key] );
                }
            }

            // 7,判断运动是否终止,也就是对象是否是空对象
            let arr = Object.keys(obj);
            if(arr.length === 0){
                // 数组长度为0,对象为空,运动停止,执行回到函数
                callback();
            }

        } , 100)

    }
}





































//运动函数
function move(element , type , callback){
    // 创建对象存储定时器
    const obj = {};

    // for...in循环参数2
    for(let key in type){
        // 创建定时器,使用对象存储
        obj[key] = setInterval(()=>{
            // 1,获取 key 属性的原始数据
            let iniVal = key === 'opacity' ? myGetStyle(element,key)*100 : parseInt( myGetStyle(element,key) );

            // 2,计算步长
            let speed = key === 'opacity' ? ( type[key]*100 - iniVal ) / 5 : ( type[key] - iniVal ) / 5;

            // 3,步长取整
            speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );

            // 4,初始值累加步长
            iniVal += speed;

            // 5,将新的初始值,赋值给标签属性
            element.style[key] = key === 'opacity' ? iniVal/100 : `${iniVal}px`;

            // 6,判断是否已经达到目标位置
            if( key === 'opacity' ){
                if( iniVal === type[key]*100 ){
                    // 终止定时器
                    clearInterval(obj[key]);
                    // 删除对象中的数据单元
                    delete( obj[key] );
                }
            }else{
                if( iniVal === type[key] ){
                    // 终止定时器
                    clearInterval(obj[key]);
                    // 删除对象中的数据单元
                    delete( obj[key] );
                }
            }

            // 7,判断运动是否终止,也就是对象是否是空对象
            let arr = Object.keys(obj);
            if(arr.length === 0){
                // 数组长度为0,对象为空,运动停止,执行回到函数
                callback();
            }

        } , 100)

    }
}
// 获取css样式函数
function myGetStyle(element , attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(element)[attr];
    }else{
        return element.currentStyle[attr];
    }
}

