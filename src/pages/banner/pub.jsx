import { Button, Form, Input,Spin } from 'antd';
import React from 'react';
import {bannerAdd} from '@/api/drink'
import {useRequest} from 'umi'
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

const BannerPub = () => {
  const [form] = Form.useForm();
  let {data,loading,run} = useRequest((value)=>{
    console.log(value);
    return bannerAdd(value)
  },{manual:true})

  const onFinish = (values) => {
    run(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
      <Spin spinning={loading}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
              提交
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Spin>
  );
};

export default BannerPub;

