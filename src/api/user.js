import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/bean-sprouts/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/bean-sprouts/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/bean-sprouts/user/logout',
    method: 'post'
  })
}

export function auth() {
  return request({
    url: '/bean-sprouts/user/auth',
    method: 'post'
  })
}

