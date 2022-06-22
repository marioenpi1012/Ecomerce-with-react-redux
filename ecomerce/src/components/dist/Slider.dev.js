"use strict";

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Slider = function Slider(_ref) {
  var children = _ref.children,
      activeSlide = _ref.activeSlide;
  var PADDINGS = 110;

  var useSizeElement = function useSizeElement() {
    var elementRef = (0, _react.useRef)(null);

    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        width = _useState2[0],
        setWidth = _useState2[1];

    (0, _react.useEffect)(function () {
      setWidth(elementRef.current.clientWidth);
    }, [elementRef.current]);
    return {
      width: width,
      elementRef: elementRef
    };
  };

  var useSliding = function useSliding(elementWidth, countElements) {
    var containerRef = (0, _react.useRef)(null);

    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        containerWidth = _useState4[0],
        setContainerWidth = _useState4[1];

    var _useState5 = (0, _react.useState)(0),
        _useState6 = _slicedToArray(_useState5, 2),
        distance = _useState6[0],
        setDistance = _useState6[1];

    var _useState7 = (0, _react.useState)(0),
        _useState8 = _slicedToArray(_useState7, 2),
        totalViewport = _useState8[0],
        setTotalViewport = _useState8[1];

    var _useState9 = (0, _react.useState)(0),
        _useState10 = _slicedToArray(_useState9, 2),
        viewed = _useState10[0],
        setViewed = _useState10[1];

    (0, _react.useEffect)(function () {
      var containerWidth = containerRef.current.clientWidth - PADDINGS;
      setContainerWidth(containerWidth);
      setTotalViewport(Math.floor(containerWidth / elementWidth));
    }, [containerRef.current]);

    var handlePrev = function handlePrev() {
      setViewed(viewed - totalViewport);
      setDistance(distance + containerWidth);
    };

    var handleNext = function handleNext() {
      setViewed(viewed + totalViewport);
      setDistance(distance - containerWidth);
    };

    var slideProps = {
      style: {
        transform: "translate3d(".concat(distance, "px 0,0)")
      }
    };
    var hasPrev = distance < 0;
    var hasNext = viewed + totalViewport < countElements;
    return {
      handlePrev: handlePrev,
      handleNext: handleNext,
      slideProps: slideProps,
      containerRef: containerRef,
      hasPrev: hasPrev,
      hasNext: hasNext
    };
  };

  var _useState11 = (0, _react.useState)(activeSlide),
      _useState12 = _slicedToArray(_useState11, 2),
      currentSlide = _useState12[0],
      setCurrentSlide = _useState12[1];

  var _useSizeElement = useSizeElement(),
      width = _useSizeElement.width,
      elementRef = _useSizeElement.elementRef;

  var _useSliding = useSliding(width, React.Children.count(children)),
      handlePrev = _useSliding.handlePrev,
      handleNext = _useSliding.handleNext,
      slideProps = _useSliding.slideProps,
      containerRef = _useSliding.containerRef,
      hasNext = _useSliding.hasNext,
      hasPrev = _useSliding.hasPrev;

  var handleSelect = function handleSelect(product) {
    setCurrentSlide(product);
  };

  var handleClose = function handleClose() {
    setCurrentSlide(null);
  };

  var contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef: elementRef,
    currentSlidem: currentSlidem
  };
};