/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/eva_laskowski/Hack-Reactor/notreddit/node_modules/react/index.js'");

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(32);

var _axios = __webpack_require__(51);

var _axios2 = _interopRequireDefault(_axios);

var _redux = __webpack_require__(13);

var _index = __webpack_require__(139);

var _postDetails = __webpack_require__(140);

var _postDetails2 = _interopRequireDefault(_postDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostList = function (_Component) {
  _inherits(PostList, _Component);

  function PostList() {
    _classCallCheck(this, PostList);

    return _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));
  }

  _createClass(PostList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/posts').then(function (res) {
        _this2.props.updatePosts(res.data);
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.posts.length) {
        return _react2.default.createElement(
          'h4',
          null,
          'Loading posts...'
        );
      }

      return _react2.default.createElement(
        'ul',
        null,
        this.props.posts.map(function (post, index) {
          return _react2.default.createElement(_postDetails2.default, { post: post, key: index });
        })
      );
    }
  }]);

  return PostList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ updatePosts: _index.updatePosts }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostList);

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/eva_laskowski/Hack-Reactor/notreddit/node_modules/redux/es/index.js'");

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePosts = updatePosts;
exports.createPost = createPost;

var _axios = __webpack_require__(51);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updatePosts(posts) {
  return {
    type: "REFRESH_FEED",
    payload: posts
  };
}

function createPost(post) {
  return {
    type: "ADD_POST",
    payload: post
  };
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostDetails = function (_Component) {
  _inherits(PostDetails, _Component);

  function PostDetails() {
    _classCallCheck(this, PostDetails);

    return _possibleConstructorReturn(this, (PostDetails.__proto__ || Object.getPrototypeOf(PostDetails)).apply(this, arguments));
  }

  _createClass(PostDetails, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "twelve wide column" },
        _react2.default.createElement("img", { className: "thumbnail", src: this.props.post.image, alt: "" }),
        _react2.default.createElement(
          "a",
          { className: "ui large header", href: "" },
          this.props.post.title
        ),
        _react2.default.createElement(
          "div",
          { className: "meta" },
          "submitted 3 hours ago by ",
          _react2.default.createElement(
            "a",
            null,
            this.props.post.username
          ),
          " to ",
          _react2.default.createElement(
            "a",
            null,
            "/midlyinteresting"
          )
        ),
        _react2.default.createElement(
          "ul",
          { className: "ui big horizontal list voters" },
          _react2.default.createElement(
            "li",
            { className: "item" },
            _react2.default.createElement(
              "a",
              { href: "" },
              _react2.default.createElement("i", { className: "arrow up icon" }),
              "upvote"
            )
          ),
          _react2.default.createElement(
            "li",
            { className: "item" },
            _react2.default.createElement(
              "a",
              { href: "" },
              _react2.default.createElement("i", { className: "arrow down icon" }),
              "downvote"
            )
          )
        )
      );
    }
  }]);

  return PostDetails;
}(_react.Component);

exports.default = PostDetails;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui menu' },
        _react2.default.createElement(
          'div',
          { className: 'ui container' },
          _react2.default.createElement(
            'a',
            { href: '#', className: 'header item' },
            _react2.default.createElement('img', { className: 'logo', src: 'https://vignette.wikia.nocookie.net/atlas-reactor/images/1/10/Reddit.png/revision/latest?cb=20170201145049' }),
            ' NotReddit'
          ),
          _react2.default.createElement('span', { className: 'empty-space' }),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'item', to: '/' },
            'Main'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'item', to: '/postForm' },
            'Create New Post'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'item', to: '/login' },
            'Login'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'item', to: '/signup' },
            'Signup'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'item', to: '/login' },
            'Logout'
          )
        )
      );
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "outer" },
        _react2.default.createElement(
          "div",
          { className: "middle" },
          _react2.default.createElement(
            "div",
            { className: "inner" },
            _react2.default.createElement(
              "div",
              { className: "ui huge form" },
              _react2.default.createElement(
                "h2",
                null,
                "Login"
              ),
              _react2.default.createElement(
                "div",
                { className: "two fields" },
                _react2.default.createElement(
                  "div",
                  { className: "field" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "username"
                  ),
                  _react2.default.createElement("input", { placeholder: "enter login username", type: "text" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "field" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "password"
                  ),
                  _react2.default.createElement("input", { placeholder: "enter login password", type: "text" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "ui submit button" },
                "Submit"
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    _classCallCheck(this, Signup);

    return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).apply(this, arguments));
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "outer" },
        _react2.default.createElement(
          "div",
          { className: "middle" },
          _react2.default.createElement(
            "div",
            { className: "inner" },
            _react2.default.createElement(
              "div",
              { className: "ui huge form" },
              _react2.default.createElement(
                "h2",
                null,
                "Signup"
              ),
              _react2.default.createElement(
                "div",
                { className: "two fields" },
                _react2.default.createElement(
                  "div",
                  { className: "field" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "username"
                  ),
                  _react2.default.createElement("input", { placeholder: "enter new username", type: "text" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "field" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "password"
                  ),
                  _react2.default.createElement("input", { placeholder: "enter new password", type: "text" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "ui submit button" },
                "Submit"
              )
            )
          )
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

exports.default = Signup;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(13);

var _postReducer = __webpack_require__(145);

var allReducers = (0, _redux.combineReducers)({
  posts: _postReducer.ReducerPosts,
  post: _postReducer.ReducerCreatePost
});

exports.default = allReducers;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReducerPosts = ReducerPosts;
exports.ReducerCreatePost = ReducerCreatePost;
var defaultState = [
  // {
  //   id: 1,
  //   username: "lilray",
  //   title: "TIFU by inviting my grandma to prom",
  //   body: "Every woman deserves to go to a prom, no matter how old you are.",
  //   thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/170330122746-nanny-senior-prom-trnd-exlarge-169.jpg",
  //   likeCache: 71,
  //   commentCache: 8,
  // },
  // {
  //   id: 2,
  //   username: "ryansan",
  //   title: "Best homemade cookies",
  //   body: "Aint no cookie like a homemade cookie",
  //   thumbnail: "https://en.wikipedia.org/wiki/Cookie#/media/File:2ChocolateChipCookies.jpg",
  //   likeCache: 52,
  //   commentCache: 150,
  // },
  // {
  //   id: 3,
  //   username: "tbray",
  //   title: "Instant coffee cures cancer",
  //   body: "This coffee is amazeballs",
  //   thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
  //   likeCache: 78,
  //   commentCache: 1,
  // }
];

function ReducerPosts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'REFRESH_FEED':
      return action.payload;
      break;
  }
  return state;
}

function ReducerCreatePost() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_POST':
      return action.payload;
      break;
  }
  return state;
}

// object.assign({}, state, {
//   posts: action.payload
// })

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(32);

var _axios = __webpack_require__(51);

var _axios2 = _interopRequireDefault(_axios);

var _redux = __webpack_require__(13);

var _index = __webpack_require__(139);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostForm = function (_Component) {
  _inherits(PostForm, _Component);

  function PostForm(props) {
    _classCallCheck(this, PostForm);

    var _this = _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).call(this, props));

    _this.state = {
      titleInputVal: '',
      bodyInputVal: '',
      imageInputVal: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.addNewPost = _this.addNewPost.bind(_this);
    return _this;
  }

  _createClass(PostForm, [{
    key: 'addNewPost',
    value: function addNewPost() {
      var _this2 = this;

      _axios2.default.post('/post', { post: this.state }).then(function (res) {
        _this2.props.createPost(res.data);
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var name = e.target.name;
      var value = e.target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'outer' },
        _react2.default.createElement(
          'div',
          { className: 'middle' },
          _react2.default.createElement(
            'div',
            { className: 'inner' },
            _react2.default.createElement(
              'div',
              { className: 'ui huge form' },
              _react2.default.createElement(
                'h2',
                null,
                'Create New Post'
              ),
              _react2.default.createElement(
                'div',
                { className: 'field' },
                _react2.default.createElement(
                  'label',
                  null,
                  'title'
                ),
                _react2.default.createElement('input', {
                  name: 'title',
                  placeholder: 'enter post title',
                  type: 'text',
                  onChange: function onChange(e) {
                    return _this3.onChange(e);
                  }
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'field' },
                _react2.default.createElement(
                  'label',
                  null,
                  'body'
                ),
                _react2.default.createElement('textarea', {
                  name: 'body',
                  placeholder: 'enter post body',
                  type: 'text',
                  onChange: function onChange(e) {
                    return _this3.onChange(e);
                  }
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'field' },
                _react2.default.createElement(
                  'label',
                  null,
                  'image URL'
                ),
                _react2.default.createElement('input', {
                  name: 'image',
                  placeholder: 'enter image URL',
                  type: 'text',
                  onChange: function onChange(e) {
                    return _this3.onChange(e);
                  }
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui submit button', onClick: this.addNewPost },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return PostForm;
}(_react.Component);

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ createPost: _index.createPost }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostForm);

// export default PostForm;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/eva_laskowski/Hack-Reactor/notreddit/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/eva_laskowski/Hack-Reactor/notreddit/node_modules/react-router-dom/es/index.js'");

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/eva_laskowski/Hack-Reactor/notreddit/node_modules/axios/index.js'");

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactRedux = __webpack_require__(32);

var _redux = __webpack_require__(13);

var _app = __webpack_require__(94);

var _app2 = _interopRequireDefault(_app);

var _index = __webpack_require__(144);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index2.default);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_app2.default, null)
), document.getElementById('app'));

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/eva_laskowski/Hack-Reactor/notreddit/node_modules/react-dom/index.js'");

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(43);

var _postList = __webpack_require__(120);

var _postList2 = _interopRequireDefault(_postList);

var _nav = __webpack_require__(141);

var _nav2 = _interopRequireDefault(_nav);

var _login = __webpack_require__(142);

var _login2 = _interopRequireDefault(_login);

var _signup = __webpack_require__(143);

var _signup2 = _interopRequireDefault(_signup);

var _postForm = __webpack_require__(146);

var _postForm2 = _interopRequireDefault(_postForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_nav2.default, null),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _postList2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _login2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _signup2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/postForm', component: _postForm2.default })
      )
    )
  );
};

exports.default = App;

/***/ })

/******/ });