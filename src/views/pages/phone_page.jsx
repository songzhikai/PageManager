import React from 'react';

import PropTypes from 'prop-types';
import {request} from "../../utils/request";
import {Menu, Icon, Row, Col } from 'antd';
import PCHeader from "../../components/layout/pc_header";
import PCFooter from "../../components/layout/pc_footer";
import PCBar from "../../components/layout/pc_bar";
import ImgBroadcast from "../../components/pages/img_broadcast";
import {connect} from "dva/index";
const MenuItem = Menu.Item;

class PhonePage extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.state={
            current: 'news',
            currentMenu: 'health'

        }
    }
    handleClick(e){
        this.setState({
            current: e.key,
        });
    }
    handleClickMenu(e){
        this.setState({
            currentMenu: e.key,
        });
    }
    render() {
        return (
            <div>
              <Row>
                <Col span={3}></Col>
                <Col span={18}>
                  phone
                </Col>
                <Col span={3}></Col>
              </Row>
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
    // redirectToNewsDetail: (tabName) => {
    //   dispatch({type: 'store/changeTab', payload: { tabName: tabName }})
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonePage);
