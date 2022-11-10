import { useState } from "react"
import { Avatar, Input, Button } from "antd"
import { CommentMask, ScrollStyle } from "../../../assets/css"
import { CloseCircleOutlined, WhatsAppOutlined, UserOutlined } from "@ant-design/icons"
const { TextArea } = Input;
const Modal = (props: { mask: boolean, close: () => void }) => {
    const commentTips = "文明用语，弘扬中华文明传统美德。";
    const { mask,close } = props;
    return <CommentMask show={mask} >
        <div>
            <div className="comment">
                <p>
                    <span>回复：</span>
                    <span>sbb</span>
                </p>
                <Avatar size={60} icon={<UserOutlined />} className="avatar" src={require("../../../assets/imgs/cherry.jpg")} />
                <CloseCircleOutlined className="close" onClick={close}/>
                <div className="content">
                    <ScrollStyle>
                        <TextArea
                            style={{ height: "100%", background: "#F2F3F5", maxHeight: '175px', padding: '10px' }}
                            bordered={false}
                            placeholder="请输入内容"
                        />
                    </ScrollStyle>
                </div>
                <footer>
                    <Button type="primary" ghost shape="round" style={{ padding: '5px' }}>提交评论</Button>
                    <p className="comment-footer">
                        <WhatsAppOutlined />
                        <small>{commentTips}</small>
                    </p>
                </footer>
            </div>
        </div>
    </CommentMask>
}
export default Modal;