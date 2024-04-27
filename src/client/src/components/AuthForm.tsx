import {Button, Checkbox, Flex, Form, Input, Typography} from "antd";
import {Link} from "react-router-dom";
import {RoutePath} from "../router/routes.tsx";
import Card from "./UI/Card.tsx";
import {authApi} from "../store/services/AuthService.ts";

interface AuthFormData {
    email: string,
    password: string,
    remember: boolean
}

const AuthForm = () => {

    const [loginUser,
        {
            isLoading: loginIsLoading,
            isSuccess: loginIsSuccess,
            isError: loginIsError,
            error: loginError,
        }] = authApi.useLoginMutation()

    const onFinish = async (values: AuthFormData) => {
        const {email, password} = values
        const responce = await loginUser({email, password})
        console.log(responce)
    };

    // useEffect(() => {
    //     if (loginIsSuccess) {
    //         // navigate(RoutePath.main)
    //     }
    //     if (loginIsError) {
    //         // const {data}: any = loginError
    //
    //         // setAlert({isOpen: true, message: data.message})
    //     }
    // }, [loginIsSuccess, loginIsError])

    return (
        <Card style={{width: '100%', maxWidth: 400}}>
            <Form
                name="auth_form"
                layout="vertical"
                initialValues={{remember: true}}
                requiredMark={false}
                onFinish={onFinish}
            >
                <Form.Item
                    hasFeedback
                    label="Почта"
                    name="email"
                    rules={[
                        {required: true, message: 'Введите адрес электронной почты'},
                    ]}
                >
                    <Input style={{fontSize: '16px'}}/>
                </Form.Item>
                <Form.Item
                    hasFeedback
                    label="Пароль"
                    name="password"
                    rules={[
                        {required: true, message: 'Введите пароль'},
                    ]}
                >
                    <Input.Password style={{fontSize: '16px'}} type="password"/>
                </Form.Item>
                <Form.Item style={{margin: 0}}>
                    <Flex align="center" justify="space-between" wrap="wrap" style={{rowGap: '4px', columnGap: '16px'}}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{fontSize: '15px', fontWeight: '400'}}>Запомнить меня</Checkbox>
                        </Form.Item>

                        <Typography.Link style={{fontSize: '15px', fontWeight: '600'}}>
                            <Link to={RoutePath.main}>Забыли пароль?</Link>
                        </Typography.Link>
                    </Flex>
                </Form.Item>
                <Form.Item style={{marginTop: '16px', marginBottom: '0px'}}>
                    <Button style={{height: 'auto', fontSize: '16px'}} block type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AuthForm;
