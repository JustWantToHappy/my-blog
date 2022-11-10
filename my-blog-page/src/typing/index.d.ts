// wang富文本编辑器
declare module "@wangeditor/editor" {
    export interface IEditorConfig {
        placeholder: string;
        MENU_CONF: {
            uploadImage: {
                server: string;
                base64LimitSize: number;
                maxFileSize: number;
                maxNumberOfFiles: number;
                allowedFileTypes: string[];
                withCredentials?: boolean;
                timeout: number;
                onBeforeUpload?(file: File, callback: Function): File;
                onProgress?(progress: number);
                onSuccess(file: File, res: any);
                onFailed(file: File, res: any),
                onError(file: File, err: any, res: any),
            }
        },
        onCreated(editor: IDomEditor);
        onChanged(editor: IDomEditor);
    }
    export interface IDomEditor {
        getHtml();
        getAllMenuKeys();
        destroy();
        fullScreen();
        on(event: string, callback: (obj: any) => void)
        hidePanelOrModal(),
        isFullScreen: boolean,
        unFullScreen(),
        children: Array<any>,

    }
    export interface IToolbarConfig {
        excludeKeys: Array<string>,
        modalAppendToBody: boolean,
    }
    const DomEditor: any;
    export { DomEditor };
}
declare module Home {
    type article = {
        id: number;
        name: string;
        cover: string;
        content: string;
        type: number;
        introduce?: string;
    }
}
