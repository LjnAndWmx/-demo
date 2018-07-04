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

var Map = function (_wepy$page) {
  _inherits(Map, _wepy$page);

  function Map() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Map.__proto__ || Object.getPrototypeOf(Map)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '地址'
    }, _this.data = {}, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Map, [{
    key: 'onLoad',
    value: function onLoad() {
      // wx.chooseLocation({
      //     success: (res)=>{
      //         console.log(res)
      //     }
      // });
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          });
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Map;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Map , 'pages/map'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6WyJNYXAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsInd4IiwiZ2V0TG9jYXRpb24iLCJ0eXBlIiwic3VjY2VzcyIsInJlcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwib3BlbkxvY2F0aW9uIiwic2NhbGUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU8sRSxRQUVQQyxVLEdBQWEsRSxRQUViQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRSxRQUVUQyxLLEdBQVEsRSxRQUVSQyxRLEdBQVcsRTs7Ozs7NkJBRUY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFNBQUdDLFdBQUgsQ0FBZTtBQUNiQyxjQUFNLE9BRE8sRUFDRTtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGNBQUlDLFdBQVdELElBQUlDLFFBQW5CO0FBQ0EsY0FBSUMsWUFBWUYsSUFBSUUsU0FBcEI7QUFDQU4sYUFBR08sWUFBSCxDQUFnQjtBQUNkRixzQkFBVUEsUUFESTtBQUVkQyx1QkFBV0EsU0FGRztBQUdkRSxtQkFBTztBQUhPLFdBQWhCO0FBS0Q7QUFWWSxPQUFmO0FBWUQ7Ozs2QkFFUSxDQUFFOzs7O0VBckNvQkMsZUFBS0MsSTs7a0JBQWpCbkIsRyIsImZpbGUiOiJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zyw5Z2AJ1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHt9XHJcblxyXG4gIGNvbXBvbmVudHMgPSB7fVxyXG5cclxuICBtZXRob2RzID0ge31cclxuXHJcbiAgZXZlbnRzID0ge31cclxuXHJcbiAgd2F0Y2ggPSB7fVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIHd4LmNob29zZUxvY2F0aW9uKHtcclxuICAgIC8vICAgICBzdWNjZXNzOiAocmVzKT0+e1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgIHR5cGU6ICdnY2owMicsIC8v6L+U5Zue5Y+v5Lul55So5LqOd3gub3BlbkxvY2F0aW9u55qE57uP57qs5bqmXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHZhciBsYXRpdHVkZSA9IHJlcy5sYXRpdHVkZVxyXG4gICAgICAgIHZhciBsb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgd3gub3BlbkxvY2F0aW9uKHtcclxuICAgICAgICAgIGxhdGl0dWRlOiBsYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogbG9uZ2l0dWRlLFxyXG4gICAgICAgICAgc2NhbGU6IDI4XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uU2hvdygpIHt9XHJcbn1cclxuIl19