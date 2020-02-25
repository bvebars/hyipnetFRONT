import React from 'react';
import {Layout, Menu} from "antd";
import {NavLink} from "react-router-dom";

const {Header} = Layout;

const HeaderPage = () => {
        return (
            <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1"> <NavLink to="/invest">Инвестиции</NavLink></Menu.Item>
                    <Menu.Item key="2"> <NavLink to="/crypt">Криптовалюты</NavLink></Menu.Item>
                    <Menu.Item key="3"> <NavLink to="/param">Парамайнинг</NavLink></Menu.Item>
                    <Menu.Item key="4"> <NavLink to="/roy">Roy</NavLink></Menu.Item>
                    <Menu.Item key="5"> <NavLink to="/portfolio">Портфель</NavLink></Menu.Item>
                    <Menu.Item key="6"> <NavLink to="/articles">Новости</NavLink></Menu.Item>
                    <Menu.Item key="7"> <NavLink to="/create-article">Редактор статей</NavLink></Menu.Item>
                </Menu>
            </Header>
        )
    }
;

export default HeaderPage

