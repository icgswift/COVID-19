# 函数组件：纯组件 UI=render(props)

# hook:在函数组件中应用state/lifeCycle
实现：函数组件依然是实现渲染逻辑的 纯组件，对状态的管理被 Hooks 所封装了起来 

# useState()函数
  调用一次useState函数生成一条hook记录 其包括
  状态值：组件渲染读取用，注：每次渲染的state为从hook记录勾取到的常量:使用 const 声明
  setter函数：setSate 用，修改Hook记录中的状态值 触发重渲染

  多次调用useState生成多条hook记录，
  即链表：链表是有顺序的，一条记录(state/setter)在链表中相当于有自己的索引，因此必须在组件的最顶层使用hooks

# useEffect()函数
  相当于对lifeCycle的封装
  1.useEffect 每次调用同useState 被添加到 Hook 链表中
  2.useEffect 还会额外地在一个队列(effect list)中添加一个等待执行的 Effect 函数 
  3.渲染完成后，依次调用队列中的每一个 Effect 函数


