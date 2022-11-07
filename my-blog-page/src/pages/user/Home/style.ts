import styled from "styled-components";
export const StyleIndex = styled("div")`
position: absolute;
width:100%;
height:100vh;
&>img{    
    height: 100vh;
    width:100%;
    object-fit: cover;
}
.mask{
    position: absolute;
    z-index:10;
    left:0;
    bottom:0;
    width:60vw;
    border-bottom: 80vw solid #8CC7B5;                  
    border-top: 50vw solid transparent;  
    border-right: 50vw solid transparent;
    opacity: 0.5;
}
.introduce{
  position:absolute;
  width:15vw;
  height:20vh;
  z-index:${(props: { show: boolean }) => props.show ? '10000' : '11'};
  top:15vh;
  display:flex;
  align-items:center;
  justify-content: flex-end;
  &>span{
  font-size:2rem;
  font-weight: 600;
  color:${(props: { show: boolean }) => props.show ? 'black' : 'var(--main-bg)'};
  }
}
.time{
    position: absolute;
    width:20vw;
    height:10vh;
    left:16vw;
    top:34vh;
    z-index:11;
    color: var(--main-bg);
}
.description{
    position:absolute;
    z-index:11;
    width:32vw;
    height:30vh;
    left:15vw;
    top:55vh;
    color:var(--main-bg);
    p{
        width:100%;
        text-align:center;
    }
}
i{
    position: absolute;
    z-index:10;
    right:50px;
    top:5vh;
    &:hover{
    cursor: pointer;
   }
   img{
        width:30px;
        height:30px;
    }   
}
.nav{
    position: absolute;
    z-index:10000;
    top:13vh;
    right:50px;
    width:50px;
    height:50px;
    display:flex;
    flex-direction: column;
}
`;
export const StyleHome = styled("div")`
position: relative;
transform: translate3d(0,100vh,0);
background-color: ${(props: { issun: boolean }) => props.issun ? '#fff' : 'black'};
ul{
    width:70%;
    margin:0 auto;
    list-style: none;
}
.content{
    height:30vh;
    width:100%;
    padding:4vh 0;
    display:flex;
    img{
        height: 100%;
    }
    .title{
        height: 100%;
        width:59%;
        display:flex;
        background-color: red;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        transform: translate3d(3vw,0,0);
    }
    border-bottom:1px solid #d4d4d4;
}
`