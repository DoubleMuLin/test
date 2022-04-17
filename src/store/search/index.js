import { reqGetSearchInfo } from "@/api/data";
//state:仓库存储数据的地方
const state = {
    searchList:{}
};
//mutations：修改state的唯一手段
const mutations ={
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions ={
    async getSearchList({commit},params={}){
        //当前调用获取服务器数据时，至少传一个参数
        //params形参：是当用户派发action的时候，第二个参数传递过来，至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code ==200){
            commit("GETSEARCHLIST",result.data)
        }
    }
};
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters ={
    goodsList(state){
        return state.searchList.goodsList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    total(state){
        return state.searchList.total
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}