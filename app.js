'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index', 'pages/category', 'pages/cart', 'pages/me', 'pages/productDetail', 'pages/orderList', 'pages/search', 'pages/map'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#ff2d4a',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        selectedColor: '#ff2d4a',
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          iconPath: './image/icon_home@3x.png',
          selectedIconPath: './image/icon_home_active@3x.png'
        }, {
          pagePath: 'pages/category',
          text: '分类',
          iconPath: './image/icon_category@3x.png',
          selectedIconPath: './image/icon_category_active@3x.png'
        }, {
          pagePath: 'pages/cart',
          text: '购物车',
          iconPath: './image/icon_cart@3x.png',
          selectedIconPath: './image/icon_cart_active@3x.png'
        }, {
          pagePath: 'pages/me',
          text: '我的',
          iconPath: './image/icon_me@3x.png',
          selectedIconPath: './image/icon_me_active@3x.png'
        }]
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzTEFFRUEsTSxHQUFTO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsZ0JBRkssRUFHTCxZQUhLLEVBSUwsVUFKSyxFQUtMLHFCQUxLLEVBTUwsaUJBTkssRUFPTCxjQVBLLEVBUUwsV0FSSyxDQURBO0FBV1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FYRDtBQWlCUEMsY0FBUTtBQUNOQyx1QkFBZSxTQURUO0FBRU5DLGNBQU0sQ0FBQztBQUNIQyxvQkFBVSxhQURQO0FBRUhDLGdCQUFNLElBRkg7QUFHSEMsb0JBQVUsMEJBSFA7QUFJSEMsNEJBQWtCO0FBSmYsU0FBRCxFQU1KO0FBQ0VILG9CQUFVLGdCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsOEJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBTkksRUFZSjtBQUNFSCxvQkFBVSxZQURaO0FBRUVDLGdCQUFNLEtBRlI7QUFHRUMsb0JBQVUsMEJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBWkksRUFrQko7QUFDRUgsb0JBQVUsVUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHdCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQWxCSTtBQUZBO0FBakJELEs7Ozs7OytCQThDRTtBQUNUQyxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEOzs7O0VBakQwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgJ3BhZ2VzL2NhdGVnb3J5JyxcbiAgICAgICAgJ3BhZ2VzL2NhcnQnLFxuICAgICAgICAncGFnZXMvbWUnLFxuICAgICAgICAncGFnZXMvcHJvZHVjdERldGFpbCcsXG4gICAgICAgICdwYWdlcy9vcmRlckxpc3QnLFxuICAgICAgICAncGFnZXMvc2VhcmNoJyxcbiAgICAgICAgJ3BhZ2VzL21hcCdcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZjJkNGEnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xuICAgICAgfSxcbiAgICAgIHRhYkJhcjoge1xuICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmMmQ0YScsXG4gICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlL2ljb25faG9tZUAzeC5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2UvaWNvbl9ob21lX2FjdGl2ZUAzeC5wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NhdGVnb3J5JyxcbiAgICAgICAgICAgIHRleHQ6ICfliIbnsbsnLFxuICAgICAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlL2ljb25fY2F0ZWdvcnlAM3gucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlL2ljb25fY2F0ZWdvcnlfYWN0aXZlQDN4LnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvY2FydCcsXG4gICAgICAgICAgICB0ZXh0OiAn6LSt54mp6L2mJyxcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS9pY29uX2NhcnRAM3gucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlL2ljb25fY2FydF9hY3RpdmVAM3gucG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9tZScsXG4gICAgICAgICAgICB0ZXh0OiAn5oiR55qEJyxcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi9pbWFnZS9pY29uX21lQDN4LnBuZycsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZS9pY29uX21lX2FjdGl2ZUAzeC5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uIGxhdW5jaCcpXG4gICAgfVxuICB9XG4iXX0=