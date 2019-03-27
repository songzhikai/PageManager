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
      yield put(routerRedux.push({pathname: '/pages/login'}))
    },
    *toHomeRouter({ payload }, { call, put }){
      yield put(routerRedux.push({pathname: '/'}))
    },
    *logout({payload}, {call, put}){
      $$.removeStore('user')
      yield put(routerRedux.push({pathname: '/pages/login'}))
    }
  },
  // 同步操作
  reducers: {
    request(state, payload) {
      return {...state, ...payload};
    },
    response(state, action) {
      return {...state, ...action.payload};
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        let user = $$.getStore('user')
        if (pathname == '/pages/login' && !!user) {
          dispatch({type: 'toHomeRouter'})
        }
        if(pathname.indexOf('/pages/') !== -1 && pathname != '/pages/login' && !user){
          dispatch({type: 'login'})
        }
      });
    }
  },
}
