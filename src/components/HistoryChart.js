import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const TITLE2COLOR = {
    Cases: "#D0021B",
    Deaths: "#4A4A4A",
    Recovered: "#09C79C",
  };

export default function HistoryChart({title,data,lastDays,onLastDaysChange}) {
    // 区别标识
   const colorKey= `color${title}`
   // 不同数据显示使用不同颜色
   const color=TITLE2COLOR[title]
   
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

      {/* 拖动修改显示天数 */}
      <input
       type='range'
       min='2'
       max='30'
       value={lastDays}
       onChange={onLastDaysChange}
      />
      <p>last {lastDays} days</p>
  </div>
    );
}