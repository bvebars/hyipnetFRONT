import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";


let PercentRoy = 1.29;
let PercentFiniko = 1.1;

const Chart = (props) => {
    let numbRoy = props.number.value;
    let numbFiniko = props.number.value;
    const data = [
        {
            "name": "Январь",
            "roy": numbRoy = numbRoy * PercentRoy,
            "finiko": numbFiniko = numbFiniko * PercentFiniko,
            "amt": 2400
        },
        {
            "name": "Февраль",
            "roy": numbRoy = numbRoy * PercentRoy,
            "finiko": numbFiniko = numbFiniko * PercentFiniko,
            "amt": 2210
        },
        {
            "name": "Март",
            "roy": numbRoy = numbRoy * PercentRoy,
            "finiko": numbFiniko = numbFiniko * PercentFiniko,
            "amt": 2290
        },
        {
            "name": "Апрель",
            "roy": numbRoy = numbRoy * PercentRoy,
            "finiko": numbFiniko = numbFiniko * PercentFiniko,
            "amt": 2000
        },
        {
            "name": "Май",
            "roy": numbRoy = numbRoy * PercentRoy,
            "finiko": numbFiniko = numbFiniko * PercentFiniko,
            "amt": 2181
        },
        {
            "name": "Июнь",
            "roy": numbRoy = numbRoy * PercentRoy,
            "finiko": numbFiniko = numbFiniko * PercentFiniko,
            "amt": 2500
        },
        {
            "name": "Июль",
            "roy": numbRoy = numbRoy * PercentRoy,
            "finiko": numbFiniko = numbFiniko * PercentFiniko,
            "amt": 2100
        }
    ];


    return (
        <div>
            <LineChart width={1115} height={250} data={data}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="roy" stroke="#e89226" />
                <Line type="monotone" dataKey="finiko" stroke="#8884d8" />
            </LineChart>
        </div>
    )
};

export default Chart