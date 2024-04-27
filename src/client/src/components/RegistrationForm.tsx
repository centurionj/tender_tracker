import {Button, Checkbox, Flex, Form, Input, Typography} from "antd";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {RoutePath} from "../router/routes";
import Card from "./UI/Card";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isRegistration = location.pathname === RoutePath.registration;


    const onFinish = (values) => {
        console.log('Success:', values);
        // Дополнительная логика для отправки данных формы
    };

    return (
        <Card style={{width: '100%', maxWidth: 400}}>
            <Form
                name="auth_form"
                layout="vertical"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                {isRegistration && (
                    <>
                        <Form.Item
                            label="Имя"
                            name="firstName"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                        >
                            <Input style={{fontSize: '16px'}}/>
                        </Form.Item>
                        <Form.Item
                            label="Фамилия"
                            name="lastName"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                        >
                            <Input style={{fontSize: '16px'}}/>
                        </Form.Item>
                    </>
                )}
                <Form.Item
                    label="Почта"
                    name="email"
                    rules={[
                        {required: true, message: 'Введите адрес электронной почты'},
                        {type: 'email', message: 'Введите правильный адрес электронной почты'}
                    ]}
                >
                    <Input style={{fontSize: '16px'}}/>
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {required: true, message: 'Введите пароль'},
                        {min: 8, message: 'Пароль должен быть не менее 8 символов'},
                        {
                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: 'Пароль должен содержать буквы и цифры'
                        }
                    ]}
                >
                    <Input style={{fontSize: '16px'}} type="password"/>
                </Form.Item>
                {isRegistration && (
                    <Form.Item
                        label="Подтвердите пароль"
                        name="passwordRepeat"
                        dependencies={['password']}
                        rules={[
                            {required: true, message: 'Please confirm your password!'},
                          
                        ]}
                    >
                        <Input style={{fontSize: '16px'}} type="password"/>
                    </Form.Item>
                )}
                <Form.Item style={{margin: 0}}>
                    <Flex align="center" justify="space-between" wrap="wrap" style={{rowGap: '4px', columnGap: '16px'}}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{fontSize: '15px', fontWeight: '400'}}>Запомнить меня</Checkbox>
                        </Form.Item>
                        {!isRegistration && (
                            <Typography.Link style={{fontSize: '15px', fontWeight: '600'}}>
                                <Link to={RoutePath.main}>Забыли пароль?</Link>
                            </Typography.Link>
                        )}
                    </Flex>
                </Form.Item>
                <Form.Item style={{marginTop: '16px', marginBottom: '0px'}}>
                    <Button style={{height: 'auto', fontSize: '16px'}} block type="primary" htmlType="submit">
                        {isRegistration ? 'Зарегистрироваться' : 'Войти'}
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default RegistrationForm;
