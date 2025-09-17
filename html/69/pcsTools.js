window.pcs = function (selector) {
  'use strict';

  function getElement(selector) {
    return document.querySelector(selector);
  }

  function setCss(element, property, value) {
    //console.log('in setCss', property);
    element.style[property] = value;
  }

  function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
  }

  function on(element, event, callback) {
    element.addEventListener(event, callback);
  }
    function hide(element) {
    element.css('display', 'none');
  }
    function show(element) {
    element.css('display', 'inline-block');
  }    
    function pickRandomColor() {
    return `#${Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0')}`;
  }
    function sparkle(element, interval) {
    setInterval(() => {
      const color = pickRandomColor();
    element.css('color', color);
    }, interval)
    
  }

  const element = getElement(selector);

  return {
    // getElement: getElement,
    /*setCss,
    getCss,*/
    css: function (property, value) {
      if (arguments.length === 1) {
        return getCss(element, property);
      } else {
        return setCss(element, property, value);
      }
    },
    on: (event, callback) => {
      on(element, event, callback);
    },
    click: (callback) => on(element, 'click', callback),
    hide: () => {
      hide(element);
    },
    show: () => {
      show(element);
    },
    sparkle: (interval) => {
      sparkle(element, interval);
    }
  };
};