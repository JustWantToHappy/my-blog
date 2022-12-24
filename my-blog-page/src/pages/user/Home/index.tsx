import { StyleIndex } from "./style";
import { StyleHome } from "./style";
import { useContext, useRef } from "react";
import { Context } from "../../../App";
import { Divider,Pagination } from "antd";
import nav from "../../../assets/icons/nav.svg";
import close from "../../../assets/icons/close.svg";
import Page from "../Page";
import { Outlet,useLocation,useNavigate } from "react-router-dom";
const Home = () => {
    const contextObj = useContext(Context);
    const container = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const showNavHeader = (event: React.MouseEvent) => {
        event.preventDefault();
        contextObj.closeOrOpen();
    }
    const changePageNum = function (current: number) {
        // 做一些处理,如果请求还没有响应，则进度条加载，如果请求已经响应，跳转路由
        navigate(`/page/${current}`);
    }
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
            <div className={"home-admin"}>
                <div className="home-admin-avator">
                    <div></div>
                    <div>
                        <img src="https://q1.qlogo.cn/g?b=qq&nk=2719131811&s=100" alt="avatar" />
                        <br />
                        <span>useHook</span>
                        <Divider />
                    </div>
                    <div>
                        <span>文章</span>
                        <span>评论</span>
                        <span>标签</span>
                    </div>
                </div>
                <div className="home-admin-new-reply">
                    <p>最新回复</p>
                </div>
                <div className="home-admin-watch">
                    <p>随便看看</p>
                </div>
            </div>
            <div className="home-article" >
                <Outlet />
                {!pathname.includes("page")&&<Page/>}
                <Pagination defaultCurrent={1} total={50} onChange={changePageNum} />
            </div>
        </StyleHome>
    </>
}
export default Home;
