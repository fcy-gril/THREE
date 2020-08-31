const cartArr = JSON.parse(localStorage.getItem('cart'));
// console.log(JSON.parse(localStorage.getItem('cart')));
const oPFooter = document.querySelector('.panel-footer');
const oPanel = document.querySelector('.panel');
setCartList(cartArr,oPFooter)
//添加点击事件
oPanel.addEventListener('click',e=>{
    if( e.target.getAttribute('name')==='yes' ){
      cartArr.forEach(v=>{
        v.buy = true;
      })
    };
    if( e.target.getAttribute('name')==='no' ){
      cartArr.forEach(v=>{
        v.buy = false;
      })
    };
    if( e.target.getAttribute('name')==='not' ){
      cartArr.forEach(v=>{
        v.buy = !(v.buy);
      })
    };
    //小方块
    if( e.target.getAttribute('name')==='che' ){
      cartArr.forEach(v=>{
        if(v.goods_id == e.target.getAttribute('goods_id')){
          v.buy = !(v.buy);
        }
        
      })
    };
    // 我不要了
    if( e.target.getAttribute('name')==='del' ){
      let bool = window.confirm('您确定不要了是么');
      if(bool){
        cartArr.forEach((v,k)=>{
        if(v.goods_id == e.target.getAttribute('goods_id')){
          cartArr.splice(k,1)
        }
        
      })
      }
   
    };
    // -号
    if(e.target.getAttribute('name')==='jian'){
      cartArr.forEach(v=>{
        if(v.goods_id == e.target.getAttribute('goods_id')){
          v.num--;
          // if(v.num<1){
          //   v.num= 1
          // }
        }
      })
    };
    //+号
    if(e.target.getAttribute('name')==='jia'){
      cartArr.forEach(v=>{
        if(v.goods_id == e.target.getAttribute('goods_id')){
          v.num++;
          // if(v.num > v.good_num){
          //   v.num= v.goods_num;
          // }
        }
      })
    }






    // 根据新的数组生成新的页面
    setCartList(cartArr,oPFooter);
     // 将新的数组,再赋值给 localStorage cart中
     localStorage.setItem('cart',JSON.stringify(cartArr))
})










function setCartList(array,ele){

if( array.length === 0){
 let str = `<li><h1>您的购物车是空</h1></li>`
 $(ele).html(str)
}else{     
let type = 0 ;
let n = 0;
let pay = 0;
let str = '';
str +=`<ul class="cart-list">`
 cartArr.forEach((v)=>{
   if(v.buy){
     type ++;
     n += v.num;
     pay += v.goods_price * v.num;

   }
   str += `
            <li class="cart-item">
              <div class="left">
                <input name="che" goods_id=${v.goods_id} type="checkbox" ${v.buy ? 'checked' : ''}>
              </div>
              <div class="right">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object" src="${v.goods_small_logo}" alt="...">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">${v.goods_name}</h4>
                    <p>
                      <i class="glyphicon glyphicon-yen"></i>
                      <span>${v.goods_price}</span>
                    </p>
                    <div class="btn-group pull-right" role="group" aria-label="...">
                      <button type="button" class="btn btn-default" name="jian" goods_id=${v.goods_id} ${v.num<1?'disabled':''}>-</button>
                      <button type="button" class="btn btn-default" disabled >${v.num}</button>
                      <button type="button" class="btn btn-default" name="jia" goods_id=${v.goods_id} ${v.num>v.goods_num?'disabled':''}>+</button>
                    </div>
                    <button class="del btn btn-danger" name="del" goods_id=${v.goods_id}>我不要了</button>

                  </div>
                </div>
              </div>
            </li>
   
   `
   
 })
  str += `
          </ul>
          <div>
            <span>您购买了${type}种商品 一共是${n}件货物</span>
            <span>您需要支付${pay.toFixed(2)}元人民币</span>
          </div>
  `
  $(ele).html(str)
}
}
const oBtnLogin = document.querySelector('[name="login"]');
oBtnLogin.addEventListener('click',()=>{
    window.location.href=`../html/log .html?url=${window.location.href}`
})