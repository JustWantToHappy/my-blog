// 路由配置文件,路由表
import UserHome from "../pages/user/Home"
import AdminHome from "../pages/admin/Home"
import AdminLogin from "../pages/admin/Login"
import AuthRoute from "./AuthRoute"
import MyWorld from "../pages/admin/MyWorld"
import NewArticle from "../pages/admin/NewArticle"
import Comments from "../pages/admin/Comments"
import Settings from "../pages/admin/Settings"
interface Router {
    name?: string;
    path: string;
    children?: Array<Router>;
    element: React.ReactNode;
    permissions?: string[];//判断哪些角色可以访问到该页面,一共user和admin两种角色
}
const routes: Array<Router> = [
    {
        path: "/",
        name: "home",
        element: <UserHome></UserHome>,
        permissions: []
    },
    {
        path: "/admin",
        name: "admin",
        element:( <AuthRoute></AuthRoute>),
        permissions: ["admin"],
        children: [
            {
                path: "login",
                name: "adminLogin",
                element: <AdminLogin />
            },
            {
                path: "index",
                name: "index",
                element: <AdminHome />,
                children: [
                    {
                        path: "world",
                        name: "myworld",
                        element: <MyWorld />
                    },
                    {
                        path: "article",
                        name: "newarticle",
                        element: <NewArticle />
                    },
                    {
                        path: "comments",
                        name: "comments",
                        element: <Comments />
                    },
                    {
                        path: "settings",
                        name: "settings",
                        element: <Settings />
                    }
                ]
            },
        ]
    },
];
export default routes;