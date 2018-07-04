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

//引入wxParse模块==解析
var WxParse = require('./../wxParse/wxParse.js');
var common = require('./../utils/common.js');

var Example = function (_wepy$page) {
  _inherits(Example, _wepy$page);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '商品详情'
    }, _this.data = {
      goods_id: '',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      swiperData: '',
      previewImageUrl: [],
      detailData: '',
      selectIndex: 0
    }, _this.components = {}, _this.methods = {
      previewImage: function previewImage() {
        wx.previewImage({
          urls: this.previewImageUrl
        });
      },
      selectItem: function selectItem(index) {
        // console.log(index)
        this.selectIndex = index;
      },
      addCart: function addCart() {
        var _this2 = this;

        // 定义一个存放购物车数量
        var cartData = undefined;
        wx.getStorage({
          key: 'cartKey',
          success: function success(res) {
            // console.log(res)
            cartData = res.data;
            if (cartData[_this2.goods_id]) {
              cartData[_this2.goods_id] += 1;
            } else {
              cartData[_this2.goods_id] = 1;
            }
            // 保存数量在缓存中
            wx.setStorage({
              key: 'cartKey',
              data: cartData
            });
          },
          fail: function fail(res) {
            //  保存数据,首次点击购物车，先创建一个对象用来储存商品的数量
            cartData = {};
            console.log(_this2.goods_id);
            cartData[_this2.goods_id] = 1;
            //  保存在缓存中
            wx.setStorage({
              key: 'cartKey',
              data: cartData
            });
          }
        });
        wx.showToast({
          title: '添加中，别急...',
          icon: 'loading',
          duration: 500,
          mask: false
        });
      },
      toCart: function toCart(res) {
        console.log('toCart');
        wx.switchTab({
          url: '/pages/cart'
        });
        // wx.navigateTo({
        //   url: '/pages/cart'
        // })
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this3 = this;

      // console.log(option.goods_id)
      this.goods_id = option.goods_id;
      //   轮播图区域
      common.request({
        url: 'api/public/v1/goods/detail', //开发者服务器接口地址",
        data: {
          goods_id: this.goods_id
        },
        method: 'get',
        //dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: function success(backData) {
          // console.log(backData)
          _this3.swiperData = backData.data.message.pics;
          _this3.detailData = backData.data.message;

          _this3.swiperData.forEach(function (res) {
            // console.log(res)
            _this3.previewImageUrl.push(res.pics_mid_url);
          });
          // 查询数据
          _this3.$apply();
          // console.log(this.previewImageUrl)
          // 解析富文本 goods_introduce
          var goods_introduce = _this3.detailData.goods_introduce;
          // console.log(goods_introduce)
          /**
           * WxParse.wxParse(bindName , type, data, target,imagePadding)
           * 1.bindName绑定的数据名(必填)
           * 2.type可以为html或者md(必填)
           * 3.data为传入的具体数据(必填)
           * 4.target为Page对象,一般为this(必填)
           * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
           */
          // var that = this
          WxParse.wxParse('article', 'html', goods_introduce, _this3, 1);
        },
        fail: function fail() {},
        complete: function complete() {}
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/productDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiV3hQYXJzZSIsInJlcXVpcmUiLCJjb21tb24iLCJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJnb29kc19pZCIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJzd2lwZXJEYXRhIiwicHJldmlld0ltYWdlVXJsIiwiZGV0YWlsRGF0YSIsInNlbGVjdEluZGV4IiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJ3eCIsInVybHMiLCJzZWxlY3RJdGVtIiwiaW5kZXgiLCJhZGRDYXJ0IiwiY2FydERhdGEiLCJ1bmRlZmluZWQiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsInNldFN0b3JhZ2UiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJ0b0NhcnQiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwib3B0aW9uIiwicmVxdWVzdCIsIm1ldGhvZCIsImJhY2tEYXRhIiwibWVzc2FnZSIsInBpY3MiLCJmb3JFYWNoIiwicHVzaCIsInBpY3NfbWlkX3VybCIsIiRhcHBseSIsImdvb2RzX2ludHJvZHVjZSIsInd4UGFyc2UiLCJjb21wbGV0ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLElBQUlBLFVBQVVDLFFBQVEsdUJBQVIsQ0FBZDtBQUNBLElBQUlDLFNBQVNELFFBQVEsb0JBQVIsQ0FBYjs7SUFDcUJFLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLHFCQUFlLElBRlY7QUFHTEMsZ0JBQVUsSUFITDtBQUlM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QUFsQ0wsT0FBZjtBQW9DRDs7OzZCQUNRLENBQUU7Ozs7RUF0SHdCQyxlQUFLQyxJOztrQkFBckJ2RCxPIiwiZmlsZSI6InByb2R1Y3REZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIC8v5byV5YWld3hQYXJzZeaooeWdlz096Kej5p6QXHJcbiAgdmFyIFd4UGFyc2UgPSByZXF1aXJlKCcuLi93eFBhcnNlL3d4UGFyc2UuanMnKVxyXG4gIHZhciBjb21tb24gPSByZXF1aXJlKCcuLi91dGlscy9jb21tb24uanMnKVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5ZOB6K+m5oOFJ1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZ29vZHNfaWQ6ICcnLFxyXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICBzd2lwZXJEYXRhOiAnJyxcclxuICAgICAgcHJldmlld0ltYWdlVXJsOiBbXSxcclxuICAgICAgZGV0YWlsRGF0YTogJycsXHJcbiAgICAgIHNlbGVjdEluZGV4OiAwXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge31cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHByZXZpZXdJbWFnZSgpIHtcclxuICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgdXJsczogdGhpcy5wcmV2aWV3SW1hZ2VVcmxcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3RJdGVtKGluZGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgdGhpcy5zZWxlY3RJbmRleCA9IGluZGV4XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZENhcnQoKSB7XHJcbiAgICAgICAgLy8g5a6a5LmJ5LiA5Liq5a2Y5pS+6LSt54mp6L2m5pWw6YePXHJcbiAgICAgICAgdmFyIGNhcnREYXRhID0gdW5kZWZpbmVkXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6ICdjYXJ0S2V5JyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgY2FydERhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICBpZiAoY2FydERhdGFbdGhpcy5nb29kc19pZF0pIHtcclxuICAgICAgICAgICAgICBjYXJ0RGF0YVt0aGlzLmdvb2RzX2lkXSArPSAxXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY2FydERhdGFbdGhpcy5nb29kc19pZF0gPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5L+d5a2Y5pWw6YeP5Zyo57yT5a2Y5LitXHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgIGtleTogJ2NhcnRLZXknLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGNhcnREYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogcmVzID0+IHtcclxuICAgICAgICAgICAgLy8gIOS/neWtmOaVsOaNrizpppbmrKHngrnlh7votK3nianovabvvIzlhYjliJvlu7rkuIDkuKrlr7nosaHnlKjmnaXlgqjlrZjllYblk4HnmoTmlbDph49cclxuICAgICAgICAgICAgY2FydERhdGEgPSB7fVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdvb2RzX2lkKVxyXG4gICAgICAgICAgICBjYXJ0RGF0YVt0aGlzLmdvb2RzX2lkXSA9IDFcclxuICAgICAgICAgICAgLy8gIOS/neWtmOWcqOe8k+WtmOS4rVxyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6ICdjYXJ0S2V5JyxcclxuICAgICAgICAgICAgICBkYXRhOiBjYXJ0RGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOifmt7vliqDkuK3vvIzliKvmgKUuLi4nLFxyXG4gICAgICAgICAgaWNvbjonbG9hZGluZycsXHJcbiAgICAgICAgICBkdXJhdGlvbjo1MDAsXHJcbiAgICAgICAgICBtYXNrOmZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdG9DYXJ0KHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0b0NhcnQnKVxyXG4gICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvY2FydCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2NhcnQnXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge31cclxuICAgIHdhdGNoID0ge31cclxuICAgIGNvbXB1dGVkID0ge31cclxuICAgIG9uTG9hZChvcHRpb24pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uLmdvb2RzX2lkKVxyXG4gICAgICB0aGlzLmdvb2RzX2lkID0gb3B0aW9uLmdvb2RzX2lkXHJcbiAgICAgIC8vICAg6L2u5pKt5Zu+5Yy65Z+fXHJcbiAgICAgIGNvbW1vbi5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdhcGkvcHVibGljL3YxL2dvb2RzL2RldGFpbCcsIC8v5byA5Y+R6ICF5pyN5Yqh5Zmo5o6l5Y+j5Zyw5Z2AXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZ29vZHNfaWQ6IHRoaXMuZ29vZHNfaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgLy9kYXRhVHlwZTogJ2pzb24nLCAvL+WmguaenOiuvuS4umpzb27vvIzkvJrlsJ3or5Xlr7nov5Tlm57nmoTmlbDmja7lgZrkuIDmrKEgSlNPTi5wYXJzZVxyXG4gICAgICAgIHN1Y2Nlc3M6IGJhY2tEYXRhID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJhY2tEYXRhKVxyXG4gICAgICAgICAgdGhpcy5zd2lwZXJEYXRhID0gYmFja0RhdGEuZGF0YS5tZXNzYWdlLnBpY3NcclxuICAgICAgICAgIHRoaXMuZGV0YWlsRGF0YSA9IGJhY2tEYXRhLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnN3aXBlckRhdGEuZm9yRWFjaChyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVXJsLnB1c2gocmVzLnBpY3NfbWlkX3VybClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyDmn6Xor6LmlbDmja5cclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJldmlld0ltYWdlVXJsKVxyXG4gICAgICAgICAgLy8g6Kej5p6Q5a+M5paH5pysIGdvb2RzX2ludHJvZHVjZVxyXG4gICAgICAgICAgdmFyIGdvb2RzX2ludHJvZHVjZSA9IHRoaXMuZGV0YWlsRGF0YS5nb29kc19pbnRyb2R1Y2VcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdvb2RzX2ludHJvZHVjZSlcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogV3hQYXJzZS53eFBhcnNlKGJpbmROYW1lICwgdHlwZSwgZGF0YSwgdGFyZ2V0LGltYWdlUGFkZGluZylcclxuICAgICAgICAgICAqIDEuYmluZE5hbWXnu5HlrprnmoTmlbDmja7lkI0o5b+F5aGrKVxyXG4gICAgICAgICAgICogMi50eXBl5Y+v5Lul5Li6aHRtbOaIluiAhW1kKOW/heWhqylcclxuICAgICAgICAgICAqIDMuZGF0YeS4uuS8oOWFpeeahOWFt+S9k+aVsOaNrijlv4XloaspXHJcbiAgICAgICAgICAgKiA0LnRhcmdldOS4ulBhZ2Xlr7nosaEs5LiA6Iis5Li6dGhpcyjlv4XloaspXHJcbiAgICAgICAgICAgKiA1LmltYWdlUGFkZGluZ+S4uuW9k+WbvueJh+iHqumAguW6lOaYr+W3puWPs+eahOWNleS4gHBhZGRpbmco6buY6K6k5Li6MCzlj6/pgIkpXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIC8vIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgV3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCBnb29kc19pbnRyb2R1Y2UsIHRoaXMsMSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6ICgpID0+IHt9LFxyXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25TaG93KCkge31cclxuICB9XHJcbiJdfQ==