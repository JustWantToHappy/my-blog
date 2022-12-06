import { StyleIndex } from "./style";
import { StyleHome } from "./style";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../../../App";
import nav from "../../../assets/icons/nav.svg";
import close from "../../../assets/icons/close.svg";
const Home = () => {
    const contextObj = useContext(Context);
    const container = useRef<HTMLDivElement>(null);
    const showNavHeader = (event: React.MouseEvent) => {
        event.preventDefault();
        contextObj.closeOrOpen();
    }
    const [data, setData] = useState<Array<Home.article>>([]);

    useEffect(() => {
        let data = [
            {
                id: 1,
                name: "sb",
                cover: "",
                content: "",
                type: 1
            },
            {
                id: 2,
                name: "sb",
                cover: "",
                content: "",
                type: 1
            },
            {
                id: 3,
                name: "sb",
                cover: "",
                content: "",
                type: 1
            },
            {
                id: 4,
                name: "sb",
                cover: "",
                content: "",
                type: 1
            },
        ]
        setData(data);
    }, []);
    return <>
        {/* 首屏图片 */}
        <StyleIndex show={contextObj.showMenu} ref={container} >
            <img src={require("../../../assets/imgs/home.jpg")} alt="justwanttohappy's blog" />
            <div className="nav">
                <a href="../" onClick={showNavHeader} >
                    <img src={contextObj.showMenu ? close : nav} alt="nav" style={{ width: "30px", height: "30px", background: 'hsla(0,0%,100%,0.2)' }} />
                </a>
            </div>
            <div className="mask" >
            </div>
            <div className="introduce">
                <span >useHook</span>
            </div>
            <div className="time">
                <span>十二月&nbsp;15,2020</span>
            </div>
            <div className="description">
                <p>
                    一壶浊酒喜相逢
                </p>
                <p>
                    古今多少事
                </p>
                <p>
                    皆付笑谈中
                </p>
                <p>
                    花&nbsp;凋&nbsp;即&nbsp;逝&nbsp;凭&nbsp;凤&nbsp;舞——世&nbsp;尘&nbsp;常&nbsp;理&nbsp;乃&nbsp;天&nbsp;缘
                </p>
            </div>
        </StyleIndex>
        {/* 首屏内容展示 */}
        <StyleHome >
            <div className={["home-admin"].join(" ")}>
                <div className="home-admin-avator">
                    1
                </div>
                <div className="home-admin-new-reply">
                    2
                </div>
                <div className="home-admin-watch">
                    3
                </div>
            </div>
            <div className="home-article" >
                <header>最新文章</header>
                <ul>
                    {data.map((obj, index) => {
                        return <li className="content" key={index}>
                            <div className="title">
                                <span>{obj.name}</span>
                                <span>{obj.type}</span>
                                <span>{obj.introduce}</span>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </StyleHome>
    </>
}
export default Home;
