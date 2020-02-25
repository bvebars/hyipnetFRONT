import React from 'react';
import {Badge, Statistic, Row, Col, Icon} from 'antd';
import {NavLink} from "react-router-dom";


const Page = (props) => {
    return (
        <div style={{marginBottom: 50}}>
            <h1>
                <NavLink to="roy">{props.title}</NavLink>
            </h1>
            <div>
                <img src="https://www.u-b-s.ru/wp-content/uploads/2019/02/business.jpg" alt="" style={{width: "100%"}}/>
            </div>
            <p>
                {props.description}
            </p>
            <div>
                {/*<Badge count={25}/>*/}
                {/*<Badge*/}
                {/*    count={4}*/}
                {/*    style={{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}}*/}
                {/*/>*/}
                {/*<Badge count={109} style={{backgroundColor: '#52c41a'}}/>*/}
            </div>
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Одобрение" value={1128} prefix={<Icon type="like"/>}/>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Рейтинг" value={93} suffix="/ 100"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Page