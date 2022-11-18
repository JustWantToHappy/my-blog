import { useState, useEffect, useRef } from "react"
import { SmileOutlined } from "@ant-design/icons"
import dayjs from "dayjs";
import { World, Header } from "./style";
const MyWorld = () => {
    const rightRef = useRef<HTMLDivElement>(null);
    let title = "在阳光明媚的下午出发";
    const sakura = {
        title: "Sakura",
        moodlog: "遇见樱花",
        poem: "useHook's Blog.Keep track of your life",

    }
    const article = {
        num: 123,
        tips: "9分钟前发布了新的心情,继续加油哦!"
    }
    const [time, setTime] = useState<string>("");
    const comments = {
        num: 123,
        tips: "过去的时间里，收获了更多的心声"
    }
    const animations = [
        'hhh'
    ]
    const getCurrentTime = () => {
        var now = dayjs(new Date()).format("YYYY年MM月DD日 hh时mm分 A")
        setTime(now);
    }
    useEffect(() => {
        getCurrentTime();
        const style = rightRef.current?.style;
        style && (() => {
            style.filter = "blur(0px)";
        })();
    }, []);
    useEffect(() => {
        let timer = setInterval(() => {
            getCurrentTime();
        }, 1000 * 60);
        return function () {
            clearInterval(timer);
        }
    }, []);
    return <World>
        <div className="body">
            <Header>
                <SmileOutlined />
                <p> {title}</p>
            </Header>
            <div className="content">
                <div className="introduce">
                    <header>INTRODUCE</header>
                </div>
                <div className="article">
                    <header>ARTICLE</header>
                    <article>
                        <div>
                            <i>{article.num}</i>
                            <small>篇</small>
                        </div>
                        <p>{article.tips}</p>
                    </article>
                </div>
                <div className="comment">
                    <header>COMMENT</header>
                    <article>
                        <div>
                            <i>{comments.num}</i>
                            <small>条</small>
                        </div>
                        <p>{comments.tips}</p>
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
                    <h1 className="title">{sakura.title}</h1>
                    <p className="mood">
                        {sakura.moodlog.split("").join(" ")}
                    </p>
                    <p className="poem">
                        {sakura.poem}
                    </p>
                </div>
                <footer>
                    <p> {`北 京 时 间`}</p>
                    <p>{time}</p>
                </footer>
            </div>
        </div>

    </World>
}
export default MyWorld;