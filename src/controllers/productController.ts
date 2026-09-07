import { Request, Response } from "express";
// import { Product } from "../types/product";
import Product from "../models/products";
// import { SortOrder } from "mongoose";
import { Types } from "mongoose";

// import { db } from "../config/db";
// import { ResultSetHeader, Types } from "mysql2";

// ------------------------------------------------------------
// -------------------- READ PRODUCTS -------------------------
// ------------------------------------------------------------
export const fetchAllProducts = async (req: Request, res: Response) => {
  const { sortBy, sortOrder, filterField, filterValue } = req.query;
  const allowedFieldsSearch = ["name"];
  const allowedFieldsSort = ["price", "stock"];

  let sortOptions: {} = {};
  let filter: { [key: string]: any } = {};

  if (
    typeof filterField === "string" &&
    allowedFieldsSearch.includes(filterField) &&
    typeof filterValue === "string"
  ) {
    filter[filterField] = filterValue;
  }

  try {
    if (
      typeof sortBy === "string" &&
      allowedFieldsSort.includes(sortBy) &&
      typeof sortOrder === "string" &&
      (sortOrder.toLowerCase() === "asc" || sortOrder.toLowerCase() === "desc")
    ) {
      sortOptions = { [sortBy]: sortOrder.toLowerCase() === "asc" ? 1 : -1 };
    }

    const result = await Product.find(filter)
      .sort(sortOptions)
      .populate("categories");
    return res.status(200).json(result);
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to fetch products from database" });
  }
};

export const fetchProductByObjectId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (typeof id !== "string") {
      return res.status(404).json({ error: "Invalid product id" });
    }

    const product = await Product.findOne(
      { _id: new Types.ObjectId(id) },
      { _id: 0, created_at: 0 },
    ).populate("categories");

    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    return res.status(200).json({ product });
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to fetch product from database" });
  }
};

// ------------------------------------------------------------
// ----------------------- CREATE PRODUCTS --------------------
// ------------------------------------------------------------

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, stock, img, categories } = req.body;

  if (!name || !description || price === undefined || stock === undefined) {
    return res
      .status(400)
      .json({ error: "Name, description, price and stock are required" });
  }

  try {
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      img,
      categories,
    });

    return res.status(201).json({
      message: "Product added",
      product,
    });
  } catch (error: unknown) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to create product in database" });
  }
};

// ------------------------------------------------------------
// --------------------- UPDATE PRODUCTS ----------------------
// ------------------------------------------------------------

export const updateProduct = async (req: Request, res: Response) => {
  const allowedFields = [
    "name",
    "description",
    "price",
    "stock",
    "img",
    "categories",
  ];
  const id = req.params.id;

  let updatedFields: { [key: string]: any } = {};

  for (const field in req.body) {
    if (allowedFields.includes(field)) {
      updatedFields[field] = req.body[field];
    }
  }

  if (Object.keys(updatedFields).length === 0) {
    return res
      .status(400)
      .json({ message: "Minimum of one field required for update" });
  }

  try {
    const product = await Product.updateOne(
      { _id: id },
      { $set: updatedFields },
    );

    return res.status(200).json({ message: "Product updated", product });
  } catch (error: unknown) {
    return res.status(500).json({ error: "failed to update product" });
  }
};

// ------------------------------------------------------------
// -----------------------DELETE PRODUCTS----------------------
// ------------------------------------------------------------

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await Product.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "No product matched the id provided" });
    }
    return res
      .status(200)
      .json({ message: `Product ID: ${id} deleted`, result });
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ error: "Failed to delete product" });
  }
};

// hello
