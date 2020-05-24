import React from 'react';
import {Head} from '../Header';
import {data} from '../data/data';
import {allTempCharts} from './charts'
import { ChartTest } from './chartTest';


for (var i=0;i<data.length;i++){
    const dataTemp=data[i].temp
    const chartId="id"+data[i].id
    allTempCharts[chartId]=[dataTemp] //add chart to allTempCharts
}
for (var i=0;i<data.length;i++){
    const dataTemp=data[i].temp
    const chartId="id"+data[i].id
    allTempCharts.id01.push(data[i].temp) //заменить id01 на переменную
}

export function TempHistory(){
    return (
        <div>
            <Head/>
            <div>
                {allTempCharts.id01}
            </div>
            <div class="mx-auto col-8">
                <div class="col-sm">
                    <ChartTest allTempCharts={allTempCharts}/>
                </div>
            </div>
        </div>
    )
}

