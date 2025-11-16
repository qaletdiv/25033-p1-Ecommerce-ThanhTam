# 📋 TODO List - E-Commerce Project

**Ngày tạo:** 2025-11-11 | **Cập nhật:** 2025-11-16 | **Tổng:** 17 tasks

---

## 🔴 SYNTAX/BUGS - Critical Errors (2 tasks)

### #8 · Cart Subtotal Element Not Populated
**File:** `cart.html:131`, `src/js/pages/cartPage.js`
**Priority:** P1
**Branch:** `fix/cart-subtotal-calculation`

Element `.cart-subtotal` tồn tại trong HTML nhưng không có JavaScript code nào populate giá trị vào element này.

---

### #9 · Experimental CSS Features Without Fallback
**File:** `src/css/components/footer.css`
**Priority:** P1
**Branch:** `fix/footer-browser-compat`

Sử dụng container queries (`container-type`, `20cqi` unit) và `text-box-trim` (experimental) không có fallback cho browsers không support.

---

## ⚠️ LOGIC - Business Logic Issues (5 tasks)

### #10 · Empty Cart Payment Form Still Accessible
**File:** `src/js/pages/cartPage.js:21-23`
**Priority:** P0
**Branch:** `fix/empty-cart-validation`

Khi giỏ hàng rỗng, form thanh toán vẫn hiển thị và có thể submit.

---

### #11 · Missing Error Handling for Order Retrieval
**File:** `src/js/pages/orderSummary.js`, `src/js/pages/cartPage.js`
**Priority:** P0
**Branch:** `fix/order-error-handling`

- `orderSummary.js`: Không handle trường hợp orderId không tồn tại hoặc orderOwner = null
- Thiếu try/catch cho các async operations

---

### #12 · Payment Form Validation Insufficient
**File:** `src/js/pages/cartPage.js:144-146`
**Priority:** P0
**Branch:** `fix/payment-form-validation`

Form validation còn thiếu:
- Phone number format validation (10-11 digits, numbers only)
- Email format validation
- Error messages sử dụng `alert()` thay vì UI feedback
- Thiếu HTML5 validation attributes (required, pattern)

---

### #13 · TotalPrice Stored as String
**File:** `src/js/pages/cartPage.js:162-164`
**Priority:** P1
**Branch:** `refactor/order-price-storage`

`totalPrice` được lưu dạng formatted string (`.toLocaleString('vi-VN')`), không thể sort hoặc calculate về sau.

---

### #14 · Top-Level Await Race Condition
**File:** `src/js/pages/cartPage.js:16`
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
- Product cards: `src/js/utils/renderProducts.js`
- Product detail: `src/js/pages/productDetail.js`
- Cart items: `src/js/utils/renderCart.js`, `src/js/components/cartModal.js`
- Order summary: `src/js/pages/orderSummary.js`
- Search results: `src/js/utils/renderSearchModal.js`

---

## 🎨 UI/UX - User Experience Issues (3 tasks)

### #16 · Excessive Page Reloads on Cart Actions
**File:** `src/js/pages/cartPage.js:83, 88, 94`
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
- Header search bar: fixed `30rem` width
- Modals: fixed dimensions
- Product detail: 2-column grid không collapse
- Forms không adapt cho mobile screens
- Collection grid: 3 columns không responsive

---

### #18 · No Logout Confirmation
**File:** `src/js/app.js`
**Priority:** P2
**Branch:** `feat/logout-confirmation-dialog`

Logout action không có confirmation dialog, người dùng có thể vô tình logout.

---

## 🧹 CODE QUALITY - Maintainability (4 tasks)

### #19 · Hard-coded Colors Instead of CSS Variables
**Files:** Multiple CSS files
**Priority:** P1
**Branch:** `refactor/color-tokens`

Hard-coded color values thay vì sử dụng design system:
- `white` literal trong `login.css`, `modal.css`, `cart-modal.css`
- `#d4edda`, `#155724` trong `login.css` (success colors)
- `#111` trong `form.css`

---

### #21 · Price Range Magic Numbers
**File:** `src/js/features/productFilter.js`
**Priority:** P2
**Branch:** `refactor/price-range-constants`

Price ranges được hardcode nhiều lần trong code thay vì constants.

---

### #22 · Check for Duplicate Render Logic
**Files:** `src/js/utils/renderProducts.js`, `src/js/app.js`
**Priority:** P2
**Branch:** `refactor/merge-render-functions`

Cần review xem có duplicate rendering logic giữa các modules không.

---

### #23 · Circular Import Risk
**Files:** Various import paths
**Priority:** P2
**Branch:** `refactor/extract-shared-data`

Cần review import structure để tránh circular dependencies, đặc biệt với `src/js/data/index.js`.

---

## ✨ FEATURES - Missing Functionality (2 tasks)

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

## 📊 Summary

| Category | Count | Priority Breakdown |
|----------|-------|--------------------|
| 🔴 SYNTAX/BUGS | 2 | P1: 2 |
| ⚠️ LOGIC | 5 | P0: 3, P1: 2 |
| 🚀 PERFORMANCE | 1 | P0: 1 |
| 🎨 UI/UX | 3 | P0: 2, P2: 1 |
| 🧹 CODE QUALITY | 4 | P1: 1, P2: 3 |
| ✨ FEATURES | 2 | P1: 2 |
| **TOTAL** | **17** | P0: 6, P1: 7, P2: 4 |

**Recent Completions:** ✅ 11 tasks
- Refactored folder structure (pages/, utils/, features/, components/)
- Added collection page với category thumbnails
- Updated header navigation (+ Danh mục, - Liên hệ)
- Increased typography sizes (h1-h6 +15%)
- Reorganized header.css structure
- Fixed collection page routing
- Added Unsplash category images
- Completed product listing page
- Updated vite.config.js with collection entry

---

## 🔥 Critical Path (Deploy Checklist)

**MUST FIX before production:**

1. **LOGIC P0** (#10-12) - Empty cart, error handling, validation
2. **PERFORMANCE P0** (#15) - Image layout shift (CLS)
3. **UI/UX P0** (#16-17) - Page reloads, responsive design

**HIGH PRIORITY after launch:**

4. **SYNTAX/BUGS P1** (#8-9) - Cart subtotal, browser compat
5. **FEATURES P1** (#26-27) - Sorting, Pagination
6. **CODE QUALITY P1** (#19) - CSS variables

---

## 🎯 Priority Legend

- **P0 (Critical)** - Blockers, phải fix trước khi deploy production
- **P1 (High)** - Important issues, ảnh hưởng UX/stability
- **P2 (Medium)** - Code quality, technical debt
- **P3 (Low)** - Nice-to-have improvements

---

## 📝 Notes

- **Build:** Vite config hoàn chỉnh, không có build errors
- **Payment Flow:** Hoạt động đúng (checkout → order summary)
- **Browser Support:** Cần test container queries trên Firefox/Safari
- **Mobile:** Chưa có responsive design (blocking issue)
- **Testing:** Chưa có automated tests
- **New Structure:** src/js organized into pages/, utils/, features/, components/
