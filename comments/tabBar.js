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

var Example = function (_wepy$component) {
    _inherits(Example, _wepy$component);

    function Example() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Example);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            tabList: {
                type: Array,
                default: []
            },
            selectIndex: {
                type: Number,
                default: 0,
                twoWay: true
            }
        }, _this.data = {}, _this.components = {}, _this.methods = {
            selectItem: function selectItem(index) {
                console.log(index);
                this.selectIndex = index;
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Example, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Example;
}(_wepy2.default.component);

exports.default = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYkJhci5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicHJvcHMiLCJ0YWJMaXN0IiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsInNlbGVjdEluZGV4IiwiTnVtYmVyIiwidHdvV2F5IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwic2VsZWN0SXRlbSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsSyxHQUFRO0FBQ0pDLHFCQUFTO0FBQ0xDLHNCQUFNQyxLQUREO0FBRUxDLHlCQUFTO0FBRkosYUFETDtBQUtKQyx5QkFBYTtBQUNUSCxzQkFBTUksTUFERztBQUVURix5QkFBUyxDQUZBO0FBR1RHLHdCQUFRO0FBSEM7QUFMVCxTLFFBV1JDLEksR0FBTyxFLFFBQ1BDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsS0FETCxFQUNZO0FBQ2RDLHdCQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxxQkFBS1AsV0FBTCxHQUFtQk8sS0FBbkI7QUFDSDtBQUpLLFMsUUFNVkcsTSxHQUFTLEUsUUFDVEMsSyxHQUFRLEUsUUFDUkMsUSxHQUFXLEU7Ozs7O2lDQUNGLENBQUU7OztpQ0FDRixDQUFFOzs7O0VBeEJzQkMsZUFBS0MsUzs7a0JBQXJCcEIsTyIsImZpbGUiOiJ0YWJCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICB0YWJMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdEluZGV4OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICAgICAgdHdvV2F5OiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHt9XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHt9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgc2VsZWN0SXRlbShpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEluZGV4ID0gaW5kZXhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudHMgPSB7fVxyXG4gICAgICAgIHdhdGNoID0ge31cclxuICAgICAgICBjb21wdXRlZCA9IHt9XHJcbiAgICAgICAgb25Mb2FkKCkge31cclxuICAgICAgICBvblNob3coKSB7fVxyXG4gICAgfVxyXG4iXX0=