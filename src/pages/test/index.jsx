import React from 'react'
import {Button } from 'antd'
import {Link,history} from 'umi'

export default function Test() {
  return (
    <div>
        Test
        <Button type='primary' onClick={()=>{
          history.push('/')
        }}>按钮</Button>
    </div>
    
  )
}
