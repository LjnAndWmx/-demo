'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _searchBar = require('./../comments/searchBar.js');

var _searchBar2 = _interopRequireDefault(_searchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 引入自己模板，必须使用相对路径
var common = require('./../utils/common.js');
// 引入组件

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '优购'
    }, _this.data = {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      swiperData: '',
      navData: '',
      products: '',
      isHidden: true
    }, _this.methods = {
      onPageScroll: function onPageScroll(event) {
        // console.log(event)
        // console.log('我滚动啦')
        if (event.scrollTop > 100) {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      },

      returnTop: function returnTop() {
        // console.log('去顶部了呀')
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 1000
        });
      }
    }, _this.components = {
      searchBar: _searchBar2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      // console.log('onLoad');
      // console.log(common);
      //轮播图区域
      common.request({
        url: 'api/public/v1/home/swiperdata',
        method: 'GET',
        success: function success(backData) {
          _this2.swiperData = backData.data.message;
          _this2.$apply();
        },
        fail: function fail() {}
      });
      //分类区域
      common.request({
        url: 'api/public/v1/home/catitems',
        method: 'GET',
        success: function success(backData) {
          _this2.navData = backData.data.message;
          _this2.$apply();
        }
      });
      //精选时装
      common.request({
        url: 'api/public/v1/home/floordata',
        method: 'GET',
        success: function success(backData) {
          // console.log(backData);
          _this2.products = backData.data.message;
          _this2.$apply();
        }
      });

      // wx.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
      //   menthod: 'GET',
      //   success: backData => {
      //     // this指向同级
      //     // console.log(backData);
      //     this.swiperData = backData.data.message
      //     // 异步操作必须添加this.$apply();
      //     this.$apply()
      //     // console.log(this.swiperData)
      //   },
      //   fail: () => {}
      // })
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbW1vbiIsInJlcXVpcmUiLCJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInN3aXBlckRhdGEiLCJuYXZEYXRhIiwicHJvZHVjdHMiLCJpc0hpZGRlbiIsIm1ldGhvZHMiLCJvblBhZ2VTY3JvbGwiLCJldmVudCIsInNjcm9sbFRvcCIsInJldHVyblRvcCIsInd4IiwicGFnZVNjcm9sbFRvIiwiY29tcG9uZW50cyIsInNlYXJjaEJhciIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwiYmFja0RhdGEiLCJtZXNzYWdlIiwiJGFwcGx5IiwiZmFpbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBS0E7Ozs7Ozs7Ozs7OztBQUhBO0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxvQkFBUixDQUFiO0FBQ0E7O0lBR3FCQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMscUJBQWUsSUFEVjtBQUVMQyxnQkFBVSxJQUZMO0FBR0xDLGdCQUFVLElBSEw7QUFJTEMsZ0JBQVUsSUFKTDtBQUtMQyxrQkFBWSxFQUxQO0FBTUxDLGVBQVMsRUFOSjtBQU9MQyxnQkFBVSxFQVBMO0FBUUxDLGdCQUFVO0FBUkwsSyxRQVVQQyxPLEdBQVU7QUFDUkMsa0JBRFEsd0JBQ0tDLEtBREwsRUFDWTtBQUNsQjtBQUNBO0FBQ0EsWUFBSUEsTUFBTUMsU0FBTixHQUFrQixHQUF0QixFQUEyQjtBQUN6QixlQUFLSixRQUFMLEdBQWdCLEtBQWhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBQ0YsT0FUTzs7QUFVUkssaUJBQVcscUJBQU07QUFDZjtBQUNBQyxXQUFHQyxZQUFILENBQWdCO0FBQ2RILHFCQUFXLENBREc7QUFFZFIsb0JBQVU7QUFGSSxTQUFoQjtBQUlEO0FBaEJPLEssUUFrQlZZLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLOzs7Ozs2QkFHSjtBQUFBOztBQUNQO0FBQ0E7QUFDQTtBQUNBdEIsYUFBT3VCLE9BQVAsQ0FBZTtBQUNiQyxhQUFLLCtCQURRO0FBRWJDLGdCQUFRLEtBRks7QUFHYkMsaUJBQVMsMkJBQVk7QUFDbkIsaUJBQUtoQixVQUFMLEdBQWtCaUIsU0FBU3RCLElBQVQsQ0FBY3VCLE9BQWhDO0FBQ0EsaUJBQUtDLE1BQUw7QUFDRCxTQU5ZO0FBT2JDLGNBQU0sZ0JBQU0sQ0FBRTtBQVBELE9BQWY7QUFTQTtBQUNBOUIsYUFBT3VCLE9BQVAsQ0FBZTtBQUNiQyxhQUFLLDZCQURRO0FBRWJDLGdCQUFRLEtBRks7QUFHYkMsaUJBQVMsMkJBQVk7QUFDbkIsaUJBQUtmLE9BQUwsR0FBZWdCLFNBQVN0QixJQUFULENBQWN1QixPQUE3QjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0Q7QUFOWSxPQUFmO0FBUUE7QUFDQTdCLGFBQU91QixPQUFQLENBQWU7QUFDYkMsYUFBSyw4QkFEUTtBQUViQyxnQkFBUSxLQUZLO0FBR2JDLGlCQUFTLDJCQUFZO0FBQ25CO0FBQ0EsaUJBQUtkLFFBQUwsR0FBZ0JlLFNBQVN0QixJQUFULENBQWN1QixPQUE5QjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0Q7QUFQWSxPQUFmOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUFqRmdDRSxlQUFLQyxJOztrQkFBbkI5QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4vLyDlvJXlhaXoh6rlt7HmqKHmnb/vvIzlv4Xpobvkvb/nlKjnm7jlr7not6/lvoRcbnZhciBjb21tb24gPSByZXF1aXJlKCcuLi91dGlscy9jb21tb24uanMnKVxuLy8g5byV5YWl57uE5Lu2XG5pbXBvcnQgc2VhcmNoQmFyIGZyb20gJy4uL2NvbW1lbnRzL3NlYXJjaEJhcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S8mOi0rSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgc3dpcGVyRGF0YTogJycsXG4gICAgbmF2RGF0YTogJycsXG4gICAgcHJvZHVjdHM6ICcnLFxuICAgIGlzSGlkZGVuOiB0cnVlXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvblBhZ2VTY3JvbGwoZXZlbnQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgLy8gY29uc29sZS5sb2coJ+aIkea7muWKqOWVpicpXG4gICAgICBpZiAoZXZlbnQuc2Nyb2xsVG9wID4gMTAwKSB7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0hpZGRlbiA9IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIHJldHVyblRvcDogKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ+WOu+mhtumDqOS6huWRgCcpXG4gICAgICB3eC5wYWdlU2Nyb2xsVG8oe1xuICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIHNlYXJjaEJhcjogc2VhcmNoQmFyXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkxvYWQnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21tb24pO1xuICAgIC8v6L2u5pKt5Zu+5Yy65Z+fXG4gICAgY29tbW9uLnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnYXBpL3B1YmxpYy92MS9ob21lL3N3aXBlcmRhdGEnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGJhY2tEYXRhID0+IHtcbiAgICAgICAgdGhpcy5zd2lwZXJEYXRhID0gYmFja0RhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoKSA9PiB7fVxuICAgIH0pXG4gICAgLy/liIbnsbvljLrln59cbiAgICBjb21tb24ucmVxdWVzdCh7XG4gICAgICB1cmw6ICdhcGkvcHVibGljL3YxL2hvbWUvY2F0aXRlbXMnLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGJhY2tEYXRhID0+IHtcbiAgICAgICAgdGhpcy5uYXZEYXRhID0gYmFja0RhdGEuZGF0YS5tZXNzYWdlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9KVxuICAgIC8v57K+6YCJ5pe26KOFXG4gICAgY29tbW9uLnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnYXBpL3B1YmxpYy92MS9ob21lL2Zsb29yZGF0YScsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogYmFja0RhdGEgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhiYWNrRGF0YSk7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBiYWNrRGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyB3eC5yZXF1ZXN0KHtcbiAgICAvLyAgIHVybDogJ2h0dHBzOi8vd3d3LnpoZW5nemhpY2hlbmcuY24vYXBpL3B1YmxpYy92MS9ob21lL3N3aXBlcmRhdGEnLFxuICAgIC8vICAgbWVudGhvZDogJ0dFVCcsXG4gICAgLy8gICBzdWNjZXNzOiBiYWNrRGF0YSA9PiB7XG4gICAgLy8gICAgIC8vIHRoaXPmjIflkJHlkIznuqdcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coYmFja0RhdGEpO1xuICAgIC8vICAgICB0aGlzLnN3aXBlckRhdGEgPSBiYWNrRGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAvLyAgICAgLy8g5byC5q2l5pON5L2c5b+F6aG75re75YqgdGhpcy4kYXBwbHkoKTtcbiAgICAvLyAgICAgdGhpcy4kYXBwbHkoKVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN3aXBlckRhdGEpXG4gICAgLy8gICB9LFxuICAgIC8vICAgZmFpbDogKCkgPT4ge31cbiAgICAvLyB9KVxuICB9XG59XG4iXX0=