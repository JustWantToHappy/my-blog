import { isLogined } from "../utils/auth"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
// 路由鉴权
//React.FC<{ children: React.ReactNode }>
const AuthRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogined()) {
            navigate("/admin/index");
        } else {
            navigate("/admin/login");
        }
    }, []);
    return <>
        <Outlet />
    </>
}
export default AuthRoute;
