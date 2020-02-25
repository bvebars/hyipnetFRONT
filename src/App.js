import React from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from "./components/Header/HeaderPage";
import {Route} from "react-router-dom";
import {Logo} from "./components/Logo";
import Roy from "./components/Pages/Page/Roy";
import {Portfolio} from "./components/Pages/Page/Portfolio";
import Pages from "./components/Pages/Pages";
import {useRoutes} from "./routes";
import ArticlesContainer from "./components/Articles/ArticlesContainer";

const {Footer, Content} = Layout;
const routes = useRoutes(false);

function App() {
    return (
        <div>
            <Layout>
                <Route path={"/invest"}/>
                <HeaderPage/>
                <Logo/>
                <Content style={{padding: '0 50px', marginTop: 64}}>
                    <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                        <Route path="/invest"
                               render={() => <Pages/>}/>
                        <Route path="/roy"
                               render={() => <Roy/>}/>
                        <Route path="/portfolio"
                               render={() => <Portfolio/>}/>
                        <Route path="/articles"
                               render={() => <ArticlesContainer/>}/>
                        {routes}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Design ©2020 Created by Vyacheslav Bars</Footer>
            </Layout>
        </div>
    );
}

export default App;
