import request from '../utils/request'

export function login(data) {
  return request({
    url: '/User/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/User/register',
    method: 'post',
    data
  })
}
// 修改密码
export function changePwd(data) {
  return request({
    url: '/User/changePwd',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/User/loginOut',
    method: 'post'
  })
}
