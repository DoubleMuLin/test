//引入mockjs模块
import Mock from 'mockjs';
//吧JSON数据格式引入进来[JSON数据格式不要对外暴露，可以引入]
import banner from './banner.json'
import floor from './floor.json'

//mock数据
Mock.mock("/mock/banner",{code:200,data:banner});//模拟首页大轮播图数据
Mock.mock("/mock/floor",{code:200,data:floor});

