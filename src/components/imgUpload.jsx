import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import Cloud from 'leancloud-storage'

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }


  return isJpgOrPng && isLt2M;
};

const ImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const customUpload = (info)=>{
    console.log('0',info);
    setLoading(true);
    getBase64(info.file,(base64)=>{
      const data = { base64: 'TGVhbkNsb3Vk' };
      // resume.txt 是文件名
      const file = new Cloud.File('drinkimg.png', {base64});//将本地资源转化为一个可以向leancloud平台提交的线上资源
      file.save().then(res=>{
        console.log('1',res);
        // function onChange(props){
        //   return({
        //     onChange
        //   })
        // }
        // onChange(res.attributes.url);
        setLoading(false);
        setImageUrl(res.attributes.url);
      })

    })
}

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div  style={{  marginTop: 8,  }}>
          Upload
      </div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      customRequest={customUpload}
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (<img  src={imageUrl}  alt="avatar"  style={{ width: '100%',  }}  />) : (uploadButton)}
    </Upload>
  );
};

export default ImageUpload;