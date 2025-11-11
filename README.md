# Tổng Quan Dự Án E-Commerce

## Tech Stack
- **Vanilla JavaScript** (ES6+), **Vite 7.x**, **PostCSS**, **Biome**
- Dữ liệu: localStorage (không có backend)
- Mock data: 28 sản phẩm, 1 user test

---

## Trạng Thái Hoàn Thành

### ✅ Đã Hoàn Thành (80%)

| Trang | Tính Năng | Status |
|-------|-----------|--------|
| **Trang chủ** | Sản phẩm nổi bật, navbar, tìm kiếm, giỏ hàng, cart modal | ✅ |
| **Danh sách sản phẩm** | Grid layout, lọc category, lọc giá (5 mức) | ✅ |
| **Chi tiết sản phẩm** | Thông tin đầy đủ, chọn số lượng, sản phẩm liên quan (4 items) | ✅ |
| **Đăng ký** | Form validation, kiểm tra email trùng, password khớp | ✅ |
| **Đăng nhập** | Xác thực từ localStorage, cập nhật navbar | ✅ |
| **Giỏ hàng** | Trang độc lập + modal, tăng/giảm số lượng, xóa, tính tổng tiền | ✅ |
| **Thanh toán** | Form nhập thông tin, Vietnam provinces, payment methods | ✅ |
| **Xác nhận đơn hàng** | Hiển thị chi tiết order, customer info, items, total | ✅ |

### ⚠️ Có Issues Cần Fix

**Critical (P0):** 6 items
- 4 CSS syntax errors (undefined variables, missing prefixes)
- Payment form validation cần improve
- Top-level await race condition

**Important (P1):** 10 items
- Hard-coded colors không dùng CSS variables
- Duplicate CSS class definitions
- Không có responsive design (no media queries)
- Experimental CSS features không có fallback
- Excessive window.reload() làm giật trang

### ❌ Chưa Hoàn Thành (20%)

**Trang còn thiếu:**
- Trang tài khoản của tôi (profile + lịch sử đơn hàng)

**Tính năng còn thiếu:**
- Sắp xếp sản phẩm (sort by price/name)
- Phân trang (pagination)
- Responsive design cho mobile/tablet

---

## Architecture & File Structure

```
ecom/
├── index.html                  # Homepage
├── login.html                  # Login page
├── signup.html                 # Signup page
├── products-list.html          # Products listing
├── product-details.html        # Product detail page
├── cart.html                   # Cart & checkout page
├── order-summary.html          # Order confirmation
├── src/
│   ├── css/
│   │   ├── main.css           # Entry point
│   │   ├── reset.css          # CSS reset
│   │   ├── global.css         # Global styles
│   │   ├── variables/         # CSS custom properties
│   │   │   ├── colors.css
│   │   │   ├── typography.css
│   │   │   └── spacing.css
│   │   ├── components/        # Reusable components
│   │   │   ├── header.css
│   │   │   ├── footer.css
│   │   │   ├── button.css
│   │   │   ├── form.css
│   │   │   ├── modal.css
│   │   │   ├── cart-modal.css
│   │   │   └── product-card.css
│   │   └── pages/             # Page-specific styles
│   │       ├── index.css
│   │       ├── product-list.css
│   │       ├── product-detail.css
│   │       ├── cart.css
│   │       ├── login.css
│   │       └── order-summary.css
│   └── js/
│       ├── main.js            # Main app logic, event handlers
│       ├── cart.js            # Cart & payment logic
│       ├── product-detail.js  # Product detail page
│       ├── order-sum.js       # Order summary page
│       ├── localStorage.js    # LocalStorage utilities
│       └── mock-data.js       # Mock products & users
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies & scripts
└── biome.json                 # Biome linter config
```

## Technical Highlights

### CSS Architecture
- **Design tokens:** Comprehensive variable system (colors, typography, spacing)
- **BEM-like naming:** Component-based class naming
- **Modular imports:** Separate files for components and pages
- **Fluid typography:** Using CSS `clamp()` for responsive text
- ⚠️ **Issue:** No media queries yet (responsive design needed)

### JavaScript Patterns
- **ES6 modules:** Clean import/export structure
- **Separation of concerns:** localStorage, data, and UI logic separated
- **Event delegation:** Efficient event handling
- ⚠️ **Issue:** Some code duplication, excessive page reloads

### Data Flow
```
localStorage
    ↓
[userList, cart, currentUser]
    ↓
JavaScript modules (main.js, cart.js, etc.)
    ↓
DOM rendering
```

## Known Issues & Technical Debt

See [todo.md](todo.md) for complete list (30 items)

**Top Priority:**
1. CSS syntax errors (4 items)
2. No responsive design
3. UX issues (page reloads, validation)
4. Missing features (My Account, Sorting, Pagination)

---

## Notes
- Dữ liệu user/cart/orders lưu trong localStorage
- Password lưu plain text (chỉ cho học tập)
- Tất cả validation là client-side
