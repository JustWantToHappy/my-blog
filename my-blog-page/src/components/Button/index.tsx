/**
 * @description {自定义按钮组件}
 */
import styled from "styled-components";
import { useRef, useEffect, useState } from "react"
import { debouce } from "../../utils"
interface Btn {
    shape?: string;
    color?: string;
    size?: number;//按钮的尺寸,按钮的宽高按照一定的比例适配
    fontSize?: number;//按钮内字体大小
    children?: string | undefined;
    hoverBg?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
//不对外部暴露的属性值
interface BtnAdd extends Btn {
    roundHeight?: number|undefined;
}
const Button = styled("button")`
    background:#fff;
    color:${(props: Btn) => props?.color ?? 'black'};
    border-radius: ${(props: Btn) => props?.shape === 'round' ? '50%' : '0%'};
    height:${(props: BtnAdd) => (props.roundHeight?? '')+'px'};
    font-size:${(props: Btn) => (props.fontSize ?? '1rem')+'px'};
    border:1px solid #d4d4d4;
    padding:0.2rem;
    cursor: pointer;
    &:hover{
        border-color:${(props: Btn) => props.hoverBg ?? 'var(--admin-button-color)'};
    }
    &:active{
        box-shadow: 0px 0px 5px ${(props: Btn) => props.hoverBg ?? 'var(--admin-button-color)'};
    }

`;
const MyButton = (props: Btn) => {
    const MyBtn = useRef<HTMLButtonElement>(null);
    const [height, setHeight] = useState<undefined | number>(0);
    useEffect(() => {
        const rects = MyBtn.current?.getBoundingClientRect();
        setHeight(rects?.width);
    }, []);
    return <Button
        {...props}
        ref={MyBtn}
        roundHeight={props.shape==='round'?height:undefined}
        onClick={debouce(props.onClick!, 300)}
    >
        {props?.children}
    </Button>

}

export default MyButton;