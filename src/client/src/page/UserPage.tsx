import {FC, useState} from "react";
import {Button, Flex, Input, Typography} from "antd";
import H5Typography from "../components/UI/H5Typography.ts";
import Container from "../components/UI/Container.tsx";
import {Form} from "../styles/FormStyle.ts";
import ModalChangeName from "../components/Modal/ModalChangeName.tsx";
import ModalChangeEmail from "../components/Modal/ModalChangeEmail.tsx";
import Card from "../components/UI/Card.tsx";

const UserPage: FC = () => {
    const [form] = Form.useForm()

    const onFinish = (values: any) => {
        console.log(values);
    };

    const [isModalChangeNameOpen, setIsModalChangeNameOpen] = useState<boolean>(false)
    const modalChangeNameClose = () => setIsModalChangeNameOpen(false)

    const [isModalChangeEmailOpen, setIsModalChangeEmailOpen] = useState<boolean>(false)
    const modalChangeEmailClose = () => setIsModalChangeEmailOpen(false)

    return (
        <Container style={{maxWidth: '500px', gap: '16px'}}>
            <Card>
                <div style={{marginBottom: '20px'}}>
                    <H5Typography>Персональные данные</H5Typography>
                    <Typography.Text type='secondary'>Измените свои личные
                        данные</Typography.Text>
                </div>
                <Flex gap={12} vertical>
                    <Flex align={"center"} justify={"space-between"} wrap={'wrap'} gap={12}>
                        <div>
                            <Typography.Text type='secondary' style={{fontWeight: '400'}}>Имя</Typography.Text>
                            <Typography style={{fontSize: "16px"}}>Иван</Typography>
                        </div>
                        <div>
                            <Typography.Text type='secondary' style={{fontWeight: '400'}}>Фамилия</Typography.Text>
                            <Typography style={{fontSize: "16px"}}>Иванов</Typography>
                        </div>
                        <Button onClick={() => setIsModalChangeNameOpen(true)} type="link"
                                style={{fontWeight: '500', padding: '0'}}>Изменить</Button>
                    </Flex>
                    <Flex align={"center"} justify={"space-between"} wrap={'wrap'} gap={12} style={{flex: '1'}}>
                        <div>
                            <Typography.Text type='secondary' style={{fontWeight: '400'}}>Электронная
                                почта</Typography.Text>
                            <Typography style={{fontSize: "16px"}}>pochta@gmail.com</Typography>
                        </div>
                        <Button onClick={() => setIsModalChangeEmailOpen(true)} type="link"
                                style={{fontWeight: '500', padding: '0'}}>Изменить</Button>
                    </Flex>
                </Flex>
            </Card>
            <Card>
                <div style={{marginBottom: '20px'}}>
                    <H5Typography>Изменить пароль</H5Typography>
                </div>
                <Form
                    layout={"vertical"}
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                >
                    <Form.Item name="oldPassword" label='Старый пароль' rules={[{required: true}]}>
                        <Input type="password"/>
                    </Form.Item>
                    <Form.Item name="newPassword" label='Новый пароль' rules={[{required: true}]}>
                        <Input type="password"/>
                    </Form.Item>
                    <Form.Item name="repeatNewPassword" label='Подтвердите новый пароль' rules={[{required: true}]}>
                        <Input type="password"/>
                    </Form.Item>
                    <Button style={{height: 'auto'}} type="primary" htmlType="submit">
                        Подтвердить изменения
                    </Button>
                </Form>
            </Card>
            <ModalChangeName isModalOpen={isModalChangeNameOpen} handleClose={modalChangeNameClose}/>
            <ModalChangeEmail isModalOpen={isModalChangeEmailOpen} handleClose={modalChangeEmailClose}/>
        </Container>
    );
};

export default UserPage;