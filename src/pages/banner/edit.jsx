import { Button, Form, Input,Spin } from 'antd';
import React,{useEffect} from 'react';
import {bannerUpdate} from '@/api/drink'
import {useRequest,history} from 'umi'
import ImageUpload from '../../components/imgUpload'
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 21,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

let initData = {
  title:'七夕活动',
  // link:'http://localhost:8000/banner/pub'
  
}

const BannerEdit = (props) => {
  const [form] = Form.useForm();
  const {location} = props
  let {query} = location
  let {data,loading,run} = useRequest((value)=>{
    console.log(value);
    return bannerUpdate(query.objectId,svalue)
  },{manual:true})

  const onFinish = (values) => {
    run(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  useEffect(()=>{
    // console.log(props);
    form.setFieldsValue(query)
  },[])

  useEffect(()=>{
    if(data){
        history.push('/banner/list')
    }
  },[data])

  return (
      <Spin spinning={loading}>
        <Form {...layout} form={form} initialValues={initData} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="title"
            label="活动名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="url"
            label="活动链接"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="link"
            label="封面图片"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <ImageUpload />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              确认修改
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Spin>
  );
};

export default BannerEdit;

