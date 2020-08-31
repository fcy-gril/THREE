  //1.获取地址栏数据信息，最好以对象形式展示
  let valObj = getUrlVal();
  // console.log(valObj)
  // 第一次调用分页面试页面
  getAjaxVal(valObj,1,8)

  function getAjaxVal(object , page , line) {
          // 2.传参
          $.ajax({
              url: 'http://127.0.0.1/project/nav/server/goods_list.php',
              data: { cat_one_id: object.cat_one_id, page: page, line: line },
              type: 'get',
              dataType: 'json',
              success: function (result) {
                  console.log(result)
                  let str;
                  result.forEach((v) => {
                      str += `
        <li class="list-item">
          <div class="panel panel-primary">
            <div class="panel-body">
              <ol class="breadcrumb">
                <li><a href="#">${v.cat_one_id}</a></li>
                <li><a href="#">${v.cat_two_id}</a></li>
                <li class="active">${v.cat_three_id}</li>
              </ol>
            </div>
            <div class="panel-footer">
              <div class="row">
                <div class="">
                  <div class="thumbnail">
                    <img src="${v.goods_big_logo}" alt="...">
                    <div class="caption">
                      <h3>${v.goods_name}</h3>
                      <p>
                        <i class="glyphicon glyphicon-yen"></i>
                        <span>${v.goods_price}</span>
                      </p>
                      <p><a href="#" class="btn btn-primary" role="button">查找相似商品</a> <a href="./details_1.html?goods_id=${v.goods_id}" class="btn btn-danger" role="button">查看商品详情</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
              `
                  })
                  $('.container > ul').html(str);
                  $('.M-box').pagination({
                      mode:'fixed',
                      pageCount:result[0].sumPage,
                      totalData:result[0].row,
                      current:result[0].page,
                      showData:line,
                      count:5,
                      coping:true,
                      isHide:true,
                      keepShowPN : true,
                      homePage : '首页',
                      endPage : '末页',
                      prevContent : '上一页',          
                      nextContent : '下一页',
                      callback:function(res){
                          let p = res.getCurrent(); 
                          getAjaxVal(valObj , p , 8);
                      }

                  })

              }


          })
      }

      const oBtnLogin = document.querySelector('[name="login"]');
  oBtnLogin.addEventListener('click',()=>{
      window.location.href=`../html/log .html?url=${window.location.href}`
  })
 