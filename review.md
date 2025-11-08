# Review Đồ Án E-commerce

**Ngày review:** 2025-11-08
**Phiên bản:** Dựa trên commit `3f6c163` (feature/payment-page branch)

---

## 📊 Tổng Quan

Đồ án này là một ứng dụng thương mại điện tử được xây dựng bằng vanilla JavaScript, Vite và PostCSS. Tổng thể, đồ án thể hiện sự hiểu biết tốt về các khái niệm web development cơ bản và có kiến trúc tương đối rõ ràng.

**Quy mô dự án:**
- ~1,861 dòng JavaScript code
- 26 files CSS
- 6 trang HTML
- 28 sản phẩm mock data

---

## ✅ Điểm Mạnh

### 1. Kiến Trúc & Tổ Chức Code
- **Module separation tốt**: Tách riêng data layer (localStorage.js), business logic (main.js), và page-specific code
- **CSS modular**: Tổ chức CSS theo components và pages rất rõ ràng
- **Naming conventions nhất quán**: Biến DOM có suffix `El`, functions có tên mô tả rõ ràng
- **Build tooling hiện đại**: Sử dụng Vite với MPA configuration phù hợp

### 2. User Experience
- **Cart modal với animation**: Highlight sản phẩm vừa thêm vào giỏ (`.highlighted-in-cart`)
- **Real-time search**: Tìm kiếm động theo keywords/brand/name
- **Product filtering**: Hỗ trợ lọc theo category và price range
- **Related products**: Hiển thị sản phẩm liên quan ở trang chi tiết

### 3. Code Quality
- **Event delegation**: Sử dụng đúng pattern để handle multiple items
- **XSS awareness**: Có sanitize tên sản phẩm với `.replace(/[<>]/g, "")`
- **Native dialog element**: Sử dụng `<dialog>` thay vì custom modal
- **Biome linter**: Setup linter/formatter cho code consistency

### 4. Documentation
- **CLAUDE.md chi tiết**: Documentation rõ ràng về architecture, commands, patterns
- **Comments trong code**: Có phân section bằng comments trong main.js
- **README.md**: Tracking tiến độ các trang đã hoàn thành

---

## 🔴 Vấn Đề Nghiêm Trọng


### 3. **Cart State Management Không Nhất Quán**
**Vị trí:** `localStorage.js` và `main.js`
**Mô tả:**
- User schema có field `cart: Array` nhưng không được sử dụng
- Cart được lưu global trong localStorage, không phân biệt user
- Khi user A đăng nhập, họ sẽ thấy cart của user B trước đó

**Ảnh hưởng:**
- Bug nghiêm trọng: Cart bị share giữa các users
- Không match với requirements (mỗi user có cart riêng)


### 5. **Password Hardcoded trong localStorage.js**
**Vị trí:** `localStorage.js:3-13`
**Mô tả:** User test có password plain text `"123456789"` trong code
**Ảnh hưởng:**
- Dù là đồ án, vẫn là bad practice
- Nếu demo public, test account bị lộ

---

## 🟡 Vấn Đề Trung Bình

### 6. **window.location.reload() Overused**
**Vị trí:** `cart.js:72, 77, 83`
**Mô tả:** Mỗi lần thay đổi quantity trong cart page đều reload toàn bộ trang
**Ảnh hưởng:**
- UX kém: Trang bị flash, mất scroll position
- Performance: Reload toàn bộ resources không cần thiết
- State loss: Mất các interactions đang làm

### 7. **Inline onclick Handler trong HTML**
**Vị trí:** `cart.html:64, 84` và `index.html:64, 66`
```html
onclick="window.location.href='/cart.html'"
```
**Ảnh hưởng:**
- Vi phạm separation of concerns
- Khó test và maintain
- Không consistent với code style (dùng addEventListener ở nơi khác)

### 8. **Error Handling Thiếu**
**Vị trí:** Toàn bộ localStorage operations
**Mô tả:**
- Không check `localStorage.setItem()` có throw QuotaExceededError
- Không validate JSON.parse() có thể fail
- Không handle trường hợp localStorage bị disabled

**Ảnh hưởng:** App crash khi localStorage đầy hoặc bị block

### 9. **Search Form Không Có Submit Handler**
**Vị trí:** `index.html:31-35`, `main.js:357-369`
**Mô tả:**
- Form có tag `<form>` nhưng không có submit handler
- User nhấn Enter sẽ trigger form submit và reload page
- Chỉ lắng nghe `keyup` event, không handle submit

**Ảnh hưởng:** Khi nhấn Enter trong search box, trang bị reload

### 10. **Browser Compatibility: Object.groupBy()**
**Vị trí:** `main.js:381`
```javascript
const productBycategories = Object.groupBy(productList, (product) => product.category);
```
**Mô tả:** `Object.groupBy()` là API mới (ES2024), chưa được support rộng rãi
**Ảnh hưởng:**
- Không chạy trên Safari < 17, Firefox < 119
- Cần polyfill hoặc transpile

### 11. **No Loading States**
**Vị trí:** `main.js:186-203` (addToCart function)
**Mô tả:**
- Button disabled + text "Đang thêm..." nhưng dùng `setTimeout(400ms)` fake loading
- Không có loading state cho operations thực sự (nếu sau này có API)

**Ảnh hưởng:** User không có feedback rõ ràng khi thao tác

### 12. **Typo trong Biến**
**Vị trí:** `main.js:570`
```javascript
const passowrdInput = passwordInputEl.value.trim(); // "passowrd" thiếu "s"
```
**Ảnh hưởng:** Gây nhầm lẫn, khó đọc code

---

## 🟢 Vấn Đề Nhỏ

### 13. **Code Duplication: Header HTML**
**Vị trí:** Tất cả 6 files HTML
**Mô tả:** Header HTML được duplicate y hệt ở mọi trang
**Ảnh hưởng:**
- Khi cần sửa header, phải sửa 6 chỗ
- Khó maintain, dễ inconsistent

### 14. **CSS Class Typo**
**Vị trí:** `cart.html:61`
```html
<p class="cart-total-price" fw-bold></p>
<!-- Thiếu "class=" trước fw-bold -->
```
**Ảnh hưởng:** Style không được áp dụng

### 15. **Missing Error Messages Removal**
**Vị trí:** `main.js:534-547`
**Mô tả:** Function `renderErrorMsg()` có logic xóa message cũ bên trong, nhưng không remove khi success
**Ảnh hưởng:** Error message cũ có thể vẫn hiển thị sau khi submit thành công

### 16. **Cart Modal Dialog Tồn Tại Trên Mọi Trang**
**Vị trí:** Tất cả HTML files
**Mô tả:** `<dialog data-cart>` được duplicate ở mọi trang kể cả cart.html
**Ảnh hưởng:**
- Trong cart.html có 2 cart dialogs (page + modal)
- Unnecessary markup, tăng DOM size

### 17. **No Image Lazy Loading**
**Vị trí:** Tất cả `<img>` tags trong renders
**Mô tả:** Images không có `loading="lazy"` attribute
**Ảnh hưởng:** Performance kém khi trang có nhiều sản phẩm

### 18. **Missing Alt Text Handling**
**Vị trí:** `main.js:72, 126` (renderProducts, renderCart)
**Mô tả:** Alt text lấy từ `product.images[0].alt` nhưng không fallback nếu undefined
**Ảnh hưởng:** Accessibility issue nếu mock data thiếu alt text

### 19. **Magic Numbers trong Code**
**Vị trí:** `main.js:191-203`, `cart.js:72,77,83`
**Mô tả:** Timeout `400ms` không có comment giải thích, giá tiền hardcode (5000000, 10000000...)
**Ảnh hưởng:** Code khó hiểu, magic numbers nên extract thành constants

### 20. **selectEl Reference Before Declaration**
**Vị trí:** `main.js:410`
```javascript
selectEl.value = "all";
```
**Mô tả:** `selectEl` được khai báo ở line 427, nhưng dùng ở line 410
**Ảnh hưởng:** Có thể gây ReferenceError nếu code flow thay đổi

---

## 🔍 Vấn Đề Tiềm Ẩn (Potential Issues)

### 21. **localStorage.js Export Mutable State**
**Vị trí:** `main.js:21`
```javascript
export let cartItems, userList, productList, currentUser;
```
**Mô tả:** Export mutable variables có thể gây side effects
**Ảnh hưởng:** Khó debug, dễ tạo bugs khi nhiều modules modify state

### 22. **main.js Quá Lớn (683 dòng)**
**Mô tả:** File main.js chứa quá nhiều concerns:
- Product rendering
- Cart management
- Search functionality
- Filter/Sort logic
- Form validation
- Auth logic

**Ảnh hưởng:** Khó maintain, test và debug

### 23. **No Input Sanitization cho Search**
**Vị trí:** `main.js:312-355`
**Mô tả:** Search input được dùng trực tiếp trong innerHTML mà chỉ sanitize product name
**Ảnh hưởng:** Nếu sau này search data từ user input, có XSS risk

### 24. **Quantity Controls Không Có Min/Max**
**Vị trí:** `product-detail.js:68-72`
**Mô tả:** Quantity có thể giảm xuống dưới 1 (line 70 set về 1), nhưng không có max limit
**Ảnh hưởng:** User có thể add 99999 products vào cart

### 25. **No Debounce cho Search Input**
**Vị trí:** `main.js:357` - `keyup` event listener
**Mô tả:** Mỗi keystroke đều trigger re-render
**Ảnh hưởng:** Performance issue khi type nhanh

### 26. **Empty Cart Không Disable Checkout Button**
**Vị trí:** `cart.html:65`, `index.html:66`
**Mô tả:** Button "Thanh toán" vẫn enabled khi cart trống
**Ảnh hưởng:** User có thể click checkout với cart trống

### 27. **Navigation Links Hardcoded**
**Vị trí:** Tất cả header trong HTML
**Mô tả:** Đường dẫn dùng absolute paths (`/products-list.html`)
**Ảnh hưởng:** Có thể không hoạt động nếu deploy ở subdirectory

### 28. **Product Not Found Handling Yếu**
**Vị trí:** `product-detail.js:53-55`
```javascript
} else {
    productDetailContainer.innerHTML = `<p>Product Not Found</p>`;
}
```
**Ảnh hưởng:** UX kém, nên redirect về trang 404 hoặc product list

---

## 🎨 UI/UX Issues

### 29. **Cart Button Disabled trong cart.html**
**Vị trí:** `cart.html:40`
```html
<button ... id="cartBtn" ... disabled>
```
**Mô tả:** Cart button bị disabled, nhưng không có visual feedback rõ ràng
**Ảnh hưởng:** User confused tại sao không mở được cart

### 30. **Cart Count Không Cập Nhật**
**Vị trí:** `cart.html:50`
```html
<p class="cart-count" id="cart-count">0 sản phẩm</p>
```
**Mô tả:** Text hardcode "0 sản phẩm", không có JS update số lượng thực
**Ảnh hưởng:** Hiển thị sai thông tin

### 31. **Search Result Dropdown Không Handle Edge Cases**
**Vị trí:** `main.js:312-355`
**Mô tả:**
- Không close khi click bên ngoài (chỉ khi blur input)
- Không support keyboard navigation (arrow keys, Enter)
- Không có max height, có thể tràn màn hình

### 32. **Filter State Không Persist**
**Mô tả:** Khi user filter products rồi reload page, mất hết filter state
**Ảnh hưởng:** UX kém, phải filter lại từ đầu

---

## 🔐 Security & Best Practices

### 33. **XSS Prevention Chưa Đủ**
**Vị trí:** `main.js:69, 124`
```javascript
.replace(/[<>]/g, "")
```
**Mô tả:** Chỉ remove `<>` không đủ để prevent XSS
**Ví dụ:** `onerror="alert('xss')"` vẫn pass qua
**Lưu ý:** Với mock data thì OK, nhưng nếu có user input cần DOMPurify

### 34. **No CSRF Protection**
**Mô tả:** Forms không có CSRF tokens
**Lưu ý:** Do không có backend nên chưa cần, nhưng nên biết concept

### 35. **Email Validation Chỉ Check Trùng**
**Vị trí:** `main.js:621-626`
**Mô tả:** Không validate format email (example@domain.com)
**Ảnh hưởng:** User có thể đăng ký với "abc" làm email

---

## 📱 Accessibility Issues

### 36. **Missing ARIA Labels**
**Mô tả:**
- Quantity buttons chỉ có "-" và "+" không có text cho screen readers
- Search result items không có role="option"
- Modal không có aria-modal="true"

### 37. **Keyboard Navigation Không Đầy Đủ**
**Mô tả:**
- Modal không trap focus
- Search dropdown không support keyboard
- Product grid không có focus management

### 38. **Color Contrast Chưa Check**
**Mô tả:** Không thể verify từ code, cần test với tools như Lighthouse
**Khuyến nghị:** Check WCAG AAA contrast ratios

---

## 📦 Build & Deployment

### 39. **Missing Environment Variables Setup**
**Mô tả:** Không có `.env.example` hoặc `.env.template`
**Ảnh hưởng:** Người clone project không biết cần setup gì

### 40. **No Production Build Test**
**Mô tả:** Không có script hoặc docs để test production build
**Khuyến nghị:** Add script `"preview": "vite preview"` vào package.json (đã có rồi, OK)

### 41. **Missing Error Boundary Pattern**
**Mô tả:** Nếu một module throw error, toàn bộ app crash
**Ảnh hưởng:** No graceful degradation

---

## 🧪 Testing & Maintainability

### 42. **No Tests**
**Mô tả:** Không có unit tests, integration tests, hoặc E2E tests
**Lưu ý:** OK cho đồ án cơ bản, nhưng nên biết testing concepts

### 43. **Functions Quá Dài**
**Vị trí:** `main.js:437-523` - Filter by price (87 dòng)
**Mô tả:** Function có quá nhiều if/else branches giống nhau
**Ảnh hưởng:** Khó maintain, dễ có bugs

### 44. **No JSDoc Comments**
**Mô tả:** Functions không có JSDoc để document params và return values
**Ảnh hưởng:** Khó hiểu function làm gì, nhất là exported functions

---

## 🎯 Khuyến Nghị Ưu Tiên

### Priority 1 (Phải Fix):
1. ✅ Sửa `lang="vi"` trong tất cả HTML files
2. ✅ Fix duplicate ID `price-range` trong products-list.html
3. ✅ Fix cart state management - lưu cart theo user
4. ✅ Remove console.log trong production code
5. ✅ Fix typo CSS class `fw-bold` trong cart.html

### Priority 2 (Nên Fix):
6. ✅ Thay thế `window.location.reload()` bằng re-render trong cart.js
7. ✅ Chuyển inline onclick handlers sang addEventListener
8. ✅ Add error handling cho localStorage operations
9. ✅ Prevent form submit trong search form
10. ✅ Fix typo biến `passowrdInput`

### Priority 3 (Cải Thiện):
11. ✅ Split main.js thành nhiều modules nhỏ hơn
12. ✅ Add polyfill hoặc fallback cho Object.groupBy()
13. ✅ Extract header thành component hoặc template
14. ✅ Add loading states và debounce cho search
15. ✅ Add lazy loading cho images

### Priority 4 (Nice to Have):
16. Add unit tests cho core functions
17. Improve accessibility (ARIA labels, keyboard nav)
18. Add error boundaries
19. Optimize performance (code splitting, lazy loading)
20. Add JSDoc comments

---

## 💡 Điểm Học Hỏi Cho Lần Sau

### Architecture:
- Cân nhắc dùng state management library (Zustand, Redux) cho complex state
- Component-based approach ngay cả với vanilla JS
- Template literals không thay thế được proper templating (Handlebars, EJS)

### Code Quality:
- Linter rules có thể strict hơn
- Prettier cho consistent formatting
- Pre-commit hooks với Husky để enforce quality

### User Experience:
- Loading skeletons thay vì blank screens
- Optimistic UI updates (update UI trước, sync sau)
- Toast notifications thay vì alert()

### Testing:
- Vitest cho unit tests
- Playwright cho E2E tests
- Test coverage reports

---

## 🎓 Kết Luận

Đây là một đồ án tốt cho level học sinh/sinh viên, thể hiện:
- ✅ Hiểu biết tốt về JavaScript fundamentals
- ✅ Biết cách tổ chức code modular
- ✅ Sử dụng modern tooling (Vite, PostCSS)
- ✅ UX awareness (animations, loading states)

**Điểm:** 7.5/10 cho một đồ án học tập

**Lý do không được 10:**
- Cart state management có bug nghiêm trọng
- Code quality issues (duplicates, magic numbers, long functions)
- Thiếu error handling và edge cases handling
- Accessibility chưa được chú trọng

**Tuy nhiên:**
Với context là đồ án cuối khóa, project này cho thấy foundation vững chắc. Các issues được liệt kê phần nhiều là để học hỏi và cải thiện, không phải để "chê bai". Việc có documentation tốt (CLAUDE.md, README.md) và code organization rõ ràng là những điểm rất đáng khen.

**Khuyến nghị:** Focus vào việc fix các Priority 1 & 2 issues trước khi demo/nộp bài. Các issues khác có thể để làm phần "improvements" hoặc "known limitations" trong presentation.

---

**Reviewer Notes:** Review này mang tính educational, chỉ ra issues để học hỏi chứ không phải để chỉ trích. Mọi developer đều trải qua giai đoạn này, và việc nhận diện issues là bước đầu tiên để improve. Keep coding! 🚀
