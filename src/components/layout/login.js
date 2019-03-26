import React from 'react';
import {connect} from 'dva'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './layout.css'
import $$ from 'cmn-utils'
import { routerRedux } from 'dva/router';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        $$.post('/user/login', values)
          .then(resp => {
            $$.setStore('user', resp.data)
            this.props.login(resp.data)
          })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'Login' })(Login);


const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      dispatch({type: 'loginModel/login'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
