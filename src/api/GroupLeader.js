import request from '../utils/request'

// 组长获取抽检数据
export function drawlots (data) {
  return request({
    url: 'GroupLeaderOperation/drawlots',
    method: 'post',
    data
  })
}
// 组长提交数据
export function submitData (data) {
  return request({
    url: 'GroupLeaderOperation/submitData',
    method: 'post',
    data
  })
}
// 组长打回整个批次数据
export function returnBatch (data) {
  return request({
    url: 'GroupLeaderOperation/returnBatch',
    method: 'post',
    data
  })
}
// 组长快速定位数据
export function quickLocationData (data) {
  return request({
    url: 'GroupLeaderOperation/quickLocationData',
    method: 'post',
    data
  })
}
// 组长提交修改数据
export function submitChangeData (data) {
  return request({
    url: 'GroupLeaderOperation/submitChangeData',
    method: 'post',
    data
  })
}

// 组长提交抽签状态
export function submitDrawComplete (data) {
  return request({
    url: 'GroupLeaderOperation/submitDrawComplete',
    method: 'post',
    data
  })
}

// 组长获取广告主列表
export function advertisingList (data) {
  return request({
    url: 'GroupLeaderSponsorManage/list',
    method: 'post',
    data
  })
}
// 组长添加、修改广告主状态
export function advertisingState (data) {
  return request({
    url: 'GroupLeaderSponsorManage/save',
    method: 'post',
    data
  })
}
// 组长批量修改广告主
export function advertisingAllChange (data) {
  return request({
    url: 'GroupLeaderSponsorManage/batchChange',
    method: 'post',
    data
  })
}
// 组长获取品牌列表
export function brandList (data) {
  return request({
    url: 'GroupLeaderBrandManage/list',
    method: 'post',
    data
  })
}
// 组长保存/修改品牌状态
export function brandState (data) {
  return request({
    url: 'GroupLeaderBrandManage/save',
    method: 'post',
    data
  })
}
// 组长批量修改品牌
export function brandAllChange (data) {
  return request({
    url: 'GroupLeaderBrandManage/batchChange',
    method: 'post',
    data
  })
}


// 组长获取产品字段列表
export function ProductList (data) {
  return request({
    url: 'GroupLeaderProductFieldManage/list',
    method: 'post',
    data
  })
}
// 组长保存/修改产品字段状态
export function productState (data) {
  return request({
    url: 'GroupLeaderProductFieldManage/save',
    method: 'post',
    data
  })
}
// 组长批量修改产品字段
export function productAllChange (data) {
  return request({
    url: 'GroupLeaderProductFieldManage/batchChange',
    method: 'post',
    data
  })
}


// 组长加载所有资源列表
export function loadResourceList (data) {
  return request({
    url: 'GroupLeaderResourceManage/list',
    method: 'post',
    data
  })
}
