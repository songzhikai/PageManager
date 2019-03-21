import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import { connect } from 'dva';

class PCHeader extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={
            current: 'index'
        }
    }
    handleClick(e){
        this.setState({
            current: e.key,
        });

        //调用store中的方法
        this.props.changeTab('/news/pages/'+e.key);
        this.props.currentTabClick(e.key);
        // console.log('getTabName', this.props.tabName);
    }
    render() {
        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Menu mode="horizontal" defaultSelectedKeys={[this.state.current]} selectedKeys={[this.state.current]} onClick={this.handleClick}>
                        <Menu.Item key="index">首页</Menu.Item>
                        <Menu.Item key="phone">手机</Menu.Item>
                        <Menu.Item key="yule">娱乐</Menu.Item>
                        <Menu.Item key="tiyu">体育</Menu.Item>
                        <Menu.Item key="keji">科技</Menu.Item>
                        <Menu.Item key="shishang">时尚</Menu.Item>
                        <Menu.Item key="caijing">财经</Menu.Item>
                        <Menu.Item key="qiche">汽车</Menu.Item>
                        <Menu.Item key="luyou">旅游</Menu.Item>
                        <Menu.Item key="fangchan">房产</Menu.Item>
                        <Menu.Item key="jiankang">健康</Menu.Item>
                        <Menu.Item key="gongyi">公益</Menu.Item>
                    </Menu>
                </Col>
                <Col span={2}></Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    tabName: state.pageModel.tabName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (tabName) => {
      dispatch({type: 'pageModel/changeTab', payload: { tabName: tabName }})
    },
    currentTabClick: (tabName) => {
      dispatch({type: 'pageModel/currentTabClick', payload: { tabName: tabName }})
    },
    getTabName: () => {
      dispatch({type: 'pageModel/getTabName'})
    }
  }
};
// export default PCHeader;
export default connect(mapStateToProps, mapDispatchToProps)(PCHeader);
