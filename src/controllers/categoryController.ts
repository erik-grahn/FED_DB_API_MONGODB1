import { Request, Response } from "express";
import Category from "../models/categories";
import Products from "../models/products";

import { Types } from "mongoose";

// ------------------------------------------------------------
// -------------------- READ CATEGORIES------------------------
// ------------------------------------------------------------
export const fetchAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res.status(400).json({ error: "No categories in this document" });
    }
    return res.json(categories);
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to fetch categories from database" });
  }
};

export const fetchCategory = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid category-id" });
    }

    const category = await Category.findOne(
      { _id: new Types.ObjectId(id) },
      { _id: 0 },
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    return res.json({
      category,
    });
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to fetch category from database" });
  }
};

// ------------------------------------------------------------
// ----------------------- CREATE CATEGORIES-------------------
// ------------------------------------------------------------

export const createCategory = async (req: Request, res: Response) => {
  const name = req.body.name;

  if (name == null) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const category = await Category.insertOne({ name: name });
    return res.status(201).json({
      message: "Category added",
      category,
    });
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to create category in database" });
  }
};

// // ------------------------------------------------------------
// // --------------------- UPDATE CATEGORIES---------------------
// // ------------------------------------------------------------

export const updateCategory = async (req: Request, res: Response) => {
  const name = req.body.name;
  const id = req.params.id as string;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid category-id" });
  }

  if (name == null) {
    return res
      .status(400)
      .json({ error: "Name is required to update category" });
  }

  try {
    const category = await Category.updateOne({ _id: id }, { name: name });

    if (category.matchedCount === 0) {
      return res.status(404).json({ error: "Category not found" });
    } else {
      return res.status(200).json({
        message: "Category name updated",
        category,
      });
    }
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ error: "Failed to update category" });
  }
};

// // ------------------------------------------------------------
// // -----------------------DELETE CATEGORIES--------------------
// // ------------------------------------------------------------

export const deleteCategory = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid category-id" });
  }

  try {
    const result = await Category.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Category not found" });
    }
    return res.status(200).json({ message: "Category deleted", result });
  } catch (error) {
    return res.status(500).json({ error: " Failed to delete category" });
  }
};

// // hello
