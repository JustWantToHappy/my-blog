import { useNavigate} from "react-router-dom"
import "./index.css"
const Login = () => {
    const navigate = useNavigate();
    const adminLogin = (event: React.UIEvent<HTMLInputElement>) => {
        navigate("/admin")
    }
    
    return <div className="wrapper">
        <div className="container">
            <div className="col-left">
                <div className="login-text">
                    <h2>Welcome Back</h2>
                </div>
            </div>
            <div className="col-right">
                <div className="login-form">
                    <h2>Login</h2>
                    <form>
                        <p>
                            <label>Your account<span>*</span></label>
                            <input type="text" placeholder="Your account" required />
                        </p>
                        <p>
                            <label>Password<span>*</span></label>
                            <input type="password" placeholder="Password" required />
                        </p>
                        <p>
                            <input type="submit" value="Sing In" onClick={adminLogin} />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default Login;