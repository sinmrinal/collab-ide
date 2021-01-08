import { Button, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomAdmin, roomCreated, roomID, roomName } from 'actions';
import { LoadingOutlined } from '@ant-design/icons';

interface Data {
    ID: string
    created_by: string
    name: string
}

const JoinRoom = () => {
    const [form] = Form.useForm();
    const [processExecuting, setProcessExecuting] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const onJoinRoom = async (e: any) => {
        setProcessExecuting(true)
        const payload = { roomID: e.roomid, name: e.name, token: process.env.REACT_APP_TOKEN }
        const response: any = await fetch(process.env.REACT_APP_JOIN_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            setProcessExecuting(false)
            notification.error({
                message: "Incorrect Room ID!",
                description: `Room ID: ${e.roomid} is incorrect.`,
                duration: 3
            })
        } else {
            const data: Data = await response.json()
            dispatch(roomID(data.ID))
            dispatch(roomName(data.name))
            dispatch(roomAdmin(data.created_by))
            dispatch(roomCreated(true))
            setProcessExecuting(false)
            history.push(`/room/${data.ID}`)
        }
    }
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
                {processExecuting
                    ? (
                        <Button type="primary" disabled><LoadingOutlined /> Loading...</Button>
                    ) :
                    (
                        <Button id="join-button" type="primary" htmlType='submit' size="middle">Join Room</Button>
                    )}
            </Form.Item>
        </Form>
    );
};

export default JoinRoom;



