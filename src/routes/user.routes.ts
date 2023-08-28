import express from "express";
const userRouter = express.Router();

import { findAll, findOne } from "../controllers/user.controller";

// API lấy thông tin tất cả user
userRouter.get("/", findAll);

// API lấy thông tin một user theo id
userRouter.get("/:id", findOne);

export default userRouter;
