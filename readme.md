简单的四个框架

1.animate

模仿动画运动框架

传入3个参数：要运动的元素，最终变化的效果,动画完成的回调函数

例子animate(obj,{opacity:100},function(){alert('动画执行完成')});

2.setCookie

3个参数，cookie名字、cookie值、cookie有效期持续时间

  getCookie

一个参数：需要获取的cookie名称

  removeCookie

   传入需要删除的cookie名称，通过重新设置覆盖原来的值且持续时间设置为-1，可以让它一创建就消失

  3.addEvent

​    针对浏览器兼容性使用不同的事件监听方法

  4.getPosition

​    返回鼠标指针和x轴y轴的距离（相对页面左上角原点）