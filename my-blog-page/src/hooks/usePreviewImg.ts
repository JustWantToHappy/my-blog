import { useState } from "react";
/**
 * @description 图片预览hook
 * @param props 文件上传按钮以及图片初始化地址
 * @returns 图片的src地址
 */
const usePreviewImg = (props: { inputFile: any | undefined, initSrc: string }) => {
    const { inputFile, initSrc } = props;
    const [src, setSrc] = useState(initSrc);
    inputFile?.addEventListener("change", (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        let cover = files && files[0] ? URL.createObjectURL(files[0]) : "";
        setSrc(cover);
    })
    return src;
}
export default usePreviewImg;