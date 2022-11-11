import { message } from "antd"
// 节流函数
export const throttle = (fn: Function, delay: number) => {
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
//防抖函数
export const debouce = () => {

}
//将File文件转为dataURL字符串
export const fileToDataURL = (file: File): Promise<string> => {
    var promise = new Promise<string>((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            return resolve(e.target?.result as string);
        }
    });
    return promise;
}
//将dataURL字符串转为Image对象
export const dataURLToImage = (dataURL: string | null | undefined): Promise<HTMLImageElement> => {
    var img = new Image();
    var promise = new Promise<HTMLImageElement>((resolve) => {
        img.src = dataURL as string;
        img.onload = function () {
            return resolve(img);
        }
    }).catch(err => {
        return Promise.reject(err);
    })
    return promise;
}

//成功失败的tip
export const successMsg = (msg: string) => {
    message.success(msg);
}
export const failMsg = (msg: string) => {
    message.error(msg);
}