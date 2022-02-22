//CommonJS Module

//NodeJS export
export.addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

//NodeJS import
const { addToCart } = require('./shoppingCart.js');