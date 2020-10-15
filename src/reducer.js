import React,{useReducer} from 'react';
import './app.css'

import useFetchData from './utils/fetchData'

import GlobalStats from './components/GlobalStats'
import SelectDataKey from './components/reducer/SelectDatakey_reducer'
import CountiesChart from './components/reducer/CountriesChart_reducer'
import HistoryChartGroup from './components/reducer/HistoryChartGroup_reducer'

// useReducer函数的初始state
const initialState={
    keyword:'cases',
    country:null,
    lastDaysObj:{
        Cases:30,
        Deaths:30,
        Recovered:30
    }
}

// reducer函数
function reducer(state,action){
switch(action.type){
case 'set_keyword':
    return {...state,keyword:action.keyword}
case 'set_country':
    return {...state,country:action.country}
case 'set_lastDaysObj':
    return {...state,lastDaysObj:{...state.lastDaysObj,[action.title]:action.days}}
default:
return state    
}
}

// 创建一个context 当provider没有提供value值使用默认值 
export const DispatchContext = React.createContext();

function App() {
const [state,dispatch]=useReducer(reducer,initialState)

// 将state解构
const {keyword,country,lastDaysObj}=state

const stats=useFetchData('all',{initialData:{},refetchIntelval:30000})
const sortedData=useFetchData(`countries?sort=${keyword}`,{initialData:[],converter:(data)=>data.slice(0,10)})
const historyData=useFetchData(`historical/${country}`,{initialData:{},converter:(data)=>data.timeline})


  return (
    // 将dispatch广播给后代组件(即后代组件可以访问到 value 但是context需export/import)
    <DispatchContext.Provider value={dispatch}>
      <div className='app'>
      <h1>COVID-19</h1>
      <GlobalStats data={stats}/>
      <SelectDataKey/>
      <CountiesChart data={sortedData} dataKey={keyword}/>
      {country? 
      <>
      <h2>History for {country}</h2>
      <HistoryChartGroup historyData={historyData} lastDaysObj={lastDaysObj}/>
      </>
      :
      <h1>Click on a country to show its history.</h1>
    }
    </div>
    </DispatchContext.Provider>
  )
}

export default App
