import styled from "styled-components";
const Main = styled("div")`
    width:95%;
    height: 90%;
    position: relative;
    .table{
        height: 80%;
        overflow: auto;
        border-radius: 10px;
        transform: translate3d(0,10%,0);
        .name{
            width:15%;
        }
        .content{
            width:40%;
        }
        .date{
            width:30%;
        }
        .options{
            width:20%;
            span{
                cursor: pointer;
            }
        }
    }
    .pagination{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom:2vh;
    }
`;
export default Main;