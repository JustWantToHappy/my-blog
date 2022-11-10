// 公共样式组件
import styled from "styled-components";
//滚动条样式组件
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
// 蒙层组件
const Mask = styled("div")`
    position: fixed;
    z-index:9999;
    left:0;
    right:0;
    top:0;
    bottom:0;
    /* background: rgba(220,226,241,.5); */
    display:${(props: { show: boolean }) => props.show ? 'block' : 'none'};
    background: rgba(0,0,0,.4);
    `;
const CommentMask = styled(Mask)`
   &>div{
    width:100%;
    height:100%;
    display:flexbox;
    justify-content: center;
    align-items: center;
    .comment{
        width:400px;
        height:250px;
        background:#fff;
        border-radius: 15px;
        position:relative;
        &>p:first-child{
            position:absolute;
            left:100px;
            top:10px;
            color:var(--admin-button-color);
            font-size:0.9rem;
        }
        .avatar{
            position:absolute;
            left:20px;
            top:-24px;
        }
        .close{
            position:absolute;
            right:15px;
            top:3%;
            cursor:pointer;
            color:var(--admin-button-color);
            &:hover{
                transform: scale(0.9);
            }
        }
        &::before{
            content:"";
            width:100px;
            height:100px;
            background:#fff;
            border-top-left-radius: 50%;
            border-top-right-radius: 50%;
            position:absolute;
            top: -33px;
        }
        .content{
            --content-width:90%;
            --content-height:60%;
            width:var(--content-width);
            height:var(--content-height);
            margin:0 auto;
            position:absolute;
            left:calc((400px - var(--content-width))/2);
            top:calc((250px - var(--content-height))/2 - 10px);
            border-radius: 10px;
        }
        footer{
            width: 100%;
            bottom:0;
            position:absolute;
            padding:2px 5%;
            z-index:0;
            display:flex;
            align-items: center;
            justify-content: space-between;
            .comment-footer{
               color:#F56C6C;
               &>:first-child{
                transform: translateX(-5px);
              }
            }
        }
    }
   }
`;
// 当文字内容比较多的时候，省略号带过
const OmitStyle = styled("p")`
    
`;
export { ScrollStyle, Mask, CommentMask };