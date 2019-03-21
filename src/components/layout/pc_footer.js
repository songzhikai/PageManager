import React from 'react';

import PropTypes from 'prop-types';
import {Menu, Icon, Row, Col } from 'antd';

class PCFooter extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={
            current: 'yule'
        }
    }
    handleClick(e){
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
              <Row>
                  <Col span={3}></Col>
                  <Col span={20} style={{textAlign: 'center'}}>
                      <div>Operated by Kevin on 2018-07-26</div>
                  </Col>
                  <Col span={3}></Col>
              </Row>
        );
    }
}



export default PCFooter;
