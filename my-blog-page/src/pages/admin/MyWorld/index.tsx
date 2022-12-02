import { useEffect, useRef, useReducer } from "react";
import { SmileOutlined } from "@ant-design/icons";
import WorldReducer from "../../../reducers/WorldReducer";
import { WORLD_ACTION_TYPE } from "../../../typing/contants";
import { World, Header } from "./style";
const init = {
    title: "在阳光明媚的下午出发",
    sakura: {
        title: "Sakura",
        moodlog: "遇见樱花",
        poem: "useHook's Blog.Keep track of your life",
        time: "",
    },
    article: {
        num: 123,
        tips: "9分钟前发布了新的心情,继续加油哦!"
    },
    comments: {
        num: 123,
        tips: "过去的时间里，收获了更多的心声"
    },
    animations: ['hhh']
};
const MyWorld = () => {
    const rightRef = useRef<HTMLDivElement>(null);
    const [world, dispatch] = useReducer(WorldReducer, init);
    useEffect(() => {
        const style = rightRef.current?.style;
        dispatch({ type: WORLD_ACTION_TYPE.TIME });
        style && (() => {
            style.filter = "blur(0px)";
        })();
    }, []);
    useEffect(() => {
        let timer = setInterval(() => {
            dispatch({ type: 'time' });
        }, 1000 * 60);
        return function () {
            clearInterval(timer);
        }
    }, []);
    return <World>
        <div className="body">
            <Header>
                <SmileOutlined />
                <p> {world.title}</p>
            </Header>
            <div className="content">
                <div className="introduce">
                    <header>INTRODUCE</header>
                </div>
                <div className="article">
                    <header>ARTICLE</header>
                    <article>
                        <div>
                            <i>{world.article.num}</i>
                            <small>篇</small>
                        </div>
                        <p>{world.article.tips}</p>
                    </article>
                </div>
                <div className="comment">
                    <header>COMMENT</header>
                    <article>
                        <div>
                            <i>{world.comments.num}</i>
                            <small>条</small>
                        </div>
                        <p>{world.comments.tips}</p>
                    </article>
                </div>
                <div className="animation">
                    <header>ANIMATION</header>
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
        <div className="decoration">
            <div className="right" ref={rightRef}>
                <div className="card">
                    <h1 className="title">{world.sakura.title}</h1>
                    <p className="mood">
                        {world.sakura.moodlog.split("").join(" ")}
                    </p>
                    <p className="poem">
                        {world.sakura.poem}
                    </p>
                </div>
                <footer>
                    <p> {`北 京 时 间`}</p>
                    <p>{world.sakura.time}</p>
                </footer>
            </div>
            {/* 遮罩层 */}
            <div className="mask" ></div>
        </div>

    </World>
}
export default MyWorld;