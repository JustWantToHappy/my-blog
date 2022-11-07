import { BackTop } from "antd"
import top from "../../assets/icons/top.svg";
const ReturnTop = () => {
    const style: React.CSSProperties = {
        height: 50,
        width: 40,
        lineHeight: '30px',
        borderRadius: 4,
        color: '#73aada',
        textAlign: 'center',
        fontSize: '1.5em',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    };
    return <BackTop>
        <div style={style}>
            <img src={top} alt="top" style={{ width: "20px" }} />
            <span>Top</span>
        </div>
    </BackTop>
}
export default ReturnTop;