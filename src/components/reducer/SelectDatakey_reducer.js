import React,{useContext} from 'react'
import {DispatchContext} from '../../reducer'

export default function SelectDataKey(){
    const dispatch = useContext(DispatchContext)
    return(
        <>
           <label htmlFor='key-select' style={{fontWeight:'bold'}}>Select a data for sorting</label>
           <select id='key-select' onChange={(e)=>{dispatch({type:'set_keyword',keyword:e.target.value})}}>
                  <option value='cases'>Cases</option>
                  <option value='todayCases'>Today Cases</option>
                  <option value='deaths'>Death</option>
                  <option value='recovered'>Recovered</option>
                  <option value='active'>Active</option>
           </select>
        </>
    )
}