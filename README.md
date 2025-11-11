# E-Commerce Website

Đồ án cuối khóa - Ứng dụng web thương mại điện tử

## 🛠 Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+)
- **Build Tool:** Vite 7.x
- **Styling:** PostCSS với CSS Modules
- **Linter:** Biome 2.3.1
- **Data Storage:** localStorage (mock backend)

## ✅ Tính Năng Đã Hoàn Thành

### A.1. Màn hình trang chủ ✅
- Hiển thị sản phẩm nổi bật từ dữ liệu mock
- Thanh điều hướng (Navigation Bar) với trạng thái đăng nhập/chưa đăng nhập
- Thanh tìm kiếm sản phẩm theo tên
- Yêu cầu đăng nhập khi thêm vào giỏ hàng
- Icon giỏ hàng với cart modal

### A.2. Màn hình danh sách sản phẩm ✅
- Hiển thị toàn bộ sản phẩm dưới dạng lưới (grid)
- Bộ lọc sản phẩm theo danh mục (smartphone, laptop, tablet, desktop, monitor, accessory)
- Bộ lọc sản phẩm theo khoảng giá (5 mức: 0-5M, 5-10M, 10-20M, 20-40M, 40M+)
- ⚠️ **Chưa có:** Sắp xếp sản phẩm, Phân trang

### A.3. Màn hình chi tiết sản phẩm ✅
- Hiển thị thông tin chi tiết đầy đủ (tên, giá, hình ảnh, mô tả, thông số kỹ thuật)
- Chọn số lượng trước khi thêm vào giỏ
- Yêu cầu đăng nhập khi thêm vào giỏ hàng
- Hiển thị sản phẩm liên quan (4 sản phẩm cùng danh mục)

### A.4. Màn hình đăng ký ✅
- Form đăng ký với các trường: Họ và tên, Email, Mật khẩu, Nhập lại mật khẩu
- Kiểm tra email không trùng lặp
- Kiểm tra mật khẩu khớp nhau
- Hiển thị thông báo và điều hướng đến trang đăng nhập sau khi thành công

### A.5. Màn hình đăng nhập ✅
- Form đăng nhập với Email và Mật khẩu
- Xác thực người dùng từ localStorage
- Cập nhật thanh điều hướng sau khi đăng nhập thành công
- Chuyển hướng về trang chủ hoặc trang trước đó

### A.6. Màn hình giỏ hàng ✅
- Yêu cầu đăng nhập để truy cập
- Hiển thị danh sách sản phẩm (hình ảnh, tên, đơn giá, số lượng, thành tiền)
- Chỉnh sửa giỏ hàng: tăng/giảm số lượng, xóa sản phẩm
- Tự động tính toán và hiển thị tổng tiền

### A.7. Màn hình thanh toán ✅
- Yêu cầu đăng nhập và có sản phẩm trong giỏ
- Form thông tin giao hàng: Họ tên, SĐT, Địa chỉ, Tỉnh/Thành phố
- Chọn phương thức thanh toán (COD, Banking, E-Wallet)
- Tóm tắt đơn hàng với tổng tiền
- Xác nhận đơn hàng: ghi nhận vào tài khoản, làm trống giỏ hàng, chuyển đến trang xác nhận

### A.8. Màn hình xác nhận đơn hàng ✅
- Thông báo đơn hàng đã đặt thành công
- Tóm tắt chi tiết đơn hàng vừa đặt (mã đơn, ngày đặt, sản phẩm, tổng tiền)
- Hiển thị thông tin khách hàng và địa chỉ giao hàng
- Nút "Tiếp tục mua sắm" và "In đơn hàng"

### A.9. Màn hình tài khoản của tôi ❌
- ⚠️ **Chưa hoàn thành:** Trang thông tin cá nhân và lịch sử đơn hàng

---

## 📊 Dữ Liệu

- **28 sản phẩm mock** (6 categories: smartphone, laptop, tablet, desktop, monitor, accessory)
- **1 user test mặc định:** `test@example.com` / `test1234`
- Lưu trữ: localStorage (userList, cart, currentUser, productList, orderHistory)

## 📝 Ghi Chú

- Dự án học tập, không có backend thực
- Password lưu plain text (không dùng trong production)
- Validation là client-side
- Dữ liệu xóa khi clear localStorage
