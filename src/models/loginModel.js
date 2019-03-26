// models/layoutModel.js
// 用于页面tab切换
import {routerRedux} from 'dva/router';
import PubSub from "pubsub-js";
import $$ from 'cmn-utils'

export default {
  namespace: 'loginModel',
  state: {
  },

  // 异步操作
  effects: {
    *login({ payload }, { call, put }) {
      yield put(routerRedux.replace('/'));
    },
  },
  // 同步操作
  reducers: {
    request(state, payload) {
      return {...state, ...payload};
    },
    response(state, action) {
      return {...state, ...action.payload};
    }
  },
  subscriptions: {
  },
}
