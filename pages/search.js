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

// 引入功能
var common = require('./../utils/common.js');

var Searchlist = function (_wepy$page) {
  _inherits(Searchlist, _wepy$page);

  function Searchlist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Searchlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Searchlist.__proto__ || Object.getPrototypeOf(Searchlist)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.data = {
      isHidden: true,
      inputValue: '',
      historyData: [],
      searchDataList: [],
      searchDefault: [],
      status: false,
      selectOptionIndex: 0,
      priceSort: true,
      numSort: true
    }, _this.components = {}, _this.methods = {
      inputValue: function inputValue(e) {
        // console.log(e)
        if (e.detail.value.trim().length == 0) {
          // 没有值
          this.isHidden = true;
        } else {
          // 有值
          this.isHidden = false;
        }
        this.inputValue = e.detail.value;
      },
      search: function search() {
        var _this2 = this;

        // console.log(this.inputValue)
        // 判断本地存储有数据那就不添加  用数组索引判断是否存在
        var resultIndex = this.historyData.indexOf(this.inputValue);
        // console.log(resultIndex)
        if (resultIndex != -1) {
          this.historyData.splice(resultIndex, 1);
        }
        // 长度是否越过
        if (this.historyData.length >= 3) {
          this.historyData.splice(0, 1);
        }
        // 增加到历史数据
        this.historyData.push(this.inputValue);
        wx.setStorage({
          key: 'historyData',
          data: this.historyData
        });
        // wx.showToast({
        //   title:'正在搜索,别急哦',
        //   duration:1000
        // })
        // 显示结果
        wx.showLoading({
          title: '正在搜索中...',
          mask: true
        });
        common.request({
          url: 'api/public/v1/goods/search',
          data: {
            query: this.inputValue
          },
          success: function success(res) {
            // console.log(res.data.message)

            wx.hideLoading();
            if (!res) {
              wx.showToast({
                title: '暂无数据',
                duration: 2000
              });
            }
            _this2.status = !_this2.stauts;
            if (res) {
              _this2.searchDataList = res.data.message.goods;
              _this2.searchDefault = res.data.message.goods.slice(0);
            } else {
              console.log('暂无数据');
            }
            _this2.$apply();
          },
          fail: function fail(res) {}
        });
      },
      clear: function clear() {
        this.historyData = [];
        wx.removeStorage({
          key: 'historyData'
        });
      },
      insertValue: function insertValue(res) {
        // console.log(res)
        this.inputValue = res;
        this.isHidden = false;
      },
      selectOption: function selectOption(res) {
        var _this3 = this;

        // console.log(res)
        this.selectOptionIndex = res;
        switch (res) {
          case '0':
            // console.log('zhonghe')
            this.searchDefault = this.searchDataList.silce(0);
            break;
          case '1':
            this.numSort = !this.numSort;
            // this.searchDefault = this.searchDataList.silce(0)
            this.searchDataList.sort(function (a, b) {
              if (_this3.numSort) {
                return a.goods_id - b.goods_id;
              } else {
                return b.goods_id - a.goods_id;
              }
            });
            break;
          case '2':
            this.priceSort = !this.priceSort;
            // this.searchDefault = this.searchDataList.silce(0)
            this.searchDataList.sort(function (a, b) {
              if (_this3.priceSort) {
                return b.goods_id - a.goods_id;
              } else {
                return a.goods_id - b.goods_id;
              }
            });
            break;
        }
      },
      toProductDetail: function toProductDetail(res) {
        // console.log(res)
        wx.navigateTo({
          url: '/pages/productDetail?goods_id=' + res
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Searchlist, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this4 = this;

      wx.getStorage({
        key: 'historyData',
        success: function success(res) {
          console.log(res);
          _this4.historyData = res.data;
        },
        fail: function fail(res) {
          // this.historyData = ['小米笔记本','联想笔记本','戴尔笔记本','华索笔记本','前端开发工程师','小米官方','小米笔记本啦啦啦'];
          _this4.history = [];
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Searchlist;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Searchlist , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJjb21tb24iLCJyZXF1aXJlIiwiU2VhcmNobGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaXNIaWRkZW4iLCJpbnB1dFZhbHVlIiwiaGlzdG9yeURhdGEiLCJzZWFyY2hEYXRhTGlzdCIsInNlYXJjaERlZmF1bHQiLCJzdGF0dXMiLCJzZWxlY3RPcHRpb25JbmRleCIsInByaWNlU29ydCIsIm51bVNvcnQiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJzZWFyY2giLCJyZXN1bHRJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwid3giLCJzZXRTdG9yYWdlIiwia2V5Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJyZXF1ZXN0IiwidXJsIiwicXVlcnkiLCJzdWNjZXNzIiwiaGlkZUxvYWRpbmciLCJyZXMiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiIsInN0YXV0cyIsIm1lc3NhZ2UiLCJnb29kcyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsImZhaWwiLCJjbGVhciIsInJlbW92ZVN0b3JhZ2UiLCJpbnNlcnRWYWx1ZSIsInNlbGVjdE9wdGlvbiIsInNpbGNlIiwic29ydCIsImEiLCJiIiwiZ29vZHNfaWQiLCJ0b1Byb2R1Y3REZXRhaWwiLCJuYXZpZ2F0ZVRvIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsImdldFN0b3JhZ2UiLCJoaXN0b3J5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxvQkFBUixDQUFiOztJQUNxQkMsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMs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Q2RTLGtCQUFRQyxHQUFSLENBQVlSLEdBQVo7QUFDQSxpQkFBSzlCLFdBQUwsR0FBbUI4QixJQUFJakMsSUFBdkI7QUFDRCxTQUxXO0FBTVoyQyxjQUFNLG1CQUFPO0FBQ1g7QUFDQSxpQkFBS2dCLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7QUFUVyxPQUFkO0FBV0Q7Ozs2QkFFUSxDQUFFOzs7O0VBNUoyQkMsZUFBS0MsSTs7a0JBQXhCaEUsVSIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuLy8g5byV5YWl5Yqf6IO9XHJcbnZhciBjb21tb24gPSByZXF1aXJlKCcuLi91dGlscy9jb21tb24uanMnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hsaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57SiJ1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGlzSGlkZGVuOiB0cnVlLFxyXG4gICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICBoaXN0b3J5RGF0YTogW10sXHJcbiAgICBzZWFyY2hEYXRhTGlzdDogW10sXHJcbiAgICBzZWFyY2hEZWZhdWx0OiBbXSxcclxuICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICBzZWxlY3RPcHRpb25JbmRleDogMCxcclxuICAgIHByaWNlU29ydDogdHJ1ZSxcclxuICAgIG51bVNvcnQ6IHRydWVcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudHMgPSB7fVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgaW5wdXRWYWx1ZShlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIGlmIChlLmRldGFpbC52YWx1ZS50cmltKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAvLyDmsqHmnInlgLxcclxuICAgICAgICB0aGlzLmlzSGlkZGVuID0gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIOacieWAvFxyXG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoKCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlucHV0VmFsdWUpXHJcbiAgICAgIC8vIOWIpOaWreacrOWcsOWtmOWCqOacieaVsOaNrumCo+WwseS4jea3u+WKoCAg55So5pWw57uE57Si5byV5Yik5pat5piv5ZCm5a2Y5ZyoXHJcbiAgICAgIHZhciByZXN1bHRJbmRleCA9IHRoaXMuaGlzdG9yeURhdGEuaW5kZXhPZih0aGlzLmlucHV0VmFsdWUpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdEluZGV4KVxyXG4gICAgICBpZiAocmVzdWx0SW5kZXggIT0gLTEpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlEYXRhLnNwbGljZShyZXN1bHRJbmRleCwgMSlcclxuICAgICAgfVxyXG4gICAgICAvLyDplb/luqbmmK/lkKbotorov4dcclxuICAgICAgaWYgKHRoaXMuaGlzdG9yeURhdGEubGVuZ3RoID49IDMpIHtcclxuICAgICAgICB0aGlzLmhpc3RvcnlEYXRhLnNwbGljZSgwLCAxKVxyXG4gICAgICB9XHJcbiAgICAgIC8vIOWinuWKoOWIsOWOhuWPsuaVsOaNrlxyXG4gICAgICB0aGlzLmhpc3RvcnlEYXRhLnB1c2godGhpcy5pbnB1dFZhbHVlKVxyXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdoaXN0b3J5RGF0YScsXHJcbiAgICAgICAgZGF0YTogdGhpcy5oaXN0b3J5RGF0YVxyXG4gICAgICB9KVxyXG4gICAgICAvLyB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAvLyAgIHRpdGxlOifmraPlnKjmkJzntKIs5Yir5oCl5ZOmJyxcclxuICAgICAgLy8gICBkdXJhdGlvbjoxMDAwXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vIOaYvuekuue7k+aenFxyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfmraPlnKjmkJzntKLkuK0uLi4nLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgY29tbW9uLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2FwaS9wdWJsaWMvdjEvZ29vZHMvc2VhcmNoJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBxdWVyeTogdGhpcy5pbnB1dFZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEubWVzc2FnZSlcclxuXHJcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5pqC5peg5pWw5o2uJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF1dHNcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhTGlzdCA9IHJlcy5kYXRhLm1lc3NhZ2UuZ29vZHNcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEZWZhdWx0ID0gcmVzLmRhdGEubWVzc2FnZS5nb29kcy5zbGljZSgwKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aaguaXoOaVsOaNricpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiByZXMgPT4ge31cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgdGhpcy5oaXN0b3J5RGF0YSA9IFtdXHJcbiAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogJ2hpc3RvcnlEYXRhJ1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGluc2VydFZhbHVlKHJlcykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHJlc1xyXG4gICAgICB0aGlzLmlzSGlkZGVuID0gZmFsc2VcclxuICAgIH0sXHJcbiAgICBzZWxlY3RPcHRpb24ocmVzKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgdGhpcy5zZWxlY3RPcHRpb25JbmRleCA9IHJlc1xyXG4gICAgICBzd2l0Y2ggKHJlcykge1xyXG4gICAgICAgIGNhc2UgJzAnOlxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3pob25naGUnKVxyXG4gICAgICAgICAgdGhpcy5zZWFyY2hEZWZhdWx0ID0gdGhpcy5zZWFyY2hEYXRhTGlzdC5zaWxjZSgwKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgIHRoaXMubnVtU29ydCA9ICF0aGlzLm51bVNvcnRcclxuICAgICAgICAgIC8vIHRoaXMuc2VhcmNoRGVmYXVsdCA9IHRoaXMuc2VhcmNoRGF0YUxpc3Quc2lsY2UoMClcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YUxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5udW1Tb3J0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGEuZ29vZHNfaWQgLSBiLmdvb2RzX2lkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGIuZ29vZHNfaWQgLSBhLmdvb2RzX2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgdGhpcy5wcmljZVNvcnQgPSAhdGhpcy5wcmljZVNvcnRcclxuICAgICAgICAgIC8vIHRoaXMuc2VhcmNoRGVmYXVsdCA9IHRoaXMuc2VhcmNoRGF0YUxpc3Quc2lsY2UoMClcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YUxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmljZVNvcnQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYi5nb29kc19pZCAtIGEuZ29vZHNfaWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5nb29kc19pZCAtIGIuZ29vZHNfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b1Byb2R1Y3REZXRhaWwocmVzKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBgL3BhZ2VzL3Byb2R1Y3REZXRhaWw/Z29vZHNfaWQ9JHtyZXN9YFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge31cclxuXHJcbiAgd2F0Y2ggPSB7fVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdoaXN0b3J5RGF0YScsXHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHRoaXMuaGlzdG9yeURhdGEgPSByZXMuZGF0YVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiByZXMgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuaGlzdG9yeURhdGEgPSBbJ+Wwj+exs+eslOiusOacrCcsJ+iBlOaDs+eslOiusOacrCcsJ+aItOWwlOeslOiusOacrCcsJ+WNjue0oueslOiusOacrCcsJ+WJjeerr+W8gOWPkeW3peeoi+W4iCcsJ+Wwj+exs+WumOaWuScsJ+Wwj+exs+eslOiusOacrOWVpuWVpuWVpiddO1xyXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblNob3coKSB7fVxyXG59XHJcbiJdfQ==