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
export const reqGetSearchInfo = (parmas) => {
    return requests({
        url: '/list',
        method: 'post',
        data: parmas
    })
}
//获取产品详情信息接口
export const reqGoodsInfo = (skuId) => {
    return requests({
        url: `/item/${skuId}`,
        method: 'get',
    })
}
//将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNumber) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNumber}`,
        method: 'post'
    })
}
//获取购物车列表数据接口
export const reqCartList = () => {
    return requests({
        url: '/cart/cartList',
        method: 'get'
    })
}
//删除购物车产品接口
export const reqDeleteCartById = (skuId) => {
    return requests({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}
//修改商品的选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => {
    return requests({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}
//获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

//注册
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });

//登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

//获取用户信息【需要带着用户的token向服务器要用户信息】
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });

//退出登录
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' });

//获取用户地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });

//获取商品清单
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });

//提交订单的接口
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' });

//获取支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })