## 学会从官网复制粘贴
- 响应式原理
媒体查询 用不同样式来适配不同
- sm >576
- md >768
- lg >992
- extra lg >1200
- flex
justify-content:center flex-end flex-start
设置在flex容器上的，主轴 居中 靠右 靠左

order 排列 flex 项目 设置在 flex 项目上

- dom
文档对象(html) 模型(树)
- dom 操作 操作树
注释
元素 
文本
- 函数有多种运行方式
    player() 普通方式，
    new player() 作为构造函数constructor被运行,会有返回新对象 实例
    构造函数，当然是类，
    function Person(){}
- 函数是一等对象，可以被执行的对象
    this 常在 借助他来构造新的对象
    var player1=new Person()
    this=>player1 Person {}
- new的过程
    this空对象Person{}
    Person() 构造函数，
    this.name=name
