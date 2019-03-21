import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import { connect } from 'dva';
import styles from './layout.css';

class PCBar extends React.Component {
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
        // this.props.dispatch({type: 'store/changeTab', payload: { tabName:  e.key }})
        // this.props.changeTab('/news/pages/'+e.key);
    }
    render() {
        return (
          <div>
            <Row className={styles['page-bar']}>
              <img className={styles['logo-image']} src={require('../../resources/images/news.png')} style={{width:'50px', height:'50px'}} alt="首页"/>
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
    // changeTab: (tabName) => {
    //   dispatch({type: 'store/changeTab', payload: { tabName: tabName }})
    // }
  }
}
// export default PCHeader;
export default connect(mapStateToProps, mapDispatchToProps)(PCBar);
