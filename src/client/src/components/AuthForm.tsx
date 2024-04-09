import {Button, Card, Checkbox, Flex, type FormProps, Input, Typography} from "antd";
import {Link, useLocation} from "react-router-dom";
import {RoutePath} from "../router/routes.tsx";
import {Form} from "../styles/FormStyle.ts";

type FieldType = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    passwordRepeat?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
};

const AuthForm = () => {
    const location = useLocation()
    const isRegistration = location.pathname === RoutePath.registration

    return (
        <Card style={{width: '100%', maxWidth: 400}}>
            <Form
                name="auth_form"
                layout={"vertical"}
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                {isRegistration ? <>
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
                </> : null}
                <Form.Item
                    label="Почта"
                    name="email"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input style={{fontSize: '16px'}}/>
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input style={{fontSize: '16px'}}
                           type="password"
                    />
                </Form.Item>
                {isRegistration ? <>
                    <Form.Item
                        label={"Подтвердите пароль"}
                        name="passwordRepeat"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input style={{fontSize: '16px'}}
                               type="password"
                        />
                    </Form.Item>
                </> : null}
                <Form.Item style={{margin: 0}}>
                    <Flex align={"center"} justify={"space-between"} wrap={'wrap'}
                          style={{rowGap: '4px', columnGap: '16px'}}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{fontSize: '15px', fontWeight: '400'}}>Запомнить меня</Checkbox>
                        </Form.Item>
                        {!isRegistration ? <Typography.Link style={{fontSize: '15px', fontWeight: '600'}}>
                            <Link to={RoutePath.main}>Забыли пароль?</Link>
                        </Typography.Link> : null}
                    </Flex>
                </Form.Item>
                <Form.Item style={{marginTop: '16px', marginBottom: '0px'}}>
                    <Button style={{height: 'auto', fontSize: '16px'}} block type="primary">
                        {isRegistration ? 'Зарегистрироваться' : 'Войти'}
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AuthForm;