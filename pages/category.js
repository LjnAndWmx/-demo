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

// 引入模块
var common = require('./../utils/common.js');
// 引入组件

var Category = function (_wepy$page) {
  _inherits(Category, _wepy$page);

  function Category() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Category);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Category.__proto__ || Object.getPrototypeOf(Category)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '分类'
    }, _this.data = {
      selectIndex: 0,
      categoryList: ''
    }, _this.components = {
      searchBar: _searchBar2.default
    }, _this.methods = {
      selectItem: function selectItem(event) {
        console.log(event);
        this.selectIndex = event;
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Category, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      common.request({
        url: 'api/public/v1/categories',
        success: function success(backData) {
          //  console.log(backData);
          _this2.categoryList = backData.data.message;
          _this2.$apply();
          // console.log(this.categoryList)
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Category;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Category , 'pages/category'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbImNvbW1vbiIsInJlcXVpcmUiLCJDYXRlZ29yeSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2VsZWN0SW5kZXgiLCJjYXRlZ29yeUxpc3QiLCJjb21wb25lbnRzIiwic2VhcmNoQmFyIiwibWV0aG9kcyIsInNlbGVjdEl0ZW0iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJiYWNrRGF0YSIsIm1lc3NhZ2UiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7QUFIQTtBQUNBLElBQUlBLFNBQVNDLFFBQVEsb0JBQVIsQ0FBYjtBQUNBOztJQUdxQkMsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLG1CQUFZLENBRFA7QUFFTEMsb0JBQWM7QUFGVCxLLFFBS1BDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBSWJDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsS0FESCxFQUNTO0FBQ2ZDLGdCQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxhQUFLTixXQUFMLEdBQW1CTSxLQUFuQjtBQUNEO0FBSk8sSyxRQU9WRyxNLEdBQVMsRSxRQUVUQyxLLEdBQVEsRSxRQUVSQyxRLEdBQVcsRTs7Ozs7NkJBRUY7QUFBQTs7QUFDUGpCLGFBQU9rQixPQUFQLENBQWU7QUFDYkMsYUFBSywwQkFEUTtBQUViQyxpQkFBUywyQkFBWTtBQUNuQjtBQUNBLGlCQUFLYixZQUFMLEdBQW9CYyxTQUFTaEIsSUFBVCxDQUFjaUIsT0FBbEM7QUFDQSxpQkFBS0MsTUFBTDtBQUNBO0FBQ0Q7QUFQWSxPQUFmO0FBU0Q7Ozs2QkFFUSxDQUFFOzs7O0VBdkN5QkMsZUFBS0MsSTs7a0JBQXRCdkIsUSIsImZpbGUiOiJjYXRlZ29yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyDlvJXlhaXmqKHlnZdcclxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbi5qcycpXHJcbi8vIOW8leWFpee7hOS7tlxyXG5pbXBvcnQgc2VhcmNoQmFyIGZyb20gJy4uL2NvbW1lbnRzL3NlYXJjaEJhcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YiG57G7J1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHNlbGVjdEluZGV4OjAsXHJcbiAgICBjYXRlZ29yeUxpc3Q6ICcnXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgc2VhcmNoQmFyOiBzZWFyY2hCYXJcclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBzZWxlY3RJdGVtKGV2ZW50KXtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICB0aGlzLnNlbGVjdEluZGV4ID0gZXZlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7fVxyXG5cclxuICB3YXRjaCA9IHt9XHJcblxyXG4gIGNvbXB1dGVkID0ge31cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29tbW9uLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICdhcGkvcHVibGljL3YxL2NhdGVnb3JpZXMnLFxyXG4gICAgICBzdWNjZXNzOiBiYWNrRGF0YSA9PiB7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKGJhY2tEYXRhKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5TGlzdCA9IGJhY2tEYXRhLmRhdGEubWVzc2FnZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3J5TGlzdClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uU2hvdygpIHt9XHJcbn1cclxuIl19