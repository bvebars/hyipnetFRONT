import React from "react";

import {Form, Icon, Input, Button} from 'antd';

import * as axios from 'axios'


// const [form, setForm] = useState({
//     email: '', password: ''
// });

const changeHandler = event => {
    let form = ({...form, [event.target.name]: event.target.value})
    console.log(form)
};

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        // To disable submit button at the beginning.

        this.props.form.validateFields()
    }

    registerHandler = () => {
        axios.post('api/auth/register', this.props.form.getFieldsValue())
            .then(response => {
                console.log('res', response)
            }).catch(error => {
            console.log(error.response.data.message);

        });
    };

    loginHandler = () => {
        axios.post('api/auth/login', this.props.form.getFieldsValue())
            .then(response => {
                console.log('res', response)
            }).catch(error => {
            console.log(error.response.data.message);

        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        const emailError = isFieldTouched('email') && getFieldError('email');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Пожалуйста, введите ваш email!'}],
                    })(
                        <Input
                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Email"
                            name="email"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Пожалуйста, введите ваш пароль'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                            name="password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.registerHandler} type="primary" htmlType="submit"
                            disabled={hasErrors(getFieldsError())}>
                        Зарегистрироваться
                    </Button>
                    <Button style={{marginLeft: 20}} onClick={this.loginHandler} type="primary" htmlType="submit"
                            disabled={hasErrors(getFieldsError())}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const Auth = Form.create({name: 'horizontal_login'})(HorizontalLoginForm);

export default Auth

// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);