import React from 'react';
import {Head} from './Header';
import {AddTerm} from './AddTerm';
import {data} from './data/data';

let termometers =[]

for (var i=0;i<data.length;i++){
    const counter=data[i]
    termometers.push(<AddTerm counter={counter}/>)
}

export function AllCounters(){
  return (
    <div>
        <Head /> 
        <div class="row row-centered">
            <div class="col"></div>
                <div class="col-sm-6">
                    <div class="col">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Имя</th>
                                    <th>Идендификатор</th>
                                    <th>Температура</th>
                                    <th>Система измерения</th>
                                </tr>
                            </thead>
                            <tbody>
                                {termometers}   
                            </tbody>           
                        </table>
                    </div>     
                </div>
            <div class="col"></div>
        </div>
    </div>
  )
};
export default data