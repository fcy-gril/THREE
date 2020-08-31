let valObj = getUrlVal();
//   console.log(valObj)
  let res = {};
  $.ajax({
      url:'../server/goods_detail.php',
      data:{goods_id:valObj.goods_id},
      type:'post',
      dataType:'json',
      success:(result)=>{
        console.log(result)
        res = result;
        let str = `
        <div class="panel-body">
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="${result.goods_small_logo}" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">${result.goods_name}</h4>
            <p>
              <i class="glyphicon glyphicon-yen"></i>
              <span>${result.goods_price}</span>
            </p>
            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-default">XL</button>
              <button type="button" class="btn btn-default">L</button>
              <button type="button" class="btn btn-default">M</button>
              <button type="button" class="btn btn-default">S</button>
              <button type="button" class="btn btn-default">XS</button>
            </div>
            <p>
              <a href="javascript:;" class="btn btn-warning btn-lg" role="button">立即购买</a>
              <a href="#" class="btn btn-danger btn-lg" role="button" name="join">加入购物车</a>
            </p>
          </div>
        </div>
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><a href="#">商品详细信息</a></li>
          <li role="presentation"><a href="#">商品参数信息</a></li>
          <li role="presentation"><a href="#">相关商品</a></li>
        </ul>
        <div>
            ${result.goods_introduce}
        </div>
      </div>
        `
        $('.panel').append( str );
      }
  })
  
  
const oFather = document.querySelector('.panel')
//   console.log(oFather)
oFather.addEventListener('click' , e=>{
    if(e.target.getAttribute('name') === 'join'){
        const cookieObj = myGetCookie();
        // console.log(cookieObj )
        let arr = [];
       
        if(cookieObj.login===undefined ){
            let bool = window.confirm('您还没有登录,点击确定,跳转登录,点击取消,啥也不干')
            if(bool){
                window.location.href=`../html/log.html?url=${ window.location.href}`
            }
        }else{
            // console.log(localStorage.getItem( 'cart' ))
            if(localStorage.getItem( 'cart' ) === null ){
                res.num = 1;
                res.buy = true;
                arr.push(res);
            }else{
                let bool = true;
                arr = JSON.parse(localStorage.getItem('cart'))
                console.log(arr)
                arr.forEach(function(v,k){
                    if(v.goods_id === res.goods_id){
                        v.num++;
                        bool = false;
                    }                      
                })
                if(bool){
                        res.num = 1;
                        res.buy = true;
                        arr.push(res);
                    }
            }
            localStorage.setItem( 'cart' , JSON.stringify(arr) );
            // console.log( JSON.stringify(arr) )
            window.location.href = '../html/carbuy.html';
        }           
    }

  })

const oBtnLogin = document.querySelector('[name="login"]');
oBtnLogin.addEventListener('click',()=>{
        window.location.href=`../html/log .html?url=${window.location.href}`
    })
