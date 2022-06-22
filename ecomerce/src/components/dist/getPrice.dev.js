"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalPrice = exports.total = void 0;

var total = function total(qty, price) {
  return qty * price;
};

exports.total = total;

var totalPrice = function totalPrice(products) {
  var prices = 0;
  products.map(function (product) {
    prices += total(product.qty, product.price);
  }); // This adds commas to separate numbers eg = 1,000

  var nf = new Intl.NumberFormat('en-US');
  return "$" + nf.format(prices);
};

exports.totalPrice = totalPrice;