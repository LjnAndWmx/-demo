'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tabBar = require('./../comments/tabBar.js');

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orderlist = function (_wepy$page) {
  _inherits(Orderlist, _wepy$page);

  function Orderlist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Orderlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Orderlist.__proto__ || Object.getPrototypeOf(Orderlist)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单'
    }, _this.data = {
      selectIndex: 0,
      tabList: ['全部', '未付款', '已付款', '付不了']
    }, _this.$repeat = {}, _this.$props = { "tabBar": { "xmlns:v-bind": "", "v-bind:tabList.sync": "tabList", "v-bind:selectIndex.once": "{{selectIndex}}" } }, _this.$events = {}, _this.components = {
      tabBar: _tabBar2.default
    }, _this.methods = {
      //  selectItem(index) {
      //   console.log(index)
      //   this.selectIndex = index
      // }
      // click(event){
      //   console.log(event);
      //   this.selectIndex = event
      // }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Orderlist, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Orderlist;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Orderlist , 'pages/orderList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyTGlzdC5qcyJdLCJuYW1lcyI6WyJPcmRlcmxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlbGVjdEluZGV4IiwidGFiTGlzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYkJhciIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsbUJBQVksQ0FEUDtBQUVMQyxlQUFRLENBQUMsSUFBRCxFQUFNLEtBQU4sRUFBWSxLQUFaLEVBQWtCLEtBQWxCO0FBRkgsSyxRQUtSQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELDJCQUEwQixpQkFBN0UsRUFBVixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFJWkMsTyxHQUFVO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJRLEssUUFXVkMsTSxHQUFTLEUsUUFFVEMsSyxHQUFRLEUsUUFFUkMsUSxHQUFXLEU7Ozs7OzZCQUVGLENBQUU7Ozs2QkFFRixDQUFFOzs7O0VBcEMwQkMsZUFBS0MsSTs7a0JBQXZCaEIsUyIsImZpbGUiOiJvcmRlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHRhYkJhciBmcm9tICcuLi9jb21tZW50cy90YWJCYXInXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVybGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuouWNlSdcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBzZWxlY3RJbmRleDowLFxyXG4gICAgdGFiTGlzdDpbJ+WFqOmDqCcsJ+acquS7mOasvicsJ+W3suS7mOasvicsJ+S7mOS4jeS6hiddXHJcbiAgfVxyXG5cclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiQmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0YWJMaXN0LnN5bmNcIjpcInRhYkxpc3RcIixcInYtYmluZDpzZWxlY3RJbmRleC5vbmNlXCI6XCJ7e3NlbGVjdEluZGV4fX1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgdGFiQmFyXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy8gIHNlbGVjdEl0ZW0oaW5kZXgpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAvLyAgIHRoaXMuc2VsZWN0SW5kZXggPSBpbmRleFxyXG4gICAgLy8gfVxyXG4gICAgLy8gY2xpY2soZXZlbnQpe1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAvLyAgIHRoaXMuc2VsZWN0SW5kZXggPSBldmVudFxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge31cclxuXHJcbiAgd2F0Y2ggPSB7fVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG9uTG9hZCgpIHt9XHJcblxyXG4gIG9uU2hvdygpIHt9IFxyXG59XHJcbiJdfQ==