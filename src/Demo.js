import React,{useState} from 'react';
import './app.css'

import useFetchData from './utils/fetchData'

import GlobalStats from './components/GlobalStats'
import SelectDataKey from './components/SelectDataKey'
import CountiesChart from './components/CountiesChart'
import HistoryChartGroup from './components/HistoryChartGroup'

function Demo() {
  /* 
    和普通函数执行顺序没有区别，都是自上而下
    区别：添加effectFn
    初始渲染得到的数据为initialData 
  */

const [keyword,setKeyword]=useState('cases')

//初始渲染stats为initialData-->渲染完毕(componentDidMount)-->effectFn执行 数据变化-->重渲染
const stats=useFetchData('all',{initialData:{},refetchIntelval:30000})


//初始渲染sortedData为initialData-->渲染完毕(componentDidMount)-->effectFn执行 数据变化-->重渲染
//keyword变化-->重渲染-->(componentDidUpdata,path变化)effecFn执行 数据变化-->重渲染(path没有变化，effectFn不执行)
const sortedData=useFetchData(`countries?sort=${keyword}`,{initialData:[],converter:(data)=>data.slice(0,10)})

const [country,setCountry]=useState(null)
// https://corona.lmao.ninja/v2/historical/ 获取到的数据为数组，[].timeline的值为undefined，undefined传入HistoryChartGroup处理不慎就会报错导致应用终止
const historyData=useFetchData(`historical/${country}`,{initialData:{},converter:(data)=>data.timeline})

  return (
    <div className='app'>
      <h1>COVID-19</h1>
      <GlobalStats data={stats}/>

      {/* 传递事件给子组件 */}
      <SelectDataKey handOnChange={(e)=>{setKeyword(e.target.value)}}/>

      {/* dataKey 根据dataKey查询得到的数据   为点击事件加上判断防止点击位置不正确 报错终止应用 */}
      <CountiesChart data={sortedData} dataKey={keyword} handClick={ (e)=>{ if(e){setCountry(e.activeLabel)} } }/>

      {country? 
      <>
      <h2>History for {country}</h2>
      <HistoryChartGroup historyData={historyData}/>
      </>
      :<h1>点击国家柱状图展示历史数据</h1>
      }
    </div>
  )
}

export default Demo
