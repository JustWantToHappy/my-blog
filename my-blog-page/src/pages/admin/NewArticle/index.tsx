import React, { useState, useEffect } from "react"
import { Input, Spin } from "antd"
import { Header } from "../MyWorld/style"
import { SendOutlined } from "@ant-design/icons"
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor } from '@wangeditor/editor'
import { useEditor, toolbarConfig } from "./Config"
import MyButton from "../../../components/Button"
import styled from "styled-components"
import { failMsg, successMsg, infoMsg } from "../../../utils"
const Main = styled("div")`
  width:95%;
`;
const NewArticle = () => {
    let articleTitle = "新的旅途，新的开始。";
    // 富文本编辑器实例对象
    const [editor, setEditor] = useState<IDomEditor | null>(null);
    //文本标题
    const [title, setTitle] = useState("");
    //编辑器内容
    const [html, setHtml] = useState("");
    const { editorConfig, loading } = useEditor();
    //及时销毁editor
    useEffect(() => {
        return function () {
            if (editor === null) {
                return;
            }
            editor.destroy();
            setEditor(null);
        }
    }, [editor]);
    const publish = () => {
        if ((title ?? "") === "") {
            failMsg({ content: "文章标题不能为空!", duration: 1 });
        } else if (html === "<p><br></p>") {
            infoMsg({ content: "你还没有输入文字内容呢", duration: 1 });
        } else {
            successMsg({content:"发布文章成功!"})
        }
    }
    return <>
        <Header>
            <SendOutlined />
            <p>{articleTitle}</p>
            <div className="buttons">
                <MyButton
                    color="#44C7F5"
                    shape="round"
                    fontSize={10}
                    onClick={publish}
                >
                    Publish
                </MyButton>
            </div>
        </Header>
        <Main>
            <Input placeholder="标题" size="large" style={{ marginBottom: '2vh', paddingLeft: "1vw" }} onChange={(e) => setTitle(e.target.value)} />
            <Spin tip="Loading..." spinning={loading}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '370px', overflowY: 'hidden' }}
                />
            </Spin>
        </Main>
    </>
}
export default NewArticle;