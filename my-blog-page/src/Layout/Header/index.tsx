import { StyleHeader } from "./style";
import { useContext } from "react"
import { Context } from "../../App"
const Header = () => {
    const isShow = useContext(Context).showMenu;
    return <StyleHeader show={isShow}>
        <ul className='nav'>
            <li>Article</li>
            <li>Classify</li>
            <li>Github</li>
            <li>About</li>
        </ul>
    </StyleHeader>
}
export default Header;