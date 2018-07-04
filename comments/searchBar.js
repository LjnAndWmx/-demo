'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbar = function (_wepy$component) {
  _inherits(Searchbar, _wepy$component);

  // Other properties
  function Searchbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Searchbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Searchbar.__proto__ || Object.getPrototypeOf(Searchbar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.methods = {
      toSearch: function toSearch() {
        wx.navigateTo({
          url: '../pages/search'
        });
        console.log('去搜索页');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Searchbar;
}(_wepy2.default.component);

exports.default = Searchbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaEJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hiYXIiLCJkYXRhIiwibWV0aG9kcyIsInRvU2VhcmNoIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7OztBQVdqQjs7Ozs7Ozs7Ozs7OzRMQVZBQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRTtBQUNSQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHQUMsZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFOTyxLLFFBUVZDLE0sR0FBUyxFOzs7O0VBVjBCQyxlQUFLQyxTOztrQkFBdkJYLFMiLCJmaWxlIjoic2VhcmNoQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaGJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7fVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9TZWFyY2goKXtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL3NlYXJjaCdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Y675pCc57Si6aG1JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnRzID0ge31cclxuICAgIC8vIE90aGVyIHByb3BlcnRpZXNcclxufVxyXG4iXX0=