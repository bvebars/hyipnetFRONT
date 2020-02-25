import {Carousel} from 'antd';
import React from 'react';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const CarouselLay = () => {
        return (
            <Carousel afterChange={onChange}>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        )
    }
;

export default CarouselLay

