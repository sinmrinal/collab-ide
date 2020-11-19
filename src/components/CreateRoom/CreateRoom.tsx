import React from 'react';

import { Button, Input, Form } from "antd";

const CreateRoom = () => {
    
    const [form] = Form.useForm();
    const onCreateRoom = (e: any) => {}
    return (
        <Form
                form={form}
                layout="vertical"
                onFinish={onCreateRoom}
            >
                <Form.Item
                    required
                    name='room'
                    label="Enter Room Name"
                    rules={[{ required: true, message: 'Room Name is required!' }]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    required
                    name='name'
                    label="Enter Your Name"
                    rules={[{ required: true, message: 'Your Name is required!' }]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>Create Room</Button>
                </Form.Item>
            </Form>
    );
};

export default CreateRoom;