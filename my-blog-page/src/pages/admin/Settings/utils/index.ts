import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import { fileToDataURL, dataURLToImage } from "../../../../utils/index"
import { message } from "antd"
//上传封面之前校验图片
export const beforeUpload = (file: UploadFile) => {
    if (!(file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg')) {
        message.warning("上传的文件格式不正确");
        return false;
    }
    let { size } = file;
    const isLt5M = size && size / 1024 / 1024 < 5;
    if (!isLt5M) {
        message.warning("图片大小必须小于5M");
    }
    return true;
}
//
export const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
        src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as RcFile);
            reader.onload = () => resolve(reader.result as string);
        });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
};
//上传图片
export const uploadImage = async (e: any) => {
    const upload = async (width: number, height: number) => {
        //图片尺寸
        let imageSize = Math.min(width, height);
        var formData = new FormData();
        formData.append("imgFile", e.file);
        try {
            // let res = await updateCoverImage(id as string, localStorage.getItem("cookies") as string, formData, imageSize);
            let res = { code: 1 };
            if (res.code === 200) {
                e.onSuccess("上传成功");
            } else {
                e.onError("上传失败");
            }
        } catch (e) {
            console.log(e);
        }
    }
    fileToDataURL(e.file).then(dataURL => {
        return Promise.resolve(dataURLToImage(dataURL));
    }).then(image => {
        //此时拿到的image对象是经过裁剪得到的新Image,不是原文件
        upload(image.width, image.height);
    }).catch(e => {
        console.log(e);
    })
}