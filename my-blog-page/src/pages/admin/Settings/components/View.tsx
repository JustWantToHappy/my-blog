import React, { useState, useRef } from 'react';
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
            position: relative;
            img{
                width:7rem;
                height:4.5rem;
                object-fit: cover;
                margin-right: 3vw;
                cursor: pointer;
            }
            span{
                position: absolute;
                left:0;
                bottom:-1rem;
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
    const currentForm: ViewFrom = {
        cover: "https://image.raindays.cn/Mood/image/1594348066004.png",
        title: "useHook",
        description: "第十三颗光玉",
        time: "17 2006",
        ICP: "湘ICP备 254214号",
        ICPLink: "34436346"
    }
    const [form, setForm] = useState<ViewFrom>(currentForm);
    const upload = useRef<HTMLInputElement>(null);
    const modifyCover = () => {
        upload.current?.click();
        upload.current?.addEventListener("change", function (event: any) {
            const { files } = event.target;
            currentForm.cover = files ? URL.createObjectURL(files[0]) : '';
            setForm({ ...currentForm });
        });
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
                    <img src={form.cover} alt="cover" />
                    <span>(建议图片大小为1080x690)</span>
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