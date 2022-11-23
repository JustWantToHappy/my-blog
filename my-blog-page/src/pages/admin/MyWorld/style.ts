import styled from "styled-components"
const titleColor = "#44C7F5";
const cardPublic = `background:#fff;
border-radius:5%;
&:hover{
  transform: translateY(-2vh);
  transition:transform 200ms linear;
}
header{
  color:${titleColor};
  width:100%;
  height:18%;
  padding:1rem 1rem 0;
}
`;
const articleStyle = `
article{
  width:100%;
  height:80%;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  i{
    color:${titleColor};
    font-size:2rem;
  }
  p{
    color:gray;
    font-size:0.8rem;
  }
  }
`
const World = styled("div")`
width:100%;
height:100%;
padding-right:2px;
display: flex;
color:#666666;
.body{
    width:80%;
    height:100%;
    .content{
        width:96%;
        height:90%;
        display:grid;
        padding-top:1%;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: 46% 46%;
        grid-column-gap:5%;
        grid-row-gap:6%;
    }
    .introduce{
        ${cardPublic}
    }
    .article{
        ${cardPublic}
        ${articleStyle}
    }
    .comment{
        ${cardPublic}
        ${articleStyle}

    }
    .animation{
        ${cardPublic}
        ul{
          margin:0 auto;
          width:80%;
          height: 80%;
          display:flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          overflow: hidden;
        }
    }
}
.decoration {
  width: 30%;
  height: 100%;
  margin: auto 0;
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow: 1px 2px 10px 2px rgba(1,1,1,.4);
  position:relative;
  .right {
    background:${() => `url(${require("../../../assets/imgs/cherry.jpg")})`};
    background-size: cover;
    background-position: 40%;
    filter:blur(4px);
    transition:filter 2000ms linear;
    width: 100%;
    .card {
      color: #f3f2f4;
      display: flex;
      height:60%;
      flex-direction: column;
      justify-content:space-between;
      h1 {
        margin-top: 0;
        padding-top: 0;
        font-size: 3rem;
        flex: 2;
      }
      p {
        font-size: 1rem;
        text-align:center;
        margin:3vh 0;
      }
    }
    footer{
      height:40%;
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      color: #f3f2f4;
      flex-direction:column;
    }
  }
  &:hover{
    .mask{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background:rgba(1,1,1,.3);
  }
  }
}
    
`;
const Header = styled.header`
        width:95%;
        height:10%;
        display:flex;
        align-items: center;
        color:${titleColor};
        position: relative;
        font-size:0.9rem;
        p{
            transform: translateX(1vw);
        }
        span{
          display:flex;
          align-items: center;
        }
        .buttons{
          position:absolute;
          right:0;
          width:15%;
          display:flex;
          justify-content: flex-end;
        }
`;
/* 每个卡片顶部标题的样式 */
const CardHeader = styled("header")`

`;
export { World, Header, CardHeader };
