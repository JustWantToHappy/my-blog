import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import routes from "../../router";
import { useEffect, useState, useContext, useRef } from "react"
import { Context } from "../../App";
import ReturnTop from "../../components/ReturnTop";
const Main = styled.div`
overflow:auto;
width:100%;
height:100vh;
overflow-x: hidden;
position: relative;
&::-webkit-scrollbar {
  width: 5px;
}
&::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: var(--page-scroll-bg);
}
&::-webkit-scrollbar-thumb:window-inactive {
  background-color: var(--page-scroll-bg);
}
background: ${(props: { inputWidth: number, inputTheme: boolean }) => props.inputTheme ? '#fff' : '#000'};
transition:background linear 500ms ;
 .progress{
    position: fixed;
    z-index:10001;
    top:0;
    left:0;
    height:2px;
    width:${(props: { inputWidth?: number }) => `${props.inputWidth}%`};
    background:#0A74DA;
}
.container{
    /* overflow:hidden;//防止父容器高度塌陷 */
}
`;
const Container = () => {
    let elements = useRoutes(routes);
    const [progress, setProgress] = useState(0);
    const { theme } = useContext(Context);
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let containerPage = container.current;
        const handlerScroll = () => {
            window.requestAnimationFrame(() => {
                if (containerPage && containerPage?.scrollTop > 0) {
                    setProgress((containerPage.scrollTop + window.innerHeight) / containerPage.scrollHeight * 100);
                } else if (containerPage?.scrollTop === 0) {
                    setProgress(0);
                }
            })
        }
        containerPage?.addEventListener("scroll", handlerScroll);
        return function () {
            containerPage?.removeEventListener("scroll", handlerScroll);
        }
    }, [container]);
    return <>
        <Main inputWidth={progress} inputTheme={theme} ref={container}>
            <div className="progress">
            </div>
            <div className="container">
                {elements}
            </div>
        </Main>
        {container.current && <ReturnTop container={container.current} />}
    </>
}
export default Container;