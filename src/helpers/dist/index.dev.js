"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTo = scrollTo;
exports.visChecker = visChecker;
exports.elemVisCheck = elemVisCheck;
exports.qs = qs;
exports.qsAll = qsAll;
exports.eventsDispatcher = eventsDispatcher;
exports.getParent = getParent;
exports.on = exports.containsClass = exports.toggleClass = exports.removeClass = exports.addClass = exports.rect = exports.getStyle = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

function qs(query) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return root.querySelector(query);
}

function qsAll(query) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return root.querySelectorAll(query);
}

function getParent(el, findParent) {
  while (el && el.parentNode) {
    el = el.parentNode;
    if (el.classList && el.classList.contains(findParent)) return el;
  }

  return false;
}

function scrollTo(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

function visChecker(el) {
  var rect = el.getBoundingClientRect();
  var wHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= wHeight * 0.5;
}

function elemVisCheck() {
  window.addEventListener('scroll', function () {
    qsAll('.h-anim').forEach(function (elem) {
      if (visChecker(elem)) elem.setAttribute('visible', true);
    });
  });
}

function eventsDispatcher() {
  var eventScroll;

  try {
    eventScroll = new Event('scroll');
  } catch (e) {
    eventScroll = document.createEvent('Event');
    eventScroll.initEvent('scroll', false, false);
  }

  window.dispatchEvent(eventScroll);
  var resizeScroll;

  try {
    resizeScroll = new Event('resize');
  } catch (e) {
    resizeScroll = document.createEvent('Event');
    resizeScroll.initEvent('scroll', false, false);
  }

  window.dispatchEvent(resizeScroll);
}
/* get info of elems */


var getStyle = function getStyle(elem) {
  return getComputedStyle(elem);
};

exports.getStyle = getStyle;

var rect = function rect(elem) {
  return elem.getBoundingClientRect();
};
/* work with class */


exports.rect = rect;

var addClass = function addClass(elem, classes) {
  if (_typeof(classes) === 'object') {
    classes.forEach(function (cl) {
      return elem.classList.add(cl);
    });
  } else {
    elem.classList.add(classes);
  }
};

exports.addClass = addClass;

var removeClass = function removeClass(elem, classes) {
  if (_typeof(classes) === 'object') {
    classes.forEach(function (cl) {
      return elem.classList.remove(cl);
    });
  } else {
    elem.classList.remove(classes);
  }
};

exports.removeClass = removeClass;

var toggleClass = function toggleClass(elem, cl) {
  return elem.classList.toggle(cl);
};

exports.toggleClass = toggleClass;

var containsClass = function containsClass(elem, cl) {
  return elem.classList.contains(cl);
};
/* event initialize */


exports.containsClass = containsClass;

var on = function on(elem, event, func) {
  return elem.addEventListener(event, func);
};

exports.on = on;