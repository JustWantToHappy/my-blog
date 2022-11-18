import { useState } from 'react';
import styled from "styled-components";
import {
    Form,
    Input,
} from 'antd';

const Container = styled("div")`
    width:100%;
    height:100%;
    overflow: hidden;
    .form{
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        &>:first-child{
            img{
                width:150px;
                object-fit: cover;
            }
        }
        input{
            padding-left:0.5rem;
        }
    }
`;
interface ViewFrom {
    cover: string;
    title: string;
    description: string;
    time: string;
    ICP: string;
    ICPLink: string;
}
const View = () => {
    const CurrentForm: ViewFrom = {
        cover: "hhhh",
        title: "useHook",
        description: "第十三颗光玉",    
        time: "17 2006",
        ICP: "湘ICP备 254214号",
        ICPLink: "34436346"
    }
    const [form] = useState<ViewFrom>(CurrentForm);
    return <>
        <Container>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 17 }}
                layout="horizontal"
                className="form"
                size="large"
                initialValues={form}
            >
                <Form.Item label="封面图" style={{ height: "20%" }} >
                    <img src="https://image.raindays.cn/Mood/image/1594348066004.png" alt="图片无法显示" />
                </Form.Item>
                <Form.Item label="标题" name="title">
                    <Input />
                </Form.Item>
                <Form.Item label="描述" name="description">
                    <Input />
                </Form.Item>
                <Form.Item label="时间" name="time">
                    <Input />
                </Form.Item>
                <Form.Item label="备案号" name="ICP">
                    <Input />
                </Form.Item>
                <Form.Item label="备案链接" name="ICPLink">
                    <Input />
                </Form.Item>
            </Form>
        </Container>
    </>
}
export default View;