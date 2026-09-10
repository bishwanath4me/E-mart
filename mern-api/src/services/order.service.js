const Address = require("../models/address.model.js");
const Order = require("../models/order.model.js");
const OrderItem = require("../models/orderItems.js");
//const OrderItems = require("../models/orderItems.js");
const cartService = require("../services/cart.service.js");

async function createOrder(user, shippAddress) {
  let address;
  if (shippAddress._id) {
    let existedAddress = await Address.findById(shippAddress._id);
    address = existedAddress;
  } else {
    address = new Address(shippAddress);
    address.user = user;
    await address.save();
//console.log("user.addresses", user.addresses)
    user.addresses.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  //console.log("cart-bishwa ", cart.cartItems)
  const orderItems = [];

  for (const item of cart.cartItems) {
    
    //console.log("item-bishwa ", item)
    /* created by me */
    if (!item.product) {
      //throw new Error("Product is missing in cart item");
      //console.error("Product is missing in cart item:", item);
      // Skip this item or throw an error
      continue; // Skip the item
      // OR
      // throw new Error("Product is missing in cart item");
    }
   // console.log("item-bishwa ", item.product)
    /* created by me */
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }
/* created by me start */
    if (orderItems.length === 0) {
    throw new Error("No valid items to create an order");
  }
  /* created by me end */
  const createdOrder = new Order({
    //user,
    user: user._id,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discounte: cart.discounte,
    totalItem: cart.totalItem,
    //shippingAddress: address,
    shippingAddress: address._id,
    //orderDate: new Date(),
    //orderStatus: "PENDING", // Assuming OrderStatus is a string enum or a valid string value
    //"paymentDetails.status": "PENDING", // Assuming PaymentStatus is nested under 'paymentDetails'
    // createdAt: new Date(),
  });

  const savedOrder = await createdOrder.save();

  for (const item of orderItems) {
    item.order = savedOrder;
    await item.save();
  }

 // return savedOrder;

 return await Order.findById(savedOrder._id)
  .populate({
    path: 'orderItems',
    populate: { path: 'product' },
  })
  .populate('shippingAddress')
  .populate('user', '-addresses');
}

async function placedOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";
  return await order.save();
}

async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";
  return await order.save();
}

async function shipOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "SHIPPED";
  return await order.save();
}

async function deliveredOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "DELIVERED";
  return await order.save();
}

async function cancelledOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CANCELLED"; // Assuming OrderStatus is a string enum or a valid string value
  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");
  return order;
}

async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({
      user: userId,
      orderStatus: "PLACED",
    }).populate({ path: "orderItems", populate: { path: "product", }, }).lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  return await Order.find().populate({
    path: "orderItems",
    populate: {
      path: "product",
    },
  })
    .lean();;
}

async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  if (!order) throw new Error("order not found with id ", orderId)

  //await Order.findByIdAndDelete(orderId);
  await Order.findByIdAndDelete(order._Id);
}

module.exports = {
  createOrder,
  placedOrder,
  confirmedOrder,
  shipOrder,
  deliveredOrder,
  cancelledOrder,
  findOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrder,
};
