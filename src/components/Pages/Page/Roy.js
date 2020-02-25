import React from 'react';
import {Button, Card, Col, Progress, Row} from 'antd';
import {AddComment} from "./CommentAdd";

const Roy = () => {
    return (
        <div className="image">
            <img
                src="https://1.bp.blogspot.com/-7H3Jr_1ppXg/XTGh89fIduI/AAAAAAAAAag/pBecX5QaSXgSkVXgxX5cpsPtJPjHpvYJwCLcBGAs/s1600/maxresdefault%2B%25282%2529.jpg"
                alt=""/>
            <div>
                <Row>
                    <Col span={16} push={0}>
                        <div style={{marginTop: "20px"}}>
                            <h1>Сайт рыбатекст поможет дизайнеру</h1>
                            <p>
                                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько
                                абзацев
                                более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить
                                навык
                                публичных выступлений в домашних условиях. При создании генератора мы использовали
                                небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от
                                двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и
                                живым для визуально-слухового восприятия.
                                По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который
                                вызывает у
                                некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum,
                                текст
                                рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый
                                колорит
                                советских времен.
                            </p>
                        </div>
                    </Col>
                    <Col span={8} pull={0}>
                        <div style={{marginTop: "20px", marginLeft: "40px"}}>
                            <div>
                                <h2>Рейтинг компании</h2>
                                <hr/>
                                <p>Индекс доверия пользователей</p><Progress percent={30}/>
                                <hr/>
                                <p>Рейтинг по ключевым моментам</p><Progress percent={20}/>
                                <hr/>
                                <p>Рейтиг по HYIP</p><Progress percent={50}/>
                            </div>
                        </div>
                        <div style={{marginTop: "20px", marginLeft: "40px"}}>
                            <h2>
                                Регистрация в РОЙ Клуб
                            </h2>
                            <Button type="primary" block>
                                Зарегистрировать
                            </Button>
                        </div>
                        <div style={{marginTop: "20px", marginLeft: "40px"}}>
                            <h2>
                                Добавить в свои проекты
                            </h2>
                            <Button type="primary" block>
                                Добавить в проект
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <h2>Ближайшие мероприятия </h2>
                <div style={{background: '#ECECEC', padding: '30px'}}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Выступление в Москве" bordered={false}>
                                Презентация пройдет в отеле "XXX" 2020 в 12:00
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Выступление в Красноярске" bordered={false}>
                                Презентация пройдет в отеле "XXX" 2020 в 12:00
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Выступление в СПБ" bordered={false}>
                                Презентация пройдет в отеле "XXX" 2020 в 12:00
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <AddComment/>
        </div>
    )
};

export default Roy