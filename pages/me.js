'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var common = require('./../utils/common.js');

var Me = function (_wepy$page) {
  _inherits(Me, _wepy$page);

  function Me() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Me);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Me.__proto__ || Object.getPrototypeOf(Me)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      userInfo: undefined
    }, _this.components = {}, _this.methods = {
      doLogin: function doLogin(event) {
        var _this2 = this;

        //wx.login() 获取code值
        wx.login({
          success: function success(loginRes) {
            console.log('wx.login_success');
            console.log(loginRes.code);
            // 获取用户更为详情信息，非私密 
            if (loginRes.code) {
              wx.getUserInfo({
                // 是否带入登入状态
                withCredentials: 'false',
                lang: 'zh_CN',
                success: function success(userRes) {
                  console.log('wx.getUserInfo_success');
                  console.log(userRes);
                  _this2.userInfo = userRes.userInfo;
                  _this2.$apply();
                  // console.log(this.userInfo)
                  // 发送到自己的服务器去验证
                  common.request({
                    url: 'api/public/v1/users/wxlogin',
                    method: 'post',
                    data: {
                      code: loginRes.code,
                      encryptedData: userRes.encryptedData,
                      iv: userRes.iv,
                      rawData: userRes.rawData,
                      signature: userRes.signature
                    },
                    success: function success(res) {
                      console.log('common.request_success');
                      console.log(res);
                      // 保存登入状态，获取到token存储在本地
                      wx.setStorage({
                        key: 'token',
                        data: res.data.message.token
                        //  发起支付了
                      });
                    }
                  });
                }
              });
            }
          },
          fail: function fail(res) {
            wx.showToast({
              title: '网络超时',
              duration: 1000,
              mask: true
            });
          }
        });
      },
      address: function address() {
        wx.chooseAddress({
          success: function success(res) {
            console.log(res);
          }
        });
      },
      toOrder: function toOrder() {
        wx.navigateTo({
          url: '/pages/orderList'
        });
      },
      toMap: function toMap(e) {
        wx.openLocation({
          latitude: 22.5765800000,
          longitude: 113.9237400000,
          scale: 28,
          name: '中粮商务大楼',
          address: '广东省深圳市宝安区留仙二路中粮商务公园3栋17层',
          success: function success(res) {
            wx.getSetting({});
          }
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Me, [{
    key: 'onLoad',
    value: function onLoad() {
      //  wx.getUserInfo({
      //       // withCredentials: false,
      //       success: res => {
      //         console.log(res)
      //         this.userInfo = res.userInfo
      //         wx.setStorage({
      //           key:'userinfo',
      //           data:res.userInfo
      //         })
      //       },
      //       fail: () => {},
      //       complete: () => {}
      //     });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Me;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Me , 'pages/me'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lLmpzIl0sIm5hbWVzIjpbImNvbW1vbiIsInJlcXVpcmUiLCJNZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJ1bmRlZmluZWQiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImRvTG9naW4iLCJldmVudCIsInd4IiwibG9naW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImxvZ2luUmVzIiwiY29kZSIsImdldFVzZXJJbmZvIiwid2l0aENyZWRlbnRpYWxzIiwibGFuZyIsInVzZXJSZXMiLCIkYXBwbHkiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwicmF3RGF0YSIsInNpZ25hdHVyZSIsInJlcyIsInNldFN0b3JhZ2UiLCJrZXkiLCJtZXNzYWdlIiwidG9rZW4iLCJmYWlsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJkdXJhdGlvbiIsIm1hc2siLCJhZGRyZXNzIiwiY2hvb3NlQWRkcmVzcyIsInRvT3JkZXIiLCJuYXZpZ2F0ZVRvIiwidG9NYXAiLCJlIiwib3BlbkxvY2F0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzY2FsZSIsIm5hbWUiLCJnZXRTZXR0aW5nIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLG9CQUFSLENBQWI7O0lBQ3FCQyxFOzs7Ozs7Ozs7Ozs7Ozs4S0FDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVVDO0FBREwsSyxRQUdQQyxVLEdBQWEsRSxRQUNiQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsS0FEQSxFQUNPO0FBQUE7O0FBQ2I7QUFDQUMsV0FBR0MsS0FBSCxDQUFTO0FBQ1BDLG1CQUFTLDJCQUFZO0FBQ25CQyxvQkFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlDLFNBQVNDLElBQXJCO0FBQ0E7QUFDQSxnQkFBR0QsU0FBU0MsSUFBWixFQUFpQjtBQUNmTixpQkFBR08sV0FBSCxDQUFlO0FBQ2I7QUFDQUMsaUNBQWlCLE9BRko7QUFHYkMsc0JBQU0sT0FITztBQUliUCx5QkFBUywwQkFBVztBQUNsQkMsMEJBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBRCwwQkFBUUMsR0FBUixDQUFZTSxPQUFaO0FBQ0EseUJBQUtoQixRQUFMLEdBQWdCZ0IsUUFBUWhCLFFBQXhCO0FBQ0EseUJBQUtpQixNQUFMO0FBQ0E7QUFDQTtBQUNBdkIseUJBQU93QixPQUFQLENBQWU7QUFDYkMseUJBQUssNkJBRFE7QUFFYkMsNEJBQVEsTUFGSztBQUdickIsMEJBQU07QUFDSmEsNEJBQU1ELFNBQVNDLElBRFg7QUFFSlMscUNBQWVMLFFBQVFLLGFBRm5CO0FBR0pDLDBCQUFJTixRQUFRTSxFQUhSO0FBSUpDLCtCQUFTUCxRQUFRTyxPQUpiO0FBS0pDLGlDQUFXUixRQUFRUTtBQUxmLHFCQUhPO0FBVWJoQiw2QkFBUyxzQkFBTztBQUNkQyw4QkFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0FELDhCQUFRQyxHQUFSLENBQVllLEdBQVo7QUFDQTtBQUNBbkIseUJBQUdvQixVQUFILENBQWM7QUFDWkMsNkJBQUssT0FETztBQUVaNUIsOEJBQU0wQixJQUFJMUIsSUFBSixDQUFTNkIsT0FBVCxDQUFpQkM7QUFDdkI7QUFIWSx1QkFBZDtBQUtEO0FBbkJZLG1CQUFmO0FBcUJEO0FBaENZLGVBQWY7QUFrQ0Q7QUFDRixXQXpDTTtBQTBDUEMsZ0JBQUssbUJBQUs7QUFDTnhCLGVBQUd5QixTQUFILENBQWE7QUFDWEMscUJBQU0sTUFESztBQUVYQyx3QkFBUyxJQUZFO0FBR1hDLG9CQUFLO0FBSE0sYUFBYjtBQUtEO0FBaERJLFNBQVQ7QUFrREQsT0FyRE87QUFzRFJDLGFBdERRLHFCQXNERTtBQUNSN0IsV0FBRzhCLGFBQUgsQ0FBaUI7QUFDZjVCLG1CQUFTLHNCQUFPO0FBQ2RDLG9CQUFRQyxHQUFSLENBQVllLEdBQVo7QUFDRDtBQUhjLFNBQWpCO0FBS0QsT0E1RE87QUE2RFJZLGFBN0RRLHFCQTZERTtBQUNSL0IsV0FBR2dDLFVBQUgsQ0FBYztBQUNabkIsZUFBSztBQURPLFNBQWQ7QUFJRCxPQWxFTztBQW1FUm9CLFdBbkVRLGlCQW1FRkMsQ0FuRUUsRUFtRUE7QUFDSmxDLFdBQUdtQyxZQUFILENBQWdCO0FBQ2RDLG9CQUFVLGFBREk7QUFFZEMscUJBQVcsY0FGRztBQUdkQyxpQkFBTyxFQUhPO0FBSWRDLGdCQUFLLFFBSlM7QUFLZFYsbUJBQVEsMEJBTE07QUFNZDNCLG1CQUFRLHNCQUFLO0FBQ1hGLGVBQUd3QyxVQUFILENBQWMsRUFBZDtBQUdEO0FBVmEsU0FBaEI7QUFZSDtBQWhGTyxLLFFBa0ZWQyxNLEdBQVMsRSxRQUNUQyxLLEdBQVEsRSxRQUNSQyxRLEdBQVcsRTs7Ozs7NkJBQ0Y7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBQ1EsQ0FBRTs7OztFQTVHbUJDLGVBQUtDLEk7O2tCQUFoQnZELEUiLCJmaWxlIjoibWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbi5qcycpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgdXNlckluZm86IHVuZGVmaW5lZFxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge31cclxuICBtZXRob2RzID0ge1xyXG4gICAgZG9Mb2dpbihldmVudCkge1xyXG4gICAgICAvL3d4LmxvZ2luKCkg6I635Y+WY29kZeWAvFxyXG4gICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgc3VjY2VzczogbG9naW5SZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3d4LmxvZ2luX3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cobG9naW5SZXMuY29kZSlcclxuICAgICAgICAgIC8vIOiOt+WPlueUqOaIt+abtOS4uuivpuaDheS/oeaBr++8jOmdnuengeWvhiBcclxuICAgICAgICAgIGlmKGxvZ2luUmVzLmNvZGUpe1xyXG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgLy8g5piv5ZCm5bim5YWl55m75YWl54q25oCBXHJcbiAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiAnZmFsc2UnLFxyXG4gICAgICAgICAgICAgIGxhbmc6ICd6aF9DTicsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogdXNlclJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd3guZ2V0VXNlckluZm9fc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyUmVzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJSZXMudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51c2VySW5mbylcclxuICAgICAgICAgICAgICAgIC8vIOWPkemAgeWIsOiHquW3seeahOacjeWKoeWZqOWOu+mqjOivgVxyXG4gICAgICAgICAgICAgICAgY29tbW9uLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICdhcGkvcHVibGljL3YxL3VzZXJzL3d4bG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGxvZ2luUmVzLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogdXNlclJlcy5lbmNyeXB0ZWREYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGl2OiB1c2VyUmVzLml2LFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHVzZXJSZXMucmF3RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHVzZXJSZXMuc2lnbmF0dXJlXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbW1vbi5yZXF1ZXN0X3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAvLyDkv53lrZjnmbvlhaXnirbmgIHvvIzojrflj5bliLB0b2tlbuWtmOWCqOWcqOacrOWcsFxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAndG9rZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLmRhdGEubWVzc2FnZS50b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gIOWPkei1t+aUr+S7mOS6hlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6cmVzPT57XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6J+e9kee7nOi2heaXticsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246MTAwMCxcclxuICAgICAgICAgICAgICBtYXNrOnRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYWRkcmVzcygpIHtcclxuICAgICAgd3guY2hvb3NlQWRkcmVzcyh7XHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgdG9PcmRlcigpIHtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyTGlzdCdcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgdG9NYXAoZSl7XHJcbiAgICAgICAgd3gub3BlbkxvY2F0aW9uKHtcclxuICAgICAgICAgIGxhdGl0dWRlOiAyMi41NzY1ODAwMDAwLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAxMTMuOTIzNzQwMDAwMCxcclxuICAgICAgICAgIHNjYWxlOiAyOCxcclxuICAgICAgICAgIG5hbWU6J+S4reeyruWVhuWKoeWkp+alvCcsXHJcbiAgICAgICAgICBhZGRyZXNzOiflub/kuJznnIHmt7HlnLPluILlrp3lronljLrnlZnku5nkuozot6/kuK3nsq7llYbliqHlhazlm60z5qCLMTflsYInLFxyXG4gICAgICAgICAgc3VjY2VzczpyZXM9PntcclxuICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7fVxyXG4gIHdhdGNoID0ge31cclxuICBjb21wdXRlZCA9IHt9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gIHd4LmdldFVzZXJJbmZvKHtcclxuICAgIC8vICAgICAgIC8vIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXHJcbiAgICAvLyAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAvLyAgICAgICAgIHRoaXMudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgIC8vICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAvLyAgICAgICAgICAga2V5Oid1c2VyaW5mbycsXHJcbiAgICAvLyAgICAgICAgICAgZGF0YTpyZXMudXNlckluZm9cclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgICBmYWlsOiAoKSA9PiB7fSxcclxuICAgIC8vICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxyXG4gICAgLy8gICAgIH0pO1xyXG4gIH1cclxuICBvblNob3coKSB7fVxyXG59XHJcbiJdfQ==