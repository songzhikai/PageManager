// http://www.wheresrhys.co.uk/fetch-mock/api
import packMock from '../utils/packMock';
import datatable from './datatable';
import user from './user';

/**
 * 加载mock文件
 * packMock(mock1[,mock2])
 */
packMock(
  datatable,
  user
);
