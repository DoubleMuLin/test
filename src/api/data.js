import requests from './request';
import mockRequests from './mockAjax'

// export const reqCategoryList =()=>requests.get('/product/getBaseCategoryList')
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}
//获取banner（Home首页轮播图数据）
export const reqGetBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: 'get'
    })
}
//获取floor数据
export const reqFloorList = () => {
    return mockRequests({
        url: '/floor',
        method: 'get'
    })
}
//获取搜索模块数据
export const reqGetSearchInfo=(parmas)=>{
    return requests({
        url:'/list',
        method:'post',
        data:parmas
    })
}
//获取产品详情信息接口
export const reqGoodsInfo =(skuId)=>{
    return requests({
        url:`/item/${skuId}`,
        method:'get',
    })
}