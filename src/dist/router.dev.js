"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _data = _interopRequireDefault(require("../data"));

var _Index = _interopRequireDefault(require("./views/Index"));

var _Test = _interopRequireDefault(require("./views/Test"));

var _Result = _interopRequireDefault(require("./views/Result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  component: _Index["default"],
  meta: {
    key: 1
  }
}, {
  path: '/test',
  component: _Test["default"],
  name: 'Test',
  meta: {
    key: 2
  }
}, {
  path: '/test',
  component: _Result["default"],
  name: 'Result',
  meta: {
    key: 3
  }
}];

if (Object.keys(_data["default"].share.dynamic_shares).length > 0) {
  Object.keys(_data["default"].share.dynamic_shares).forEach(function (el) {
    routes.push({
      path: '/' + el,
      name: el
    });
  });
}

var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
router.afterEach(function (to) {
  // eslint-disable-next-line
  gtag('config', _data["default"].statistics.GA_ID, {
    'page_path': to.path
  });
});

if (Object.keys(_data["default"].share.dynamic_shares).length > 0) {
  router.beforeEach(function (to, from, next) {
    if (_data["default"].share.dynamic_shares[to.name] === undefined || _data["default"].share.dynamic_shares[to.name] === null) {
      document.querySelector('meta[property="og:image"]')['content'] = _data["default"].share.default_img;
      document.querySelector('meta[property="og:title"]')['content'] = _data["default"].share.title;
      document.querySelector('meta[property="og:description"]')['content'] = _data["default"].share.description;
      document.querySelector('meta[name="twitter:image"]')['content'] = _data["default"].share.default_img;
    } else {
      document.querySelector('meta[property="og:image"]')['content'] = _data["default"].share.dynamic_shares[to.name].img;
      document.querySelector('meta[property="og:title"]')['content'] = _data["default"].share.dynamic_shares[to.name].title;
      document.querySelector('meta[property="og:description"]')['content'] = _data["default"].share.dynamic_shares[to.name].description;
      document.querySelector('meta[name="twitter:image"]')['content'] = _data["default"].share.dynamic_shares[to.name].img;
    }

    next();
  });
}

var _default = router;
exports["default"] = _default;