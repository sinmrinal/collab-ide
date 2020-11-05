import React from 'react';
import { Button, Input, Form } from "antd";

const JoinRoom = () => {
    
    const [form] = Form.useForm();
    const onJoinRoom = () => {}

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={onJoinRoom}
            >
                <Form.Item
                    required
                    name='roomid'
                    label="Enter Room ID"
                    rules={[{ required: true, message: 'Room ID is required!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    required
                    name='name'
                    label="Enter Your Name"
                    rules={[{ required: true, message: 'Your Name is required!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>Join Room</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default JoinRoom;