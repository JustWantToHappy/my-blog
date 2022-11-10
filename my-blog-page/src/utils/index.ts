import { message } from "antd"
const throttle = (fn: Function, delay: number) => {
    var timer: ReturnType<typeof setTimeout> | null;
    return function () {
        let args = arguments;
        let _this = this;
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(_this, args);
            timer = null;
        }, delay);
    }
}
const debouce = () => {

}
const successMsg = (msg: string) => {
    message.success(msg);
}
const failMsg = (msg: string) => {
    message.error(msg);
}
export { throttle, debouce, successMsg, failMsg };