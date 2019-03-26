import dva from 'dva';
import 'antd/dist/antd.css';
import request from 'cmn-utils/lib/request';
import config from './config';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/pageModel').default);
app.model(require('./models/layoutModel').default);

// 4. Router
app.router(require('./routes/index').default);


// -> 请求
request.config(config.request);
//mock造数据
require('./mocks');

// 5. Start
app.start('#root');
