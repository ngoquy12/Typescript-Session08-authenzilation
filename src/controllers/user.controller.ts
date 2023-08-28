import express, { Request, Response } from "express";
import * as userService from "../services/user.service";

// API lấy thông tin tất cả user
export const findAll = async (req: Request, res: Response) => {
  try {
    // Lấy dữ liệu ở bên trong service
    const [users] = await userService.findAll();
    // Trả kết
    return res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
};

// API lấy thông tin một user theo id
export const findOne = async (req: Request, res: Response) => {
  // Lấy id từ params
  const id: number = +req.params.id;
  try {
    // Lấy dữ liệu ở trong service
    const [user] = await userService.findOne(id);
    // Trả kết
    return res.status(200).json({
      status: 200,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
