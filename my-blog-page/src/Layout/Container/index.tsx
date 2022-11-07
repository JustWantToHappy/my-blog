import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import routes from "../../router";
import { useEffect, useState } from "react"
const Main = styled.div`
 .progress{
    position: fixed;
    z-index:10001;
    left:0;
    top:0;
    right: 0;
    height:3px;
    &>:first-child{
        height:100%;
        width:${(props: { inputWidth: number }) => `${props.inputWidth}%`};
        background:#0A74DA;
    }
}
`;
const Container = () => {
    let elements = useRoutes(routes);
    const [progress, setProgress] = useState(0);
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
    return <Main inputWidth={progress}>
        <div className="progress">
            <div></div>
        </div>
        {elements}
    </Main>
}
export default Container;