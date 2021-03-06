(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("moment"), require("interact"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "moment", "interact"], factory);
	else if(typeof exports === 'object')
		exports["ReactCalendarTimeline"] = factory(require("React"), require("moment"), require("interact"));
	else
		root["ReactCalendarTimeline"] = factory(root["React"], root["moment"], root["interact"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Timeline = __webpack_require__(1);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Timeline2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _moment = __webpack_require__(10);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(11);
	
	var _Items = __webpack_require__(15);
	
	var _Items2 = _interopRequireDefault(_Items);
	
	var _InfoLabel = __webpack_require__(19);
	
	var _InfoLabel2 = _interopRequireDefault(_InfoLabel);
	
	var _Sidebar = __webpack_require__(22);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _Header = __webpack_require__(23);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _VerticalLines = __webpack_require__(24);
	
	var _VerticalLines2 = _interopRequireDefault(_VerticalLines);
	
	var _HorizontalLines = __webpack_require__(25);
	
	var _HorizontalLines2 = _interopRequireDefault(_HorizontalLines);
	
	var _TodayLine = __webpack_require__(26);
	
	var _TodayLine2 = _interopRequireDefault(_TodayLine);
	
	var _SelectedTimeLine = __webpack_require__(27);
	
	var _SelectedTimeLine2 = _interopRequireDefault(_SelectedTimeLine);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultKeys = {
	  groupIdKey: 'id',
	  groupTitleKey: 'title',
	  itemIdKey: 'id',
	  itemTitleKey: 'title',
	  itemDivTitleKey: 'title',
	  itemGroupKey: 'group',
	  itemTimeStartKey: 'start_time',
	  itemTimeEndKey: 'end_time'
	};
	
	var defaultTimeSteps = {
	  second: 1,
	  minute: 1,
	  hour: 1,
	  day: 1,
	  month: 1,
	  year: 1
	};
	
	var ReactCalendarTimeline = function (_Component) {
	  _inherits(ReactCalendarTimeline, _Component);
	
	  function ReactCalendarTimeline(props) {
	    _classCallCheck(this, ReactCalendarTimeline);
	
	    var _this = _possibleConstructorReturn(this, (ReactCalendarTimeline.__proto__ || Object.getPrototypeOf(ReactCalendarTimeline)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var visibleTimeStart = null;
	    var visibleTimeEnd = null;
	
	    if (_this.props.defaultTimeStart && _this.props.defaultTimeEnd) {
	      visibleTimeStart = _this.props.defaultTimeStart.valueOf();
	      visibleTimeEnd = _this.props.defaultTimeEnd.valueOf();
	    } else if (_this.props.visibleTimeStart && _this.props.visibleTimeEnd) {
	      visibleTimeStart = _this.props.visibleTimeStart;
	      visibleTimeEnd = _this.props.visibleTimeEnd;
	    } else {
	      visibleTimeStart = Math.min.apply(Math, _toConsumableArray(_this.props.items.map(function (item) {
	        return (0, _utils._get)(item, 'start').getTime();
	      })));
	      visibleTimeEnd = Math.max.apply(Math, _toConsumableArray(_this.props.items.map(function (item) {
	        return (0, _utils._get)(item, 'end').getTime();
	      })));
	
	      if (!visibleTimeStart || !visibleTimeEnd) {
	        visibleTimeStart = new Date().getTime() - 86400 * 7 * 1000;
	        visibleTimeEnd = new Date().getTime() + 86400 * 7 * 1000;
	      }
	
	      if (_this.props.onTimeInit) {
	        _this.props.onTimeInit(visibleTimeStart, visibleTimeEnd);
	      }
	    }
	
	    _this.state = {
	      width: 1000,
	
	      visibleTimeStart: visibleTimeStart,
	      visibleTimeEnd: visibleTimeEnd,
	      canvasTimeStart: visibleTimeStart - (visibleTimeEnd - visibleTimeStart),
	
	      selectedItem: null,
	      dragTime: null,
	      dragGroupTitle: null,
	      resizeTime: null,
	      isDragging: false,
	      topOffset: 0,
	      resizingItem: null,
	      resizingEdge: null,
	      selectedTime: _this.props.selectedTime && parseInt(_this.props.selectedTime)
	    };
	
	    var _this$stackItems = _this.stackItems(props.items, props.groups, _this.state.canvasTimeStart, _this.state.visibleTimeStart, _this.state.visibleTimeEnd, _this.state.width),
	        dimensionItems = _this$stackItems.dimensionItems,
	        height = _this$stackItems.height,
	        groupHeights = _this$stackItems.groupHeights,
	        groupTops = _this$stackItems.groupTops;
	
	    _this.state.dimensionItems = dimensionItems;
	    _this.state.height = height;
	    _this.state.groupHeights = groupHeights;
	    _this.state.groupTops = groupTops;
	    return _this;
	  }
	
	  _createClass(ReactCalendarTimeline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.resize();
	
	      this.resizeEventListener = {
	        handleEvent: function handleEvent(event) {
	          _this2.resize();
	        }
	      };
	
	      window.addEventListener('resize', this.resizeEventListener);
	
	      this.lastTouchDistance = null;
	
	      this.refs.scrollComponent.addEventListener('touchstart', this.touchStart);
	      this.refs.scrollComponent.addEventListener('touchmove', this.touchMove);
	      this.refs.scrollComponent.addEventListener('touchend', this.touchEnd);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.resizeEventListener);
	      this.refs.scrollComponent.removeEventListener('touchstart', this.touchStart);
	      this.refs.scrollComponent.removeEventListener('touchmove', this.touchMove);
	      this.refs.scrollComponent.removeEventListener('touchend', this.touchEnd);
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      // FIXME currently when the component creates a scroll the scrollbar is not used in the initial width calculation, resizing fixes this
	      var _refs$container$getBo = this.refs.container.getBoundingClientRect(),
	          containerWidth = _refs$container$getBo.width,
	          containerTop = _refs$container$getBo.top;
	
	      var width = containerWidth - this.props.sidebarWidth;
	
	      var _stackItems = this.stackItems(this.props.items, this.props.groups, this.state.canvasTimeStart, this.state.visibleTimeStart, this.state.visibleTimeEnd, width),
	          dimensionItems = _stackItems.dimensionItems,
	          height = _stackItems.height,
	          groupHeights = _stackItems.groupHeights,
	          groupTops = _stackItems.groupTops;
	
	      this.setState({
	        width: width,
	        topOffset: containerTop + window.pageYOffset,
	        dimensionItems: dimensionItems,
	        height: height,
	        groupHeights: groupHeights,
	        groupTops: groupTops
	      });
	      this.refs.scrollComponent.scrollLeft = width;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var visibleTimeStart = nextProps.visibleTimeStart,
	          visibleTimeEnd = nextProps.visibleTimeEnd,
	          items = nextProps.items,
	          groups = nextProps.groups;
	
	
	      if (visibleTimeStart && visibleTimeEnd) {
	        this.updateScrollCanvas(visibleTimeStart, visibleTimeEnd, items !== this.props.items || groups !== this.props.groups, items, groups);
	      }
	
	      if (items !== this.props.items || groups !== this.props.groups) {
	        this.updateDimensions(items, groups);
	      }
	    }
	  }, {
	    key: 'updateDimensions',
	    value: function updateDimensions(items, groups) {
	      var _state = this.state,
	          canvasTimeStart = _state.canvasTimeStart,
	          visibleTimeStart = _state.visibleTimeStart,
	          visibleTimeEnd = _state.visibleTimeEnd,
	          width = _state.width;
	
	      var _stackItems2 = this.stackItems(items, groups, canvasTimeStart, visibleTimeStart, visibleTimeEnd, width),
	          dimensionItems = _stackItems2.dimensionItems,
	          height = _stackItems2.height,
	          groupHeights = _stackItems2.groupHeights,
	          groupTops = _stackItems2.groupTops;
	
	      this.setState({ dimensionItems: dimensionItems, height: height, groupHeights: groupHeights, groupTops: groupTops });
	    }
	
	    // called when the visible time changes
	
	  }, {
	    key: 'zoomIn',
	    value: function zoomIn(e) {
	      e.preventDefault();
	
	      this.changeZoom(0.75);
	    }
	  }, {
	    key: 'zoomOut',
	    value: function zoomOut(e) {
	      e.preventDefault();
	
	      this.changeZoom(1.25);
	    }
	  }, {
	    key: 'changeZoom',
	    value: function changeZoom(scale) {
	      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
	      var _props = this.props,
	          minZoom = _props.minZoom,
	          maxZoom = _props.maxZoom;
	
	      var oldZoom = this.state.visibleTimeEnd - this.state.visibleTimeStart;
	      var newZoom = Math.min(Math.max(Math.round(oldZoom * scale), minZoom), maxZoom); // min 1 min, max 20 years
	      var newVisibleTimeStart = Math.round(this.state.visibleTimeStart + (oldZoom - newZoom) * offset);
	
	      this.onTimeSpanChanged(newVisibleTimeStart, newVisibleTimeStart + newZoom);
	    }
	  }, {
	    key: 'rowAndTimeFromEvent',
	    value: function rowAndTimeFromEvent(e) {
	      var _props2 = this.props,
	          lineHeight = _props2.lineHeight,
	          dragSnap = _props2.dragSnap;
	      var _state2 = this.state,
	          width = _state2.width,
	          visibleTimeStart = _state2.visibleTimeStart,
	          visibleTimeEnd = _state2.visibleTimeEnd;
	
	
	      var parentPosition = (0, _utils.getParentPosition)(e.currentTarget);
	      var x = e.clientX - parentPosition.x;
	      var y = e.clientY - parentPosition.y;
	
	      var row = Math.floor((y - lineHeight * 2) / lineHeight);
	      var time = Math.round(visibleTimeStart + x / width * (visibleTimeEnd - visibleTimeStart));
	      time = Math.floor(time / dragSnap) * dragSnap;
	
	      return [row, time];
	    }
	  }, {
	    key: 'todayLine',
	    value: function todayLine(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, height, headerHeight) {
	      return _react2.default.createElement(_TodayLine2.default, { canvasTimeStart: canvasTimeStart,
	        canvasTimeEnd: canvasTimeEnd,
	        canvasWidth: canvasWidth,
	        lineHeight: this.props.lineHeight,
	        lineCount: (0, _utils._length)(this.props.groups),
	        height: height,
	        headerHeight: headerHeight
	      });
	    }
	  }, {
	    key: 'selectedTimeLine',
	    value: function selectedTimeLine(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, height, headerHeight, selectedTime) {
	
	      return _react2.default.createElement(_SelectedTimeLine2.default, { canvasTimeStart: canvasTimeStart,
	        canvasTimeEnd: canvasTimeEnd,
	        canvasWidth: canvasWidth,
	        lineHeight: this.props.lineHeight,
	        lineCount: (0, _utils._length)(this.props.groups),
	        height: height,
	        headerHeight: headerHeight,
	        selectedTime: selectedTime
	      });
	    }
	  }, {
	    key: 'verticalLines',
	    value: function verticalLines(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, timeSteps, height, headerHeight) {
	      return _react2.default.createElement(_VerticalLines2.default, { canvasTimeStart: canvasTimeStart,
	        canvasTimeEnd: canvasTimeEnd,
	        canvasWidth: canvasWidth,
	        lineHeight: this.props.lineHeight,
	        lineCount: (0, _utils._length)(this.props.groups),
	        minUnit: minUnit,
	        timeSteps: timeSteps,
	        fixedHeader: this.props.fixedHeader,
	        height: height,
	        headerHeight: headerHeight
	      });
	    }
	  }, {
	    key: 'horizontalLines',
	    value: function horizontalLines(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, groupHeights, headerHeight) {
	      return _react2.default.createElement(_HorizontalLines2.default, { canvasWidth: canvasWidth,
	        lineHeight: this.props.lineHeight,
	        lineCount: (0, _utils._length)(this.props.groups),
	        groups: this.props.groups,
	        groupHeights: groupHeights,
	        headerHeight: headerHeight
	      });
	    }
	  }, {
	    key: 'items',
	    value: function items(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, dimensionItems, groupHeights, groupTops) {
	      return _react2.default.createElement(_Items2.default, { canvasTimeStart: canvasTimeStart,
	        canvasTimeEnd: canvasTimeEnd,
	        canvasWidth: canvasWidth,
	        lineHeight: this.props.lineHeight,
	        lineCount: (0, _utils._length)(this.props.groups),
	        dimensionItems: dimensionItems,
	        minUnit: minUnit,
	        groupHeights: groupHeights,
	        groupTops: groupTops,
	        items: this.props.items,
	        groups: this.props.groups,
	        keys: this.props.keys,
	        selectedItem: this.state.selectedItem,
	        dragSnap: this.props.dragSnap,
	        minResizeWidth: this.props.minResizeWidth,
	        canChangeGroup: this.props.canChangeGroup,
	        canMove: this.props.canMove,
	        canResize: this.props.canResize,
	        useResizeHandle: this.props.useResizeHandle,
	        canSelect: this.props.canSelect,
	        moveResizeValidator: this.props.moveResizeValidator,
	        topOffset: this.state.topOffset,
	        itemSelect: this.selectItem,
	        itemDrag: this.dragItem,
	        itemDrop: this.dropItem,
	        onItemDoubleClick: this.props.onItemDoubleClick,
	        onItemContextMenu: this.props.onItemContextMenu,
	        itemResizing: this.resizingItem,
	        itemResized: this.resizedItem });
	    }
	  }, {
	    key: 'infoLabel',
	    value: function infoLabel() {
	      var label = null;
	
	      if (this.state.dragTime) {
	        label = (0, _moment2.default)(this.state.dragTime).format('LLL') + ', ' + this.state.dragGroupTitle;
	      } else if (this.state.resizeTime) {
	        label = (0, _moment2.default)(this.state.resizeTime).format('LLL');
	      }
	
	      return label ? _react2.default.createElement(_InfoLabel2.default, { label: label }) : '';
	    }
	  }, {
	    key: 'header',
	    value: function header(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, timeSteps, headerLabelGroupHeight, headerLabelHeight) {
	      return _react2.default.createElement(_Header2.default, { canvasTimeStart: canvasTimeStart,
	        canvasTimeEnd: canvasTimeEnd,
	        canvasWidth: canvasWidth,
	        lineHeight: this.props.lineHeight,
	        minUnit: minUnit,
	        timeSteps: timeSteps,
	        headerLabelGroupHeight: headerLabelGroupHeight,
	        headerLabelHeight: headerLabelHeight,
	        width: this.state.width,
	        zoom: zoom,
	        visibleTimeStart: this.state.visibleTimeStart,
	        visibleTimeEnd: this.state.visibleTimeEnd,
	        fixedHeader: this.props.fixedHeader,
	        zIndex: this.props.zIndexStart + 1,
	        showPeriod: this.showPeriod });
	    }
	  }, {
	    key: 'sidebar',
	    value: function sidebar(height, groupHeights, headerHeight) {
	      return _react2.default.createElement(
	        _Sidebar2.default,
	        { groups: this.props.groups,
	          keys: this.props.keys,
	
	          width: this.props.sidebarWidth,
	          lineHeight: this.props.lineHeight,
	          groupHeights: groupHeights,
	          height: height,
	          headerHeight: headerHeight,
	
	          fixedHeader: this.props.fixedHeader,
	          zIndex: this.props.zIndexStart + 2 },
	        this.props.children
	      );
	    }
	  }, {
	    key: 'stackItems',
	    value: function stackItems(items, groups, canvasTimeStart, visibleTimeStart, visibleTimeEnd, width) {
	      var _props3 = this.props,
	          keys = _props3.keys,
	          dragSnap = _props3.dragSnap,
	          lineHeight = _props3.lineHeight,
	          headerLabelGroupHeight = _props3.headerLabelGroupHeight,
	          headerLabelHeight = _props3.headerLabelHeight,
	          stackItems = _props3.stackItems,
	          fullUpdate = _props3.fullUpdate,
	          itemHeightRatio = _props3.itemHeightRatio;
	      var _state3 = this.state,
	          draggingItem = _state3.draggingItem,
	          dragTime = _state3.dragTime,
	          resizingItem = _state3.resizingItem,
	          resizingEdge = _state3.resizingEdge,
	          resizeTime = _state3.resizeTime,
	          newGroupOrder = _state3.newGroupOrder;
	
	      var zoom = visibleTimeEnd - visibleTimeStart;
	      var canvasTimeEnd = canvasTimeStart + zoom * 3;
	      var canvasWidth = width * 3;
	      var headerHeight = headerLabelGroupHeight + headerLabelHeight;
	
	      var visibleItems = (0, _utils.getVisibleItems)(items, canvasTimeStart, canvasTimeEnd, keys);
	      var groupOrders = (0, _utils.getGroupOrders)(groups, keys);
	
	      var dimensionItems = visibleItems.map(function (item) {
	        return {
	          id: (0, _utils._get)(item, keys.itemIdKey),
	          dimensions: (0, _utils.calculateDimensions)({
	            item: item,
	            order: groupOrders[(0, _utils._get)(item, keys.itemGroupKey)],
	            keys: keys,
	            canvasTimeStart: canvasTimeStart,
	            canvasTimeEnd: canvasTimeEnd,
	            canvasWidth: canvasWidth,
	            dragSnap: dragSnap,
	            lineHeight: lineHeight,
	            draggingItem: draggingItem,
	            dragTime: dragTime,
	            resizingItem: resizingItem,
	            resizingEdge: resizingEdge,
	            resizeTime: resizeTime,
	            newGroupOrder: newGroupOrder,
	            itemHeightRatio: itemHeightRatio,
	            fullUpdate: fullUpdate,
	            visibleTimeStart: visibleTimeStart,
	            visibleTimeEnd: visibleTimeEnd
	          })
	        };
	      }).filter(function (i) {
	        return i.dimensions;
	      });
	
	      var stackingMethod = stackItems ? _utils.stack : _utils.nostack;
	
	      var _stackingMethod = stackingMethod(dimensionItems, groupOrders, lineHeight, headerHeight),
	          height = _stackingMethod.height,
	          groupHeights = _stackingMethod.groupHeights,
	          groupTops = _stackingMethod.groupTops;
	
	      return { dimensionItems: dimensionItems, height: height, groupHeights: groupHeights, groupTops: groupTops };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props,
	          items = _props4.items,
	          groups = _props4.groups,
	          headerLabelGroupHeight = _props4.headerLabelGroupHeight,
	          headerLabelHeight = _props4.headerLabelHeight,
	          sidebarWidth = _props4.sidebarWidth,
	          timeSteps = _props4.timeSteps;
	      var _state4 = this.state,
	          draggingItem = _state4.draggingItem,
	          resizingItem = _state4.resizingItem,
	          isDragging = _state4.isDragging,
	          width = _state4.width,
	          visibleTimeStart = _state4.visibleTimeStart,
	          visibleTimeEnd = _state4.visibleTimeEnd,
	          canvasTimeStart = _state4.canvasTimeStart;
	      var _state5 = this.state,
	          dimensionItems = _state5.dimensionItems,
	          height = _state5.height,
	          groupHeights = _state5.groupHeights,
	          groupTops = _state5.groupTops;
	
	      var zoom = visibleTimeEnd - visibleTimeStart;
	      var canvasTimeEnd = canvasTimeStart + zoom * 3;
	      var canvasWidth = width * 3;
	      var minUnit = (0, _utils.getMinUnit)(zoom, width, timeSteps);
	      var headerHeight = headerLabelGroupHeight + headerLabelHeight;
	
	      if (draggingItem || resizingItem) {
	        var stackResults = this.stackItems(items, groups, canvasTimeStart, visibleTimeStart, visibleTimeEnd, width);
	        dimensionItems = stackResults.dimensionItems;
	        height = stackResults.height;
	        groupHeights = stackResults.groupHeights;
	        groupTops = stackResults.groupTops;
	      }
	
	      var outerComponentStyle = {
	        height: height + 'px'
	      };
	
	      var scrollComponentStyle = {
	        width: width + 'px',
	        height: height + 20 + 'px',
	        cursor: isDragging ? 'move' : 'default'
	      };
	
	      var canvasComponentStyle = {
	        width: canvasWidth + 'px',
	        height: height + 'px'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { style: this.props.style, ref: 'container', className: 'react-calendar-timeline' },
	        _react2.default.createElement(
	          'div',
	          { style: outerComponentStyle, className: 'rct-outer' },
	          sidebarWidth > 0 ? this.sidebar(height, groupHeights, headerHeight) : null,
	          _react2.default.createElement(
	            'div',
	            { ref: 'scrollComponent',
	              className: 'rct-scroll',
	              style: scrollComponentStyle,
	              onScroll: this.onScroll,
	              onWheel: this.onWheel,
	              onMouseDown: this.handleMouseDown,
	              onMouseMove: this.handleMouseMove,
	              onMouseUp: this.handleMouseUp
	            },
	            this.props.showArrows && _react2.default.createElement(
	              'div',
	              { className: 'move-canvas move-canvas-left', onClick: this.onMoveCanvasLeftClick },
	              _react2.default.createElement(
	                'span',
	                { className: 'arrow-text' },
	                '<'
	              )
	            ),
	            this.props.showArrows && _react2.default.createElement(
	              'div',
	              { className: 'move-canvas move-canvas-right', onClick: this.onMoveCanvasRightClick },
	              _react2.default.createElement(
	                'span',
	                { className: 'arrow-text' },
	                '>'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { ref: 'canvasComponent',
	                className: 'rct-canvas',
	                style: canvasComponentStyle,
	                onDoubleClick: this.handleDoubleClick
	              },
	              this.items(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, dimensionItems, groupHeights, groupTops),
	              this.verticalLines(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, timeSteps, height, headerHeight),
	              this.horizontalLines(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, groupHeights, headerHeight),
	              this.todayLine(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, height, headerHeight),
	              this.state.selectedTime && this.selectedTimeLine(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, height, headerHeight, this.state.selectedTime),
	              this.infoLabel(),
	              this.header(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, timeSteps, headerLabelGroupHeight, headerLabelHeight)
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ReactCalendarTimeline;
	}(_react.Component);
	
	ReactCalendarTimeline.propTypes = {
	  groups: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
	  items: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
	  sidebarWidth: _propTypes2.default.number,
	  dragSnap: _propTypes2.default.number,
	  minResizeWidth: _propTypes2.default.number,
	  fixedHeader: _propTypes2.default.oneOf(['fixed', 'absolute', 'none']),
	  fullUpdate: _propTypes2.default.bool,
	  zIndexStart: _propTypes2.default.number,
	  lineHeight: _propTypes2.default.number,
	  headerLabelGroupHeight: _propTypes2.default.number,
	  headerLabelHeight: _propTypes2.default.number,
	  itemHeightRatio: _propTypes2.default.number,
	
	  minZoom: _propTypes2.default.number,
	  maxZoom: _propTypes2.default.number,
	
	  clickTolerance: _propTypes2.default.number,
	  selectedTimeTolerance: _propTypes2.default.number,
	  selectedTime: _propTypes2.default.string,
	
	  canChangeGroup: _propTypes2.default.bool,
	  canMove: _propTypes2.default.bool,
	  canResize: _propTypes2.default.oneOf([true, false, 'left', 'right', 'both']),
	  useResizeHandle: _propTypes2.default.bool,
	  canSelect: _propTypes2.default.bool,
	
	  stackItems: _propTypes2.default.bool,
	
	  traditionalZoom: _propTypes2.default.bool,
	
	  itemTouchSendsClick: _propTypes2.default.bool,
	
	  onItemMove: _propTypes2.default.func,
	  onItemResize: _propTypes2.default.func,
	  onItemClick: _propTypes2.default.func,
	  onItemSelect: _propTypes2.default.func,
	  onCanvasClick: _propTypes2.default.func,
	  onItemDoubleClick: _propTypes2.default.func,
	  onItemContextMenu: _propTypes2.default.func,
	  onCanvasDoubleClick: _propTypes2.default.func,
	
	  moveResizeValidator: _propTypes2.default.func,
	
	  dayBackground: _propTypes2.default.func,
	
	  style: _propTypes2.default.object,
	  keys: _propTypes2.default.object,
	
	  timeSteps: _propTypes2.default.object,
	
	  defaultTimeStart: _propTypes2.default.object,
	  defaultTimeEnd: _propTypes2.default.object,
	
	  visibleTimeStart: _propTypes2.default.number,
	  visibleTimeEnd: _propTypes2.default.number,
	  onTimeChange: _propTypes2.default.func,
	  onTimeSelected: _propTypes2.default.func,
	  onTimeInit: _propTypes2.default.func,
	  onBoundsChange: _propTypes2.default.func,
	  showArrows: _propTypes2.default.bool,
	
	  children: _propTypes2.default.node
	};
	ReactCalendarTimeline.defaultProps = {
	  sidebarWidth: 150,
	  dragSnap: 1000 * 60 * 15, // 15min
	  minResizeWidth: 20,
	  fixedHeader: 'none', // fixed or absolute or none
	  fullUpdate: true,
	  zIndexStart: 10,
	  lineHeight: 30,
	  headerLabelGroupHeight: 30,
	  headerLabelHeight: 30,
	  itemHeightRatio: 0.65,
	
	  minZoom: 60 * 60 * 1000, // 1 hour
	  maxZoom: 5 * 365.24 * 86400 * 1000, // 5 years
	
	  clickTolerance: 3, // how many pixels can we drag for it to be still considered a click?
	  selectedTimeTolerance: 60000,
	  selectedTime: null,
	
	  canChangeGroup: true,
	  canMove: true,
	  canResize: 'right',
	  useResizeHandle: false,
	  canSelect: true,
	
	  stackItems: false,
	
	  traditionalZoom: false,
	
	  onItemMove: null,
	  onItemResize: null,
	  onItemClick: null,
	  onItemSelect: null,
	  onCanvasClick: null,
	  onItemDoubleClick: null,
	  onItemContextMenu: null,
	
	  moveResizeValidator: null,
	
	  dayBackground: null,
	
	  defaultTimeStart: null,
	  defaultTimeEnd: null,
	
	  itemTouchSendsClick: false,
	
	  style: {},
	  keys: defaultKeys,
	  timeSteps: defaultTimeSteps,
	
	  // if you pass in visibleTimeStart and visibleTimeEnd, you must also pass onTimeChange(visibleTimeStart, visibleTimeEnd),
	  // which needs to update the props visibleTimeStart and visibleTimeEnd to the ones passed
	  visibleTimeStart: null,
	  visibleTimeEnd: null,
	  onTimeChange: function onTimeChange(visibleTimeStart, visibleTimeEnd, updateScrollCanvas) {
	    if (visibleTimeEnd - visibleTimeStart > this.props.minZoom) {
	      updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
	    }
	  },
	  onTimeSelected: function onTimeSelected(selectedTime, drawSelectedTime) {
	    drawSelectedTime(selectedTime);
	  },
	  // called after the calendar loads and the visible time has been calculated
	  onTimeInit: null,
	  // called when the canvas area of the calendar changes
	  onBoundsChange: null,
	  children: null,
	  showArrows: true
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.touchStart = function (e) {
	    if (e.touches.length === 2) {
	      e.preventDefault();
	
	      _this3.lastTouchDistance = Math.abs(e.touches[0].screenX - e.touches[1].screenX);
	      _this3.singleTouchStart = null;
	      _this3.lastSingleTouch = null;
	    } else if (e.touches.length === 1 && _this3.props.fixedHeader === 'fixed') {
	      e.preventDefault();
	
	      var x = e.touches[0].clientX;
	      var y = e.touches[0].clientY;
	
	      _this3.lastTouchDistance = null;
	      _this3.singleTouchStart = { x: x, y: y, screenY: window.pageYOffset };
	      _this3.lastSingleTouch = { x: x, y: y, screenY: window.pageYOffset };
	    }
	  };
	
	  this.touchMove = function (e) {
	    if (_this3.state.dragTime || _this3.state.resizeTime) {
	      e.preventDefault();
	      return;
	    }
	    if (_this3.lastTouchDistance && e.touches.length === 2) {
	      e.preventDefault();
	
	      var touchDistance = Math.abs(e.touches[0].screenX - e.touches[1].screenX);
	
	      var parentPosition = (0, _utils.getParentPosition)(e.currentTarget);
	      var xPosition = (e.touches[0].screenX + e.touches[1].screenX) / 2 - parentPosition.x;
	
	      if (touchDistance !== 0 && _this3.lastTouchDistance !== 0) {
	        _this3.changeZoom(_this3.lastTouchDistance / touchDistance, xPosition / _this3.state.width);
	        _this3.lastTouchDistance = touchDistance;
	      }
	    } else if (_this3.lastSingleTouch && e.touches.length === 1 && _this3.props.fixedHeader === 'fixed') {
	      e.preventDefault();
	
	      var x = e.touches[0].clientX;
	      var y = e.touches[0].clientY;
	
	      var deltaX = x - _this3.lastSingleTouch.x;
	      // let deltaY = y - this.lastSingleTouch.y
	
	      var deltaX0 = x - _this3.singleTouchStart.x;
	      var deltaY0 = y - _this3.singleTouchStart.y;
	
	      _this3.lastSingleTouch = { x: x, y: y };
	
	      var moveX = Math.abs(deltaX0) * 3 > Math.abs(deltaY0);
	      var moveY = Math.abs(deltaY0) * 3 > Math.abs(deltaX0);
	
	      if (deltaX !== 0 && moveX) {
	        _this3.refs.scrollComponent.scrollLeft -= deltaX;
	      }
	      if (moveY) {
	        window.scrollTo(window.pageXOffset, _this3.singleTouchStart.screenY - deltaY0);
	      }
	    }
	  };
	
	  this.touchEnd = function (e) {
	    if (_this3.lastTouchDistance) {
	      e.preventDefault();
	
	      _this3.lastTouchDistance = null;
	    }
	    if (_this3.lastSingleTouch) {
	      e.preventDefault();
	
	      _this3.lastSingleTouch = null;
	      _this3.singleTouchStart = null;
	    }
	  };
	
	  this.onTimeSpanChanged = function (visibleTimeStart, visibleTimeEnd, selectTime) {
	    if (selectTime && visibleTimeEnd - visibleTimeStart <= _this3.props.minZoom) {
	      _this3.props.onTimeSelected.bind(_this3)(visibleTimeStart, function () {
	        return _this3.setState({ selectedTime: visibleTimeStart });
	      });
	    }
	
	    _this3.props.onTimeChange.bind(_this3)(visibleTimeStart, visibleTimeEnd, _this3.updateScrollCanvas);
	  };
	
	  this.onScroll = function () {
	    var scrollComponent = _this3.refs.scrollComponent;
	    var canvasTimeStart = _this3.state.canvasTimeStart;
	    var scrollX = scrollComponent.scrollLeft;
	    var zoom = _this3.state.visibleTimeEnd - _this3.state.visibleTimeStart;
	    var width = _this3.state.width;
	    var visibleTimeStart = canvasTimeStart + zoom * scrollX / width;
	
	    // move the virtual canvas if needed
	    if (scrollX < _this3.state.width * 0.5) {
	      _this3.setState({
	        canvasTimeStart: _this3.state.canvasTimeStart - zoom
	      });
	      scrollComponent.scrollLeft += _this3.state.width;
	    }
	    if (scrollX > _this3.state.width * 1.5) {
	      _this3.setState({
	        canvasTimeStart: _this3.state.canvasTimeStart + zoom
	      });
	      scrollComponent.scrollLeft -= _this3.state.width;
	    }
	
	    if (_this3.state.visibleTimeStart !== visibleTimeStart || _this3.state.visibleTimeEnd !== visibleTimeStart + zoom) {
	      _this3.onTimeSpanChanged(visibleTimeStart, visibleTimeStart + zoom);
	    }
	  };
	
	  this.onMoveCanvasLeftClick = function () {
	    var timeSpan = _this3.state.visibleTimeEnd - _this3.state.visibleTimeStart;
	    var scrollComponent = _this3.refs.scrollComponent;
	    var visibleTimeStart = _this3.state.visibleTimeStart - timeSpan;
	    var visibleTimeEnd = _this3.state.visibleTimeStart;
	
	    _this3.setState({
	      canvasTimeStart: visibleTimeStart
	    });
	    scrollComponent.scrollLeft -= _this3.state.width;
	
	    _this3.onTimeSpanChanged(visibleTimeStart, visibleTimeEnd);
	  };
	
	  this.onMoveCanvasRightClick = function () {
	    var timeSpan = _this3.state.visibleTimeEnd - _this3.state.visibleTimeStart;
	    var scrollComponent = _this3.refs.scrollComponent;
	    var visibleTimeStart = _this3.state.visibleTimeEnd;
	    var visibleTimeEnd = _this3.state.visibleTimeEnd + timeSpan;
	
	    _this3.setState({
	      canvasTimeStart: visibleTimeStart
	    });
	    scrollComponent.scrollLeft += _this3.state.width;
	
	    _this3.onTimeSpanChanged(visibleTimeStart, visibleTimeEnd);
	  };
	
	  this.updateScrollCanvas = function (visibleTimeStart, visibleTimeEnd, forceUpdateDimensions, updatedItems, updatedGroups) {
	    var oldCanvasTimeStart = _this3.state.canvasTimeStart;
	    var oldZoom = _this3.state.visibleTimeEnd - _this3.state.visibleTimeStart;
	    var newZoom = visibleTimeEnd - visibleTimeStart;
	    var items = updatedItems || _this3.props.items;
	    var groups = updatedGroups || _this3.props.groups;
	    var fullUpdate = _this3.props.fullUpdate;
	
	
	    var newState = {
	      visibleTimeStart: visibleTimeStart,
	      visibleTimeEnd: visibleTimeEnd
	    };
	
	    var resetCanvas = false;
	
	    var canKeepCanvas = visibleTimeStart >= oldCanvasTimeStart + oldZoom * 0.5 && visibleTimeStart <= oldCanvasTimeStart + oldZoom * 1.5 && visibleTimeEnd >= oldCanvasTimeStart + oldZoom * 1.5 && visibleTimeEnd <= oldCanvasTimeStart + oldZoom * 2.5;
	
	    // if new visible time is in the right canvas area
	    if (canKeepCanvas) {
	      // but we need to update the scroll
	      var newScrollLeft = Math.round(_this3.state.width * (visibleTimeStart - oldCanvasTimeStart) / newZoom);
	      if (_this3.refs.scrollComponent.scrollLeft !== newScrollLeft) {
	        resetCanvas = true;
	      }
	    } else {
	      resetCanvas = true;
	    }
	
	    if (resetCanvas) {
	      // Todo: need to calculate new dimensions
	      newState.canvasTimeStart = visibleTimeStart - newZoom;
	      _this3.refs.scrollComponent.scrollLeft = _this3.state.width;
	
	      if (_this3.props.onBoundsChange) {
	        _this3.props.onBoundsChange(newState.canvasTimeStart, newState.canvasTimeStart + newZoom * 3);
	      }
	    }
	
	    if (resetCanvas || forceUpdateDimensions || fullUpdate) {
	      var canvasTimeStart = newState.canvasTimeStart ? newState.canvasTimeStart : oldCanvasTimeStart;
	
	      var _stackItems3 = _this3.stackItems(items, groups, canvasTimeStart, visibleTimeStart, visibleTimeEnd, _this3.state.width, fullUpdate),
	          dimensionItems = _stackItems3.dimensionItems,
	          height = _stackItems3.height,
	          groupHeights = _stackItems3.groupHeights,
	          groupTops = _stackItems3.groupTops;
	
	      newState.dimensionItems = dimensionItems;
	      newState.height = height;
	      newState.groupHeights = groupHeights;
	      newState.groupTops = groupTops;
	    }
	
	    _this3.setState(newState);
	  };
	
	  this.onWheel = function (e) {
	    var traditionalZoom = _this3.props.traditionalZoom;
	
	    if (e.ctrlKey) {
	      e.preventDefault();
	      var parentPosition = (0, _utils.getParentPosition)(e.currentTarget);
	      var xPosition = e.clientX - parentPosition.x;
	      _this3.changeZoom(1.0 + e.deltaY / 50, xPosition / _this3.state.width);
	    } else if (e.shiftKey) {
	      e.preventDefault();
	      var scrollComponent = _this3.refs.scrollComponent;
	      scrollComponent.scrollLeft += e.deltaY;
	    } else if (e.altKey) {
	      var _parentPosition = (0, _utils.getParentPosition)(e.currentTarget);
	      var _xPosition = e.clientX - _parentPosition.x;
	      _this3.changeZoom(1.0 + e.deltaY / 500, _xPosition / _this3.state.width);
	    } else {
	      if (_this3.props.fixedHeader === 'fixed') {
	        e.preventDefault();
	        if (e.deltaX !== 0) {
	          if (!traditionalZoom) {
	            _this3.refs.scrollComponent.scrollLeft += e.deltaX;
	          }
	        }
	        if (e.deltaY !== 0) {
	          window.scrollTo(window.pageXOffset, window.pageYOffset + e.deltaY);
	          if (traditionalZoom) {
	            var _parentPosition2 = (0, _utils.getParentPosition)(e.currentTarget);
	            var _xPosition2 = e.clientX - _parentPosition2.x;
	            _this3.changeZoom(1.0 + e.deltaY / 50, _xPosition2 / _this3.state.width);
	          }
	        }
	      }
	    }
	  };
	
	  this.showPeriod = function (from, unit) {
	
	    var visibleTimeStart = from.valueOf();
	    var visibleTimeEnd = (0, _moment2.default)(from).add(1, unit).valueOf();
	    var zoom = visibleTimeEnd - visibleTimeStart;
	
	    //should not allow to zoom more than min zoom
	    if (_this3.props.minZoom && zoom < _this3.props.minZoom) {
	      return;
	    }
	
	    // clicked on the big header and already focused here, zoom out
	    if (unit !== 'year' && _this3.state.visibleTimeStart === visibleTimeStart && _this3.state.visibleTimeEnd === visibleTimeEnd) {
	      var nextUnit = (0, _utils.getNextUnit)(unit);
	
	      visibleTimeStart = from.startOf(nextUnit).valueOf();
	      visibleTimeEnd = (0, _moment2.default)(visibleTimeStart).add(1, nextUnit);
	      zoom = visibleTimeEnd - visibleTimeStart;
	    }
	
	    _this3.onTimeSpanChanged(visibleTimeStart, visibleTimeStart + zoom, true);
	  };
	
	  this.selectItem = function (item, clickType, e) {
	    if (_this3.state.selectedItem === item || _this3.props.itemTouchSendsClick && clickType === 'touch') {
	      if (item && _this3.props.onItemClick) {
	        _this3.props.onItemClick(item, e);
	      }
	    } else {
	      _this3.setState({ selectedItem: item });
	      if (item && _this3.props.onItemSelect) {
	        _this3.props.onItemSelect(item, e);
	      }
	    }
	  };
	
	  this.scrollAreaClick = function (e) {
	    // if not clicking on an item
	
	    if (!(0, _utils.hasSomeParentTheClass)(e.target, 'rct-item')) {
	      if (_this3.state.selectedItem) {
	        _this3.selectItem(null);
	      } else if (_this3.props.onCanvasClick) {
	        var _rowAndTimeFromEvent = _this3.rowAndTimeFromEvent(e),
	            _rowAndTimeFromEvent2 = _slicedToArray(_rowAndTimeFromEvent, 2),
	            row = _rowAndTimeFromEvent2[0],
	            time = _rowAndTimeFromEvent2[1];
	
	        if (row >= 0 && row < _this3.props.groups.length) {
	          var groupId = (0, _utils._get)(_this3.props.groups[row], _this3.props.keys.groupIdKey);
	          _this3.props.onCanvasClick(groupId, time, e);
	        }
	      }
	    }
	  };
	
	  this.dragItem = function (item, dragTime, newGroupOrder) {
	    var newGroup = _this3.props.groups[newGroupOrder];
	    var keys = _this3.props.keys;
	
	    _this3.setState({
	      draggingItem: item,
	      dragTime: dragTime,
	      newGroupOrder: newGroupOrder,
	      dragGroupTitle: newGroup ? (0, _utils._get)(newGroup, keys.groupTitleKey) : ''
	    });
	  };
	
	  this.dropItem = function (item, dragTime, newGroupOrder) {
	    _this3.setState({ draggingItem: null, dragTime: null, dragGroupTitle: null });
	    if (_this3.props.onItemMove) {
	      _this3.props.onItemMove(item, dragTime, newGroupOrder);
	    }
	  };
	
	  this.resizingItem = function (item, resizeTime, edge) {
	    _this3.setState({
	      resizingItem: item,
	      resizingEdge: edge,
	      resizeTime: resizeTime
	    });
	  };
	
	  this.resizedItem = function (item, resizeTime, edge) {
	    _this3.setState({ resizingItem: null, resizingEdge: null, resizeTime: null });
	    if (_this3.props.onItemResize) {
	      _this3.props.onItemResize(item, resizeTime, edge);
	    }
	  };
	
	  this.handleMouseDown = function (e) {
	    var topOffset = _this3.state.topOffset;
	    var pageY = e.pageY;
	    var _props5 = _this3.props,
	        headerLabelGroupHeight = _props5.headerLabelGroupHeight,
	        headerLabelHeight = _props5.headerLabelHeight;
	
	    var headerHeight = headerLabelGroupHeight + headerLabelHeight;
	
	    if (pageY - topOffset > headerHeight) {
	      _this3.setState({ isDragging: true, dragStartPosition: e.pageX, dragLastPosition: e.pageX });
	    }
	  };
	
	  this.handleMouseMove = function (e) {
	    if (_this3.state.isDragging && !_this3.state.draggingItem && !_this3.state.resizingItem) {
	      _this3.refs.scrollComponent.scrollLeft += _this3.state.dragLastPosition - e.pageX;
	      _this3.setState({ dragLastPosition: e.pageX });
	    }
	  };
	
	  this.handleMouseUp = function (e) {
	    var dragStartPosition = _this3.state.dragStartPosition;
	
	
	    if (Math.abs(dragStartPosition - e.pageX) <= _this3.props.clickTolerance) {
	      _this3.scrollAreaClick(e);
	    }
	
	    _this3.setState({ isDragging: false, dragStartPosition: null, dragLastPosition: null });
	  };
	
	  this.handleDoubleClick = function (e) {
	    var _state6 = _this3.state,
	        canvasTimeStart = _state6.canvasTimeStart,
	        width = _state6.width,
	        visibleTimeStart = _state6.visibleTimeStart,
	        visibleTimeEnd = _state6.visibleTimeEnd,
	        groupTops = _state6.groupTops,
	        topOffset = _state6.topOffset;
	
	    var zoom = visibleTimeEnd - visibleTimeStart;
	    var canvasTimeEnd = canvasTimeStart + zoom * 3;
	    var canvasWidth = width * 3;
	    var pageX = e.pageX,
	        pageY = e.pageY;
	
	    var ratio = (canvasTimeEnd - canvasTimeStart) / canvasWidth;
	    var boundingRect = _this3.refs.scrollComponent.getBoundingClientRect();
	    var timePosition = visibleTimeStart + ratio * (pageX - boundingRect.left);
	    if (_this3.props.dragSnap) {
	      timePosition = Math.round(timePosition / _this3.props.dragSnap) * _this3.props.dragSnap;
	    }
	
	    var groupIndex = 0;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = Object.keys(groupTops)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var key = _step.value;
	
	        var item = groupTops[key];
	        if (pageY - topOffset > item) {
	          groupIndex = parseInt(key, 10);
	        } else {
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    if (_this3.props.onCanvasDoubleClick) {
	      _this3.props.onCanvasDoubleClick(_this3.props.groups[groupIndex], timePosition, e);
	    }
	  };
	};
	
	exports.default = ReactCalendarTimeline;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var assign = __webpack_require__(6);
	
	var ReactPropTypesSecret = __webpack_require__(7);
	var checkPropTypes = __webpack_require__(8);
	
	var printWarning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	
	function emptyFunctionThatReturnsNull() {
	  return null;
	}
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var printWarning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(7);
	  var loggedTypeFailures = {};
	
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )
	
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = __webpack_require__(7);
	
	function emptyFunction() {}
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Item = __webpack_require__(16);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import ItemGroup from './ItemGroup'
	
	var canResizeLeft = function canResizeLeft(item, canResize) {
	  var value = (0, _utils._get)(item, 'canResize') !== undefined ? (0, _utils._get)(item, 'canResize') : canResize;
	  return value === 'left' || value === 'both';
	};
	
	var canResizeRight = function canResizeRight(item, canResize) {
	  var value = (0, _utils._get)(item, 'canResize') !== undefined ? (0, _utils._get)(item, 'canResize') : canResize;
	  return value === 'right' || value === 'both' || value === true;
	};
	
	var Items = function (_Component) {
	  _inherits(Items, _Component);
	
	  function Items() {
	    _classCallCheck(this, Items);
	
	    return _possibleConstructorReturn(this, (Items.__proto__ || Object.getPrototypeOf(Items)).apply(this, arguments));
	  }
	
	  _createClass(Items, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !((0, _utils.arraysEqual)(nextProps.groups, this.props.groups) && (0, _utils.arraysEqual)(nextProps.items, this.props.items) && nextProps.keys === this.props.keys && nextProps.canvasTimeStart === this.props.canvasTimeStart && nextProps.canvasTimeEnd === this.props.canvasTimeEnd && nextProps.canvasWidth === this.props.canvasWidth && nextProps.selectedItem === this.props.selectedItem && nextProps.lineHeight === this.props.lineHeight && nextProps.dragSnap === this.props.dragSnap && nextProps.minResizeWidth === this.props.minResizeWidth && nextProps.canChangeGroup === this.props.canChangeGroup && nextProps.canMove === this.props.canMove && nextProps.canResize === this.props.canResize && nextProps.canSelect === this.props.canSelect && nextProps.dimensionItems === this.props.dimensionItems && nextProps.topOffset === this.props.topOffset);
	    }
	  }, {
	    key: 'getGroupOrders',
	    value: function getGroupOrders() {
	      var groupIdKey = this.props.keys.groupIdKey;
	
	
	      var groupOrders = {};
	
	      for (var i = 0; i < this.props.groups.length; i++) {
	        groupOrders[(0, _utils._get)(this.props.groups[i], groupIdKey)] = i;
	      }
	
	      return groupOrders;
	    }
	  }, {
	    key: 'getVisibleItems',
	    value: function getVisibleItems(canvasTimeStart, canvasTimeEnd, groupOrders) {
	      var _props$keys = this.props.keys,
	          itemTimeStartKey = _props$keys.itemTimeStartKey,
	          itemTimeEndKey = _props$keys.itemTimeEndKey;
	
	
	      return this.props.items.filter(function (item) {
	        return (0, _utils._get)(item, itemTimeStartKey) <= canvasTimeEnd && (0, _utils._get)(item, itemTimeEndKey) >= canvasTimeStart;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          canvasTimeStart = _props.canvasTimeStart,
	          canvasTimeEnd = _props.canvasTimeEnd,
	          dimensionItems = _props.dimensionItems;
	      var _props$keys2 = this.props.keys,
	          itemIdKey = _props$keys2.itemIdKey,
	          itemGroupKey = _props$keys2.itemGroupKey;
	
	
	      var groupOrders = this.getGroupOrders();
	      var visibleItems = this.getVisibleItems(canvasTimeStart, canvasTimeEnd, groupOrders);
	      var sortedDimensionItems = (0, _utils.keyBy)(dimensionItems, 'id');
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'rct-items' },
	        visibleItems.filter(function (item) {
	          return sortedDimensionItems[(0, _utils._get)(item, itemIdKey)];
	        }).map(function (item) {
	          return _react2.default.createElement(_Item2.default, { key: (0, _utils._get)(item, itemIdKey),
	            item: item,
	            keys: _this2.props.keys,
	            order: groupOrders[(0, _utils._get)(item, itemGroupKey)],
	            dimensions: sortedDimensionItems[(0, _utils._get)(item, itemIdKey)].dimensions,
	            selected: _this2.props.selectedItem === (0, _utils._get)(item, itemIdKey),
	            canChangeGroup: (0, _utils._get)(item, 'canChangeGroup') !== undefined ? (0, _utils._get)(item, 'canChangeGroup') : _this2.props.canChangeGroup,
	            canMove: (0, _utils._get)(item, 'canMove') !== undefined ? (0, _utils._get)(item, 'canMove') : _this2.props.canMove,
	            canResizeLeft: canResizeLeft(item, _this2.props.canResize),
	            canResizeRight: canResizeRight(item, _this2.props.canResize),
	            canSelect: (0, _utils._get)(item, 'canSelect') !== undefined ? (0, _utils._get)(item, 'canSelect') : _this2.props.canSelect,
	            useResizeHandle: _this2.props.useResizeHandle,
	            topOffset: _this2.props.topOffset,
	            groupHeights: _this2.props.groupHeights,
	            groupTops: _this2.props.groupTops,
	            canvasTimeStart: _this2.props.canvasTimeStart,
	            canvasTimeEnd: _this2.props.canvasTimeEnd,
	            canvasWidth: _this2.props.canvasWidth,
	            lineHeight: _this2.props.lineHeight,
	            dragSnap: _this2.props.dragSnap,
	            minResizeWidth: _this2.props.minResizeWidth,
	            onResizing: _this2.props.itemResizing,
	            onResized: _this2.props.itemResized,
	            moveResizeValidator: _this2.props.moveResizeValidator,
	            onDrag: _this2.props.itemDrag,
	            onDrop: _this2.props.itemDrop,
	            onItemDoubleClick: _this2.props.onItemDoubleClick,
	            onContextMenu: _this2.props.onItemContextMenu,
	            onSelect: _this2.props.itemSelect });
	        })
	      );
	    }
	  }]);
	
	  return Items;
	}(_react.Component);
	
	Items.propTypes = {
	  groups: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
	  items: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
	
	  canvasTimeStart: _propTypes2.default.number.isRequired,
	  canvasTimeEnd: _propTypes2.default.number.isRequired,
	  canvasWidth: _propTypes2.default.number.isRequired,
	  lineHeight: _propTypes2.default.number.isRequired,
	
	  dragSnap: _propTypes2.default.number,
	  minResizeWidth: _propTypes2.default.number,
	  selectedItem: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	
	  canChangeGroup: _propTypes2.default.bool.isRequired,
	  canMove: _propTypes2.default.bool.isRequired,
	  canResize: _propTypes2.default.oneOf([true, false, 'left', 'right', 'both']),
	  canSelect: _propTypes2.default.bool,
	
	  keys: _propTypes2.default.object.isRequired,
	
	  moveResizeValidator: _propTypes2.default.func,
	  itemSelect: _propTypes2.default.func,
	  itemDrag: _propTypes2.default.func,
	  itemDrop: _propTypes2.default.func,
	  itemResizing: _propTypes2.default.func,
	  itemResized: _propTypes2.default.func,
	
	  onItemDoubleClick: _propTypes2.default.func,
	  onItemContextMenu: _propTypes2.default.func
	};
	Items.defaultProps = {};
	exports.default = Items;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _interact = __webpack_require__(17);
	
	var _interact2 = _interopRequireDefault(_interact);
	
	var _moment = __webpack_require__(10);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MIN_Y_COORD = -10000000;
	
	var Item = function (_Component) {
	  _inherits(Item, _Component);
	
	  // removed prop type check for SPEED!
	  // they are coming from a trusted component anyway
	  // (this complicates performance debugging otherwise)
	  function Item(props) {
	    _classCallCheck(this, Item);
	
	    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));
	
	    _this.onMouseDown = function (e) {
	      if (!_this.state.interactMounted) {
	        e.preventDefault();
	        _this.startedClicking = true;
	      }
	    };
	
	    _this.onMouseUp = function (e) {
	      if (!_this.state.interactMounted && _this.startedClicking) {
	        _this.startedClicking = false;
	        _this.actualClick(e, 'click');
	      }
	    };
	
	    _this.onTouchStart = function (e) {
	      if (!_this.state.interactMounted) {
	        e.preventDefault();
	        _this.startedTouching = true;
	      }
	    };
	
	    _this.onTouchEnd = function (e) {
	      if (!_this.state.interactMounted && _this.startedTouching) {
	        _this.startedTouching = false;
	        _this.actualClick(e, 'touch');
	      }
	    };
	
	    _this.handleDoubleClick = function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	      if (_this.props.onItemDoubleClick) {
	        _this.props.onItemDoubleClick(_this.itemId, e);
	      }
	    };
	
	    _this.handleContextMenu = function (e) {
	      if (_this.props.onContextMenu) {
	        e.preventDefault();
	        e.stopPropagation();
	        _this.props.onContextMenu(_this.itemId, e);
	      }
	    };
	
	    _this.cacheDataFromProps(props);
	
	    _this.state = {
	      interactMounted: false,
	
	      dragging: null,
	      dragStart: null,
	      preDragPosition: null,
	      dragTime: null,
	      dragGroupDelta: null,
	
	      resizing: null,
	      resizeEdge: null,
	      resizeStart: null,
	      resizeTime: null
	    };
	    return _this;
	  }
	
	  _createClass(Item, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var shouldUpdate = nextState.dragging !== this.state.dragging || nextState.dragTime !== this.state.dragTime || nextState.dragGroupDelta !== this.state.dragGroupDelta || nextState.resizing !== this.state.resizing || nextState.resizeTime !== this.state.resizeTime || nextProps.keys !== this.props.keys || !(0, _utils.deepObjectCompare)(nextProps.itemProps, this.props.itemProps) || nextProps.selected !== this.props.selected || nextProps.item !== this.props.item || nextProps.canvasTimeStart !== this.props.canvasTimeStart || nextProps.canvasTimeEnd !== this.props.canvasTimeEnd || nextProps.canvasWidth !== this.props.canvasWidth || nextProps.lineHeight !== this.props.lineHeight || nextProps.order !== this.props.order || nextProps.dragSnap !== this.props.dragSnap || nextProps.minResizeWidth !== this.props.minResizeWidth || nextProps.selected !== this.props.selected || nextProps.canChangeGroup !== this.props.canChangeGroup || nextProps.canSelect !== this.props.canSelect || nextProps.topOffset !== this.props.topOffset || nextProps.canMove !== this.props.canMove || nextProps.canResizeLeft !== this.props.canResizeLeft || nextProps.canResizeRight !== this.props.canResizeRight || nextProps.dimensions !== this.props.dimensions;
	      return shouldUpdate;
	    }
	  }, {
	    key: 'cacheDataFromProps',
	    value: function cacheDataFromProps(props) {
	      this.itemId = (0, _utils._get)(props.item, props.keys.itemIdKey);
	      this.itemTitle = (0, _utils._get)(props.item, props.keys.itemTitleKey);
	      this.itemDivTitle = props.keys.itemDivTitleKey ? (0, _utils._get)(props.item, props.keys.itemDivTitleKey) : this.itemTitle;
	      this.itemTimeStart = (0, _utils._get)(props.item, props.keys.itemTimeStartKey);
	      this.itemTimeEnd = (0, _utils._get)(props.item, props.keys.itemTimeEndKey);
	    }
	  }, {
	    key: 'coordinateToTimeRatio',
	    value: function coordinateToTimeRatio() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      return (props.canvasTimeEnd - props.canvasTimeStart) / props.canvasWidth;
	    }
	  }, {
	    key: 'dragTimeSnap',
	    value: function dragTimeSnap(dragTime, considerOffset) {
	      var dragSnap = this.props.dragSnap;
	
	      if (dragSnap) {
	        var offset = considerOffset ? (0, _moment2.default)().utcOffset() * 60 * 1000 : 0;
	        return Math.round(dragTime / dragSnap) * dragSnap - offset % dragSnap;
	      } else {
	        return dragTime;
	      }
	    }
	  }, {
	    key: 'resizeTimeSnap',
	    value: function resizeTimeSnap(dragTime) {
	      var dragSnap = this.props.dragSnap;
	
	      if (dragSnap) {
	        var endTime = this.itemTimeEnd % dragSnap;
	        return Math.round((dragTime - endTime) / dragSnap) * dragSnap + endTime;
	      } else {
	        return dragTime;
	      }
	    }
	  }, {
	    key: 'dragTime',
	    value: function dragTime(e) {
	      var startTime = this.itemTimeStart;
	
	      if (this.state.dragging) {
	        var deltaX = e.pageX - this.state.dragStart.x;
	        var timeDelta = deltaX * this.coordinateToTimeRatio();
	
	        return this.dragTimeSnap(startTime + timeDelta, true);
	      } else {
	        return startTime;
	      }
	    }
	  }, {
	    key: 'dragGroupDelta',
	    value: function dragGroupDelta(e) {
	      var _props = this.props,
	          groupTops = _props.groupTops,
	          order = _props.order,
	          topOffset = _props.topOffset;
	
	      if (this.state.dragging) {
	        if (!this.props.canChangeGroup) {
	          return 0;
	        }
	        var groupDelta = 0;
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = Object.keys(groupTops)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;
	
	            var item = groupTops[key];
	            if (e.pageY - topOffset > item) {
	              groupDelta = parseInt(key, 10) - order;
	            } else {
	              break;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        if (this.props.order + groupDelta < 0) {
	          return 0 - this.props.order;
	        } else {
	          return groupDelta;
	        }
	      } else {
	        return 0;
	      }
	    }
	  }, {
	    key: 'resizeTimeDelta',
	    value: function resizeTimeDelta(e, resizeEdge) {
	      var length = this.itemTimeEnd - this.itemTimeStart;
	      var timeDelta = this.dragTimeSnap((e.pageX - this.state.resizeStart) * this.coordinateToTimeRatio());
	
	      if (length + (resizeEdge === 'left' ? -timeDelta : timeDelta) < (this.props.dragSnap || 1000)) {
	        if (resizeEdge === 'left') {
	          return length - (this.props.dragSnap || 1000);
	        } else {
	          return (this.props.dragSnap || 1000) - length;
	        }
	      } else {
	        return timeDelta;
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'mountInteract',
	    value: function mountInteract() {
	      var _this2 = this;
	
	      var leftResize = this.props.useResizeHandle ? this.refs.dragLeft : true;
	      var rightResize = this.props.useResizeHandle ? this.refs.dragRight : true;
	
	      (0, _interact2.default)(this.refs.item).resizable({
	        edges: {
	          left: this.canResizeLeft() && leftResize,
	          right: this.canResizeRight() && rightResize,
	          top: false,
	          bottom: false
	        },
	        enabled: this.props.selected && (this.canResizeLeft() || this.canResizeRight())
	      }).draggable({
	        enabled: this.props.selected
	      }).on('dragstart', function (e) {
	        if (_this2.props.selected) {
	          _this2.setState({
	            dragging: true,
	            dragStart: { x: e.pageX, y: e.pageY },
	            preDragPosition: { x: e.target.offsetLeft, y: e.target.offsetTop },
	            dragTime: _this2.itemTimeStart,
	            dragGroupDelta: 0
	          });
	        } else {
	          return false;
	        }
	      }).on('dragmove', function (e) {
	        if (_this2.state.dragging) {
	          var dragTime = _this2.dragTime(e);
	          var dragGroupDelta = _this2.dragGroupDelta(e);
	
	          if (_this2.props.moveResizeValidator) {
	            dragTime = _this2.props.moveResizeValidator('move', _this2.props.item, dragTime);
	          }
	
	          if (_this2.props.onDrag) {
	            _this2.props.onDrag(_this2.itemId, dragTime, _this2.props.order + dragGroupDelta);
	          }
	
	          _this2.setState({
	            dragTime: dragTime,
	            dragGroupDelta: dragGroupDelta
	          });
	        }
	      }).on('dragend', function (e) {
	        if (_this2.state.dragging) {
	          if (_this2.props.onDrop) {
	            var dragTime = _this2.dragTime(e);
	
	            if (_this2.props.moveResizeValidator) {
	              dragTime = _this2.props.moveResizeValidator('move', _this2.props.item, dragTime);
	            }
	
	            _this2.props.onDrop(_this2.itemId, dragTime, _this2.props.order + _this2.dragGroupDelta(e));
	          }
	
	          _this2.setState({
	            dragging: false,
	            dragStart: null,
	            preDragPosition: null,
	            dragTime: null,
	            dragGroupDelta: null
	          });
	        }
	      }).on('resizestart', function (e) {
	        if (_this2.props.selected) {
	          _this2.setState({
	            resizing: true,
	            resizeEdge: null, // we don't know yet
	            resizeStart: e.pageX,
	            resizeTime: 0
	          });
	        } else {
	          return false;
	        }
	      }).on('resizemove', function (e) {
	        if (_this2.state.resizing) {
	          var resizeEdge = _this2.state.resizeEdge;
	
	          if (!resizeEdge) {
	            resizeEdge = e.deltaRect.left !== 0 ? 'left' : 'right';
	            _this2.setState({ resizeEdge: resizeEdge });
	          }
	          var time = resizeEdge === 'left' ? _this2.itemTimeStart : _this2.itemTimeEnd;
	
	          var resizeTime = _this2.resizeTimeSnap(time + _this2.resizeTimeDelta(e, resizeEdge));
	
	          if (_this2.props.moveResizeValidator) {
	            resizeTime = _this2.props.moveResizeValidator('resize', _this2.props.item, resizeTime, resizeEdge);
	          }
	
	          if (_this2.props.onResizing) {
	            _this2.props.onResizing(_this2.itemId, resizeTime, resizeEdge);
	          }
	
	          _this2.setState({
	            resizeTime: resizeTime
	          });
	        }
	      }).on('resizeend', function (e) {
	        if (_this2.state.resizing) {
	          var resizeEdge = _this2.state.resizeEdge;
	
	          var time = resizeEdge === 'left' ? _this2.itemTimeStart : _this2.itemTimeEnd;
	          var resizeTime = _this2.resizeTimeSnap(time + _this2.resizeTimeDelta(e, resizeEdge));
	
	          if (_this2.props.moveResizeValidator) {
	            resizeTime = _this2.props.moveResizeValidator('resize', _this2.props.item, resizeTime, resizeEdge);
	          }
	
	          if (_this2.props.onResized && _this2.resizeTimeDelta(e, resizeEdge) !== 0) {
	            _this2.props.onResized(_this2.itemId, resizeTime, resizeEdge);
	          }
	          _this2.setState({
	            resizing: null,
	            resizeStart: null,
	            resizeEdge: null,
	            resizeTime: null
	          });
	        }
	      }).on('tap', function (e) {
	        _this2.actualClick(e, e.pointerType === 'mouse' ? 'click' : 'touch');
	      });
	
	      this.setState({
	        interactMounted: true
	      });
	    }
	  }, {
	    key: 'canResizeLeft',
	    value: function canResizeLeft() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      if (!props.canResizeLeft || props.dimensions.clippedLeft) {
	        return false;
	      }
	      var width = parseInt(props.dimensions.width, 10);
	      return width >= props.minResizeWidth;
	    }
	  }, {
	    key: 'canResizeRight',
	    value: function canResizeRight() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      if (!props.canResizeRight || props.dimensions.clippedRight) {
	        return false;
	      }
	      var width = parseInt(props.dimensions.width, 10);
	      return width >= props.minResizeWidth;
	    }
	  }, {
	    key: 'canMove',
	    value: function canMove() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      return !!props.canMove;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.cacheDataFromProps(nextProps);
	
	      var interactMounted = this.state.interactMounted;
	
	      var couldDrag = this.props.selected && this.canMove(this.props);
	      var couldResizeLeft = this.props.selected && this.canResizeLeft(this.props);
	      var couldResizeRight = this.props.selected && this.canResizeRight(this.props);
	      var willBeAbleToDrag = nextProps.selected && this.canMove(nextProps);
	      var willBeAbleToResizeLeft = nextProps.selected && this.canResizeLeft(nextProps);
	      var willBeAbleToResizeRight = nextProps.selected && this.canResizeRight(nextProps);
	
	      if (nextProps.selected && !interactMounted) {
	        this.mountInteract();
	        interactMounted = true;
	      }
	
	      if (interactMounted && (couldResizeLeft !== willBeAbleToResizeLeft || couldResizeRight !== willBeAbleToResizeRight)) {
	        var leftResize = this.props.useResizeHandle ? this.refs.dragLeft : true;
	        var rightResize = this.props.useResizeHandle ? this.refs.dragRight : true;
	
	        (0, _interact2.default)(this.refs.item).resizable({
	          enabled: willBeAbleToResizeLeft || willBeAbleToResizeRight,
	          edges: {
	            top: false,
	            bottom: false,
	            left: willBeAbleToResizeLeft && leftResize,
	            right: willBeAbleToResizeRight && rightResize
	          }
	        });
	      }
	      if (interactMounted && couldDrag !== willBeAbleToDrag) {
	        (0, _interact2.default)(this.refs.item).draggable({ enabled: willBeAbleToDrag });
	      }
	    }
	  }, {
	    key: 'actualClick',
	    value: function actualClick(e, clickType) {
	      if (this.props.canSelect && this.props.onSelect) {
	        this.props.onSelect(this.itemId, clickType, e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var dimensions = this.props.dimensions;
	      if (typeof this.props.order === 'undefined' || this.props.order === null) {
	        return null;
	      }
	
	      var classNames = 'rct-item' + (this.props.selected ? ' selected' : '') + (this.canMove(this.props) ? ' can-move' : '') + (this.canResizeLeft(this.props) || this.canResizeRight(this.props) ? ' can-resize' : '') + (this.canResizeLeft(this.props) ? ' can-resize-left' : '') + (this.canResizeRight(this.props) ? ' can-resize-right' : '') + (this.props.item.className ? ' ' + this.props.item.className : '') + (dimensions.clippedLeft ? ' clipped-left' : '') + (dimensions.clippedRight ? ' clipped-right' : '');
	
	      var adjustedLeft = dimensions.left < MIN_Y_COORD ? MIN_Y_COORD : dimensions.left;
	      var adjustedWidth = dimensions.left < MIN_Y_COORD ? dimensions.width + dimensions.left - MIN_Y_COORD : dimensions.width;
	
	      var style = {
	        left: adjustedLeft + 'px',
	        top: dimensions.top + 'px',
	        width: adjustedWidth + 'px',
	        height: dimensions.height + 'px',
	        lineHeight: dimensions.height + 'px'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props.item.itemProps, {
	          key: this.itemId,
	          ref: 'item',
	          className: classNames,
	          title: this.itemDivTitle,
	          onMouseDown: this.onMouseDown,
	          onMouseUp: this.onMouseUp,
	          onTouchStart: this.onTouchStart,
	          onTouchEnd: this.onTouchEnd,
	          onDoubleClick: this.handleDoubleClick,
	          onContextMenu: this.handleContextMenu,
	          style: style }),
	        this.props.useResizeHandle ? _react2.default.createElement('div', { ref: 'dragLeft', className: 'rct-drag-left' }) : '',
	        _react2.default.createElement(
	          'div',
	          { className: 'rct-item-overflow' },
	          _react2.default.createElement(
	            'div',
	            { className: 'rct-item-content' },
	            this.itemTitle
	          )
	        ),
	        this.props.useResizeHandle ? _react2.default.createElement('div', { ref: 'dragRight', className: 'rct-drag-right' }) : ''
	      );
	    }
	  }]);
	
	  return Item;
	}(_react.Component);
	
	Item.propTypes = {
	  // canvasTimeStart: React.PropTypes.number.isRequired,
	  // canvasTimeEnd: React.PropTypes.number.isRequired,
	  // canvasWidth: React.PropTypes.number.isRequired,
	  // lineHeight: React.PropTypes.number.isRequired,
	  // order: React.PropTypes.number.isRequired,
	  //
	  // dragSnap: React.PropTypes.number,
	  // minResizeWidth: React.PropTypes.number,
	  // selected: React.PropTypes.bool,
	  //
	  // canChangeGroup: React.PropTypes.bool.isRequired,
	  // canMove: React.PropTypes.bool.isRequired,
	  // canResizeLeft: React.PropTypes.bool.isRequired,
	  // canResizeRight: React.PropTypes.bool.isRequired,
	  //
	  // keys: React.PropTypes.object.isRequired,
	  // item: React.PropTypes.object.isRequired,
	  //
	  // onSelect: React.PropTypes.func,
	  // onDrag: React.PropTypes.func,
	  // onDrop: React.PropTypes.func,
	  // onResizing: React.PropTypes.func,
	  // onResized: React.PropTypes.func,
	  // onContextMenu: React.PropTypes.func
	};
	Item.defaultProps = {
	  selected: false
	};
	exports.default = Item;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports._get = _get;
	exports._length = _length;
	exports.arraysEqual = arraysEqual;
	exports.iterateTimes = iterateTimes;
	exports.getMinUnit = getMinUnit;
	exports.getNextUnit = getNextUnit;
	exports.getParentPosition = getParentPosition;
	exports.coordinateToTimeRatio = coordinateToTimeRatio;
	exports.calculateDimensions = calculateDimensions;
	exports.getGroupOrders = getGroupOrders;
	exports.getVisibleItems = getVisibleItems;
	exports.collision = collision;
	exports.stack = stack;
	exports.nostack = nostack;
	exports.keyBy = keyBy;
	exports.groupBy = groupBy;
	exports.hasSomeParentTheClass = hasSomeParentTheClass;
	exports.createGradientPattern = createGradientPattern;
	exports.deepObjectCompare = deepObjectCompare;
	exports.getTrueScrollTop = getTrueScrollTop;
	
	var _moment = __webpack_require__(10);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EPSILON = 0.001;
	
	// so we could use both immutable.js objects and regular objects
	function _get(object, key) {
	  return typeof object.get === 'function' ? object.get(key) : object[key];
	}
	
	function _length(object) {
	  return typeof object.count === 'function' ? object.count() : object.length;
	}
	
	function arraysEqual(array1, array2) {
	  return _length(array1) === _length(array2) && array1.every(function (element, index) {
	    return element === _get(array2, index);
	  });
	}
	
	function iterateTimes(start, end, unit, timeSteps, callback) {
	  var time = (0, _moment2.default)(start).startOf(unit);
	
	  if (timeSteps[unit] && timeSteps[unit] > 1) {
	    var value = time.get(unit);
	    time.set(unit, value - value % timeSteps[unit]);
	  }
	
	  while (time.valueOf() < end) {
	    var nextTime = (0, _moment2.default)(time).add(timeSteps[unit] || 1, unit + 's');
	    callback(time, nextTime);
	    time = nextTime;
	  }
	}
	
	function getMinUnit(zoom, width, timeSteps) {
	  var timeDividers = {
	    second: 1000,
	    minute: 60,
	    hour: 60,
	    day: 24,
	    month: 30,
	    year: 12
	  };
	
	  var minUnit = 'year';
	  var breakCount = zoom;
	  var minCellWidth = 12;
	
	  Object.keys(timeDividers).some(function (unit) {
	    breakCount = breakCount / timeDividers[unit];
	    var cellCount = breakCount / timeSteps[unit];
	    var countNeeded = width / (timeSteps[unit] && timeSteps[unit] > 1 ? 3 * minCellWidth : minCellWidth);
	
	    if (cellCount < countNeeded) {
	      minUnit = unit;
	      return true;
	    }
	  });
	
	  return minUnit;
	}
	
	function getNextUnit(unit) {
	  var nextUnits = {
	    second: 'minute',
	    minute: 'hour',
	    hour: 'day',
	    day: 'month',
	    month: 'year'
	  };
	
	  return nextUnits[unit] || '';
	}
	
	function getParentPosition(element) {
	  var xPosition = 0;
	  var yPosition = 0;
	  var first = true;
	
	  while (element) {
	    xPosition += element.offsetLeft - (first ? 0 : element.scrollLeft) + element.clientLeft;
	    yPosition += element.offsetTop - (first ? 0 : element.scrollTop) + element.clientTop;
	    element = element.offsetParent;
	    first = false;
	  }
	  return { x: xPosition, y: yPosition };
	}
	
	function coordinateToTimeRatio(canvasTimeStart, canvasTimeEnd, canvasWidth) {
	  return (canvasTimeEnd - canvasTimeStart) / canvasWidth;
	}
	
	function calculateDimensions(_ref) {
	  var item = _ref.item,
	      order = _ref.order,
	      keys = _ref.keys,
	      canvasTimeStart = _ref.canvasTimeStart,
	      canvasTimeEnd = _ref.canvasTimeEnd,
	      canvasWidth = _ref.canvasWidth,
	      dragSnap = _ref.dragSnap,
	      lineHeight = _ref.lineHeight,
	      draggingItem = _ref.draggingItem,
	      dragTime = _ref.dragTime,
	      resizingItem = _ref.resizingItem,
	      resizingEdge = _ref.resizingEdge,
	      resizeTime = _ref.resizeTime,
	      newGroupOrder = _ref.newGroupOrder,
	      itemHeightRatio = _ref.itemHeightRatio,
	      fullUpdate = _ref.fullUpdate,
	      visibleTimeStart = _ref.visibleTimeStart,
	      visibleTimeEnd = _ref.visibleTimeEnd;
	
	  var itemId = _get(item, keys.itemIdKey);
	  var itemTimeStart = _get(item, keys.itemTimeStartKey);
	  var itemTimeEnd = _get(item, keys.itemTimeEndKey);
	
	  var isDragging = itemId === draggingItem;
	  var isResizing = itemId === resizingItem;
	
	  var itemStart = isResizing && resizingEdge === 'left' ? resizeTime : itemTimeStart;
	  var itemEnd = isResizing && resizingEdge === 'right' ? resizeTime : itemTimeEnd;
	
	  var x = isDragging ? dragTime : itemStart;
	
	  var w = Math.max(itemEnd - itemStart, dragSnap);
	
	  var collisionX = itemStart;
	  var collisionW = w;
	
	  if (isDragging) {
	    if (itemTimeStart >= dragTime) {
	      collisionX = dragTime;
	      collisionW = Math.max(itemTimeEnd - dragTime, dragSnap);
	    } else {
	      collisionW = Math.max(dragTime - itemTimeStart + w, dragSnap);
	    }
	  }
	
	  var clippedLeft = false;
	  var clippedRight = false;
	
	  if (fullUpdate) {
	    if (!isDragging && (visibleTimeStart > x + w || visibleTimeEnd < x)) {
	      return null;
	    }
	
	    if (visibleTimeStart > x) {
	      w -= visibleTimeStart - x;
	      x = visibleTimeStart;
	      if (isDragging && w < 0) {
	        x += w;
	        w = 0;
	      }
	      clippedLeft = true;
	    }
	    if (x + w > visibleTimeEnd) {
	      w -= x + w - visibleTimeEnd;
	      clippedRight = true;
	    }
	  }
	
	  var ratio = 1 / coordinateToTimeRatio(canvasTimeStart, canvasTimeEnd, canvasWidth);
	  var h = lineHeight * itemHeightRatio;
	
	  var dimensions = {
	    left: (x - canvasTimeStart) * ratio,
	    top: null,
	    width: Math.max(w * ratio, 3),
	    height: h,
	    order: isDragging ? newGroupOrder : order,
	    stack: true,
	    collisionLeft: collisionX,
	    originalLeft: itemTimeStart,
	    collisionWidth: collisionW,
	    lineHeight: lineHeight,
	    isDragging: isDragging,
	    clippedLeft: clippedLeft,
	    clippedRight: clippedRight
	  };
	
	  return dimensions;
	}
	
	function getGroupOrders(groups, keys) {
	  var groupIdKey = keys.groupIdKey;
	
	
	  var groupOrders = {};
	
	  for (var i = 0; i < groups.length; i++) {
	    groupOrders[_get(groups[i], groupIdKey)] = i;
	  }
	
	  return groupOrders;
	}
	
	function getVisibleItems(items, canvasTimeStart, canvasTimeEnd, keys) {
	  var itemTimeStartKey = keys.itemTimeStartKey,
	      itemTimeEndKey = keys.itemTimeEndKey;
	
	
	  return items.filter(function (item) {
	    return _get(item, itemTimeStartKey) <= canvasTimeEnd && _get(item, itemTimeEndKey) >= canvasTimeStart;
	  });
	}
	
	function collision(a, b, lineHeight) {
	  // var verticalMargin = (lineHeight - a.height)/2;
	  var verticalMargin = 0;
	  return a.collisionLeft + EPSILON < b.collisionLeft + b.collisionWidth && a.collisionLeft + a.collisionWidth - EPSILON > b.collisionLeft && a.top - verticalMargin + EPSILON < b.top + b.height && a.top + a.height + verticalMargin - EPSILON > b.top;
	}
	
	function stack(items, groupOrders, lineHeight, headerHeight, force) {
	  var i, iMax;
	
	  var totalHeight = headerHeight;
	
	  var groupHeights = {};
	  var groupTops = {};
	
	  var groupedItems = groupBy(items, function (item) {
	    return item.dimensions.order;
	  });
	
	  if (force) {
	    // reset top position of all items
	    for (i = 0, iMax = items.length; i < iMax; i++) {
	      items[i].dimensions.top = null;
	    }
	  }
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = Object.keys(groupOrders)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var url = _step.value;
	
	      var key = groupOrders[url];
	      // calculate new, non-overlapping positions
	      var group = groupedItems[key] || [];
	
	      groupTops[key] = totalHeight;
	
	      var groupHeight = 0;
	      var verticalMargin = 0;
	      for (i = 0, iMax = group.length; i < iMax; i++) {
	        var item = group[i];
	        verticalMargin = item.dimensions.lineHeight - item.dimensions.height;
	
	        if (item.dimensions.stack && item.dimensions.top === null) {
	          item.dimensions.top = totalHeight + verticalMargin;
	          groupHeight = Math.max(groupHeight, item.dimensions.lineHeight);
	          do {
	            var collidingItem = null;
	            for (var j = 0, jj = group.length; j < jj; j++) {
	              var other = group[j];
	              if (other.top !== null && other !== item && other.dimensions.stack && collision(item.dimensions, other.dimensions, item.dimensions.lineHeight)) {
	                collidingItem = other;
	                break;
	              } else {
	                // console.log('dont test', other.top !== null, other !== item, other.stack);
	              }
	            }
	
	            if (collidingItem != null) {
	              // There is a collision. Reposition the items above the colliding element
	              item.dimensions.top = collidingItem.dimensions.top + collidingItem.dimensions.lineHeight;
	              groupHeight = Math.max(groupHeight, item.dimensions.top + item.dimensions.height - totalHeight);
	            }
	          } while (collidingItem);
	        }
	      }
	      groupHeights[key] = Math.max(groupHeight + verticalMargin, lineHeight);
	      totalHeight += Math.max(groupHeight + verticalMargin, lineHeight);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return {
	    height: totalHeight,
	    groupHeights: groupHeights,
	    groupTops: groupTops
	  };
	}
	
	function nostack(items, groupOrders, lineHeight, headerHeight, force) {
	  var i, iMax;
	
	  var totalHeight = headerHeight;
	
	  var groupHeights = {};
	  var groupTops = {};
	
	  var groupedItems = groupBy(items, function (item) {
	    return item.dimensions.order;
	  });
	
	  if (force) {
	    // reset top position of all items
	    for (i = 0, iMax = items.length; i < iMax; i++) {
	      items[i].dimensions.top = null;
	    }
	  }
	
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = Object.keys(groupOrders)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var url = _step2.value;
	
	      var key = groupOrders[url];
	      // calculate new, non-overlapping positions
	      var group = groupedItems[key] || [];
	
	      groupTops[key] = totalHeight;
	
	      var groupHeight = 0;
	      for (i = 0, iMax = group.length; i < iMax; i++) {
	        var item = group[i];
	        var verticalMargin = (item.dimensions.lineHeight - item.dimensions.height) / 2;
	
	        if (item.dimensions.top === null) {
	          item.dimensions.top = totalHeight + verticalMargin;
	          groupHeight = Math.max(groupHeight, item.dimensions.lineHeight);
	        }
	      }
	      groupHeights[key] = Math.max(groupHeight, lineHeight);
	      totalHeight += Math.max(groupHeight, lineHeight);
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	
	  return {
	    height: totalHeight,
	    groupHeights: groupHeights,
	    groupTops: groupTops
	  };
	}
	
	function keyBy(value, key) {
	  var obj = {};
	
	  value.forEach(function (element, index, array) {
	    obj[element[key]] = element;
	  });
	
	  return obj;
	}
	
	function groupBy(collection, groupFunction) {
	  var obj = {};
	
	  collection.forEach(function (element, index, array) {
	    var key = groupFunction(element);
	    if (!obj[key]) {
	      obj[key] = [];
	    }
	    obj[key].push(element);
	  });
	
	  return obj;
	}
	
	function hasSomeParentTheClass(element, classname) {
	  if (element.className && element.className.split(' ').indexOf(classname) >= 0) return true;
	  return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
	}
	
	function createGradientPattern(lineHeight, color1, color2, borderColor) {
	  if (borderColor) {
	    if (!color2 || color1 === color2) {
	      return 'repeating-linear-gradient(to bottom, ' + (color1 + ',') + (color1 + ' ' + (lineHeight - 1) + 'px,') + (borderColor + ' ' + (lineHeight - 1) + 'px,') + (borderColor + ' ' + lineHeight + 'px') + ')';
	    } else {
	      return 'repeating-linear-gradient(to bottom, ' + (color1 + ',') + (color1 + ' ' + (lineHeight - 1) + 'px,') + (borderColor + ' ' + (lineHeight - 1) + 'px,') + (borderColor + ' ' + lineHeight + 'px,') + (color2 + ' ' + lineHeight + 'px,') + (color2 + ' ' + (lineHeight * 2 - 1) + 'px,') + (borderColor + ' ' + (lineHeight * 2 - 1) + 'px,') + (borderColor + ' ' + lineHeight * 2 + 'px') + ')';
	    }
	  } else {
	    if (!color2 || color1 === color2) {
	      return color1;
	    } else {
	      return 'repeating-linear-gradient(to bottom,' + color1 + ',' + color1 + ' ' + lineHeight + 'px,' + color2 + ' ' + lineHeight + 'px,' + color2 + ' ' + lineHeight * 2 + 'px)';
	    }
	  }
	}
	
	function deepObjectCompare(obj1, obj2) {
	  for (var p in obj1) {
	    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
	
	    switch (_typeof(obj1[p])) {
	      case 'object':
	        if (!Object.compare(obj1[p], obj2[p])) return false;
	        break;
	      case 'function':
	        if (typeof obj2[p] === 'undefined' || p !== 'compare' && obj1[p].toString() !== obj2[p].toString()) return false;
	        break;
	      default:
	        if (obj1[p] !== obj2[p]) return false;
	    }
	  }
	
	  for (var r in obj2) {
	    if (typeof obj1[r] === 'undefined') return false;
	  }
	  return true;
	};
	
	function getTrueScrollTop(element) {
	  return (element.scrollTop || 0) + (element.parentNode ? getTrueScrollTop(element.parentNode) : 0);
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _function = __webpack_require__(20);
	
	var _function2 = _interopRequireDefault(_function);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InfoLabel = function (_Component) {
	  _inherits(InfoLabel, _Component);
	
	  function InfoLabel() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, InfoLabel);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfoLabel.__proto__ || Object.getPrototypeOf(InfoLabel)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _function2.default, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(InfoLabel, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'rct-infolabel' },
	        this.props.label
	      );
	    }
	  }]);
	
	  return InfoLabel;
	}(_react.Component);
	
	exports.default = InfoLabel;
	
	
	InfoLabel.propTypes = {
	  label: _propTypes2.default.string.isRequired
	};
	InfoLabel.defaultProps = {
	  label: ''
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _shallowEqual = __webpack_require__(21);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}
	
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Sidebar = function (_Component) {
	  _inherits(Sidebar, _Component);
	
	  function Sidebar(props) {
	    _classCallCheck(this, Sidebar);
	
	    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
	
	    _this.state = {
	      scrollTop: 0,
	      componentTop: 0
	    };
	    return _this;
	  }
	
	  _createClass(Sidebar, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (window && window.document && this.state.scrollTop !== nextState.scrollTop) {
	        return true;
	      }
	
	      return !((0, _utils.arraysEqual)(nextProps.groups, this.props.groups) && nextProps.keys === this.props.keys && nextProps.width === this.props.width && nextProps.lineHeight === this.props.lineHeight && nextProps.fixedHeader === this.props.fixedHeader && nextProps.zIndex === this.props.zIndex && nextProps.groupHeights === this.props.groupHeights && nextProps.height === this.props.height);
	    }
	  }, {
	    key: 'scroll',
	    value: function scroll(e) {
	      if (window && window.document) {
	        var scroll = window.document.body.scrollTop;
	        this.setState({
	          scrollTop: scroll
	        });
	      }
	    }
	  }, {
	    key: 'setComponentTop',
	    value: function setComponentTop() {
	      var viewportOffset = void 0;
	      var scroll = 0;
	      if (this.props.fixedHeader === 'fixed') {
	        viewportOffset = this.refs.sidebar.parentNode.getBoundingClientRect();
	        scroll = (0, _utils.getTrueScrollTop)(this.refs.sidebar.parentNode);
	      } else {
	        viewportOffset = this.refs.sidebar.getBoundingClientRect();
	      }
	      this.setState({
	        componentTop: viewportOffset.top + scroll
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.setComponentTop();
	      this.scroll();
	
	      this.scrollEventListener = {
	        handleEvent: function handleEvent(event) {
	          _this2.scroll();
	        }
	      };
	
	      window.addEventListener('scroll', this.scrollEventListener);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.scrollEventListener);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setComponentTop();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          fixedHeader = _props.fixedHeader,
	          width = _props.width,
	          lineHeight = _props.lineHeight,
	          zIndex = _props.zIndex,
	          groupHeights = _props.groupHeights,
	          height = _props.height,
	          headerHeight = _props.headerHeight;
	      var _props$keys = this.props.keys,
	          groupIdKey = _props$keys.groupIdKey,
	          groupTitleKey = _props$keys.groupTitleKey;
	      var scrollTop = this.state.scrollTop;
	
	
	      var sidebarStyle = {
	        width: width + 'px',
	        height: height + 'px'
	      };
	
	      var headerStyle = {
	        height: headerHeight + 'px',
	        lineHeight: lineHeight + 'px',
	        width: width + 'px'
	      };
	
	      var groupsStyle = {
	        width: width + 'px'
	      };
	
	      var componentTop = this.state.componentTop;
	      if (fixedHeader === 'fixed') {
	        headerStyle.position = 'fixed';
	        headerStyle.zIndex = zIndex;
	        groupsStyle.paddingTop = headerStyle.height;
	        headerStyle.top = componentTop - scrollTop + 'px';
	      } else if (fixedHeader === 'absolute') {
	        if (scrollTop >= componentTop) {
	          headerStyle.position = 'absolute';
	          headerStyle.top = scrollTop - componentTop + 'px';
	          headerStyle.left = '0';
	          groupsStyle.paddingTop = headerStyle.height;
	        }
	      }
	
	      var header = _react2.default.createElement(
	        'div',
	        { ref: 'sidebarHeader', className: 'rct-sidebar-header', style: headerStyle },
	        this.props.children
	      );
	
	      var groupLines = [];
	      var i = 0;
	
	      this.props.groups.forEach(function (group, index) {
	        var elementStyle = {
	          height: groupHeights[index] - 1 + 'px',
	          lineHeight: groupHeights[index] - 1 + 'px'
	        };
	
	        groupLines.push(_react2.default.createElement(
	          'div',
	          { key: (0, _utils._get)(group, groupIdKey), className: 'rct-sidebar-row' + (i % 2 === 0 ? ' rct-sidebar-row-even' : ' rct-sidebar-row-odd'), style: elementStyle },
	          (0, _utils._get)(group, groupTitleKey)
	        ));
	        i += 1;
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { ref: 'sidebar', className: 'rct-sidebar', style: sidebarStyle },
	        header,
	        _react2.default.createElement(
	          'div',
	          { style: groupsStyle },
	          groupLines
	        )
	      );
	    }
	  }]);
	
	  return Sidebar;
	}(_react.Component);
	
	exports.default = Sidebar;
	
	
	Sidebar.propTypes = {
	  groups: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
	  width: _propTypes2.default.number.isRequired,
	  lineHeight: _propTypes2.default.number.isRequired,
	  zIndex: _propTypes2.default.number,
	  fixedHeader: _propTypes2.default.oneOf(['fixed', 'absolute', 'none']),
	  keys: _propTypes2.default.object.isRequired,
	  children: _propTypes2.default.node
	};
	Sidebar.defaultProps = {
	  fixedHeader: 'none',
	  zIndex: 12,
	  children: null
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _moment = __webpack_require__(10);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header(props) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	
	    _this.periodClick = function (e) {
	      var _e$target$dataset = e.target.dataset,
	          time = _e$target$dataset.time,
	          unit = _e$target$dataset.unit;
	
	      if (time && unit) {
	        _this.props.showPeriod((0, _moment2.default)(time - 0), unit);
	      }
	    };
	
	    _this.touchStart = function (e) {
	      if (e.touches.length === 1) {
	        _this.setState({
	          touchTarget: e.target || e.touchTarget,
	          touchActive: true
	        });
	      }
	    };
	
	    _this.touchEnd = function (e) {
	      if (!_this.state.touchActive) {
	        return _this.resetTouchState();
	      }
	
	      var changedTouches = e.changedTouches[0];
	      if (changedTouches) {
	        var elem = document.elementFromPoint(changedTouches.pageX, changedTouches.pageY);
	        if (elem !== _this.state.touchTarget) {
	          return _this.resetTouchState();
	        }
	      }
	
	      _this.resetTouchState();
	      _this.periodClick(e);
	    };
	
	    _this.state = {
	      scrollTop: 0,
	      componentTop: 0,
	      touchTarget: null,
	      touchActive: false
	    };
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'scroll',
	    value: function scroll(e) {
	      if (window && window.document) {
	        var scroll = window.document.body.scrollTop;
	        this.setState({
	          scrollTop: scroll
	        });
	      }
	    }
	  }, {
	    key: 'setComponentTop',
	    value: function setComponentTop() {
	      var viewportOffset = void 0;
	      var scroll = 0;
	      if (this.props.fixedHeader === 'fixed') {
	        viewportOffset = this.refs.header.parentNode.getBoundingClientRect();
	        scroll = (0, _utils.getTrueScrollTop)(this.refs.header.parentNode);
	      } else {
	        viewportOffset = this.refs.header.getBoundingClientRect();
	      }
	      this.setState({
	        componentTop: viewportOffset.top + scroll
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.setComponentTop();
	      this.scroll();
	
	      this.scrollEventListener = {
	        handleEvent: function handleEvent(event) {
	          _this2.scroll();
	        }
	      };
	
	      window.addEventListener('scroll', this.scrollEventListener);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.scrollEventListener);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setComponentTop();
	    }
	  }, {
	    key: 'headerLabel',
	    value: function headerLabel(time, unit, width) {
	      if (unit === 'year') {
	        return time.format(width < 46 ? 'YY' : 'YYYY');
	      } else if (unit === 'month') {
	        return time.format(width < 65 ? 'MM/YY' : width < 75 ? 'MM/YYYY' : width < 120 ? 'MMM YYYY' : 'MMMM YYYY');
	      } else if (unit === 'day') {
	        return time.format(width < 150 ? 'L' : 'dddd, LL');
	      } else if (unit === 'hour') {
	        return time.format(width < 50 ? 'HH' : width < 130 ? 'HH:00' : width < 150 ? 'L, HH:00' : 'dddd, LL, HH:00');
	      } else {
	        return time.format('LLL');
	      }
	    }
	  }, {
	    key: 'subHeaderLabel',
	    value: function subHeaderLabel(time, unit, width) {
	      if (unit === 'year') {
	        return time.format(width < 46 ? 'YY' : 'YYYY');
	      } else if (unit === 'month') {
	        return time.format(width < 37 ? 'MM' : width < 85 ? 'MMM' : 'MMMM');
	      } else if (unit === 'day') {
	        return time.format(width < 47 ? 'D' : width < 80 ? 'dd D' : width < 120 ? 'ddd, Do' : 'dddd, Do');
	      } else if (unit === 'hour') {
	        return time.format(width < 50 ? 'HH' : 'HH:00');
	      } else if (unit === 'minute') {
	        return time.format(width < 60 ? 'mm' : 'HH:mm');
	      } else {
	        return time.get(unit);
	      }
	    }
	  }, {
	    key: 'resetTouchState',
	    value: function resetTouchState() {
	      this.setState({
	        touchTarget: null,
	        touchActive: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var timeLabels = [];
	      var _props = this.props,
	          canvasTimeStart = _props.canvasTimeStart,
	          canvasTimeEnd = _props.canvasTimeEnd,
	          canvasWidth = _props.canvasWidth,
	          lineHeight = _props.lineHeight,
	          visibleTimeStart = _props.visibleTimeStart,
	          visibleTimeEnd = _props.visibleTimeEnd,
	          minUnit = _props.minUnit,
	          timeSteps = _props.timeSteps,
	          fixedHeader = _props.fixedHeader,
	          headerLabelGroupHeight = _props.headerLabelGroupHeight,
	          headerLabelHeight = _props.headerLabelHeight;
	      var scrollTop = this.state.scrollTop;
	
	      var ratio = canvasWidth / (canvasTimeEnd - canvasTimeStart);
	      var twoHeaders = minUnit !== 'year';
	
	      // add the top header
	      if (twoHeaders) {
	        var nextUnit = (0, _utils.getNextUnit)(minUnit);
	
	        (0, _utils.iterateTimes)(visibleTimeStart, visibleTimeEnd, nextUnit, timeSteps, function (time, nextTime) {
	          var startTime = Math.max(visibleTimeStart, time.valueOf());
	          var endTime = Math.min(visibleTimeEnd, nextTime.valueOf());
	          var left = Math.round((startTime.valueOf() - canvasTimeStart) * ratio, -2);
	          var right = Math.round((endTime.valueOf() - canvasTimeStart) * ratio, -2);
	          var labelWidth = right - left;
	          var leftCorrect = fixedHeader === 'fixed' ? Math.round((canvasTimeStart - visibleTimeStart) * ratio) - 1 : 0;
	
	          timeLabels.push(_react2.default.createElement(
	            'div',
	            { key: 'top-label-' + time.valueOf(),
	              href: '#',
	              className: 'rct-label-group',
	              'data-time': time,
	              'data-unit': nextUnit,
	              style: {
	                left: left + leftCorrect + 'px',
	                width: labelWidth + 'px',
	                height: headerLabelGroupHeight + 'px',
	                lineHeight: headerLabelGroupHeight + 'px',
	                cursor: 'pointer'
	              } },
	            _this3.headerLabel(time, nextUnit, labelWidth)
	          ));
	        });
	      }
	
	      (0, _utils.iterateTimes)(canvasTimeStart, canvasTimeEnd, minUnit, timeSteps, function (time, nextTime) {
	        var left = Math.round((time.valueOf() - canvasTimeStart) * ratio, -2);
	        var minUnitValue = time.get(minUnit === 'day' ? 'date' : minUnit);
	        var firstOfType = minUnitValue === (minUnit === 'day' ? 1 : 0);
	        var labelWidth = Math.round((nextTime.valueOf() - time.valueOf()) * ratio, -2);
	        var borderWidth = firstOfType ? 2 : 1;
	        var leftCorrect = fixedHeader === 'fixed' ? Math.round((canvasTimeStart - visibleTimeStart) * ratio) - borderWidth + 1 : 0;
	
	        timeLabels.push(_react2.default.createElement(
	          'div',
	          { key: 'label-' + time.valueOf(),
	            href: '#',
	            className: 'rct-label ' + (twoHeaders ? '' : 'rct-label-only') + ' ' + (firstOfType ? 'rct-first-of-type' : '') + ' ',
	            'data-time': time,
	            'data-unit': minUnit,
	            style: {
	              top: (minUnit === 'year' ? 0 : headerLabelGroupHeight) + 'px',
	              left: left + leftCorrect + 'px',
	              width: labelWidth + 'px',
	              height: (minUnit === 'year' ? headerLabelGroupHeight + headerLabelHeight : headerLabelHeight) + 'px',
	              lineHeight: (minUnit === 'year' ? headerLabelGroupHeight + headerLabelHeight : headerLabelHeight) + 'px',
	              fontSize: (labelWidth > 30 ? '14' : labelWidth > 20 ? '12' : '10') + 'px',
	              cursor: 'pointer'
	            } },
	          _this3.subHeaderLabel(time, minUnit, labelWidth)
	        ));
	      });
	
	      var zIndex = this.props.zIndex;
	
	
	      var headerStyle = {
	        height: headerLabelGroupHeight + headerLabelHeight + 'px',
	        lineHeight: lineHeight + 'px'
	      };
	
	      var componentTop = this.state.componentTop;
	
	      if (fixedHeader === 'fixed') {
	        headerStyle.position = 'fixed';
	        headerStyle.width = '100%';
	        headerStyle.zIndex = zIndex;
	        headerStyle.top = componentTop - scrollTop + 'px';
	      } else if (fixedHeader === 'absolute') {
	        if (scrollTop >= componentTop) {
	          headerStyle.position = 'absolute';
	          headerStyle.top = scrollTop - componentTop + 'px';
	          headerStyle.width = canvasWidth + 'px';
	          headerStyle.left = '0';
	        }
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { ref: 'header', key: 'header', className: 'rct-header', onTouchStart: this.touchStart, onTouchEnd: this.touchEnd, onClick: this.periodClick, style: headerStyle },
	        timeLabels
	      );
	    }
	  }]);
	
	  return Header;
	}(_react.Component);
	
	exports.default = Header;
	
	
	Header.propTypes = {
	  // groups: PropTypes.array.isRequired,
	  // width: PropTypes.number.isRequired,
	  // lineHeight: PropTypes.number.isRequired,
	  // headerBackgroundColor: PropTypes.string.isRequired,
	  showPeriod: _propTypes2.default.func.isRequired,
	  canvasTimeStart: _propTypes2.default.number.isRequired,
	  canvasTimeEnd: _propTypes2.default.number.isRequired,
	  canvasWidth: _propTypes2.default.number.isRequired,
	  lineHeight: _propTypes2.default.number.isRequired,
	  visibleTimeStart: _propTypes2.default.number.isRequired,
	  visibleTimeEnd: _propTypes2.default.number.isRequired,
	  // visibleTimeEnd: PropTypes.number.isRequired,
	  minUnit: _propTypes2.default.string.isRequired,
	  timeSteps: _propTypes2.default.object.isRequired,
	  width: _propTypes2.default.number.isRequired,
	  fixedHeader: _propTypes2.default.oneOf(['fixed', 'absolute', 'none']),
	  zIndex: _propTypes2.default.number
	};
	Header.defaultProps = {
	  fixedHeader: 'none',
	  zIndex: 11
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VerticalLines = function (_Component) {
	  _inherits(VerticalLines, _Component);
	
	  function VerticalLines() {
	    _classCallCheck(this, VerticalLines);
	
	    return _possibleConstructorReturn(this, (VerticalLines.__proto__ || Object.getPrototypeOf(VerticalLines)).apply(this, arguments));
	  }
	
	  _createClass(VerticalLines, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(nextProps.canvasTimeStart === this.props.canvasTimeStart && nextProps.canvasTimeEnd === this.props.canvasTimeEnd && nextProps.canvasWidth === this.props.canvasWidth && nextProps.lineHeight === this.props.lineHeight && nextProps.lineCount === this.props.lineCount && nextProps.minUnit === this.props.minUnit && nextProps.timeSteps === this.props.timeSteps && nextProps.fixedHeader === this.props.fixedHeader && nextProps.height === this.props.height && nextProps.headerHeight === this.props.headerHeight);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          canvasTimeStart = _props.canvasTimeStart,
	          canvasTimeEnd = _props.canvasTimeEnd,
	          canvasWidth = _props.canvasWidth,
	          minUnit = _props.minUnit,
	          timeSteps = _props.timeSteps,
	          height = _props.height,
	          headerHeight = _props.headerHeight;
	
	      var ratio = canvasWidth / (canvasTimeEnd - canvasTimeStart);
	
	      var lines = [];
	
	      (0, _utils.iterateTimes)(canvasTimeStart, canvasTimeEnd, minUnit, timeSteps, function (time, nextTime) {
	        var left = Math.round((time.valueOf() - canvasTimeStart) * ratio, -2);
	        var minUnitValue = time.get(minUnit === 'day' ? 'date' : minUnit);
	        var firstOfType = minUnitValue === (minUnit === 'day' ? 1 : 0);
	        var lineWidth = firstOfType ? 2 : 1;
	        var labelWidth = Math.ceil((nextTime.valueOf() - time.valueOf()) * ratio) - lineWidth;
	        var leftPush = _this2.props.fixedHeader === 'fixed' && firstOfType ? -1 : 0;
	
	        var classNames = 'rct-vl' + (firstOfType ? ' rct-vl-first' : '') + (minUnit === 'day' || minUnit === 'hour' || minUnit === 'minute' ? ' rct-day-' + time.day() : '');
	
	        lines.push(_react2.default.createElement('div', { key: 'line-' + time.valueOf(),
	          className: classNames,
	          style: {
	            top: headerHeight + 'px',
	            left: left + leftPush + 'px',
	            width: labelWidth + 'px',
	            height: height - headerHeight + 'px'
	          } }));
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'rct-vertical-lines' },
	        lines
	      );
	    }
	  }]);
	
	  return VerticalLines;
	}(_react.Component);
	
	exports.default = VerticalLines;
	
	
	VerticalLines.propTypes = {
	  canvasTimeStart: _propTypes2.default.number.isRequired,
	  canvasTimeEnd: _propTypes2.default.number.isRequired,
	  canvasWidth: _propTypes2.default.number.isRequired,
	  lineHeight: _propTypes2.default.number.isRequired,
	  lineCount: _propTypes2.default.number.isRequired,
	  minUnit: _propTypes2.default.string.isRequired,
	  timeSteps: _propTypes2.default.object.isRequired,
	  fixedHeader: _propTypes2.default.string.isRequired
	};
	VerticalLines.defaultProps = {
	  fixedHeader: 'none',
	  dayBackground: null
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HorizontalLines = function (_Component) {
	  _inherits(HorizontalLines, _Component);
	
	  function HorizontalLines() {
	    _classCallCheck(this, HorizontalLines);
	
	    return _possibleConstructorReturn(this, (HorizontalLines.__proto__ || Object.getPrototypeOf(HorizontalLines)).apply(this, arguments));
	  }
	
	  _createClass(HorizontalLines, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(nextProps.canvasWidth === this.props.canvasWidth && nextProps.lineHeight === this.props.lineHeight && nextProps.lineCount === this.props.lineCount && nextProps.groupHeights === this.props.groupHeights);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          lineCount = _props.lineCount,
	          canvasWidth = _props.canvasWidth,
	          groupHeights = _props.groupHeights,
	          headerHeight = _props.headerHeight;
	
	      var lines = [];
	
	      var totalHeight = headerHeight;
	      for (var i = 0; i < lineCount; i++) {
	        lines.push(_react2.default.createElement('div', { key: 'horizontal-line-' + i,
	          className: i % 2 === 0 ? 'rct-hl-even' : 'rct-hl-odd',
	          style: {
	            top: totalHeight + 'px',
	            left: '0px',
	            width: canvasWidth + 'px',
	            height: groupHeights[i] - 1 + 'px'
	          } }));
	        totalHeight += groupHeights[i];
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'rct-horizontal-lines' },
	        lines
	      );
	    }
	  }]);
	
	  return HorizontalLines;
	}(_react.Component);
	
	exports.default = HorizontalLines;
	
	
	HorizontalLines.propTypes = {
	  canvasWidth: _propTypes2.default.number.isRequired,
	  lineHeight: _propTypes2.default.number.isRequired,
	  lineCount: _propTypes2.default.number.isRequired
	};
	HorizontalLines.defaultProps = {
	  borderWidth: 1
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodayLine = function (_Component) {
	  _inherits(TodayLine, _Component);
	
	  function TodayLine() {
	    _classCallCheck(this, TodayLine);
	
	    return _possibleConstructorReturn(this, (TodayLine.__proto__ || Object.getPrototypeOf(TodayLine)).apply(this, arguments));
	  }
	
	  _createClass(TodayLine, [{
	    key: 'render',
	
	    // TODO: should currentTime come from a prop? probably...?
	    value: function render() {
	      var currentTime = new Date().getTime();
	
	      if (currentTime > this.props.canvasTimeStart && currentTime < this.props.canvasTimeEnd) {
	        var ratio = this.props.canvasWidth / (this.props.canvasTimeEnd - this.props.canvasTimeStart);
	        var left = Math.round((currentTime - this.props.canvasTimeStart) * ratio);
	        var top = this.props.headerHeight;
	        var height = this.props.height - this.props.headerHeight;
	        var styles = {
	          top: top + 'px',
	          left: left + 'px',
	          height: height + 'px'
	        };
	
	        return _react2.default.createElement('div', { className: 'rct-today', style: styles });
	      } else {
	        return _react2.default.createElement('div', null);
	      }
	    }
	  }]);
	
	  return TodayLine;
	}(_react.Component);
	
	exports.default = TodayLine;
	
	TodayLine.propTypes = {
	  canvasTimeStart: _propTypes2.default.number.isRequired,
	  canvasTimeEnd: _propTypes2.default.number.isRequired,
	  canvasWidth: _propTypes2.default.number.isRequired,
	  lineHeight: _propTypes2.default.number.isRequired,
	  lineCount: _propTypes2.default.number.isRequired
	};
	TodayLine.defaultProps = {};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SelectedLine = function (_Component) {
	  _inherits(SelectedLine, _Component);
	
	  function SelectedLine() {
	    _classCallCheck(this, SelectedLine);
	
	    return _possibleConstructorReturn(this, (SelectedLine.__proto__ || Object.getPrototypeOf(SelectedLine)).apply(this, arguments));
	  }
	
	  _createClass(SelectedLine, [{
	    key: 'render',
	    value: function render() {
	
	      if (this.props.selectedTime > this.props.canvasTimeStart && this.props.selectedTime < this.props.canvasTimeEnd) {
	        var ratio = this.props.canvasWidth / (this.props.canvasTimeEnd - this.props.canvasTimeStart);
	        var left = Math.round((this.props.selectedTime - this.props.canvasTimeStart) * ratio);
	        var top = this.props.headerHeight;
	        var height = this.props.height - this.props.headerHeight;
	        var styles = {
	          top: top + 'px',
	          left: left + 'px',
	          height: height + 'px'
	        };
	
	        return _react2.default.createElement('div', { className: 'rct-selected-time', style: styles });
	      } else {
	        return _react2.default.createElement('div', null);
	      }
	    }
	  }]);
	
	  return SelectedLine;
	}(_react.Component);
	
	exports.default = SelectedLine;
	
	SelectedLine.propTypes = {
	  canvasTimeStart: _propTypes2.default.number.isRequired,
	  canvasTimeEnd: _propTypes2.default.number.isRequired,
	  selectedTime: _propTypes2.default.number.isRequired,
	  canvasWidth: _propTypes2.default.number.isRequired,
	  lineHeight: _propTypes2.default.number.isRequired,
	  lineCount: _propTypes2.default.number.isRequired
	};
	SelectedLine.defaultProps = {};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-calendar-timeline.js.map