import React,{useState,useEffect} from 'react';
import GlobalStats from './components/GlobalStats'
import CountiesChart from './components/CountiesChart'
import SelectDataKey from './components/SelectDataKey'
import './app.css'

function App() {
  const BASE_URL= "https://corona.lmao.ninja/v2"
  const [stats,setStats]=useState({})

  useEffect(()=>{
    const fetchGlobalStats=async()=>{
      const response =  await fetch(`${BASE_URL}/all`)
      // fetch() 返回值promise
      // response    readableSrteam
      const data = await response.json()
      // response.json() 返回值promise
      // data:json
      setStats(data)
    }

    // 初始渲染
    fetchGlobalStats()

    const intervalID = setInterval(fetchGlobalStats,5000)
    // effeteFn函数要么返回Cleanup，要么不返回数据
    // 运行每个 EffectFn 之前,执行前一次渲染的 Effect Cleanup 函数(如果有的话)
    // 这里表现为不会重复添加定时器,当然这里deps为空数组，effetFn只会执行一次
    return () => {clearInterval(intervalID)}
  },[])

  //查询数据关键字
  const [keyword,setKeyword]=useState('cases')
  // 数据
  const [sortedData,setSortedData]=useState([])

  useEffect(() => {
    const getDataByKeyword = async ()=>{
      const response =  await fetch(`${BASE_URL}/countries?sort=${keyword}`)
      const data = await response.json()

      setSortedData(data.slice(0,10))
    }
    getDataByKeyword()
    return () => {
      // cleanup
    }
    // keyword 变化时再一次运行effetFn
  }, [keyword])

  return (
    <div className='app'>
      <h1>COVID-19</h1>
      <GlobalStats data={stats}/>
      {/* 传递事件给子组件 */}
      <SelectDataKey handOnChange={(e)=>{setKeyword(e.target.value)}}/>
      {/* dataKey 根据dataKey查询得到的数据*/}
      <CountiesChart data={sortedData} dataKey={keyword}/>
    </div>
  );
}

export default App;
