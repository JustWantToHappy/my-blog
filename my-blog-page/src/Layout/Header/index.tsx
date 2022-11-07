import { StyleHeader } from "./style";
import { useContext } from "react"
import { Context } from "../../App"
const Header = () => {
    const isShow = useContext(Context).showMenu;
    return <StyleHeader show={isShow}>
        <ul className='nav'>
            <li>首页</li>
            <li>分类</li>
            <li>Github</li>
        </ul>
    </StyleHeader>
}
export default Header;