import React from 'react';
import PropTypes from 'prop-types';
import {InputNumber, Button, Checkbox} from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

TweenOne.plugins.push(Children);


let numbRoy = 200;
let numbFiniko = 200;

export class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 10000,
            animation: null,
            formatMoney: true,
        };
    }

    onChangeMoney = (e) => {
        this.setState({
            formatMoney: e.target.checked
        })
    };

    onClick = () => {
        const {value, formatMoney} = this.state;
        this.setState({
            animation: {
                Children: {
                    value: typeof value === 'number' ? value : 10000,
                    floatLength: 2,
                    formatMoney,
                },
                duration: 1000,
            }
        });
        numbRoy = value
        numbFiniko = value
    };

    onChange = (value) => {
        console.log(value);

        this.setState({
            value,
        });
        numbRoy = value
        numbFiniko = value
    };

    render() {
        let dataTime = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Декабрь"];
        let data = [];
        for (let i = 0; i < 11; i++) {
            data[i] = {
                name: dataTime[i],
                roy: numbRoy = numbRoy * 1.29,
                finiko: numbFiniko = numbFiniko * 1.1,
                amt: 2400
            };
        }

        return (
            <div>
                <div
                    style={{
                        display: 'flex',
                        height: '100%',
                        minHeight: '220px',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div style={{width: '100%'}}>
                        <TweenOne
                            animation={this.state.animation}
                            style={{fontSize: 56, marginBottom: 12}}
                        >
                            0
                        </TweenOne>
                        <InputNumber
                            defaultValue={10000}
                            onChange={this.onChange}
                        />
                        {/*<Checkbox style={{margin: '0 16px'}} onChange={this.onChangeMoney}> рубли </Checkbox>*/}
                        <Button
                            type="primary"
                            style={{marginBottom: 32, marginLeft: 20}}
                            onClick={this.onClick}
                        >
                            Проверить
                        </Button>
                    </div>
                </div>
                <div>
                    {/*<Chart number={this.state}/>*/}
                    {/*<h1>hello: {numb}</h1>*/}
                    <div>
                        <LineChart width={1115} height={250} data={data}
                                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="roy" stroke="#e89226"/>
                            <Line type="monotone" dataKey="finiko" stroke="#8884d8"/>
                        </LineChart>
                    </div>
                </div>
                <div>

                    <h2>Прибыль годовая Roy Club: <TweenOne
                        animation={this.state.animation}

                        style={{fontSize: 20, marginBottom: 12}}
                    >
                        0
                    </TweenOne></h2>
                </div>
            </div>
        );
    }
}

Portfolio.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};