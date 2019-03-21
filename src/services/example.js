import request from '../bak/request';

export function query() {
  return request('/api/users');
}
