import React from 'react'

export default function SelectDataKey({handOnChange}){
   
    return(
        <>
        {/* label标签的for属性(react:for--htmlFor class--className)和select标签的id属性相对应 */}
           <label htmlFor='key-select' style={{fontWeight:'bold'}}>Select a data for sorting</label>
           <select id='key-select' onChange={handOnChange}>
                  <option value='cases'>Cases</option>
                  <option value='todayCases'>Today Cases</option>
                  <option value='deaths'>Death</option>
                  <option value='recovered'>Recovered</option>
                  <option value='active'>Active</option>
           </select>
        </>
    )
}