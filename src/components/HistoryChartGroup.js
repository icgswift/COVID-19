import React,{useState} from 'react';
import  HistoryChart from './HistoryChart'
import transformHistory from '../utils/utils'

// 为historyData添加默认值：父组件没有数据传递或者传递值为unde
export default function HistoryChartGroup({historyData={}}) {

/* 
 // 将数据对象{09/10/20:1,09/11/20:2,09/12/20:3}转化为数组[{time:09/10/20,number:1},{time:09/11/20,number:2},{time:09/12/20,number:3}]
   function transformHistory(type,lastDays){
      let arr=[] 
      for (const key in historyData[type]){
            let obj={}
            obj.time=key
            obj.number=historyData[type][key]
            arr.push(obj)
        }
      return arr
    } 
*/

const [lastDaysObj,setLastDaysObj]=useState({cases:30,deaths:30,recovered:30}) 

// lastDays发生变化 应在原有状态上进行修改
function handLastDaysChange(type,e){
setLastDaysObj( prev =>({...prev,[type]:e.target.value})  )
}

/* 
  本组件没有使用自定义hook维护：
  不同的state，使用lastDaysObj替代 --> setState(callback(prev))
  不同的副作用，使用transformHistory替代 --> state变化，重新render
*/
return (
 <div className='historyChartGroup'>
     <HistoryChart 
      title='Cases' 
      data={transformHistory(historyData.cases)} 
      lastDays={lastDaysObj.cases}
      onLastDaysChange={(e)=>handLastDaysChange('cases',e)}
     />

     <HistoryChart 
      title='Deaths' 
      data={transformHistory(historyData.deaths)} 
      lastDays={lastDaysObj.deaths}
      onLastDaysChange={(e)=>handLastDaysChange('deaths',e)}
     />

     <HistoryChart 
      title='Recovered' 
      data={transformHistory(historyData.recovered)} 
      lastDays={lastDaysObj.recovered}
      onLastDaysChange={(e)=>handLastDaysChange('recovered',e)}
     />
 </div>
);
}
