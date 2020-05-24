import React from 'react';

export function AddTerm(props){
    const counter = props.counter
    let scales = (props.counter.scale == 'C' ? 'Градусы по Цельсию':props.counter.scale == 'K' ? 'Градусы по Кельвину': 'нет информации') 
    return(
        <tr>
            <td>{counter.name}</td>
            <td>{counter.id}</td>
            <td>{counter.temp}</td>
            <td>{scales} </td>
        </tr> 
    )
}