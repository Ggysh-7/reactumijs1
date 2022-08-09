import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';
import React from 'react';
const { Meta } = Card;

const GoodsCard = (values) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card
        hoverable
        style={{
          width: 240,
          height:480,
          margin:'10px auto',
        }}
        cover={<img alt="example" src="https://img03.scbao.com/200920/1082109-20092000500645.jpg" height={"380px"}/>}
      >
        <Meta title="草莓奶昔" description="www.instagram.com" />
      </Card>
    </Col>
    <Col span={8}>
      <Card
          hoverable
          style={{
            width: 240,
            height:480,
            margin:'10px auto',
          }}
          cover={<img alt="example" height={"380px"} src="https://img.zcool.cn/community/01a1125cb7334da80121416864957b.jpg@1280w_1l_2o_100sh.jpg" />}
        >
          <Meta title="盛夏柠檬" description="www.instagram.com" />
      </Card>
    </Col>
    <Col span={8}>
      <Card
        hoverable
        style={{
          width: 240,
          height:480,
          margin:'10px auto',
        }}
        cover={<img alt="example" height={"380px"} src="https://img-u-4.51miz.com/preview/muban/00/00/39/86/M-398618-CFC14732.jpg" />}
      >
        <Meta title="芒果鲜榨" description="www.instagram.com" />
      </Card>
    </Col>
  </Row>
);

export default GoodsCard;