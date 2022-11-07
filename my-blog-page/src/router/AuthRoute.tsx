import { isLogined } from "../utils/auth"
import { Navigate } from "react-router-dom"
// 路由鉴权
const AuthRoute: React.FC<{ children: React.ReactNode }> = (props) => {
    console.log(props.children)
    if (isLogined()) {
        return <>
            {props.children}
        </>
    } else {
        return <Navigate replace={true} to="/admin/login" />;
    }
}
export default AuthRoute;
