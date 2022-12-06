import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import routes from "../../router";
import { useEffect, useState, useContext } from "react"
import { Context } from "../../App";
const Main = styled.div`
width:100%;
height:100vh;
overflow:auto;
background: ${(props: { inputWidth: number, inputTheme: boolean }) => props.inputTheme ? '#fff' : '#000'};
transition:background linear 500ms ;
 .progress{
    position: fixed;
    z-index:10001;
    left:0;
    top:0;
    right: 0;
    height:2px;
    box-sizing: border-box;
    &>:first-child{
        position: absolute;
        top:0;
        z-index:11;
        height:100%;
        width:${(props: { inputWidth?: number }) => `${props.inputWidth}%`};
        background:#0A74DA;
    }
    &>:nth-child(2){
        position:absolute;
        top:0;
        z-index:10;
        height:100%;
        width:100%;
        background:#A8ABB2;
        height:1px;
    }

}
.container{
    /* overflow:hidden;//防止父容器高度塌陷 */
   /*  width:100vw;
    height:100%;
    overflow:scroll; */

}
`;
const Container = () => {
    let elements = useRoutes(routes);
    const [progress, setProgress] = useState(0);
    const { theme } = useContext(Context);
    useEffect(() => {
        const handlerScroll = () => {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 0) {
                    setProgress((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
                } else if (window.scrollY === 0) {
                    setProgress(0);
                }
            })
        }
        window.addEventListener("scroll", handlerScroll);
        return function () {
            window.removeEventListener("scroll", handlerScroll);
        }
    }, []);
    return <Main inputWidth={progress} inputTheme={theme}>
        <div className="progress">
            <div></div>
            <div></div>
        </div>
        <div className="container">
            {elements}
        </div>
    </Main>
}
export default Container;