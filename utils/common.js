'use strict';

// var baseUrl = 'https://127.0.0.1/';
var baseUrl = 'https://www.zhengzhicheng.cn/';

// 写抽取出来
var common = {
  /*
    opt
      url
      method
      success
      fail
  */
  //  函数名    参数
  request: function request(opt) {
    wx.request({
      url: '' + baseUrl + opt.url || '',
      data: opt.data || {},
      method: opt.method || 'GET',
      header: opt.header || {},
      success: opt.success || function (backData) {
        console.log('成功引入插件');
      },
      fail: opt.fail || function () {}
    });
  }
  // 对外暴露接口
};module.exports.request = common.request;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwiY29tbW9uIiwicmVxdWVzdCIsIm9wdCIsInd4IiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJiYWNrRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLFVBQVUsK0JBQWQ7O0FBR0E7QUFDQSxJQUFJQyxTQUFTO0FBQ1g7Ozs7Ozs7QUFPQTtBQUNBQyxXQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJDLE9BQUdGLE9BQUgsQ0FBVztBQUNURyxXQUFLLEtBQUdMLE9BQUgsR0FBYUcsSUFBSUUsR0FBakIsSUFBMEIsRUFEdEI7QUFFVEMsWUFBS0gsSUFBSUcsSUFBSixJQUFVLEVBRk47QUFHVEMsY0FBUUosSUFBSUksTUFBSixJQUFjLEtBSGI7QUFJVEMsY0FBUUwsSUFBSUssTUFBSixJQUFZLEVBSlg7QUFLVEMsZUFBU04sSUFBSU0sT0FBSixJQUFnQixVQUFDQyxRQUFELEVBQWM7QUFDckNDLGdCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNELE9BUFE7QUFRVEMsWUFBTVYsSUFBSVUsSUFBSixJQUFhLFlBQU0sQ0FBRTtBQVJsQixLQUFYO0FBVUQ7QUFFSDtBQXRCYSxDQUFiLENBdUJBQyxPQUFPQyxPQUFQLENBQWViLE9BQWYsR0FBeUJELE9BQU9DLE9BQWhDIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBiYXNlVXJsID0gJ2h0dHBzOi8vMTI3LjAuMC4xLyc7XHJcbnZhciBiYXNlVXJsID0gJ2h0dHBzOi8vd3d3LnpoZW5nemhpY2hlbmcuY24vJztcclxuXHJcblxyXG4vLyDlhpnmir3lj5blh7rmnaVcclxudmFyIGNvbW1vbiA9IHtcclxuICAvKlxyXG4gICAgb3B0XHJcbiAgICAgIHVybFxyXG4gICAgICBtZXRob2RcclxuICAgICAgc3VjY2Vzc1xyXG4gICAgICBmYWlsXHJcbiAgKi9cclxuICAvLyAg5Ye95pWw5ZCNICAgIOWPguaVsFxyXG4gIHJlcXVlc3Q6IChvcHQpID0+IHtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAke2Jhc2VVcmx9JHtvcHQudXJsfWAgfHwgJycsXHJcbiAgICAgIGRhdGE6b3B0LmRhdGF8fHt9LFxyXG4gICAgICBtZXRob2Q6IG9wdC5tZXRob2QgfHwgJ0dFVCcsXHJcbiAgICAgIGhlYWRlcjogb3B0LmhlYWRlcnx8e30sXHJcbiAgICAgIHN1Y2Nlc3M6IG9wdC5zdWNjZXNzIHx8ICgoYmFja0RhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5oiQ5Yqf5byV5YWl5o+S5Lu2JylcclxuICAgICAgfSksXHJcbiAgICAgIGZhaWw6IG9wdC5mYWlsIHx8ICgoKSA9PiB7fSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbi8vIOWvueWkluaatOmcsuaOpeWPo1xyXG5tb2R1bGUuZXhwb3J0cy5yZXF1ZXN0ID0gY29tbW9uLnJlcXVlc3Q7Il19