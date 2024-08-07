const { Product } = require("../models/index");

const productController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while fetching products" });
    }
  },
  show: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while fetching product" });
    }
  },
  store: async (req, res) => {
    try {
      const { name, description, pic, price, stock, categoryId, featured } = req.body;
      
      if (!name) {
        return res.status(400).json({ message: "Name is required for creating a product" });
      }
      if (!description) {
        return res.status(400).json({ message: "Description is required for creating a product" });
      }
      if (!price) {
        return res.status(400).json({ message: "Price is required for creating a product" });
      }
      if (!stock) {
        return res.status(400).json({ message: "Stock is required for creating a product" });
      }
      if (!categoryId) {
        return res.status(400).json({ message: "CategoryId is required for creating a product" });
      }

      const newProduct = await Product.create({
        name,
        description,
        pic,
        price,
        stock,
        categoryId,
        featured,
      });

      return res.status(201).json(newProduct);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while creating product" });
    }
  },

  update: async (req, res) => {
    try {
      const { name, description, image, price, stock, categoryId, featured } = req.body;
      
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const updatableData = {};
      if (name) {
        updatableData.name = name;
      }
      if (description) {
        updatableData.description = description;
      }
      if (image) {
        updatableData.image = image;
      }
      if (price) {
        updatableData.price = price;
      }
      if (stock) {
        updatableData.stock = stock;
      }
      if (categoryId) {
        updatableData.categoryId = categoryId;
      }
      if (featured !== undefined) {
        updatableData.featured = featured;
      }

      await product.update(updatableData);

      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while updating product" });
    }
  },
  destroy: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      await product.destroy();
      return res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while deleting product" });
    }
  },
};

module.exports = productController;
