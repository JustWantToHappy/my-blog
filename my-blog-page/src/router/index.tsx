// 路由配置文件,路由表
import Home from "../pages/Home"
// import {Navigate } from "react-router-dom"
interface Router {
    name: string;
    path: string;
    children?: Array<Router>;
    element: React.ReactNode;
    permissions: string[];//由于判断哪些角色可以访问到该页面
}
const routes:Array<Router> = [
    {
        path: "/",
        name: "home",
        element: <Home></Home>,
        permissions: []
    },
];
export default routes;