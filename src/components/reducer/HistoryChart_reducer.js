import React,{useContext} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {DispatchContext} from '../../reducer'

const TITLE2COLOR = {
    Cases: "#D0021B",
    Deaths: "#4A4A4A",
    Recovered: "#09C79C",
  };

export default function HistoryChart({title,data,lastDays}) {
   const colorKey= `color${title}`
   const color=TITLE2COLOR[title]
   
const dispatch = useContext(DispatchContext) 
  return (
    <div className='historyChart'> 
      <AreaChart
        width={400}
        height={150}
        data={data.slice(-lastDays)}
        margin={{ top: 10, right: 30, left: 10, bottom: 0, }}
      >
        <defs>
          <linearGradient id={colorKey} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={color} stopOpacity={0.8} />
            <stop offset='95%' stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="number" stroke={color} fillOpacity={1} fill={`url(#${colorKey})`}/>
      </AreaChart>

      <h1>{title}</h1>
      <input
       type='range'
       min='2'
       max='30'
       value={lastDays}
       onChange={(e)=>{dispatch({type:'set_lastDaysObj',title,days:e.target.value})}}
       /* 
         当对象属性名为一个变量 可以表示为 { [XXX]：YYY }  XXX YYY都为变量
         问题：在其他地方明确需要访问属性名 ...
         解决：使用一个同变量名的属性名做桥接 { XXX,zzz:YYY}
         访问：obj.XXX:obj.zzz
       */
      />
      <p>last {lastDays} days</p>
  </div>
    );
}