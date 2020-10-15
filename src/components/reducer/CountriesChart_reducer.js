import React,{useContext}from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar,} from 'recharts'
import {DispatchContext} from '../../reducer'


export default function({data,dataKey}){
    // 获取context-value值及订阅变化
    const dispatch = useContext(DispatchContext) 
return(
    <BarChart  
    width={1200}
    height={250}
    style={{ margin: "auto" }}
    margin={{ top: 30, left: 20, right: 30 }}
    data={data}
    onClick={(e)=>{if(e){ dispatch({type:'set_country',country:e.activeLabel}) }}}
    >
    <CartesianGrid strokeDasharray='3 3'/>
    <XAxis dataKey='country' />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey={dataKey} fill='#8884d8' />
    </BarChart>
)
}