// models/layoutModel.js
// 用于页面tab切换
import {routerRedux} from 'dva/router';
import PubSub from "pubsub-js";

export default {
  namespace: 'layoutModel',
  state: {
    activeKey: '',
    tabPanes: [] //所有打开的tabPanes
  },

  // 异步操作
  effects: {
    *changeTabRouter({payload}, { call, put } ){
      yield put(routerRedux.push({ pathname: payload.activeKey }))
    },
  },
  // 同步操作
  reducers: {
    clearTabPanes(state, action){
      state.activeKey = '';
      state.tabPanes = [];
      return state;
    },
    pushMenuToTabPanes(state, payload){
      state.activeKey = payload.payload.key;
      let tabPanes = state.tabPanes
      let flag = false;
      for(let akey in tabPanes){
        if(tabPanes[akey].key == payload.payload.key){
          flag = true;
          break;
        }
      }
      if(flag == false){
        state.tabPanes.push(payload.payload)
      }
      return state;
    },
    editActiveKeyPane(state, payload){
      state.activeKey = payload.payload.activeKey;
      state.tabPanes = payload.payload.tabPanes;
      return state;
    },
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
