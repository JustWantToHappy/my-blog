
/**
 * 
 */
interface Img{
    src: string;
    
}
const PreviewImg = (props:Img) => {
    const previewPicture = (inputFile: any | undefined) => {
        inputFile?.addEventListener("change", (event: React.ChangeEvent<HTMLInputElement>) => {
            const { files } = event.target;
            let src = files !== null && files[0] ? URL.createObjectURL(files[0]) : '';
            console.log(src);
        })
    }
}
export default PreviewImg;