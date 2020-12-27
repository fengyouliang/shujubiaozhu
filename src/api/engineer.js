import request from '../utils/request'

// 获取任务列表(工程师)
export function getBatchNoList (data) {
  return request({
    url: '/EngineerOperation/getBatchNoList',
    method: 'post',
    data
  })
}

// 数据标注（工程师）提交标注操作
export function submitData (data) {
  return request({
    url: '/EngineerOperation/labelSubmitOperate',
    method: 'post',
    data
  })
}

// 工程师加载标注数据
export function labelLoadData (data) {
  return request({
    url: '/EngineerOperation/labelLoadData',
    method: 'post',
    data
  })
}
// 搜索广告主
export function searchSponsorName (data) {
  return request({
    url: '/EngineerOperation/loadSponsorData',
    method: 'post',
    data
  })
}
// 搜索品牌
export function searchBandsName (data) {
  return request({
    url: '/EngineerOperation/loadBandsData',
    method: 'post',
    data
  })
}
// 搜索产品字段
export function searchProductFields (data) {
  return request({
    url: '/EngineerOperation/loadProductFieldsData',
    method: 'post',
    data
  })
}

// 工程师加载未通过数据
export function getFailedDataList (data) {
  return request({
    url: '/EngineerOperation/getFailedDataList',
    method: 'post',
    data
  })
}
// 数据标注（工程师）获取复核数据
export function getReCheckDataList (data) {
  return request({
    url: '/EngineerOperation/getReCheckDataList',
    method: 'post',
    data
  })
}

// 工程师提交复核操作
export function reCheckSubmitOperate (data) {
  return request({
    url: '/EngineerOperation/reCheckSubmitOperate',
    method: 'post',
    data
  })
}

// 数据标注(工程师)通过品牌搜索广告主关联信息
export function sponsorLinkageSearch (data) {
  return request({
    url: '/AdvertResource/sponsorLinkageSearch',
    method: 'post',
    data
  })
}
