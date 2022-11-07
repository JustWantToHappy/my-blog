import styled from "styled-components";

export const StyleHeader = styled.header`
--nav-height:${(props: { show: boolean }) => props.show ? '100vh' : '0vh'};
height:var(--nav-height);
border-bottom:1px solid #d4d4d4;
transition: height 200ms linear;
left:0;
top:0;
right:0;
position:absolute;
z-index:9999;
background-color: hsla(0,0%,100%,.9);
color:black;
.nav{
    margin:0 auto;
    width:60%;
    height:var(--nav-height);
    list-style: none;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    li{
        display: inline-block;
        line-height: calc(0.9*var(--nav-height));
        font-size:1.3rem;
        font-weight: 550;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 1vh;
        }
    }
}
`;