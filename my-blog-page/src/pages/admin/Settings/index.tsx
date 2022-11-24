import { HeartOutlined, ToolOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { useState } from "react"
import { Header } from "../MyWorld/style"
import styled from "styled-components"
import Info from "./components/Info"
import View from "./components/View"
import Save from "../../../assets/icons/save.svg";
import Loading from "../../../assets/icons/loading.svg";
const Main = styled("div")`
    margin-top:2vh;
    width:95%;
    height:78%;
    background:var(--main-bg);
    border-radius: 20px;
    min-width: 428px;
    font-size:1rem !important;
    .ant-upload-list-picture-card-container{
        margin-right:2vw;
    }
`;
const Footer = styled("footer")`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width:95%;
    height:10%;
    color:var(--admin-button-color);
    font-size:1.2rem;
    &>:nth-child(2){
        cursor: pointer;
        color:#000;
        ${(props: { isLoad: boolean }) => props.isLoad ? 'animation:loading 1000ms linear infinite' : ''}
    }
    @keyframes loading{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
const Settings = () => {
    //是否展示网站信息面板
    const [show, setShow] = useState(true);
    //是否处于加载过程
    const [loading, setLoading] = useState(false);
    const save = () => {
        setLoading(!loading);
    }
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
        <Footer isLoad={loading}>
            <LeftOutlined style={{ cursor: "pointer" }} onClick={() => setShow(!show)} />
            <img
                src={!loading ? Save : Loading}
                alt="save"
                style={{ width: "3%" }} title="保存"
                onClick={save}
            />
            <RightOutlined style={{ cursor: "pointer" }} onClick={() => setShow(!show)} />
        </Footer>
    </>
}
export default Settings;