import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/bean-sprouts/table/list',
    method: 'get',
    params
  })
}
