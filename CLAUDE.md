# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tổng Quan Dự Án

Đây là **đồ án cuối khóa** - một ứng dụng web thương mại điện tử (e-commerce) được xây dựng bằng vanilla JavaScript, Vite và PostCSS. Do là dự án học tập nên **không có backend thật**, toàn bộ dữ liệu (users, products, cart) được lưu trữ trong **localStorage** của trình duyệt.

**Tech Stack:**
- Build tool: Vite 7.x
- Styling: CSS với PostCSS (hỗ trợ nesting-rules qua postcss-preset-env)
- Linter/Formatter: Biome 2.3.1
- JavaScript: ES6+ modules (vanilla JS, không dùng framework)

## Các Lệnh Thường Dùng

### Development
```bash
npm run dev          # Chạy dev server (localhost:5173)
npm run build        # Build production
npm run preview      # Xem preview bản build
```

### Code Quality
```bash
npx @biomejs/biome check .              # Kiểm tra code quality (lint + format)
npx @biomejs/biome check --write .      # Tự động fix lỗi
npx @biomejs/biome format --write .     # Format code
```

## Kiến Trúc & Cấu Trúc Code

### Multi-Page Application (MPA)

Vite được cấu hình với nhiều entry points trong `vite.config.js`:
- `index.html` → Trang chủ (sản phẩm nổi bật)
- `products-list.html` → Danh sách sản phẩm với bộ lọc
- `product-details.html` → Chi tiết sản phẩm
- `cart.html` → Trang giỏ hàng đầy đủ
- `login.html` / `signup.html` → Đăng nhập / Đăng ký

**Lưu ý quan trọng:** Khi thêm trang mới, phải cập nhật `vite.config.js` → `rollupOptions.input` để thêm file HTML mới.

### Kiến Trúc Module JavaScript

**Các Module Chính:**

1. **`src/js/localStorage.js`** - Lớp dữ liệu (Data Layer)
   - Quản lý toàn bộ thao tác với localStorage (users, products, cart)
   - Exports: `getUsersfromLocal()`, `getProductfromLocal()`, `getCurrentUser()`, `setCurrentUser()`, `createNewUser()`, `getCartItemsFromLocal()`
   - Có sẵn dữ liệu mock: 1 user test và danh sách sản phẩm mẫu

2. **`src/js/main.js`** - Utilities & components dùng chung (cho index.html, products-list.html)
   - Render sản phẩm: `renderProducts(arr, container)`
   - Quản lý giỏ hàng: `addtoCart()`, `increaseQuantity()`, `decreaseQuantity()`, `removeFromCart()`, `renderCart()`
   - Xác thực: `showLoginModal()`, `renderLoggedinHeader()`
   - Tìm kiếm & lọc: Tìm theo tên/brand/keywords, lọc theo category, lọc theo giá
   - Exports: `cartItems`, `userList`, `productList`, `currentUser` (state có thể thay đổi)

3. **`src/js/cart.js`** - Logic trang giỏ hàng (cart.html)
   - Import các hàm dùng chung từ `main.js`
   - Render giỏ hàng dạng full-page

4. **`src/js/product-detail.js`** - Logic trang chi tiết sản phẩm (product-details.html)
   - Đọc product ID từ URL query params (`?id=123`)
   - Hiển thị sản phẩm liên quan (cùng category, tối đa 4 sản phẩm)

5. **`src/js/mock-data.js`** - Dữ liệu sản phẩm mẫu
   - Export mảng `products` có 28 sản phẩm
   - Categories: smartphone, laptop, tablet, desktop, monitor, accessory
   - Mỗi product có: id, name, brand, category, price, images, description, specifications, keywords

### Data Flow & Quản Lý State

**Schema localStorage (dùng cho đồ án, thay thế database):**
```javascript
// users: Mảng các user objects
{
  id: string,
  name: string,
  email: string,
  password: string,        // Lưu plain text (chỉ cho đồ án, production phải hash)
  isLoggedin: boolean,
  cart: Array,
  orderHistory: Array
}

// currentUser: User object của người đang đăng nhập
// cart: Mảng products với quantity
// productList: Mảng tất cả sản phẩm (từ mock-data.js)
```

**Cách hoạt động của State:**
- Cart items được lưu global trong localStorage (không phân biệt user)
- Trạng thái đăng nhập được lưu qua `currentUser` trong localStorage
- Khi logout, `currentUser` bị xóa khỏi localStorage
- Danh sách sản phẩm được khởi tạo từ mock-data.js lần đầu load

### Kiến Trúc CSS

CSS được tổ chức theo module:
- **`src/css/main.css`** - Entry point chính (import tất cả CSS khác)
- **`src/css/variables/`** - Design tokens (colors, spacing, typography)
- **`src/css/components/`** - Components tái sử dụng (button, header, footer, modal, cart-modal, product-card, form)
- **`src/css/pages/`** - Styles riêng cho từng trang (index, product-list, product-detail, cart, login)
- **`src/css/reset.css`** - CSS reset
- **`src/css/global.css`** - Global styles

**Cấu hình PostCSS:**
- Bật nesting rules (viết CSS lồng nhau như Sass)
- Dùng stage 2 features từ postcss-preset-env

## Các Tính Năng Chính & Pattern Thường Dùng

### Flow Đăng Nhập/Đăng Ký
1. User nhập thông tin → `main.js` validate với localStorage users
2. Thành công: Cập nhật flag `isLoggedin`, lưu vào `currentUser`, redirect về trang chủ
3. Khi đã login: Header hiển thị tên user + nút logout (render bởi `renderLoggedinHeader()`)
4. Các hành động cần đăng nhập (thêm vào giỏ): Kiểm tra `currentUser.isLoggedin`, hiện modal login nếu chưa đăng nhập

### Hệ Thống Giỏ Hàng
- **Cart modal** (popup) - Mở từ nút cart ở header hoặc sau khi thêm sản phẩm
- **Trang cart đầy đủ** (`cart.html`) - Trang riêng cho checkout flow
- Cart items được lưu trong localStorage, dùng chung giữa các trang
- Thêm vào giỏ: Yêu cầu đăng nhập, hỗ trợ chọn số lượng
- Cart highlight sản phẩm vừa thêm với animation (class `.highlighted-in-cart`)

### Lọc & Tìm Kiếm Sản Phẩm
- **Lọc theo category**: Nhóm sản phẩm theo category dùng `Object.groupBy()`
- **Lọc theo giá**: 5 khoảng giá định sẵn (0-5M, 5-10M, 10-20M, 20-40M, 40M+)
- **Tìm kiếm**: Real-time search theo tên, brand, hoặc keywords
- **Sản phẩm liên quan**: Hiện 4 sản phẩm cùng category ở trang chi tiết

### Validation Form
Tất cả validation là client-side với thông báo lỗi/thành công:
- **Signup**: Kiểm tra name/email/password không trống, email chưa tồn tại, password khớp nhau
- **Login**: Validate email/password với dữ liệu trong localStorage
- Thông báo lỗi: Render trong element `.noti-error`
- Thông báo thành công: Render trong element `.noti-success`

## Hướng Dẫn Development

### Thêm Tính Năng Mới

**Khi thêm trang mới:**
1. Tạo file HTML ở thư mục root
2. Thêm entry point vào `vite.config.js` → `rollupOptions.input`
3. Import các module dùng chung từ `src/js/main.js` hoặc `src/js/localStorage.js`
4. Tạo CSS riêng trong `src/css/pages/` và import vào `main.css`

**Khi mở rộng dữ liệu localStorage:**
- Luôn dùng helper functions từ `localStorage.js`
- Cập nhật localStorage schema trong tài liệu này
- Khởi tạo keys mới với giá trị mặc định nếu chưa tồn tại

**Khi thêm tính năng cho giỏ hàng:**
- Import cart utilities từ `main.js`
- Cập nhật cả cart modal và cart page (cart.js) để giữ tính nhất quán
- Đồng bộ cart state: `localStorage.setItem('cart', JSON.stringify(cartItems))`

### Conventions Code Style

- **DOM queries**: Cache selectors trong biến có hậu tố `El` (ví dụ: `cartBtnEl`, `headerEl`)
- **Event delegation**: Gắn listeners vào parent containers khi xử lý nhiều items
- **Phòng XSS**: Tên sản phẩm được sanitize bằng `.replace(/[<>]/g, "")` trước khi render
- **Format tiền tệ**: Dùng `price.toLocaleString('vi-VN')` cho định dạng VND
- **Modal pattern**: Dùng native `<dialog>` element với `.showModal()` và `.close()`

### Trạng Thái Hiện Tại & Tính Năng Chưa Hoàn Thành

**Các trang đã hoàn thành** (theo README.md):
- ✅ Trang chủ với sản phẩm nổi bật
- ✅ Danh sách sản phẩm với bộ lọc category/giá
- ✅ Chi tiết sản phẩm với sản phẩm liên quan
- ✅ Đăng ký & đăng nhập user
- ✅ Trang giỏ hàng với chỉnh sửa số lượng

**Chưa được triển khai:**
- ❌ Trang thanh toán (A.7)
- ❌ Trang xác nhận đơn hàng (A.8)
- ❌ Trang tài khoản của tôi (A.9)
- ❌ Chức năng sắp xếp sản phẩm (sort)
- ❌ Phân trang (pagination)
- ❌ Lịch sử đơn hàng

Khi triển khai các tính năng này, tham khảo yêu cầu chi tiết trong `requirement.md`.

## Lưu Ý Quan Trọng Cho Đồ Án

- **Không có backend**: Tất cả dữ liệu chỉ lưu trong localStorage của browser
- **Password không mã hóa**: Lưu plain text (chỉ cho học tập, production thực tế phải hash)
- **Mock data**: 28 sản phẩm mẫu trong `mock-data.js`, 1 user test mặc định
- **Không có API calls**: Mọi thao tác đều là synchronous với localStorage
- **Session management đơn giản**: Chỉ dùng flag `isLoggedin` và `currentUser`

## Debugging Tips

- Kiểm tra browser console để xem lỗi (thường gặp: thiếu product ID, currentUser undefined)
- Inspect localStorage trong DevTools → tab Application để debug state issues
- Một số trang dùng `window.location.reload()` sau khi cập nhật localStorage
- Product IDs phải khớp giữa mock-data.js và URL params
- Cart operations fail silently nếu user chưa đăng nhập - kiểm tra `currentUser.isLoggedin`
- Nếu cart trống hoặc user không tồn tại, xóa localStorage và reload để reset về mock data
