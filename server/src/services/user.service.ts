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

// Hàm gọi câu lệnh truy vấn xóa thông tin một user theo Id
export const remove = (id: number) => {
  return pool.execute("DELETE FROM users WHERE UserId = ?", [id]);
};

// Hàm gọi câu lệnh truy vấn thêm mới thông tin user
export const create = (
  UserName: string,
  DateOfBirth: string,
  Address: string
) => {
  // Prepare Statement
  return pool.execute(
    "INSERT INTO users(UserName, DateOfBirth, Address) VALUES (?, ?, ? )",
    [UserName, DateOfBirth, Address]
  );
};

// Hàm gọi câu lệnh truy vấn thêm mới thông tin user
export const update = (
  UserName: string,
  DateOfBirth: string,
  Address: string,
  UserId: number
) => {
  // Prepare Statement
  return pool.execute(
    "UPDATE users set UserName = ?, DateOfBirth = ?, Address = ? WHERE UserId = ?",
    [UserName, DateOfBirth, Address, UserId]
  );
};
