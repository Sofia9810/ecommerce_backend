const { Category } = require("../models/index");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while fetching categories" });
    }
  },
  show: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while fetching category" });
    }
  },
  store: async (req, res) => {
    try {
      const { name } = req.body;
      
      if (!name) {
        return res.status(400).json({ message: "Name is required for creating a category" });
      }

      const newCategory = await Category.create({ name });
      return res.status(201).json(newCategory);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while creating category" });
    }
  },
  update: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      
      const { name } = req.body;
      const updatableData = {};
      
      if (!name) {
        return res.status(400).json({ message: "Name is required for updating a category" });
      }

      updatableData.name = name;
      await category.update(updatableData);
      return res.status(200).json(category);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while updating category" });
    }
  },
  destroy: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      await category.destroy();
      return res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong while deleting category" });
    }
  },
};

module.exports = categoryController;
