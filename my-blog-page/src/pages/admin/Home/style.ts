import styled from "styled-components"
const Admin = styled("div")`
*{
  padding:0;
  margin:0;
}
display:flex;
background-color:${(props: { inputTheme: string }) => props.inputTheme === 'dark' ? '#001529' : '#fff'};
transition:background-color 500ms linear;
&>:first-child{
  font-size:0.85rem;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  color:#44C7F5;
  .avatar{  
    height:30%;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4{
      color:${(props: { inputTheme: string }) => props.inputTheme === 'dark' ? '#fff' : '#000'};
    }
  }
  .menu{
    height:50%;
    width:100%;
    overflow:hidden;
    ul{
      height:100%;
      width:100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    li{
      width:100%;
      display:flex;
      height: 100%;
      align-items:center;
      justify-content: center;
      cursor: pointer;
      &:hover{
        background:${(props: { inputTheme: string }) => props.inputTheme === 'dark' ? '#F2F6FC' : '#303133'}};
      }
    }
  }
  .icon{
    position: absolute;
    float:left;
    left:22%;
  }
  .shift{
    width: 90%;
    height: 20%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
}
`;

const Main = styled.div`
  width:100%;
  height:100vh;
  min-width: 500px;
  min-height: 500px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: #F2F6FC;
  display: inline-block;
  padding-left:50px;
  border-left:${(props: { inputTheme: string }) => props.inputTheme === 'dark' ? '0.1px solid #001529' : ''};
`;
export { Admin, Main };