import { BackTop } from "antd"
import React, { useState, useContext } from "react";
import { Context } from "../../App"
import top from "../../assets/icons/top.svg";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
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
const ReturnTop = () => {
    const [issun, setSun] = useState(true);
    const contextObj = useContext(Context);
    const changeTheme = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSun(!issun);
        contextObj.changeTheme();
    }
    return <BackTop>
        <div style={style}>
            <span onClick={changeTheme}>
                {issun && <img src={sun} alt="" style={{ width: "2rem" }} />}
                {!issun && <img src={moon} alt="" style={{ width: "1.5rem" }} />}
            </span>
            <img src={top} alt="top" style={{ width: "1rem" }} />
            <span>Top</span>
        </div>
    </BackTop>
}
export default ReturnTop;