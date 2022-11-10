import { useState } from "react"
// 富文本编辑器上传图片的基本配置
import { IEditorConfig, IDomEditor, IToolbarConfig } from "@wangeditor/editor"
import { successMsg, failMsg } from "../../../utils"
// 工具栏配置
const toolbarConfig: Partial<IToolbarConfig> = { excludeKeys: ['group-video'] };

const useEditor = () => {
    const [loading, setLoad] = useState(false);
    //编辑器配置
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: "请输入文章内容",
        MENU_CONF: {
            uploadImage: {
                server: "https://www.fastmock.site/mock/321c19c8899dc6f3a3792b44f67a6fb3/api/uploadImg",//上传图片的地址
                base64LimitSize: 5 * 1024,//5kb
                maxFileSize: 1 * 1024 * 1024,
                maxNumberOfFiles: 10,
                allowedFileTypes: ['image/*'],
                withCredentials: true,
                timeout: 5 * 1000,//5秒
                //上传进度的回调
                onBeforeUpload(file: File) {
                    setLoad(true);
                    return file;
                },
                onProgress(progress: number) {
                    if (progress === 100) {
                        setLoad(false);
                    }
                    console.log("progress", progress);//0~100
                },
                //单个文件上传成功后
                onSuccess(file: File, res: any) {
                    console.log(`${file.name} 上传成功`, res)
                    successMsg("图片上传成功!");
                },
                //单个文件上传失败
                onFailed(file: File, res: any) {
                    console.log(`${file.name} 上传失败`, res)
                    setLoad(false);
                    failMsg("图片上传失败");
                },
                //上传失败或者触发timeout超时
                onError(file: File, err: any, res: any) {
                    console.log(`${file.name} 上传出错`, err, res)
                    setLoad(false);
                    failMsg("图片上传失败");
                }
            },
        },


        //编辑器创建完毕后的回调
        onCreated(editor: IDomEditor) {
            // 可监听 `modalOrPanelShow` 和 `modalOrPanelHide` 自定义事件来设置样式、蒙层,此处不设置遮罩层
            editor.on('modalOrPanelShow', modalOrPanel => {
                if (modalOrPanel.type !== 'modal') return
                const { $elem } = modalOrPanel // modal element
                // 设置 modal 样式（定位、z-index）
                const width = $elem.width()
                const height = $elem.height()
                $elem.css({
                    left: '50%',
                    top: '50%',
                    marginLeft: `-${width / 2}px`,
                    marginTop: `-${height / 2}px`,
                    zIndex: 1000
                })
            })
        },

        //编辑器内容、选区变化时的回调函数
        onChanged(editor: IDomEditor) {
            console.log('content', editor.children)
        }
    };
    return { editorConfig, loading };
}

//菜单配置
// const 
export { toolbarConfig, useEditor }