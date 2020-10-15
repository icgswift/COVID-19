import React from 'react';
import  HistoryChart from './HistoryChart_reducer'
import transformHistory from '../../utils/utils'

export default function HistoryChartGroup({historyData={},lastDaysObj={}}) {

return (
 <div className='historyChartGroup'>
     <HistoryChart 
      title='Cases' 
      data={transformHistory(historyData.cases)} 
      lastDays={lastDaysObj.Cases}
     />

     <HistoryChart 
      title='Deaths' 
      data={transformHistory(historyData.deaths)} 
      lastDays={lastDaysObj.Deaths}
     />

     <HistoryChart 
      title='Recovered' 
      data={transformHistory(historyData.recovered)} 
      lastDays={lastDaysObj.Recovered}
     />
 </div>
);
}
