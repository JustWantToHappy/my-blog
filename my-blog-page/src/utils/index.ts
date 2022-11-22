import { message } from "antd"
import type { Tip } from "../typing/types"
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
export const debouce = (fn: Function, delay: number) => {
    var timer: ReturnType<typeof setTimeout>;
    return function () {
        let args = arguments;
        let _this = this;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(_this, args);
        }, delay);
    }
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
//成功失败的tips
export const successMsg = (tips: Tip) => {
    const { content, duration } = tips;
    message.success({
        content,
        duration
    });
}
//失败时候的tips
export const failMsg = (tips: Tip) => {
    const { content, duration } = tips;
    message.error({
        content,
        duration
    })
}
//温馨提示tips
export const infoMsg = (tips: Tip) => {
    const { content, duration } = tips;
    message.info({
        content,
        duration
    });
}