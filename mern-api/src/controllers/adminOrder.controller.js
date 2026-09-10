
const orderService = require("../services/order.service");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    console.log(orders)
    return res.status(202).send(orders);
  } catch (error) {
   // res.status(500).send({ error: "Something went wrong" });
   return res.status(500).send({ error: error.message });
  }
};

const confirmedOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
   // const orderId = req.params.orderId;
    const order = await orderService.confirmedOrder(orderId);
    //return res.status(202).json(order);
    return res.status(202).send(order);
  } catch (error) {
   // res.status(500).json({ error: "Something went wrong" });
   return res.status(500).send({ error: error.message });
  }
};

const shippOrder =async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order =await orderService.shipOrder(orderId);
    return res.status(202).send(order);
  } catch (error) {
    //return res.status(500).json({ error: "Something went wrong" });
    return res.status(500).send({ error: error.message });
  }
};

const deliverOrder =async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await orderService.deliveredOrder(orderId);
    return res.status(202).send(order);
  } catch (error) {
   // return res.status(500).json({ error: "Something went wrong" });
   return res.status(500).send({ error: error.message });
  }
};

const cancelledOrder = async(req, res) => {
  const orderId = req.params.orderId;
  try {
    const order =await orderService.cancelledOrder(orderId);
    return res.status(202).send(order);
  } catch (error) {
   // return res.status(500).json({ error: "Something went wrong" });
   return res.status(500).send({ error: error.message });
  }
};

const deleteOrder =async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await  orderService.deleteOrder(orderId);
    return res.status(202).send(order);
   // res.status(202).json({ message: "Order Deleted Successfully", success: true });
  } catch (error) {
   // res.status(500).json({ error: "Something went wrong" });
   return res.status(500).send({ error: error.message });
  }
};



module.exports = {
  getAllOrders,
  confirmedOrder,
  shippOrder,
  deliverOrder,
  cancelledOrder,
  deleteOrder,
};
