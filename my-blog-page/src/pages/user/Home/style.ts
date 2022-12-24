import styled from "styled-components";
const sidebarBoxBefore = `
&::before{
    display:inline-block;
    z-index:1;
    content:"";
    position:relative;
    border-radius: 50%;
    background:#f92900;
    width:12px;
    height: 12px;
    box-shadow: 20px 0 #fbc606,40px 0 #35cd4b;
    float:right;
    right:55px;
    top:35px;
    border-color:transparent;
    margin-top:-15px;
}
`;
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
// 注意，要设置成粘性元素的父元素高度不能够低于子元素，且父元素不能够有overflow:auto
export const StyleHome = styled("div")`
margin:2rem 0;
height:80rem;
position: relative;
.home-admin{
    width:30%;
    display: inline-block;
    position: sticky;
    top:2rem;
    left:0;
    @media screen and (max-width:920px){
        display: none;
    }
    &>div{
        width:75%;
        float:right;
        position: relative;
        border-radius: 10px;
        margin-bottom:2rem;
        background-color: var(--main-bg);
        border:1px solid var(--main-border-color);
    }

}
.home-admin-avator{
    height:15rem;
    overflow: hidden;
    ${sidebarBoxBefore};
    &>div:nth-child(1){
        background-image: url(http://www.dmoe.cc/random.php);
        background-position-x:center;
        background-position-y:center;
        min-height:120px;
        width:100%;
        background-size:cover;
        position:relative;
        overflow:hidden;
        border-radius: 10px 10px 0 0;
        &::after{
            content:"";
            width: 100%;
            height:40%;
            position:absolute;
            bottom:0;
            left:0;
            background:linear-gradient(to top,white,transparent);
        }
    }
    &>div:nth-child(2){
        text-align:center;
        img{
            width:25%;
            border-radius: 50%;
            transform: translateY(-50%);
        }
        span{
            font-weight: bold;
        }
    }
    &>div:nth-child(3){
        width:100%;
        transform: translateY(-50%);
        display:flex;
        justify-content: space-around;
    }
}
.home-admin-new-reply{
    height:16rem;
    ${sidebarBoxBefore};
    &>p{
        left:55px;
        top:15px;
        position:absolute;
        width:50%;
        letter-spacing: 0.5rem;
    }
}
.home-admin-watch{
    height:16rem;
    ${sidebarBoxBefore};
    &>p{
        left:55px;
        top:15px;
        position:absolute;
        width:50%;
        letter-spacing: 0.5rem;
    }
}
.home-article{
    width: 60%;
    height: 80rem;
    margin-left:5%;
    display: inline-block;
    text-align: center;
    position: absolute ;
    @media screen and (max-width:920px){
        width:100%;
        margin-left:0px;
    }
    @media (min-width:558px) and (max-width:919px){
        width:80%;
        margin-left:10%;
    }
    &>ul{
        list-style: none;
        margin:0;
        padding:0;
    }
.content{
    height:11rem;
    display:flex;
    border-radius: 1rem;
    border:1px solid var(--main-border-color);
    margin-bottom:2rem;
    transition: all .4s linear;
    position:relative;
    cursor: pointer;
    &>img{
        height:100%;
        position: absolute;
    }
    &:hover{
        transform: scale(1.05) rotate(1deg);
    }
    }
}

`