import 'whatwg-fetch'
import { notification } from 'antd';

function obj2params(obj) {
    var result = '';
    var item;
    for(item in obj){
        result += '&' + item + '=' +encodeURIComponent(obj[item]);
    }
    if(result) {
        result = result.slice(1);
    }
    return result;
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    notification.error({
        message: `网络请求错误`,
        description: `错误信息：${response.statusText}`,
    });
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function request(url, options) {
    const defaultOptions = {
        mode: 'cors'
    };
    const newOptions = { ...defaultOptions, ...options };
    if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
        newOptions.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        newOptions.body = obj2params(newOptions.body)
    }

    return fetch(url, newOptions)
        .then(checkStatus)
        .then(response => response.json())
}

export function post(url,body){
    return request(url,{method:"POST",body});
}

export function get(url){
    return request(url,{method:"GET"});
}