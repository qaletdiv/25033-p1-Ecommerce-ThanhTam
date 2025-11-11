# 📋 TODO List - E-Commerce Project

**Ngày tạo:** 2025-11-11 | **Cập nhật:** 2025-11-12 | **Tổng:** 25 tasks

---

## 🚨 P0 - CRITICAL (4 tasks)

### 1. CSS Variables - Undefined --fs-lg
**File:** `src/css/pages/order-summary.css:139`
**Tag:** `fix`

Sử dụng `var(--fs-lg)` nhưng variable này không được định nghĩa. Phải dùng `--fs-large`.

---

### 2. CSS Variables - Undefined --txt-primary
**File:** `src/css/components/header.css:141`
**Tag:** `fix`

Variable `--txt-primary` không tồn tại. Nên dùng `--txt-brand` hoặc `--txt-dark`.

---

### 3. CSS Syntax - Missing Variable Prefix
**File:** `src/css/pages/product-list.css:33`
**Tag:** `fix`

`var(fw-semibold)` thiếu `--` prefix → phải là `var(--fw-semibold)`.

---

### 4. CSS Syntax - Invalid Transition
**File:** `src/css/components/cart-modal.css:108-111`
**Tag:** `fix`

Transition syntax sai. Phải sửa thành: `transition: color 0.12s ease, background-color 0.12s ease;`

---

## ⚠️ P1 - IMPORTANT (10 tasks)

### 5. Payment Form Validation
**File:** `src/js/cart.js:144-146`
**Tag:** `feat`

**Còn thiếu:**
- Phone number format validation (10-11 số, chỉ số)
- Email format validation
- Proper error messages (đang dùng alert thay vì UI feedback)
- Client-side HTML5 validation attributes (required, pattern)

---

### 6. Top-Level Await Race Condition
**File:** `src/js/cart.js:16`
**Tag:** `refactor`

`const provinces = await getAllProvince();` ở top-level block module parsing và có thể gây race condition với event listeners.

---

### 7. Hard-coded Colors Instead of CSS Variables
**Files:** Multiple CSS files
**Tag:** `refactor`

- `white` thay vì `var(--bg-white)` trong login.css, modal.css, cart-modal.css
- `#d4edda` và `#155724` trong login.css (success message colors)
- `#111` trong form.css thay vì `--neutral-900`

---

### 8. Duplicate Class Definitions
**Files:** `cart.css`, `cart-modal.css`, `login.css`
**Tag:** `refactor`

- `.cart-item` defined khác nhau trong cart.css và cart-modal.css
- `.input-container` defined ở 3 nơi: form.css, login.css, cart.css

---

### 9. No Responsive Design
**Files:** All CSS files
**Tag:** `feat`

Không có media queries cho mobile/tablet:
- Header search: fixed 32rem width
- Modal: fixed 400x400px
- Product detail: 2-column grid không responsive
- Form layouts không adapt cho mobile

---

### 10. Experimental CSS Features Without Fallback
**File:** `src/css/components/footer.css`
**Tag:** `fix`

Dùng container queries và text-box-trim/edge (experimental) không có fallback:
- `container-type: inline-size;`
- `text-box-trim: trim-both;`
- `20cqi` unit

---

### 11. Excessive window.reload()
**File:** `src/js/cart.js:83, 88, 94`
**Tag:** `refactor`

Mỗi lần tăng/giảm/xóa sản phẩm đều gọi `window.location.reload()` → mất scroll position, trang nhấp nháy, UX kém.

---

### 12. Missing Error Handling
**File:** `src/js/order-sum.js`, `src/js/cart.js`
**Tag:** `fix`

- order-sum.js: không handle khi orderId không tồn tại hoặc orderOwner null
- Các API calls không có try/catch

---

### 13. Empty Cart on Payment Page
**File:** `src/js/cart.js:21-23`
**Tag:** `fix`

Giỏ hàng rỗng nhưng form thanh toán vẫn hiển thị và có thể submit. Nên hide payment form khi cart rỗng.

---

### 14. Duplicate renderProducts Function
**File:** `src/js/main.js`
**Tag:** `refactor`

Cần check xem `renderProducts()` và `renderProducts2()` có duplicate code không.

---

## 📋 P2 - MISSING REQUIREMENTS (3 tasks)

### 15. My Account Page
**Tag:** `feat`

**Thiếu:**
- `my-account.html` page
- `src/js/my-account.js` script
- `src/css/pages/my-account.css` styles
- Header link khi logged in
- Entry trong vite.config.js

---

### 16. Product Sorting
**Tag:** `feat`

**Thiếu:**
- UI controls để sort (dropdown/buttons)
- Sort logic: Price (tăng/giảm), Name (A-Z/Z-A)

---

### 17. Pagination
**Tag:** `feat`

**Thiếu:**
- Pagination controls (prev/next, page numbers)
- Logic chia products thành pages (12/page)

---

## 🔨 P3 - CODE QUALITY (8 tasks)

### 18. Search Results Not Clickable
**File:** `src/js/main.js`
**Tag:** `fix`

Search modal render product links nhưng click không có tác dụng.

---

### 19. Price Range Magic Numbers
**File:** `src/js/main.js`
**Tag:** `refactor`

Price ranges hardcoded nhiều lần.

---

### 20. Error Message Cleanup
**File:** `src/js/main.js`
**Tag:** `fix`

`renderErrorMsg()` không xóa error khi form valid.

---

### 21. No Logout Confirmation
**File:** `src/js/main.js`
**Tag:** `feat`

Logout không có confirm dialog.

---

### 22. Related Products Missing Slug
**File:** `src/js/product-detail.js`
**Tag:** `fix`

Related product URLs thiếu name slug.

---

### 23. Import from main.js in order-sum.js
**File:** `src/js/order-sum.js:1`
**Tag:** `refactor`

`import { userList } from "./main"` - importing từ main.js có thể gây side effects và circular dependencies.

---

### 24. totalPrice Saved as String
**File:** `src/js/cart.js:162-164`
**Tag:** `fix`

`totalPrice` được lưu dạng string với `.toLocaleString('vi-VN')` → không thể sort hoặc calculate sau này.

---

### 25. Cart Subtotal Not Calculated
**File:** `cart.html`
**Tag:** `fix`

Cần verify xem có element `.cart-subtotal` không được populate.

---

## 📊 Summary

| Priority | Count | Description |
|----------|-------|-------------|
| 🚨 P0    | 4     | Critical CSS/syntax errors |
| ⚠️ P1    | 10    | Important UX/stability issues |
| 📋 P2    | 3     | Missing required features |
| 🔨 P3    | 8     | Code quality improvements |
| **Total** | **25** | Active tasks |

### Critical Path (Must Fix Before Launch)
1. Fix 4 CSS syntax errors (P0: #1-4)
2. Improve payment validation (#5)
3. Handle top-level await (#6)
4. Fix window.reload() UX issue (#11)
5. Add responsive design (#9)

---

## ✅ Testing Checklist

```bash
# 1. Fix all P0 issues
# 2. Run linting
npx @biomejs/biome check --write .

# 3. Test builds
npm run dev
npm run build
npm run preview

# 4. Test user flows
# - Browse products → Filter → Add to cart
# - Login → Checkout → Payment → Order confirmation
# - Empty cart handling
# - Mobile responsive (after #9 fixed)

# 5. Browser testing
# - Chrome/Edge (container queries in footer)
# - Firefox
# - Mobile Safari
```

---

**Commit Convention:**
- `feat:` new features
- `fix:` bug fixes
- `refactor:` code restructuring
- `chore:` maintenance tasks
- `style:` formatting changes

**Notes:**
- Payment flow hoàn chỉnh (redirect + order summary working)
- Vite config đầy đủ, build sẽ không fail
- CSS có 4 critical bugs cần fix ngay
- Chưa có responsive design
- 3 features core còn thiếu: My Account, Sorting, Pagination
