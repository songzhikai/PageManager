import React from 'react';
import {Menu, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import { connect } from 'dva';
import styles from './layout.css';
import PubSub from 'pubsub-js'
import $$ from 'cmn-utils';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCLeft extends React.Component {
    constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
      console.log('eeeeeeeeeeeeeeee', e)
      //调用store中的方法
      this.props.changeTabRouter('/pages/'+e.key)
      this.props.pushMenuToTabPanes({key: '/pages/'+e.key, title: e.item.props.title});
      PubSub.publish("clickMenuEvent", '/pages/'+e.key)
    }
    render() {
        return (
          <div className={styles['left_menu_div']}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['pageManager']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>服务中心</span></span>}>
                <MenuItemGroup key="pageManager" title="页面管理">
                  <Menu.Item key="index" title="管理列表">
                    管理列表
                  </Menu.Item>
                  <Menu.Item key="add" title="新增">
                    新增
                  </Menu.Item>
                  <Menu.Item key="group" title="分组">
                    分组
                  </Menu.Item>
                  <SubMenu title="控件">
                    <Menu.Item key="tree" title="树控件">tree控件</Menu.Item>
                    <Menu.Item key="modal" title="弹框">modal控件</Menu.Item>
                  </SubMenu>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
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
    changeTabRouter: (activeKey) => {
      dispatch({type: 'layoutModel/changeTabRouter', payload: { activeKey: activeKey }})
    },
    pushMenuToTabPanes : (obj) => {
      dispatch({type: 'layoutModel/pushMenuToTabPanes', payload: { key: obj.key, title: obj.title }})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PCLeft);
