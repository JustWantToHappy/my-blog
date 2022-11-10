import { useState, useEffect } from "react"
import { Input, Spin } from "antd"
import { Header } from "../MyWorld/style"
import { SendOutlined } from "@ant-design/icons"
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor } from '@wangeditor/editor'
import { useEditor, toolbarConfig } from "./Config"
import styled from "styled-components"
const Main = styled("div")`
  width:95%;
`;
const NewArticle = () => {
    let title = "新的旅途，新的开始。";
    // 富文本编辑器实例对象
    const [editor, setEditor] = useState<IDomEditor | null>(null);
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
    return <>
        <Header>
            <SendOutlined />
            <p>{title}</p>
        </Header>
        <Main>
            <Input placeholder="标题" size="large" style={{ marginBottom: '2vh', paddingLeft: "1vw" }} />
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