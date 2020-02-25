import React from "react";

// !!! C ИСПОЛЬЗОВАНИЕМ REF ---> Убрать
class AdminArticleContainer extends React.Component {

    newArticleElement = React.createRef();

    onArticleChange = () => {
        let text = this.newArticleElement.current.value;
        this.props.addArticle(text)
    };

   onAddArticlet = () => {
        this.props.addArticle();
    };

    render() {
        return (
            <div>
                <div>
                    <textarea ref={this.newArticleElement} onChange={this.onArticleChange} name="" id="" cols="150"
                              rows="10"></textarea>
                </div>
                <div>
                    <button onClick={this.onAddPost}>add post</button>
                </div>
            </div>
        )
    }
}

export default AdminArticleContainer;


// import {Form, Icon, Input, Button} from 'antd';
//
// import * as axios from 'axios'
//
//
// // const [form, setForm] = useState({
// //     email: '', password: ''
// // });
//
// const changeHandler = event => {
//     let form = ({...form, [event.target.name]: event.target.value})
//     console.log(form)
// };
//
// function hasErrors(fieldsError) {
//     return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
//
// class HorizontalLoginForm extends React.Component {
//     componentDidMount() {
//         // To disable submit button at the beginning.
//         this.props.form.validateFields()
//     }
//
//     registerHandler = () => {
//         axios.post('api/articles/create-article', {
//             title: "ou my gggo",
//             description: "o ohoh ofdfg"
//         })
//             .then(response => {
//                 console.log('res', response)
//             }).catch(error => {
//             console.log(error.response.data.message);
//
//         });
//     };
//
//     loginHandler = () => {
//         axios.post('api/auth/login', {
//             title: "hello",
//             description: "o ohoh of"
//         })
//             .then(response => {
//                 console.log('res', response)
//             }).catch(error => {
//             console.log(error.response.data.message);
//
//         });
//     };
//
//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 console.log('Received values of form: ', values);
//             }
//         });
//     };
//
//     render() {
//         const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
//
//         // Only show error after a field is touched.
//         const emailError = isFieldTouched('email') && getFieldError('email');
//         const passwordError = isFieldTouched('password') && getFieldError('password');
//         return (
//             <Form layout="inline" onSubmit={this.handleSubmit}>
//                 <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
//                     {getFieldDecorator('email', {
//                         rules: [{required: true, message: 'Пожалуйста, введите ваш email!'}],
//                     })(
//                         <Input
//                             prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
//                             placeholder="Email"
//                             name="email"
//                         />,
//                     )}
//                 </Form.Item>
//                 <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
//                     {getFieldDecorator('password', {
//                         rules: [{required: true, message: 'Пожалуйста, введите ваш пароль'}],
//                     })(
//                         <Input
//                             prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
//                             type="password"
//                             placeholder="Password"
//                             name="password"
//                         />,
//                     )}
//                 </Form.Item>
//                 <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
//                     {getFieldDecorator('textarea', {
//                         rules: [{required: true, message: 'Пожалуйста, введите ваш пароль'}],
//                     })(
//                         <Input
//                             prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
//                             type="textarea"
//                             placeholder="textarea"
//                             name="textarea"
//                         />,
//                     )}
//                 </Form.Item>
//                 <Form.Item>
//                     <Button onClick={this.registerHandler} type="primary" htmlType="submit"
//                             disabled={hasErrors(getFieldsError())}>
//                         Зарегистрироваться
//                     </Button>
//                     <Button style={{marginLeft: 20}} onClick={this.loginHandler} type="primary" htmlType="submit"
//                             disabled={hasErrors(getFieldsError())}>
//                         Войти
//                     </Button>
//                 </Form.Item>
//             </Form>
//         );
//     }
// }
//
// const CreateArticle = Form.create({name: 'horizontal_login'})(HorizontalLoginForm);
//
// export default CreateArticle

// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);