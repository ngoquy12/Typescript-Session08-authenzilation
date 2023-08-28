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
    return res.status(500).json({
      message: error,
    });
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
    return res.status(500).json({
      message: error,
    });
  }
};

// API xóa thông tin một user theo id
export const remove = async (req: Request, res: Response) => {
  // Lấy id từ params
  const id: number = +req.params.id;
  try {
    // Tiến hành xóa dữ liệu
    await userService.remove(id);
    // Trả kết
    return res.status(200).json({
      status: 200,
      message: "Xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

// API xóa thông tin một user theo id
export const create = async (req: Request, res: Response) => {
  // Lấy id từ params
  const { UserName, DateOfBirth, Address } = req.body;
  try {
    // Tiến hành xóa dữ liệu
    await userService.create(UserName, DateOfBirth, Address);
    // Trả kết
    return res.status(200).json({
      status: 200,
      message: "Thêm mới dữ liệu thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

// API cập nhật thông tin user theo id
export const update = async (req: Request, res: Response) => {
  // Lấy id từ params
  const id: number = +req.params.id;
  // Lấy các giá trị từ body gửi lên
  const { UserName, DateOfBirth, Address } = req.body;
  try {
    // Tiến hành xóa dữ liệu
    await userService.update(UserName, DateOfBirth, Address, id);
    // Trả kết
    return res.status(200).json({
      status: 200,
      message: "Cập nhật dữ liệu thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
