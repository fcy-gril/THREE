一.默认校验规则
序号	规则	                描述
1	required:true	         必须输入的字段。
2	remote:"check.php"	     使用 ajax 方法调用 check.php 验证输入值。
3	email:true	             必须输入正确格式的电子邮件。
4	url:true	             必须输入正确格式的网址。
5	date:true	             必须输入正确格式的日期。日期校验 ie6 出错，慎用。
6	dateISO:true	         必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性。
7	number:true	             必须输入合法的数字（负数，小数）。
8	digits:true	             必须输入整数。
9	creditcard:	             必须输入合法的信用卡号。
10	equalTo:"#field"	     输入值必须和 #field 相同。
11	accept:	                 输入拥有合法后缀名的字符串（上传文件的后缀）。
12	maxlength:5	             输入长度最多是 5 的字符串（汉字算一个字符）。
13	minlength:10	         输入长度最小是 10 的字符串（汉字算一个字符）。
14	rangelength:[5,10]	     输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）。
15	range:[5,10]	         输入值必须介于 5 和 10 之间。
16	max:5	                 输入值不能大于 5。
17	min:10	                 输入值不能小于 10。




二.整理Object.defineproperty和 Proxy 两种用法
Object.defineProperty(obj, prop, descriptor)：
obj          要定义属性的对象。
prop         要定义或修改的属性的名称或 Symbol 。
descriptor   要定义或修改的属性描述符。

描述：该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（for...in 或 Object.keys 方法），可以改变这些属性的值，也可以删除这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的。

对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。存取描述符是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。


get
属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
默认为 undefined。
set
属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
默认为 undefined。



proxy
1.描述：Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）

2.语法：const p = new Proxy(target, handler)

3.参数：
target：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。



三.事件绑定中的addEventListener()方法
1.addEventListener()是标准的绑定事件监听函数的方法，是W3C所支持的，Chrome、FireFox、Opera、Safari、IE9.0及其以上版本都支持该函数；但是，IE8.0及其以下版本不支持该方法，所以，这种绑定事件的方法必须要处理浏览器兼容问题。

2.语法：对象.addEventListener(事件名称,事件处理函数,布尔值)

3.参数：
事件名称：是一个字符串，需要加引号

事件处理函数（事件句柄函数）：既可以是命名函数，也可以是匿名函数

布尔值：
true 事件处理函数是在事件的捕获阶段发生的
false 事件处理函数是在事件的冒泡阶段发生的（默认值，如果不写默认为false）

4.特性：
可以通过第三个参数-布尔值来对事件处理函数调用的时机进行操控
既可以调用命名函数，也可以调用匿名函数（最好为命名函数）
可以给元素添加多个事件，且不会互相覆盖
this指向当前元素

5.移除方法：对象.removeEventListener(事件名称,事件处理函数,布尔值)
直接移除：
执行一次后移除：

6.防止时间冒泡
采用事件对象.stopPropagation()方法：
btn.addEventListener('click',fn1,false);
function fn1(ev){
    ev.stopPropagation();
};