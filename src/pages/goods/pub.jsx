import { Button, Form, Select, Spin ,Input} from 'antd';
import React from 'react';
import {drinkGet,goodsAdd} from '@/api/drink'
import {useRequest} from 'umi'
//wangEditor5
// import '@wangeditor/editor/dist/css/style.css'
// import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import RichEditor from '../../components/RichEditor';
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

const GoodsPub = () => {
  const [form] = Form.useForm();
  let {data,loading} = useRequest(drinkGet)

  const onFinish = (values) => {
    console.log(values);
    goodsAdd(values).then(res=>{
      console.log(res);
    })
  };

  const onReset = () => {
    form.resetFields();
  };

  const { Option } = Select;

  return (
      <Spin spinning={loading}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="drinkId"
            label="分类选择"
            rules={[
              {
                required: true,
              },
            ]}
          >
          <Select placeholder='请选择分类' defaultOpen='true'>
            {
              data?.map(item=>{
                return <Option value={item.objectId} key={item.objectId}>{item.drinkname}</Option>
              })
            }
          </Select>
          </Form.Item>
          <Form.Item
            name="drinkName"
            label="商品名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="detail"
            label="商品详情"
            rules={[
              {
                required: true,
              },
            ]}
          >
            {/* wangEditor5 有待考究 */}
            {/* <div style={{ border: '1px solid #ccc', zIndex: 100}}>
              <Toolbar/>
              <Editor/>
            </div> */}
            <RichEditor/>
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

export default GoodsPub;

