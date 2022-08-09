import { LikeOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic,Timeline } from 'antd';
import React from 'react';

const HomeStatistic = () => (
  <div className="site-statistic-demo-card">
  <Row gutter={16}>
    <Col span={6}>
      <Card>
      <h4>销售商品总数</h4>
        <Statistic
          title="周售同比"
          value={8.5}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
                <Statistic
          title="日售同比"
          value={2.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={5}>
      <Timeline style={{margin:'22px auto'}}>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Col>
    <Col span={3} offset={3}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={3} offset={3}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
</div>

);

export default HomeStatistic;







