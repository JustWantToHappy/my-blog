
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Page = () => {
    const navigate = useNavigate();
    const watchArticle = (id: number) => {
        navigate(`/article/${id}`);
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
            {
                id: 5,
                name: "sb",
                cover: "",
                content: "",
                type: 1
            },
            {
                id: 6,
                name: "sb",
                cover: "",
                content: "",
                type: 1
            },
        ]
        setData(data);
    }, []);
    return <>
        <ul>
            {data.map((obj, index) => {
                return <li className="content" key={index} onClick={() => watchArticle(obj.id)}>
                    <img src="https://tva1.sinaimg.cn/large/0072Vf1pgy1foxk7dzbgsj31kw0w0nn7.jpg" alt="" style={index % 2 === 1 ? { right: "0", borderRadius: "0 1rem 1rem 0" } : { borderRadius: "1rem 0 0 1rem" }} />
                </li>
            })}
        </ul>
    </>
}

export default Page;