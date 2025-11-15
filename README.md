# E-Commerce Website

Ứng dụng web thương mại điện tử với đầy đủ tính năng mua sắm trực tuyến, được xây dựng bằng Vanilla JavaScript và Vite.

Demo: https://alltech-demo.netlify.app/

## 🛠 Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+)
- **Build Tool:** Vite 7.x
- **Styling:** PostCSS với CSS Modules
- **Linter:** Biome 2.3.1
- **Deployment:** Cloudflare Pages
- **Data Storage:** localStorage (mock backend)

## 🚀 Getting Started

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

```bash
# Build project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist

# Login Cloudflare (lần đầu tiên)
wrangler login
```

**Cấu hình:** Xem [wrangler.toml](wrangler.toml) để biết thêm chi tiết về Cloudflare Pages setup.

## ✨ Tính Năng

- **Trang chủ:** Sản phẩm nổi bật, thanh tìm kiếm, navigation bar với trạng thái login
- **Danh sách sản phẩm:** Hiển thị grid, lọc theo danh mục và khoảng giá
- **Chi tiết sản phẩm:** Thông tin đầy đủ, chọn số lượng, sản phẩm liên quan
- **Đăng ký / Đăng nhập:** Xác thực người dùng qua localStorage
- **Giỏ hàng:** Quản lý sản phẩm, tăng/giảm số lượng, tính tổng tiền tự động
- **Thanh toán:** Form giao hàng, chọn phương thức thanh toán (COD, Banking, E-Wallet)
- **Xác nhận đơn hàng:** Tóm tắt chi tiết, in đơn hàng
- **Tài khoản:** Thông tin cá nhân, lịch sử đơn hàng với chi tiết đầy đủ

---

## 📊 Dữ Liệu

- **28 sản phẩm mock** (6 categories: smartphone, laptop, tablet, desktop, monitor, accessory)
- **1 user test mặc định:** `test@example.com` / `test1234`
- Lưu trữ: localStorage (userList, cart, currentUser, productList, orderHistory)

## 📝 Ghi Chú

- Dùng mockup data
- Validation từ client-side

