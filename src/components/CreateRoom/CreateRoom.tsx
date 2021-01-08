import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { roomAdmin, roomCreated, roomID, roomName } from "actions";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface Data {
    ID: string
    created_by: string
    name: string
  }

const CreateRoom = () => {
    const [processExecuting, setProcessExecuting] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const [form] = Form.useForm()
    const onCreateRoom = async (e: any) => {
        setProcessExecuting(true)
        const payload = { roomName: e.room, admin: e.name, token: process.env.REACT_APP_TOKEN }
        const response: any = await fetch(process.env.REACT_APP_CREATE_ROOM_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        if (!response.ok) {
            setProcessExecuting(false)
            notification.error({
                message: "OOPS! :(",
                description: "Seems like Servers are not responding currectly at the moment. Try again later.",
                duration: 5
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
                {processExecuting
                    ? (
                        <Button type="primary" disabled><LoadingOutlined /> Loading...</Button>
                    ) :
                    (
                        <Button type="primary" htmlType='submit' size="middle">Create Room</Button>
                    )}
            </Form.Item>
        </Form>
    );
};

export default CreateRoom;