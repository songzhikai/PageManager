import React from 'react';
import { Tabs, Button, Menu, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import { connect } from 'dva';
import styles from './layout.css'
import PubSub from 'pubsub-js'
import layoutModel from '../../models/layoutModel'
import $$ from 'cmn-utils';

const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.remove = this.remove.bind(this);
    this.clickMenuEvent = this.clickMenuEvent.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.state={
      activeKey: '',
      tabPanes:[]
    };
  }
  handleClick(e){
    this.setState({
      activeKey: '/pages/'+e.key,
    });

    //调用model中的方法
    this.props.changeTabRouter('/pages/'+e.key);
    this.props.currentTabClick('/pages/'+e.key);
  }
  onChange(activeKey){
    this.setState({activeKey: activeKey})
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  remove(targetKey){
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.tabPanes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const tabPanes = this.state.tabPanes.filter(pane => pane.key !== targetKey);
    if (tabPanes.length) {
      if (lastIndex >= 0) {
        activeKey = tabPanes[lastIndex].key;
      } else {
        activeKey = tabPanes[0].key;
      }
    }

    this.setState({ tabPanes, activeKey });
    this.props.editActiveKeyPane({ tabPanes, activeKey })
  }
  componentWillMount(){
    PubSub.unsubscribe('clickMenuEvent');
  }
  render() {
    return (
      <div className={styles['top_menu_bg']}>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          onTabClick={this.onTabClick}
        >
          {this.state.tabPanes.map(pane => <TabPane tab={pane.title} key={pane.key}></TabPane>)}
        </Tabs>
      </div>
    );
  }
  componentDidMount(){
    let _this = this
    PubSub.subscribe('clickMenuEvent', this.clickMenuEvent);
  }
  clickMenuEvent(topic, data){
    this.setState({activeKey: data, tabPanes: this.props.tabPanes})
  }
  onTabClick(path){
    this.setState({activeKey: path});
    this.props.changeTabRouter(path);
  }
}

const mapStateToProps = (state) => {
  return {
    tabPanes: state.layoutModel.tabPanes,
    activeKey: state.layoutModel.activeKey,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeTabRouter: (tabName) => {
      dispatch({type: 'layoutModel/changeTabRouter', payload: { activeKey: tabName }})
    },
    clearTabPanes: () => {
      dispatch({type: 'layoutModel/clearTabPanes'})
    },
    editActiveKeyPane: (obj) => {
      dispatch({type: 'layoutModel/editActiveKeyPane', payload: { activeKey: obj.activeKey, tabPanes: obj.tabPanes }})
    },
  }
};
// export default PCHeader;
export default connect(mapStateToProps, mapDispatchToProps)(PCHeader);
