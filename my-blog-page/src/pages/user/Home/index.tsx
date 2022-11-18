import { StyleIndex } from "./style";
import { StyleHome } from "./style";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../../../App";
import nav from "../../../assets/icons/nav.svg";
import sun from "../../../assets/icons/sun.svg";
import moon from "../../../assets/icons/moon.svg";
import close from "../../../assets/icons/close.svg";
const Home = () => {
    const contextObj = useContext(Context);
    const container = useRef<HTMLDivElement>(null);
    const showNavHeader = (event: React.MouseEvent) => {
        event.preventDefault();
        contextObj.closeOrOpen();
    }
    let issun = localStorage.getItem("issun") === 'true';
    const [isSun, setIsSun] = useState(issun);
    const [data, setData] = useState<Array<Home.article>>([]);
    const changeWeather = () => {
        window.scrollTo({ top: container.current?.clientHeight, behavior: "smooth" })
        setIsSun(!isSun);
        localStorage.setItem("issun", String(!isSun));
    }
    useEffect(() => {
        let obj = { id: Math.round(Math.random() * 10000), name: "sh", type: 0, content: "zzz", cover: "https://cdn.boblog.com/Fk8u5bDOXMDjUSXDvj9iEkiNoZ5O" };
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push(obj);
        }
        setData(data);
    }, []);
    return <>
        {/* 首屏图片 */}
        <StyleIndex show={contextObj.showMenu} ref={container}>
            <img src={require("../../../assets/imgs/home.jpg")} alt="justwanttohappy's blog" />
            <i onClick={changeWeather}>
                <img src={isSun ? sun : moon} alt="sun" title="白天模式" />
            </i>
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
        <StyleHome issun={isSun}>
            <header>
                <h2>最新文章</h2>
            </header>
            <ul>
                {data.map(obj => {
                    return <li className="content" key={obj.id}>
                        <a href="./" >
                            <img src={obj.cover} alt={obj.name} />
                        </a>
                        <div className="title">
                            <span>{obj.name}</span>
                            <span>{obj.type}</span>
                            <span>{obj.introduce}</span>
                        </div>
                    </li>
                })}
            </ul>
        </StyleHome>
    </>
}
export default Home;
