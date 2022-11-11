import { Form, Input, Select, Avatar, DatePicker, Upload } from "antd"
import { UserOutlined } from "@ant-design/icons"
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { onPreview, beforeUpload, uploadImage } from "../utils"
import ImgCrop from "antd-img-crop"
import { useState } from "react"
const { Option } = Select;
interface Settings {
    avatar?: string;
    adminName: string;
    email: string;
    gender?: string;
    imgFile: File | null
}
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const Info = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const initSettings: Settings = {
        avatar: "",
        adminName: "useHook",
        email: "1302755003@qq.com",
        gender: "男",
        imgFile: null
    };
    //如果上传的文件列表发生变化时触发
    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onGenderChange = (value: string) => {

    }
    return <>
        <Form {...layout}
            form={form}
            name="control-hooks"
            initialValues={initSettings}
            style={{ height: "100%", paddingTop: "5%" }}
        >
            <Form.Item
                name="avatar"
                label="Admin Avatar"
                style={{ height: "20%" }}
            >
                <Avatar size={60} icon={<UserOutlined />} />
            </Form.Item>
            <Form.Item
                name="imgFile"
                label="Upload Avatar"
                style={{ height: "30%"}}
            >
                <ImgCrop rotate>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                        maxCount={1}
                        beforeUpload={beforeUpload}
                        customRequest={uploadImage}
                    >
                        {'+ Upload'}
                    </Upload>
                </ImgCrop>
            </Form.Item>
            <Form.Item
                name="adminName"
                label="Name"
                rules={[{ required: true, message: "Name is required" }]}
                style={{ height: "12%" }}
            >
                <Input allowClear={true} style={{ padding: "0 10px" }} />
            </Form.Item>
            <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true }]}
                style={{ height: "12%" }}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
                style={{ height: "12%" }}
            >
                <Input style={{ padding: "0 10px" }} allowClear={true} />
            </Form.Item>
            <Form.Item
                name="birthday"
                label="BirthDay"
                style={{ height: "12%" }}
            >
                <DatePicker format="YYYY MM-DD" style={{ width: "100%", padding: "0 10px" }} />
            </Form.Item>
        </Form>
    </>
}
export default Info;