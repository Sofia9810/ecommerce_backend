const { Order, Product } = require("../models/index");

const orderController = {
  index: async (req, res) => {
    try {
      const orders = await Order.findAll({ include: "user" });
      return res.status(200).json(orders);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while fetching orders" });
    }
  },
  show: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      return res.status(200).json(order);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while fetching order" });
    }
  },
  store: async (req, res) => {
    try {
      const order = req.body;

      if (!order.address || !order.userId || !order.products || !order.products.length) {
        return res.status(400).json({ message: "Address, userId, and at least one product are required to create an order" });
      }

      for (const product of order.products) {
        const productInDb = await Product.findByPk(product.id);
        if (!productInDb) {
          return res.status(404).json({
            message: "Product not found",
            product: product.id,
          });
        }
        if (productInDb.stock < product.qty) {
          return res.status(400).json({
            message: "Insufficient stock for product",
            productId: product.id,
            availableStock: productInDb.stock,
          });
        }
        product.price = productInDb.price;
      }

      order.status = "pending";

      for (const product of order.products) {
        const productInDb = await Product.findByPk(product.id);
        productInDb.stock -= product.qty;
        await productInDb.save();
      }

      await Order.create(order);
      return res.status(201).json({ message: "Order received" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while creating order" });
    }
  },
  update: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      await order.update(req.body);
      return res.status(200).json(order);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while updating order" });
    }
  },
  destroy: async (req, res) => {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      await order.destroy();
      return res.status(200).send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while deleting order" });
    }
  },
};

module.exports = orderController;
