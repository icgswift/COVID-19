import React from 'react'

function Stat({ number, color }) {
    // 简略形参写法 <-- const {number,color}=props
return( 
      <span style={{color:color,fontWeight:'bold',}}>{number}
      </span>
     )
}

export default function GlobalStats({data}) {
    const {
        cases,
        deaths,
        recovered,
        active,
    } = data

return(
    <div className='global-stats'>
        <small>Updated on {new Date().toLocaleString()}</small>
        <table>
            <thead>
                    <tr>
                       <th> Cases: <Stat number={cases} color='red'/></th>
                       <th> Deaths: <Stat number={deaths} color='gray'/></th> 
                       <th> Recovered: <Stat number={recovered} color='green'/></th>
                       <th> Active: <Stat number={active} color='orange'/></th>
                    </tr>
            </thead>
        </table>
        
    </div>
    )
}