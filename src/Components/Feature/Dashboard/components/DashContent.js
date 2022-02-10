import React from "react";
import { Layout, Breadcrumb, Row, Col, Card } from "antd";
const { Content } = Layout;

export default function DashContent() {
  return (
    <Content style={{ margin: "0 16px" }}>
      
      <div className="site-layout-background" style={{ padding: 24 }}>
        <Row gutter={[16, 16]}>
          <Col className="card-4" span={6}>
            <Card  bordered={false} >
              <h4>Customer accounts</h4>
              <p>See & manage accounts of your customers</p>
            </Card>
          </Col>
          <Col className="card-4" span={6}>
            <Card  bordered={false}>
              <h4>Invoices</h4>
              <p>Set billing and check status</p>
            </Card>
          </Col>
          <Col className="card-4" span={6}>
            <Card  bordered={false}>
              <h4>Payments</h4>
              <p>View or update payment 0r issue a refund.</p>            
            </Card>
          </Col>
          <Col className="card-4" span={6}>
            <Card  bordered={false}>
              <h4>Contracts</h4>
              <p>View or update contracts. Make a new contract.</p>            
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>Hello, Still not sure what to do.</h3>Let us help you.
      </div>
      <div className="site-layout-background" style={{ padding: 24 }}>
        <Row gutter={[16, 16]}>
          <Col className="card-3" span={8}>
            <Card bordered={false}>
              <h4>Making subcription easy</h4>
              <p>See & manage accounts of your customers</p> 
            </Card>
          </Col>
          <Col className="card-3" span={8}>
            <Card  bordered={false}>
              <h4>Making subcription easy</h4>
              <p>See & manage accounts of your customers</p>
            </Card>
          </Col>
          <Col className="card-3" span={8}>
            <Card  bordered={false}>
              <h4>Making subcription easy</h4>
              <p>See & manage accounts of your customers</p>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
}
