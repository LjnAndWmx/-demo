'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var common = require('./../utils/common.js');

var Cart = function (_wepy$page) {
  _inherits(Cart, _wepy$page);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '购物车'
    }, _this.data = {
      isFull: false,
      // 购物车商品详细信息
      cartInfo: [],
      // 保存标志商品的键值==购买个数
      cartKey: undefined,
      // 保存用户收货信息
      address: undefined,
      // 全选不全选
      isAllchecked: true,
      // 记录总金额
      totalPrice: 0
    }, _this.components = {
      toast: _wepyComToast2.default
    }, _this.methods = {
      getAddr: function getAddr() {
        var _this2 = this;

        wx.chooseAddress({
          success: function success(res) {
            _this2.address = res;
            _this2.$apply();
            wx.setStorage({
              key: 'address',
              data: res
            });
          }
        });
      },

      //当选框
      change: function change(index) {
        var _this3 = this;

        var num = 0;
        this.cartInfo[index].isChecked = !this.cartInfo[index].isChecked;
        this.cartInfo.forEach(function (element) {
          if (element.isChecked == false) {
            _this3.isAllchecked = false;
            return;
          } else {
            num++;
          }
        });
        // 判断总个数和选中的个数
        var total = this.cartInfo.length;
        if (num == total) {
          this.isAllchecked = true;
        }
      },
      subClick: function subClick(id) {
        var _this4 = this;

        // 提示用户 wx.showModle==没写
        if (this.cartKey[id] == 1) {
          _wepy2.default.showModell({
            title: '提示',
            content: '你想清楚了?',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success: function success(res) {
              if (res.confirm == true) {
                _this4.cartKey[id]--;
                if (_this4.cartKey[id] == 0) {
                  // 删除对象中某个值 用delete
                  delete _this4.cartKey[id];
                  //  重新设置本地缓存键值
                  wx.setStorage({
                    key: 'cartKey',
                    data: _this4.cartKey
                  });
                  //  删除本地存储商品中的商品
                  for (var i = 0; i < _this4.cartInfo.length; i++) {
                    if (id == _this4.cartInfo[i].goods_id) {
                      _this4.cartInfo.splice(i, 1);
                    }
                  }
                }
                // 检查数据一条都没有==没写
                if (_this4.cartInfo.length == 0) {
                  _this4.isFull == false;
                  wx.removeStorage({
                    key: 'cartKey'
                  });
                }
                _this4.$apply();
              }
            }
          });
          return;
        } else {
          this.cartKey[id]--;
        }
      },
      addClick: function addClick(id) {
        this.cartKey[id]++;
      },
      allChecked: function allChecked() {
        var _this5 = this;

        this.isAllchecked = !this.isAllchecked;
        // foreach遍历数组无返回值  与map语法相似 map有返回值
        this.cartInfo.forEach(function (element) {
          element.isChecked = _this5.isAllchecked;
        });
      },
      buyMoney: function buyMoney(e) {
        var _this6 = this;

        // console.log(e)
        // 1.判断地址是否选中
        if (this.address == undefined) {
          wx.showToast({
            title: '请选择收货地址',
            icon: 'none',
            duration: 1000,
            mask: false
          });
          return;
        }
        // 2.判断是否勾选购买商品
        var checkedNum = 0;
        this.cartInfo.forEach(function (element) {
          if (element.isChecked == true) {
            checkedNum++;
          }
        });
        if (checkedNum == 0) {
          wx.showToast({
            title: '你买啥？',
            icon: true,
            duration: 1000,
            mask: true
          });
        }
        // 3.判断是否用户登入
        //wx.getUserInfor只能获取非私密的信息
        // wx.request()发起业务请求携带，自定义登入态
        // 判断登入状态
        // 判断是否保存了token
        var promise = this.$invoke('toast', 'show', {
          title: '自定义标题',
          img: '../image/buy.png'
        });

        promise.then(function (d) {
          console.log('toast done');
        });

        wx.getStorage({
          key: 'token',
          success: function success(res) {
            console.log('登入成功了，去创建购物订单');
            console.log(res.data);
            // 获取同步token
            var token = wx.getStorageSync('token');
            // 获取订单价格
            // var totalPrice = this.totalPrice
            // 获取订单地址
            // var addr= this.address
            // 获取订单详细信息
            var goodsArr = [];
            _this6.cartInfo.forEach(function (element) {
              // 创建一个临时对象，用来存储数据
              var obj = {};
              obj.goods_id = element.goods_id;
              obj.goods_number = _this6.cartKey[element.goods_id];
              obj.goods_price = element.goods_price;
            });

            common.request({
              url: 'api/public/v1/my/orders/create',
              methods: 'post',
              header: {
                Authorization: token
              },
              data: {
                order_price: _this6.totalPrice,
                consignee_addr: '' + _this6.address.userName + _this6.address.provinceName + _this6.address.cityName + _this6.address.ccountName + _this6.address.detailInfo,
                goods: goodsArr
              },
              success: function success(res) {
                console.log('创建订单成功');
                console.log(res);
              }
            });
          },
          fail: function fail(res) {
            wx.showModal({
              title: '去登入',
              content: '这是一个模态弹窗',
              showCancel: true,
              cancelText: '残忍拒绝',
              confirmText: '去登入',
              success: function success(res) {
                if (res.confirm) {
                  // console.log('用户点击确定')
                  // wepy.navigateTo({ url: '/pages/me' });//tab栏内部跳转
                  wx.switchTab({
                    url: '/pages/me'
                  });
                } else if (res.cancel) {
                  console.log('用户点击取消');
                }
              }
            });
          }
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {
      // 获取订单总金额
      totalPrice: function totalPrice() {
        var totalPrice = 0;
        for (var i = 0; i < this.cartInfo.length; i++) {
          if (this.cartInfo[i].isChecked == true) {
            var num = this.cartKey[this.cartInfo[i].goods_id];
            var price = this.cartInfo[i].goods_price;
            totalPrice += num * price;
          }
        }
        // 保存总金额
        this.totalPrice = totalPrice;
        return totalPrice;
      },

      // 计算被选中的个数
      checkedNum: function checkedNum() {
        var num = 0;
        this.cartInfo.forEach(function (element) {
          if (element.isChecked == true) {
            num++;
          }
        });
        return num;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('cart-loading');
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this7 = this;

      // console.log(this.cartKey)
      // 获取本地存储的数据
      wx.getStorage({
        key: 'cartKey',
        success: function success(res) {
          // 获取商品数量是个对象
          // console.log(res.data)
          _this7.isFull = true;
          _this7.cartKey = res.data;
          _this7.$apply();
          var goods_ids = '';
          for (var key in _this7.cartKey) {
            goods_ids += key;
            goods_ids += ',';
          }
          // 去掉字符串最后一个逗号
          goods_ids = goods_ids.slice(0, -1);
          // console.log(goods_ids)
          common.request({
            url: 'api/public/v1/goods/goodslist',
            data: {
              goods_ids: goods_ids
            },
            success: function success(res) {
              // 给每一个选择都选上
              for (var i = 0; i < res.data.message.length; i++) {
                res.data.message[i].isChecked = true;
              }
              // console.log(res)
              _this7.cartInfo = res.data.message;
              _this7.$apply();
              // console.log(this.cartInfo)
              // 保存商品到缓存中
              wx.setStorage({
                key: 'cartInfo',
                data: _this7.cartInfo
              });
            },
            fail: function fail(res) {
              console.log('服务器请求失败');
            }
          });
        },
        fail: function fail(res) {
          _this7.isFull = false;
          _this7.$apply();
        }
      });
      //  将地址存放在本地存储
      wx.getStorage({
        key: 'address',
        success: function success(res) {
          // console.log(res)
          _this7.address = res.data;
          _this7.$apply();
        }
      });
    }
  }]);

  return Cart;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Cart , 'pages/cart'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiY29tbW9uIiwicmVxdWlyZSIsIkNhcnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImlzRnVsbCIsImNhcnRJbmZvIiwiY2FydEtleSIsInVuZGVmaW5lZCIsImFkZHJlc3MiLCJpc0FsbGNoZWNrZWQiLCJ0b3RhbFByaWNlIiwiY29tcG9uZW50cyIsInRvYXN0IiwiVG9hc3QiLCJtZXRob2RzIiwiZ2V0QWRkciIsInd4IiwiY2hvb3NlQWRkcmVzcyIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJzZXRTdG9yYWdlIiwia2V5IiwiY2hhbmdlIiwiaW5kZXgiLCJudW0iLCJpc0NoZWNrZWQiLCJmb3JFYWNoIiwiZWxlbWVudCIsInRvdGFsIiwibGVuZ3RoIiwic3ViQ2xpY2siLCJpZCIsIndlcHkiLCJzaG93TW9kZWxsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwiY29uZmlybSIsImkiLCJnb29kc19pZCIsInNwbGljZSIsInJlbW92ZVN0b3JhZ2UiLCJhZGRDbGljayIsImFsbENoZWNrZWQiLCJidXlNb25leSIsImUiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiY2hlY2tlZE51bSIsInByb21pc2UiLCIkaW52b2tlIiwiaW1nIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdG9yYWdlIiwidG9rZW4iLCJnZXRTdG9yYWdlU3luYyIsImdvb2RzQXJyIiwib2JqIiwiZ29vZHNfbnVtYmVyIiwiZ29vZHNfcHJpY2UiLCJyZXF1ZXN0IiwidXJsIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsIm9yZGVyX3ByaWNlIiwiY29uc2lnbmVlX2FkZHIiLCJ1c2VyTmFtZSIsInByb3ZpbmNlTmFtZSIsImNpdHlOYW1lIiwiY2NvdW50TmFtZSIsImRldGFpbEluZm8iLCJnb29kcyIsImZhaWwiLCJzaG93TW9kYWwiLCJzd2l0Y2hUYWIiLCJjYW5jZWwiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwicHJpY2UiLCJnb29kc19pZHMiLCJzbGljZSIsIm1lc3NhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsb0JBQVIsQ0FBYjs7SUFDcUJDLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLEtBREg7QUFFTDtBQUNBQyxnQkFBVSxFQUhMO0FBSUw7QUFDQUMsZUFBU0MsU0FMSjtBQU1MO0FBQ0FDLGVBQVNELFNBUEo7QUFRTDtBQUNBRSxvQkFBYyxJQVRUO0FBVUw7QUFDQUMsa0JBQVk7QUFYUCxLLFFBYVBDLFUsR0FBYTtBQUNYQyxhQUFPQztBQURJLEssUUFHYkMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFBQTs7QUFDUkMsV0FBR0MsYUFBSCxDQUFpQjtBQUNmQyxtQkFBUyxzQkFBTztBQUNkLG1CQUFLVixPQUFMLEdBQWVXLEdBQWY7QUFDQSxtQkFBS0MsTUFBTDtBQUNBSixlQUFHSyxVQUFILENBQWM7QUFDWkMsbUJBQUssU0FETztBQUVabkIsb0JBQU1nQjtBQUZNLGFBQWQ7QUFJRDtBQVJjLFNBQWpCO0FBVUQsT0FaTzs7QUFhUjtBQUNBSSxZQWRRLGtCQWNEQyxLQWRDLEVBY007QUFBQTs7QUFDWixZQUFJQyxNQUFNLENBQVY7QUFDQSxhQUFLcEIsUUFBTCxDQUFjbUIsS0FBZCxFQUFxQkUsU0FBckIsR0FBaUMsQ0FBQyxLQUFLckIsUUFBTCxDQUFjbUIsS0FBZCxFQUFxQkUsU0FBdkQ7QUFDQSxhQUFLckIsUUFBTCxDQUFjc0IsT0FBZCxDQUFzQixtQkFBVztBQUMvQixjQUFJQyxRQUFRRixTQUFSLElBQXFCLEtBQXpCLEVBQWdDO0FBQzlCLG1CQUFLakIsWUFB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eEIsSUFBSWhCLElBQUosQ0FBU3dGLE9BQVQsQ0FBaUI3RCxNQUFyQyxFQUE2Q2EsR0FBN0MsRUFBa0Q7QUFDaER4QixvQkFBSWhCLElBQUosQ0FBU3dGLE9BQVQsQ0FBaUJoRCxDQUFqQixFQUFvQmpCLFNBQXBCLEdBQWdDLElBQWhDO0FBQ0Q7QUFDRDtBQUNBLHFCQUFLckIsUUFBTCxHQUFnQmMsSUFBSWhCLElBQUosQ0FBU3dGLE9BQXpCO0FBQ0EscUJBQUt2RSxNQUFMO0FBQ0E7QUFDQTtBQUNBSixpQkFBR0ssVUFBSCxDQUFjO0FBQ1pDLHFCQUFLLFVBRE87QUFFWm5CLHNCQUFNLE9BQUtFO0FBRkMsZUFBZDtBQUlELGFBbkJZO0FBb0JiNEUsa0JBQU0sbUJBQU87QUFDWHJCLHNCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBdEJZLFdBQWY7QUF3QkQsU0F4Q1c7QUF5Q1pvQixjQUFNLG1CQUFPO0FBQ1gsaUJBQUs3RSxNQUFMLEdBQWMsS0FBZDtBQUNBLGlCQUFLZ0IsTUFBTDtBQUNEO0FBNUNXLE9BQWQ7QUE4Q0E7QUFDQUosU0FBRzhDLFVBQUgsQ0FBYztBQUNaeEMsYUFBSyxTQURPO0FBRVpKLGlCQUFTLHNCQUFPO0FBQ2Q7QUFDQSxpQkFBS1YsT0FBTCxHQUFlVyxJQUFJaEIsSUFBbkI7QUFDQSxpQkFBS2lCLE1BQUw7QUFDRDtBQU5XLE9BQWQ7QUFRRDs7OztFQTlTK0JhLGVBQUsyRCxJOztrQkFBbEI1RixJIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG52YXIgY29tbW9uID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tbW9uLmpzJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGlzRnVsbDogZmFsc2UsXHJcbiAgICAvLyDotK3nianovabllYblk4Hor6bnu4bkv6Hmga9cclxuICAgIGNhcnRJbmZvOiBbXSxcclxuICAgIC8vIOS/neWtmOagh+W/l+WVhuWTgeeahOmUruWAvD096LSt5Lmw5Liq5pWwXHJcbiAgICBjYXJ0S2V5OiB1bmRlZmluZWQsXHJcbiAgICAvLyDkv53lrZjnlKjmiLfmlLbotKfkv6Hmga9cclxuICAgIGFkZHJlc3M6IHVuZGVmaW5lZCxcclxuICAgIC8vIOWFqOmAieS4jeWFqOmAiVxyXG4gICAgaXNBbGxjaGVja2VkOiB0cnVlLFxyXG4gICAgLy8g6K6w5b2V5oC76YeR6aKdXHJcbiAgICB0b3RhbFByaWNlOiAwXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICB0b2FzdDogVG9hc3RcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGdldEFkZHIoKSB7XHJcbiAgICAgIHd4LmNob29zZUFkZHJlc3Moe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFkZHJlc3MgPSByZXNcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdhZGRyZXNzJyxcclxuICAgICAgICAgICAgZGF0YTogcmVzXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+W9k+mAieahhlxyXG4gICAgY2hhbmdlKGluZGV4KSB7XHJcbiAgICAgIHZhciBudW0gPSAwXHJcbiAgICAgIHRoaXMuY2FydEluZm9baW5kZXhdLmlzQ2hlY2tlZCA9ICF0aGlzLmNhcnRJbmZvW2luZGV4XS5pc0NoZWNrZWRcclxuICAgICAgdGhpcy5jYXJ0SW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmlzQ2hlY2tlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhpcy5pc0FsbGNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBudW0rK1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy8g5Yik5pat5oC75Liq5pWw5ZKM6YCJ5Lit55qE5Liq5pWwXHJcbiAgICAgdmFyIHRvdGFsID0gdGhpcy5jYXJ0SW5mby5sZW5ndGhcclxuICAgICBpZihudW09PXRvdGFsKXtcclxuICAgICAgICB0aGlzLmlzQWxsY2hlY2tlZCA9IHRydWVcclxuICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3ViQ2xpY2soaWQpIHtcclxuICAgICAgLy8g5o+Q56S655So5oi3IHd4LnNob3dNb2RsZT095rKh5YaZXHJcbiAgICAgIGlmICh0aGlzLmNhcnRLZXlbaWRdID09IDEpIHtcclxuICAgICAgICB3ZXB5LnNob3dNb2RlbGwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+S9oOaDs+a4healmuS6hj8nLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcclxuICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLFxyXG4gICAgICAgICAgY2FuY2VsQ29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcclxuICAgICAgICAgIGNvbmZpcm1Db2xvcjogJyMzQ0M1MUYnLFxyXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtID09IHRydWUpIHtcclxuICAgICAgICAgICAgICB0aGlzLmNhcnRLZXlbaWRdLS1cclxuICAgICAgICAgICAgICBpZiAodGhpcy5jYXJ0S2V5W2lkXSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliKDpmaTlr7nosaHkuK3mn5DkuKrlgLwg55SoZGVsZXRlXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jYXJ0S2V5W2lkXVxyXG4gICAgICAgICAgICAgICAgLy8gIOmHjeaWsOiuvue9ruacrOWcsOe8k+WtmOmUruWAvFxyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ2NhcnRLZXknLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmNhcnRLZXlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAg5Yig6Zmk5pys5Zyw5a2Y5YKo5ZWG5ZOB5Lit55qE5ZWG5ZOBXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FydEluZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGlkID09IHRoaXMuY2FydEluZm9baV0uZ29vZHNfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnRJbmZvLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIOajgOafpeaVsOaNruS4gOadoemDveayoeaciT095rKh5YaZXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY2FydEluZm8ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGdWxsID09IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAga2V5OiAnY2FydEtleSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXJ0S2V5W2lkXS0tXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRDbGljayhpZCkge1xyXG4gICAgICB0aGlzLmNhcnRLZXlbaWRdKytcclxuICAgIH0sXHJcbiAgICBhbGxDaGVja2VkKCkge1xyXG4gICAgICB0aGlzLmlzQWxsY2hlY2tlZCA9ICF0aGlzLmlzQWxsY2hlY2tlZFxyXG4gICAgICAvLyBmb3JlYWNo6YGN5Y6G5pWw57uE5peg6L+U5Zue5YC8ICDkuI5tYXDor63ms5Xnm7jkvLwgbWFw5pyJ6L+U5Zue5YC8XHJcbiAgICAgIHRoaXMuY2FydEluZm8uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmlzQ2hlY2tlZCA9IHRoaXMuaXNBbGxjaGVja2VkXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYnV5TW9uZXkoZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAvLyAxLuWIpOaWreWcsOWdgOaYr+WQpumAieS4rVxyXG4gICAgICBpZiAodGhpcy5hZGRyZXNzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeaUtui0p+WcsOWdgCcsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICAvLyAyLuWIpOaWreaYr+WQpuWLvumAiei0reS5sOWVhuWTgVxyXG4gICAgICB2YXIgY2hlY2tlZE51bSA9IDBcclxuICAgICAgdGhpcy5jYXJ0SW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmlzQ2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBjaGVja2VkTnVtKytcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGlmIChjaGVja2VkTnVtID09IDApIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfkvaDkubDllaXvvJ8nLFxyXG4gICAgICAgICAgaWNvbjogdHJ1ZSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgLy8gMy7liKTmlq3mmK/lkKbnlKjmiLfnmbvlhaVcclxuICAgICAgLy93eC5nZXRVc2VySW5mb3Llj6rog73ojrflj5bpnZ7np4Hlr4bnmoTkv6Hmga9cclxuICAgICAgLy8gd3gucmVxdWVzdCgp5Y+R6LW35Lia5Yqh6K+35rGC5pC65bim77yM6Ieq5a6a5LmJ55m75YWl5oCBXHJcbiAgICAgIC8vIOWIpOaWreeZu+WFpeeKtuaAgVxyXG4gICAgICAvLyDliKTmlq3mmK/lkKbkv53lrZjkuoZ0b2tlblxyXG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcclxuICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXHJcbiAgICAgICAgaW1nOiAnLi4vaW1hZ2UvYnV5LnBuZydcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHByb21pc2UudGhlbihkID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZG9uZScpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICd0b2tlbicsXHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlhaXmiJDlip/kuobvvIzljrvliJvlu7rotK3nianorqLljZUnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICAvLyDojrflj5blkIzmraV0b2tlblxyXG4gICAgICAgICAgdmFyIHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgICAgIC8vIOiOt+WPluiuouWNleS7t+agvFxyXG4gICAgICAgICAgLy8gdmFyIHRvdGFsUHJpY2UgPSB0aGlzLnRvdGFsUHJpY2VcclxuICAgICAgICAgIC8vIOiOt+WPluiuouWNleWcsOWdgFxyXG4gICAgICAgICAgLy8gdmFyIGFkZHI9IHRoaXMuYWRkcmVzc1xyXG4gICAgICAgICAgLy8g6I635Y+W6K6i5Y2V6K+m57uG5L+h5oGvXHJcbiAgICAgICAgICB2YXIgZ29vZHNBcnIgPSBbXVxyXG4gICAgICAgICAgdGhpcy5jYXJ0SW5mby5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyDliJvlu7rkuIDkuKrkuLTml7blr7nosaHvvIznlKjmnaXlrZjlgqjmlbDmja5cclxuICAgICAgICAgICAgdmFyIG9iaiA9IHt9XHJcbiAgICAgICAgICAgIG9iai5nb29kc19pZCA9IGVsZW1lbnQuZ29vZHNfaWRcclxuICAgICAgICAgICAgb2JqLmdvb2RzX251bWJlciA9IHRoaXMuY2FydEtleVtlbGVtZW50Lmdvb2RzX2lkXVxyXG4gICAgICAgICAgICBvYmouZ29vZHNfcHJpY2UgPSBlbGVtZW50Lmdvb2RzX3ByaWNlXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGNvbW1vbi5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnYXBpL3B1YmxpYy92MS9teS9vcmRlcnMvY3JlYXRlJyxcclxuICAgICAgICAgICAgbWV0aG9kczogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgb3JkZXJfcHJpY2U6IHRoaXMudG90YWxQcmljZSxcclxuICAgICAgICAgICAgICBjb25zaWduZWVfYWRkcjogYCR7dGhpcy5hZGRyZXNzLnVzZXJOYW1lfSR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MucHJvdmluY2VOYW1lXHJcbiAgICAgICAgICAgICAgfSR7dGhpcy5hZGRyZXNzLmNpdHlOYW1lfSR7dGhpcy5hZGRyZXNzLmNjb3VudE5hbWV9JHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcy5kZXRhaWxJbmZvXHJcbiAgICAgICAgICAgICAgfWAsXHJcbiAgICAgICAgICAgICAgZ29vZHM6IGdvb2RzQXJyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7uuiuouWNleaIkOWKnycpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogcmVzID0+IHtcclxuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5Y6755m75YWlJyxcclxuICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeW8ueeqlycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWw6dHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsVGV4dDon5q6L5b+N5ouS57udJyxcclxuICAgICAgICAgICAgY29uZmlybVRleHQ6J+WOu+eZu+WFpScsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICAvLyB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvbWUnIH0pOy8vdGFi5qCP5YaF6YOo6Lez6L2sXHJcbiAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6Jy9wYWdlcy9tZSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgd2F0Y2ggPSB7fVxyXG4gIGNvbXB1dGVkID0ge1xyXG4gICAgLy8g6I635Y+W6K6i5Y2V5oC76YeR6aKdXHJcbiAgICB0b3RhbFByaWNlKCkge1xyXG4gICAgICB2YXIgdG90YWxQcmljZSA9IDBcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhcnRJbmZvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FydEluZm9baV0uaXNDaGVja2VkID09IHRydWUpIHtcclxuICAgICAgICAgIHZhciBudW0gPSB0aGlzLmNhcnRLZXlbdGhpcy5jYXJ0SW5mb1tpXS5nb29kc19pZF1cclxuICAgICAgICAgIHZhciBwcmljZSA9IHRoaXMuY2FydEluZm9baV0uZ29vZHNfcHJpY2VcclxuICAgICAgICAgIHRvdGFsUHJpY2UgKz0gbnVtICogcHJpY2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8g5L+d5a2Y5oC76YeR6aKdXHJcbiAgICAgIHRoaXMudG90YWxQcmljZSA9IHRvdGFsUHJpY2VcclxuICAgICAgcmV0dXJuIHRvdGFsUHJpY2VcclxuICAgIH0sXHJcbiAgICAvLyDorqHnrpfooqvpgInkuK3nmoTkuKrmlbBcclxuICAgIGNoZWNrZWROdW0oKSB7XHJcbiAgICAgIHZhciBudW0gPSAwXHJcbiAgICAgIHRoaXMuY2FydEluZm8uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudC5pc0NoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgbnVtKytcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBudW1cclxuICAgIH1cclxuICB9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NhcnQtbG9hZGluZycpXHJcbiAgfVxyXG4gIG9uU2hvdygpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2FydEtleSlcclxuICAgIC8vIOiOt+WPluacrOWcsOWtmOWCqOeahOaVsOaNrlxyXG4gICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgIGtleTogJ2NhcnRLZXknLFxyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIC8vIOiOt+WPluWVhuWTgeaVsOmHj+aYr+S4quWvueixoVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgIHRoaXMuaXNGdWxsID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuY2FydEtleSA9IHJlcy5kYXRhXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIHZhciBnb29kc19pZHMgPSAnJ1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY2FydEtleSkge1xyXG4gICAgICAgICAgZ29vZHNfaWRzICs9IGtleVxyXG4gICAgICAgICAgZ29vZHNfaWRzICs9ICcsJ1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDljrvmjonlrZfnrKbkuLLmnIDlkI7kuIDkuKrpgJflj7dcclxuICAgICAgICBnb29kc19pZHMgPSBnb29kc19pZHMuc2xpY2UoMCwgLTEpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ29vZHNfaWRzKVxyXG4gICAgICAgIGNvbW1vbi5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogJ2FwaS9wdWJsaWMvdjEvZ29vZHMvZ29vZHNsaXN0JyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZ29vZHNfaWRzOiBnb29kc19pZHNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyDnu5nmr4/kuIDkuKrpgInmi6npg73pgInkuIpcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMuZGF0YS5tZXNzYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgcmVzLmRhdGEubWVzc2FnZVtpXS5pc0NoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB0aGlzLmNhcnRJbmZvID0gcmVzLmRhdGEubWVzc2FnZVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2FydEluZm8pXHJcbiAgICAgICAgICAgIC8vIOS/neWtmOWVhuWTgeWIsOe8k+WtmOS4rVxyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICBrZXk6ICdjYXJ0SW5mbycsXHJcbiAgICAgICAgICAgICAgZGF0YTogdGhpcy5jYXJ0SW5mb1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmnI3liqHlmajor7fmsYLlpLHotKUnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0Z1bGwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vICDlsIblnLDlnYDlrZjmlL7lnKjmnKzlnLDlrZjlgqhcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdhZGRyZXNzJyxcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gcmVzLmRhdGFcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==