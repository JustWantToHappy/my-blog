// 路由配置文件,路由表
import UserHome from "../pages/user/Home"
import AdminHome from "../pages/admin/Home"
import AdminLogin from "../pages/admin/Login"
import AuthRoute from "./AuthRoute"
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
        element: (
            <AuthRoute>
                <AdminHome />
            </AuthRoute>
        ),
        permissions: ["admin"],
    },
    {
        path: "/admin/login",
        name: "adminLogin",
        element: <AdminLogin />,
    }
];
export default routes;