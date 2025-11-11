# 📋 TODO List - E-Commerce Project

**Ngày tạo:** 2025-11-11 | **Cập nhật:** 2025-11-12 | **Tổng:** 26 tasks

---

## 🔴 SYNTAX/BUGS - Critical Errors (9 tasks)

### #1 · CSS Variable Undefined: --fs-lg
**File:** `src/css/pages/order-summary.css:139`
**Priority:** P0
**Branch:** `fix/css-undefined-variables`

Sử dụng `var(--fs-lg)` nhưng variable này không tồn tại trong design system.

---

### #2 · CSS Variable Undefined: --txt-primary
**File:** `src/css/components/header.css:141`
**Priority:** P0
**Branch:** `fix/css-undefined-variables`

Variable `--txt-primary` không được định nghĩa trong variables.

---

### #3 · CSS Syntax Error: Missing Variable Prefix
**File:** `src/css/pages/product-list.css:33`
**Priority:** P0
**Branch:** `fix/css-var-prefix`

`var(fw-semibold)` thiếu `--` prefix trong variable name.

---

### #4 · CSS Syntax Error: Invalid Transition
**File:** `src/css/components/cart-modal.css:108-111`
**Priority:** P0
**Branch:** `fix/cart-modal-transition`

Transition syntax không hợp lệ.

---

### #5 · Search Results Not Clickable
**File:** `src/js/main.js`
**Priority:** P1
**Branch:** `fix/search-modal-click-handler`

Search modal hiển thị products nhưng click vào không có phản ứng.

---

### #6 · Error Message Cleanup Bug
**File:** `src/js/main.js`
**Priority:** P1
**Branch:** `fix/form-error-auto-clear`

`renderErrorMsg()` function không tự động xóa error messages khi form trở nên valid.

---

### #7 · Related Products Missing Slug in URL
**File:** `src/js/product-detail.js`
**Priority:** P1
**Branch:** `fix/related-product-url-slug`

URLs của related products thiếu product name slug.

---

### #8 · Cart Subtotal Element Not Populated
**File:** `cart.html`
**Priority:** P1
**Branch:** `fix/cart-subtotal-calculation`

Element `.cart-subtotal` có thể không được tính toán và hiển thị đúng.

---

### #9 · Experimental CSS Features Without Fallback
**File:** `src/css/components/footer.css`
**Priority:** P1
**Branch:** `fix/footer-browser-compat`

Sử dụng container queries (`container-type`, `20cqi` unit) và `text-box-trim` (experimental) không có fallback cho browsers không support.

---

## ⚠️ LOGIC - Business Logic Issues (5 tasks)

### #10 · Empty Cart Payment Form Still Accessible
**File:** `src/js/cart.js:21-23`
**Priority:** P0
**Branch:** `fix/empty-cart-validation`

Khi giỏ hàng rỗng, form thanh toán vẫn hiển thị và có thể submit.

---

### #11 · Missing Error Handling for Order Retrieval
**File:** `src/js/order-sum.js`, `src/js/cart.js`
**Priority:** P0
**Branch:** `fix/order-error-handling`

- `order-sum.js`: Không handle trường hợp orderId không tồn tại hoặc orderOwner = null
- Thiếu try/catch cho các async operations

---

### #12 · Payment Form Validation Insufficient
**File:** `src/js/cart.js:144-146`
**Priority:** P0
**Branch:** `fix/payment-form-validation`

Form validation còn thiếu:
- Phone number format validation (10-11 digits, numbers only)
- Email format validation
- Error messages sử dụng `alert()` thay vì UI feedback
- Thiếu HTML5 validation attributes (required, pattern)

---

### #13 · TotalPrice Stored as String
**File:** `src/js/cart.js:162-164`
**Priority:** P1
**Branch:** `refactor/order-price-storage`

`totalPrice` được lưu dạng formatted string (`.toLocaleString('vi-VN')`), không thể sort hoặc calculate về sau.

---

### #14 · Top-Level Await Race Condition
**File:** `src/js/cart.js:16`
**Priority:** P1
**Branch:** `refactor/provinces-lazy-init`

`const provinces = await getAllProvince();` ở module top-level có thể block module parsing và gây race condition với event listeners.

---

## 🚀 PERFORMANCE - Load & Runtime Performance (1 task)

### #15 · Image Layout Shift (CLS)
**Files:** Multiple JS files rendering images
**Priority:** P0
**Branch:** `fix/image-dimensions-cls`

Images không có `width`/`height` attributes → browser không reserve space → layout shift khi ảnh load:
- Product cards: `src/js/main.js:81`
- Product detail: `src/js/product-detail.js:22`
- Cart items: `src/js/cart.js:29`, `src/js/main.js:135`
- Order summary: `src/js/order-sum.js:105`
- Search results: `src/js/main.js:372`

---

## 🎨 UI/UX - User Experience Issues (3 tasks)

### #16 · Excessive Page Reloads on Cart Actions
**File:** `src/js/cart.js:83, 88, 94`
**Priority:** P0
**Branch:** `refactor/cart-dynamic-update`

Mỗi lần tăng/giảm/xóa sản phẩm đều gọi `window.location.reload()`:
- Mất scroll position
- Page flicker/blink
- Trải nghiệm kém

---

### #17 · No Responsive Design
**Files:** All CSS files
**Priority:** P0
**Branch:** `feat/mobile-responsive-layout`

Toàn bộ site không responsive:
- Header search bar: fixed `32rem` width
- Modals: fixed `400x400px`
- Product detail: 2-column grid không collapse
- Forms không adapt cho mobile screens

---

### #18 · No Logout Confirmation
**File:** `src/js/main.js`
**Priority:** P2
**Branch:** `feat/logout-confirmation-dialog`

Logout action không có confirmation dialog, người dùng có thể vô tình logout.

---

## 🔍 SEO - Search Engine Optimization (0 tasks)

_Chưa phát hiện issues về SEO_

---

## 🧹 CODE QUALITY - Maintainability (6 tasks)

### #19 · Hard-coded Colors Instead of CSS Variables
**Files:** Multiple CSS files
**Priority:** P1
**Branch:** `refactor/color-tokens`

Hard-coded color values thay vì sử dụng design system:
- `white` literal trong `login.css`, `modal.css`, `cart-modal.css`
- `#d4edda`, `#155724` trong `login.css` (success colors)
- `#111` trong `form.css`

---

### #20 · Duplicate CSS Class Definitions
**Files:** `cart.css`, `cart-modal.css`, `login.css`, `form.css`
**Priority:** P1
**Branch:** `refactor/dedupe-css-classes`

Classes được define ở nhiều nơi với styles khác nhau:
- `.cart-item`: định nghĩa khác nhau trong `cart.css` và `cart-modal.css`
- `.input-container`: định nghĩa tại 3 files khác nhau

---

### #21 · Price Range Magic Numbers
**File:** `src/js/main.js`
**Priority:** P2
**Branch:** `refactor/price-range-constants`

Price ranges được hardcode nhiều lần trong code thay vì constants.

---

### #22 · Duplicate renderProducts Functions
**File:** `src/js/main.js`
**Priority:** P2
**Branch:** `refactor/merge-render-functions`

Tồn tại cả `renderProducts()` và `renderProducts2()`, cần check xem có duplicate code không.

---

### #23 · Import Side Effects from main.js
**File:** `src/js/order-sum.js:1`
**Priority:** P2
**Branch:** `refactor/extract-shared-data`

`import { userList } from "./main"` - import từ main.js có thể gây side effects và circular dependencies.

---

### #24 · Logout Action Lacks Confirmation
**File:** `src/js/main.js`
**Priority:** P3
**Branch:** `feat/logout-confirmation-dialog`

Logout button không có confirm dialog, dễ bấm nhầm.

**Note:** Duplicate với #18, có thể merge branches.

---

## ✨ FEATURES - Missing Functionality (3 tasks)

### #25 · My Account Page Missing
**Priority:** P1
**Branch:** `feat/my-account-page`

Toàn bộ My Account feature chưa được implement:
- HTML page: `my-account.html`
- JavaScript: `src/js/my-account.js`
- Styles: `src/css/pages/my-account.css`
- Header navigation link khi user logged in
- Vite config entry point

---

### #26 · Product Sorting Not Implemented
**Priority:** P1
**Branch:** `feat/product-sorting`

Trang products không có khả năng sort:
- UI controls (dropdown/buttons) thiếu
- Sort logic: Price (low→high, high→low), Name (A-Z, Z-A)

---

### #27 · Pagination Missing
**Priority:** P1
**Branch:** `feat/product-pagination`

Products list không có pagination:
- Navigation controls (prev/next, page numbers)
- Logic chia products thành pages
- URL state management (?page=2)

---

## ♿ ACCESSIBILITY - A11y Issues (0 tasks)

_Chưa audit accessibility_

---

## 📊 Summary

| Category | Count | Priority Breakdown |
|----------|-------|--------------------|
| 🔴 SYNTAX/BUGS | 9 | P0: 4, P1: 5 |
| ⚠️ LOGIC | 5 | P0: 3, P1: 2 |
| 🚀 PERFORMANCE | 1 | P0: 1 |
| 🎨 UI/UX | 3 | P0: 2, P2: 1 |
| 🔍 SEO | 0 | - |
| 🧹 CODE QUALITY | 6 | P1: 2, P2: 3, P3: 1 |
| ✨ FEATURES | 3 | P1: 3 |
| ♿ ACCESSIBILITY | 0 | - |
| **TOTAL** | **27** | P0: 10, P1: 12, P2: 4, P3: 1 |

---

## 🎯 Priority Legend

- **P0 (Critical)** - Blockers, phải fix trước khi deploy production
- **P1 (High)** - Important issues, ảnh hưởng UX/stability
- **P2 (Medium)** - Code quality, technical debt
- **P3 (Low)** - Nice-to-have improvements

---

## 🔥 Critical Path (Deploy Checklist)

**MUST FIX before production:**

1. **SYNTAX/BUGS P0** (#1-4) - CSS syntax errors
2. **LOGIC P0** (#10-12) - Empty cart, error handling, validation
3. **PERFORMANCE P0** (#15) - Image layout shift (CLS)
4. **UI/UX P0** (#16-17) - Page reloads, responsive design

**HIGH PRIORITY after launch:**

5. **FEATURES P1** (#25-27) - My Account, Sorting, Pagination
6. **CODE QUALITY P1** (#19-20) - CSS variables, duplicate classes

---

## 📝 Notes

- **Build:** Vite config hoàn chỉnh, không có build errors
- **Payment Flow:** Hoạt động đúng (checkout → order summary)
- **Browser Support:** Cần test container queries trên Firefox/Safari
- **Mobile:** Chưa có responsive design (blocking issue)
- **Testing:** Chưa có automated tests
