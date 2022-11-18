import { useState } from "react"
import { HeartOutlined, ToolOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { Header } from "../MyWorld/style"
import styled from "styled-components"
import Info from "./components/Info"
import View from "./components/View"
const Main = styled("div")`
    width:95%;
    height:78%;
    background:var(--main-bg);
    border-radius: 20px;
    min-width: 428px;
    .ant-upload-list-picture-card-container{
        margin-right:2vw;
    }
`;
const Footer = styled("footer")`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width:95%;
    height:10%;
    transform: translateY(2vh);
    color:var(--admin-button-color);
    font-size:2rem;
`;
const Settings = () => {
    //是否展示网站信息面板
    const [show, setShow] = useState(true);
    return <>
        <Header >
            {show && <span className="animate__animated animate__flipInY">
                <ToolOutlined />
                <p >网站信息</p>
            </span>}
            {!show && <span className="animate__animated animate__flipInY">
                <HeartOutlined />
                <p>首屏渲染</p>
            </span>}
        </Header>
        <Main >
            {show && <Info />}
            {!show && <View />}
        </Main>
        <Footer>
            <LeftOutlined style={{ cursor: "pointer" }} onClick={() => setShow(!show)} />
            <RightOutlined style={{ cursor: "pointer" }} onClick={() => setShow(!show)} />
        </Footer>
    </>
}
export default Settings;