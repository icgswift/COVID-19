import React,{useReducer} from 'react'


/* 
   reducer函数两规则：
   1.只返回一个值
   2.不能修改输入值
*/
function reducer(state,action){
switch(action.type){
    case 'increment':
        return {count:state.count+1}
}
}

function Counter(){
    // state:reducer函数返回值
    // {count:0} state默认值
const [state, dispatch] = useReducer(reducer,{count:0})
    return(
        <>
        <h1>{state.count}</h1>
        <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
        </>
    )
}

export default Counter