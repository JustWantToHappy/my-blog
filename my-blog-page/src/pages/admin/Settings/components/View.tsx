import { useState, useRef } from 'react';
import styled from "styled-components";
import MyButton from "../../../../components/Button"
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
                margin-right: 3vw;
            }
        }
        input{
            padding-left:0.5rem;
        }
    }
    .upload-cover{
        height: 20%;
        input[type='file']{
          display: none;
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
        cover: "https://image.raindays.cn/Mood/image/1594348066004.png",
        title: "useHook",
        description: "第十三颗光玉",
        time: "17 2006",
        ICP: "湘ICP备 254214号",
        ICPLink: "34436346"
    }
    const [form] = useState<ViewFrom>(CurrentForm);
    const upload = useRef<HTMLInputElement>(null);
    const modifyCover = () => {
        upload.current?.click();
        // previewPicture(upload.current);
    }
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
                <Form.Item label="封面图" className="upload-cover" >
                    <img src={CurrentForm.cover} alt="图片无法显示" />
                    <MyButton color='skyblue' onClick={modifyCover}>修改封面</MyButton>
                    <input type="file" ref={upload} />
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