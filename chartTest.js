import React from 'react';
import CanvasJSReact from './chartsSrc/canvasjs.react';
import {data} from '../data/data';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function ChartTest(props){
    const allTempCharts = props.allTempCharts
    let options = {
        title: {
          text: "Датчик "+data[0].name
        },
        data: [{				
            type: "line",
                dataPoints: [
                    { label: "Apple",  y:allTempCharts.id01[1]}, //не видит значения, понять почему. скорее всего кривой фреймворк
                    { label: "now", y:0}
                ]
             }]
         }
              
         return (
            <div>
              <CanvasJSChart options = {options} />
            </div>
          );
    }
    