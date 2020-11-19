import { Button, Form, Input } from 'antd';
import React from 'react';

const JoinRoom = () => {
    const [form] = Form.useForm();
    const onJoinRoom = () => {}
    return (
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
                    <Input size="large"/>
                </Form.Item>
                <Form.Item
                    required
                    name='name'
                    label="Enter Your Name"
                    rules={[{ required: true, message: 'Your Name is required!' }]}
                >
                    <Input size="large"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>Join Room</Button>
                </Form.Item>
            </Form>
    );
};

export default JoinRoom;