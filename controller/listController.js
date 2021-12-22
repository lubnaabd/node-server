import { listData } from "../static/listData.js";

export const getAllList = async (req, res) => {
  try {
    res.status(200).json({
      list: listData,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = listData.find((item) => item.id === req.params.id);
    if (item) {
      res.status(200).json({
        item,
      });
    } else
      res.status(404).json({
        message: "item not found",
      });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};
