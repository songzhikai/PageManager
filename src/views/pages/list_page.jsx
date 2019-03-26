import React from 'react';
import {Button, Form, Input, Popconfirm, Table, Pagination} from 'antd';
import {connect} from 'dva';
import './views_pages.css'
import $$ from 'cmn-utils'
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  save = (e) => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  render = () => {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`,
                      }],
                      initialValue: record[dataIndex],
                    })(
                      <Input
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                        onBlur={this.save}
                      />
                    )}
                  </FormItem>
                ) : (
                  <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                  >
                    {restProps.children}
                  </div>
                )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    const data = [];
    // for (let i = 0; i < 100; i++) {
    //   data.push({
    //     key: i.toString(),
    //     name: `Edrward ${i}`,
    //     age: 3 + i%20,
    //     address: `London Park no. ${i}`,
    //   });
    // }
    this.state = {
      dataSource: data,
      count: 100,
    };
  }

  handleDelete = (key) => {
    const dataSource = this.state.dataSource;
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: count + 1,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  }

  render() {
    let { dataSource } = this.state;
    let columnsInit = [{
      title: '姓名',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    }, {
      title: '年龄',
      dataIndex: 'age',
      sorter: (a, b) => a.age-b.age,
      defaultSortOrder: 'descend',
      sortDirections: ['descend', 'ascend'],
    }, {
      title: '地址',
      dataIndex: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
        { text: '79', value: '79' },
      ],
      onFilter: (value, record) => record.address.includes(value),
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
        this.state.dataSource.length >= 1
          ? (
            <Popconfirm title="你确定删除吗？" onConfirm={() => this.handleDelete(record.key)}>
              <a href="javascript:void(0);">Delete</a>
            </Popconfirm>
          ) : null
      ),
    }];
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = columnsInit.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ margin: '15px 5px 16px 10px'}}>
          Add
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={{position: 'bottom', size:"small", showSizeChanger: true, showQuickJumper: true}}
        />
      </div>
    );
  }
  componentDidMount = () => {
    return $$.post('/pages/getList', {})
      .then(resp => {
        this.setState({dataSource: resp.data.list})
      })
      .catch(e => console.error(e));
  }
}


const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    redirectToNewsDetail: (tabName) => {
      dispatch({type: 'pageModel/changeTab', payload: { tabName: tabName }})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
