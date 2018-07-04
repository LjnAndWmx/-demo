'use strict';

var baseUrl = '';
// 写抽取出来
var method = {
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
            method: opt.method || '',
            success: opt.success || function (backData) {
                console.log('成功引入插件');
            },
            fail: opt.fail || function () {}
        });
    }
    // 对外暴露接口
};module.exports.ajax = method.request;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZC5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwibWV0aG9kIiwicmVxdWVzdCIsIm9wdCIsInd4IiwidXJsIiwic3VjY2VzcyIsImJhY2tEYXRhIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWpheCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLEVBQWQ7QUFDQTtBQUNBLElBQUlDLFNBQVM7QUFDUDs7Ozs7OztBQU9OO0FBQ0lDLGFBQVEsaUJBQUNDLEdBQUQsRUFBTztBQUNYQyxXQUFHRixPQUFILENBQVc7QUFDUEcsaUJBQUksS0FBR0wsT0FBSCxHQUFhRyxJQUFJRSxHQUFqQixJQUF3QixFQURyQjtBQUVQSixvQkFBT0UsSUFBSUYsTUFBSixJQUFZLEVBRlo7QUFHUEsscUJBQVFILElBQUlHLE9BQUosSUFBYyxVQUFDQyxRQUFELEVBQVk7QUFBQ0Msd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQXNCLGFBSGxEO0FBSVBDLGtCQUFLUCxJQUFJTyxJQUFKLElBQVcsWUFBSSxDQUFFO0FBSmYsU0FBWDtBQU1IO0FBRUw7QUFsQmEsQ0FBYixDQW1CQUMsT0FBT0MsT0FBUCxDQUFlQyxJQUFmLEdBQXNCWixPQUFPQyxPQUE3QiIsImZpbGUiOiJtZXRob2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYmFzZVVybCA9ICcnO1xyXG4vLyDlhpnmir3lj5blh7rmnaVcclxudmFyIG1ldGhvZCA9IHtcclxuICAgICAgLypcclxuICAgIG9wdFxyXG4gICAgICB1cmxcclxuICAgICAgbWV0aG9kXHJcbiAgICAgIHN1Y2Nlc3NcclxuICAgICAgZmFpbFxyXG4gICovXHJcbi8vICDlh73mlbDlkI0gICAg5Y+C5pWwXHJcbiAgICByZXF1ZXN0OihvcHQpPT57XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDpgJHtiYXNlVXJsfSR7b3B0LnVybH1gfHwnJyxcclxuICAgICAgICAgICAgbWV0aG9kOm9wdC5tZXRob2R8fCcnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOm9wdC5zdWNjZXNzfHwoKGJhY2tEYXRhKT0+e2NvbnNvbGUubG9nKCfmiJDlip/lvJXlhaXmj5Lku7YnKX0pLFxyXG4gICAgICAgICAgICBmYWlsOm9wdC5mYWlsfHwoKCk9Pnt9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuLy8g5a+55aSW5pq06Zyy5o6l5Y+jXHJcbm1vZHVsZS5leHBvcnRzLmFqYXggPSBtZXRob2QucmVxdWVzdDsiXX0=