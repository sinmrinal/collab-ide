import React, { useState } from 'react';
import Axios from "axios";
import { useDispatch } from "react-redux";
import { roomAdmin, roomID, roomName, roomCreated } from "actions";

import { Button, Input, Form } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CreateRoom = (props: any) => {
    const [processExecuting, setProcessExecuting] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onCreateRoom = async (e: any) => {
        setProcessExecuting(true)
        await Axios.post("http://127.0.0.1:8000/api/createRoom/", { roomName: e.room, admin: e.name })
            .then(function (response) {
                dispatch(roomID(response.data.ID))
                dispatch(roomName(response.data.name))
                dispatch(roomAdmin(response.data.created_by))
                dispatch(roomCreated(true))
                setProcessExecuting(false)
                props.history.push(`/room/${response.data.ID}`)
            })
            .catch(function (error) {
                setProcessExecuting(false)
                console.log(error);
            });
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
                        <Button type="primary" disabled ><LoadingOutlined /> Loading...</Button>
                    ) :
                    (
                        <Button type="primary" htmlType='submit' size="middle">Create Room</Button>
                    )}
            </Form.Item>
        </Form>
    );
};

export default CreateRoom;