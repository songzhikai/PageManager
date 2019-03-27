import React from 'react';
import { Modal, Button } from 'antd';
import {connect} from 'dva/index'
import styles from './views_pages.css'

class ModalPage extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className={styles['modal-page']}>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
