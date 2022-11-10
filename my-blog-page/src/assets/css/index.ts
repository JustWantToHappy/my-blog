// 公共样式组件
import styled from "styled-components";
const ScrollStyle = styled("div")`
width:100%;
height: 100%;
&>::-webkit-scrollbar{
    width:10px;
}
&>::-webkit-scrollbar-thumb{
    border-radius:10px;
    /* background-color: #999; */
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: skyblue;
}
&>::-webkit-scrollbar-thumb:window-inactive{
    background-color: skyblue;
}
`;
const Mask = styled("div")`
    position:absolute;
    z-index:20000;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:hsla(0,0,0,.5);
    display:${(props: { show: boolean }) => props.show ? 'block' : 'none'};
`;
export { ScrollStyle, Mask };