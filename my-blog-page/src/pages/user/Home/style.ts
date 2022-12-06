import styled from "styled-components";
export const StyleIndex = styled("div")`
width:100%;
position: relative;
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
    width:50vw;
    height:100vh;
    border-left:0px solid transparent;
    border-right:20vw solid transparent;
    border-bottom:100vh solid skyblue;
    border-top:100vh solid #fff;
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
height: 290vh;
.home-admin{
    width:30%;
    height:100vh;
    background:green;
    display: inline-block;
    position: sticky;
    top:0px;
    left:0;
    @media screen and (max-width:920px){
        display: none;
    }
}
.home-article{
    background:skyblue;
    width: 70%;
    height: 290vh;
    display: inline-block;
    text-align: center;
    float:right;
    @media screen and (max-width:920px){
        width:100%;
    }
.content{
    height:30vh;
    width:100%;
    padding:4vh 0;
    display:flex;
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
    }
}

`