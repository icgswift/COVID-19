import React,{useState,useEffect} from 'react'

export default function Root(){
    const [count,setCount]=useState(0)

    useEffect(()=>{
                    console.log('我执行了')
        },[])

/* 
   何为副作用：数据获取，设置订阅以及手动更改 React 组件中的 DOM ...
   
   effectFn的触发条件：componentDidMount 和 componentDidUpdate （前提：deps变化）

   cleanupFn的触发条件：componentWillUnmount 和 componentWillUpdate (前提：deps变化)
*/


    return(
        <div className='app'>
        {console.log('重渲染')}
        <h1>YOU HAVE CLICK ME  TIMES</h1>
        <button onClick={()=>{setCount(count+1)}}>CLICKME</button>
        </div>
    )
}