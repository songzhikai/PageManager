import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import { connect } from 'dva';
import styles from './layout.css';
import PCBar from "./pc_bar";
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import PCLeft from "./pc_left";
import Routes from '../../routes/all';
import $$ from 'cmn-utils'

class Layout extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={
            current: 'index'
        }
    }
    handleClick(e){
        this.setState({
        });

    }
    render() {
      let user = $$.getStore('user');
      return (
        user?
          <div>
            <Row>
              <Col span={6}>
                <PCLeft/>
              </Col>
              <Col span={18}>
                <PCHeader/>
                <Routes/>
              </Col>
            </Row>
          </div>
          :
          <div>
            <Routes/>
          </div>

      );
    }
}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
