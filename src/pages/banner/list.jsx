import React from 'react'
import { Space, Table,Button,Image} from 'antd';
import {bannerGet} from '@/api/drink'
import {useRequest,history} from 'umi'

export default function BannerList() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'objectId',
      key: 'objectId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '活动名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '活动链接',
      dataIndex: 'link',
      key: 'link',
      render:(url)=><a herf={url} target="_blank">点击预览</a>,
    },
    {
      title: '活动封面',
      key: 'imgurl',
      dataIndex: 'imgurl',
      render:(url)=><Image src={url} height={50}/>,
    },
    {
      title: '操作',
      key: 'action',
      render: ( record ) => (
        <Space size="middle">
          <Button type="primary" size='small' onClick={()=>{
            history.push({
              pathname:'/banner/edit',
              query:record
            })
          }}>编辑</Button>
          <Button type="primary" danger size='small'>删除</Button>
        </Space>
      ),
    },
  ];
  
  const {data,loading} = useRequest(bannerGet)
  return (
    <Table 
      loading={loading} 
      columns={columns} 
      dataSource={data} 
      rowKey="objectId"
    />
  )
}
