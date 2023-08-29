import express from "express";
const userRouter = express.Router();

import {
  create,
  findAll,
  findOne,
  remove,
  update,
} from "../controllers/user.controller";

// API lấy thông tin tất cả user
userRouter.get("/", findAll);

// API lấy thông tin một user theo id
userRouter.get("/:id", findOne);

// API xóa thông tin một user theo Id
userRouter.delete("/:id", remove);

// API thêm mới user
userRouter.post("/", create);

// API cập nhật thông tin user theo id
userRouter.put("/:id", update);

export default userRouter;
