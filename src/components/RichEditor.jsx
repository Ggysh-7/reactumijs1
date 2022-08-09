import React,{useEffect,useRef} from 'react'
import E from 'wangeditor'
import Cloud from 'leancloud-storage'

export default function RichEditor(props) {
    let editorRef = useRef()
    const getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
    };
    console.log('富文本',props);
    useEffect(()=>{
        let editor = new E(editorRef.current)
        editor.config.zIndex = 10
        editor.config.onblur = function (newHtml) {
          props.onChange(newHtml)
      }
        editor.config.customUploadImg = function (resultFiles, insertImgFn) {
        // resultFiles 是 input 中选中的文件列表
        // insertImgFn 是获取图片 url 后，插入到编辑器的方法
          console.log(resultFiles);
          getBase64(resultFiles[0],(base64)=>{
            const data = { base64: 'TGVhbkNsb3Vk' };
            // resume.txt 是文件名
            // insertImgFn(base64)
            const file = new Cloud.File('drinkimg.png', {base64});//将本地资源转化为一个可以向leancloud平台提交的线上资源
            file.save().then(res=>{
              console.log('1',res);
              let {url} = res.attributes
              insertImgFn(url)
              // onChange(res.attributes.url);
              // setLoading(false);
              // setImageUrl(res.attributes.url);
            })
          })
        // 上传图片，返回结果，将图片插入到编辑器中
        // insertImgFn(imgUrl)
      }
        editor.create()
    },[])
    return (
    <div ref={editorRef}>RichEditor</div>
  )
}
