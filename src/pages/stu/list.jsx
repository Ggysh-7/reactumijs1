import React from 'react'
import { Space, Table,Button} from 'antd';
import {stuGet,stuDel} from '@/api/stu'
import {useRequest} from 'umi'

export default function StuList() {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '测试分数',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '出生日期',
      key: 'time',
      dataIndex: 'time'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record,index) => (
        <Space size="middle">
          <Button type="primary" size='small'>编辑</Button>
          <Button type="primary" danger size='small' onClick={()=>{
              console.log(text, record,index);
              stuDel(record.objectId).then(res=>{
                data.splice(index,1)
                setData([...data])
              })
          }}>删除</Button>
        </Space>
      ),
    },
  ];
  
  //方法1：需要开发者自行处理Loading等请求交互效果  需<Table>中dataSource为data
  // useEffect(()=>{
    // stuGet().then(res=>{
    //   setData(res.results)
    //   setLoading(false)
    // })
  // },[])


    //方法2：采用setRequest简化异步请求交互操作 ahooks
    // const {data,loading,error} = useRequest(async()=>{
    //   let res = await stuGet()
    //   return {data:res.results}
    // }) 
      //data 是后端响应的数据包
      //loading 异步请求状态
      //error 异步请求失败返回结果

    //方法3：2的简化版 简化useRquest 并修改了app.js中响应拦截 统一数据格式包
    const {data,loading,error} = useRequest(stuGet)
  return (
    <Table 
      loading={loading} 
      columns={columns} 
      dataSource={data} 
      rowKey="objectId"
    />
  )
}
