import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar,} from 'recharts'

export default function({data,dataKey,handClick}){
    
return(
    <BarChart  
    width={1200}
    height={250}
    style={{ margin: "auto" }}
    margin={{ top: 30, left: 20, right: 30 }}
    data={data}
    onClick={handClick}
    >
    <CartesianGrid strokeDasharray='3 3' onClick={handClick}/>
    <XAxis dataKey='country' />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey={dataKey} fill='#8884d8' />
    </BarChart>
)
}