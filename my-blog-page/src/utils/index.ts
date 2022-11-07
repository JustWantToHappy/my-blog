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
export { throttle, debouce };