import { Button, Form, Input,Spin } from 'antd';
import React from 'react';
import {drinkAdd} from '@/api/drink'
import {useRequest} from 'umi'
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

const DrinkPub = () => {
  const [form] = Form.useForm();
  let {data,loading,run} = useRequest((value)=>{
    return drinkAdd(value)
  },{manual:true})

  const onFinish = (values) => {
    // console.log(values);
    // drinkAdd(values).then(res=>{
    //   console.log(res);
    // })
    run(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
      <Spin spinning={loading}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="drinkname"
            label="分类名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
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

export default DrinkPub;

