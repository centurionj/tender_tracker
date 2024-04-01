import {FC} from 'react';
import {Button, Input, Modal, Typography} from 'antd';
import {Form} from "../../styles/FormStyle";
import H5Typography from "../UI/H5Typography.ts";

interface IModalChangeEmailProps {
    isModalOpen: boolean;

    handleClose(): void;
}

const ModalChangeEmail: FC<IModalChangeEmailProps> = ({isModalOpen, handleClose}) => {
    const [form] = Form.useForm();

    function handleOk() {
        handleClose()
    }

    function handleCancel() {
        handleClose()
    }

    return (
        <Modal centered
               title={<div>
                   <H5Typography>Главное - безопасность</H5Typography>
                   <Typography.Text type='secondary'>Введите новую почту</Typography.Text></div>}
               open={isModalOpen} onCancel={handleCancel}
               footer={[
                   <Button key="back" onClick={handleCancel}>
                       Отмена
                   </Button>,
                   <Button key="submit" type="primary" onClick={handleOk}>
                       Сохранить
                   </Button>,
               ]}>
            <Form style={{marginTop: '16px'}} form={form} name="changeNameForm"
                  initialValues={{remember: true}}>
                <Form.Item name="email"
                           rules={[{required: true, message: 'Please input your first name!'}]}>
                    <Input placeholder='pochta@gmail.com' style={{fontSize: '15px'}}/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalChangeEmail;
