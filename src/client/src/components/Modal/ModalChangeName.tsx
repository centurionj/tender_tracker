import {FC} from 'react';
import {Button, Input, Modal} from 'antd';
import {Form} from "../../styles/FormStyle";
import H5Typography from "../UI/H5Typography.ts";

interface IModalChangeNameProps {
    isModalOpen: boolean;

    handleClose(): void;
}

const ModalChangeName: FC<IModalChangeNameProps> = ({isModalOpen, handleClose}) => {
    const [form] = Form.useForm();

    function handleOk() {
        handleClose()
    }

    function handleCancel() {
        handleClose()
    }

    return (
        <Modal centered title={<H5Typography>Персональные данные</H5Typography>} open={isModalOpen}
               onCancel={handleCancel} footer={[
            <Button key="back" onClick={handleCancel}>
                Отмена
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
                Сохранить
            </Button>,
        ]}>
            <Form style={{marginTop: '16px'}} form={form} name="changeNameForm" labelCol={{span: 4}}
                  initialValues={{remember: true}}>
                <Form.Item label="Имя" name="firstName"
                           rules={[{required: true, message: 'Please input your first name!'}]}>
                    <Input placeholder='Иван' style={{fontSize: '15px'}}/>
                </Form.Item>
                <Form.Item label="Фамилия" name="lastName"
                           rules={[{required: true, message: 'Please input your last name!'}]}>
                    <Input placeholder='Иванов' style={{fontSize: '15px'}}/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalChangeName;
