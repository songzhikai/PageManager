'use strict';

import Mock from 'mockjs'
const Random = Mock.Random;  //导入mock.js的随机数

// 配置模拟数据：

export const data = Mock.mock('/api/pages/getList', {
  'data|100': [{
    'id|+1': 1,
    'name': () => {
      return Random.cname();
    },
    'phone': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
    'address': () => {
      return Random.address();
    }
  }],
  page: {
    total: 100,
    current: 1,
  },
});

