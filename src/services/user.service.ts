import pool from "../utils/database";

// Hàm lấy thông tin tất cả user
export const findAll = () => {
  // Lấy dữ liệu ta từ trong database
  return pool.execute("SELECT * FROM users");
};

// Hàm lấy thông tin một user theo Id
export const findOne = (id: number) => {
  return pool.execute("SELECT * FROM users WHERE UserId = ?", [id]);
};
