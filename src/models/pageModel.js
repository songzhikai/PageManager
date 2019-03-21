// models/users.js
// version1: 从数据维度抽取，更适用于无状态的数据
// version2: 从业务状态抽取，将数据与组件的业务状态统一抽离成一个model
// 新增部分为在数据维度基础上，改为从业务状态抽取而添加的代码
import {routerRedux} from 'dva/router';;

export default {
  namespace: 'pageModel',
  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    tabName: '' //信息tab切换
  },

  // 异步操作
  effects: {
    *changeTab({payload}, { call, put } ){
      yield put(routerRedux.push({ pathname: payload.tabName }))
    },
    // *getTabName({payload}, {select}){
    //   const tabName = yield select(state => state.pageModel.tabName);
    //   return tabName;
    // },
    *query(){},
    *create(){},
    *'delete'(){},   // 因为delete是关键字，特殊处理
    *update(){},
  },

  // 替换状态树
  reducers: {
    currentTabClick(state, action){ //积累tab点击信息
      state.tabName = action.payload.tabName;
      return state;
    },
    // getTabName(state, action){
    //   return {...state};
    // },
    showLoading(){}, // 控制加载状态的 reducer
    showModel(){}, // 控制 Model 显示状态的 reducer
    hideModel(){},
    querySuccess(){},
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){},
    request(state, payload) {
      return {...state, ...payload};
    },
    response(state, action) {
      return {...state, ...action.payload};
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        // console.log('重定向接收参数：%o', location)
      });
    }
  },
}
