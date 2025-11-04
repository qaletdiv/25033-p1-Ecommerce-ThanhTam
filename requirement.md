
### Yêu cầu

---

## 1. Yêu Cầu Chức Năng

### **A.0. Màn hình trang chủ**

- **Hiển thị sản phẩm nổi bật:** Hiển thị danh sách các sản phẩm nổi bật từ nguồn dữ liệu, mỗi sản phẩm có hình ảnh, tên, giá và nút "Thêm vào giỏ hàng".
- **Thanh điều hướng (Navigation Bar):**
    - Khi chưa đăng nhập: Hiển thị các liên kết "Trang chủ", "Sản phẩm", "Liên hệ", "Đăng nhập", "Đăng ký". Nút "Giỏ hàng" có thể hiển thị nhưng sẽ yêu cầu đăng nhập khi nhấn vào.
    - Khi đã đăng nhập: Các nút "Đăng nhập", "Đăng ký" được thay thế bằng "Tài khoản của tôi" và "Đăng xuất".
- **Thanh tìm kiếm:** Cho phép người dùng tìm kiếm sản phẩm theo tên.
- **Yêu cầu đăng nhập:** Khi khách truy cập nhấn nút "Thêm vào giỏ hàng", hệ thống phải yêu cầu họ đăng nhập trước khi thực hiện hành động.

### **A.1. Màn hình danh sách sản phẩm**

- **Hiển thị toàn bộ sản phẩm:** Liệt kê tất cả sản phẩm dưới dạng lưới (grid). Nếu danh sách dài, cần có chức năng phân trang (pagination).
- **Bộ lọc sản phẩm:** Cho phép người dùng lọc sản phẩm dựa trên các tiêu chí như Danh mục và Khoảng giá.
- **Sắp xếp sản phẩm:** Cung cấp các tùy chọn để sắp xếp sản phẩm theo Giá (tăng/giảm) hoặc Tên (A-Z).

### **A.2. Màn hình chi tiết sản phẩm**

- **Hiển thị thông tin chi tiết:** Hiển thị đầy đủ thông tin của một sản phẩm: tên, giá, nhiều hình ảnh, mô tả chi tiết và thông số kỹ thuật.
- **Chọn số lượng:** Cho phép người dùng chọn số lượng sản phẩm mong muốn trước khi thêm vào giỏ.
- **Yêu cầu đăng nhập:** Nút "Thêm vào giỏ hàng" yêu cầu người dùng phải đăng nhập để thêm sản phẩm vào giỏ hàng của họ.
- **Hiển thị sản phẩm liên quan:** Phía dưới trang, hiển thị một danh sách các sản phẩm khác cùng danh mục.

### **A.3. Màn hình đăng ký**

- **Form đăng ký:** Cung cấp một form yêu cầu người dùng nhập: Họ và tên, Email, Mật khẩu và Nhập lại mật khẩu.
- **Kiểm tra dữ liệu:** Hệ thống phải kiểm tra tính hợp lệ của dữ liệu (ví dụ: email không được trùng lặp, mật khẩu phải khớp nhau).
- **Hoàn tất đăng ký:** Sau khi đăng ký thành công, hiển thị thông báo và điều hướng người dùng đến trang Đăng nhập.

### **A.4. Màn hình đăng nhập**

- **Form đăng nhập:** Cung cấp một form yêu cầu Email và Mật khẩu.
- **Xác thực người dùng:** Hệ thống kiểm tra thông tin đăng nhập.
    - Nếu thành công: Cập nhật thanh điều hướng và chuyển người dùng về trang họ đang xem trước đó, hoặc về trang chủ.
    - Nếu thất bại: Hiển thị thông báo lỗi.

### **A.5. Màn hình Trang giỏ hàng**

- **Yêu cầu truy cập:** Người dùng bắt buộc phải đăng nhập để xem trang này. Nếu chưa đăng nhập, hệ thống tự động chuyển hướng họ đến trang Đăng nhập.
- **Hiển thị giỏ hàng:** Hiển thị danh sách các sản phẩm mà người dùng đã thêm, bao gồm hình ảnh, tên, đơn giá, số lượng và thành tiền.
- **Chỉnh sửa giỏ hàng:** Cho phép người dùng thay đổi số lượng hoặc xóa sản phẩm khỏi giỏ.
- **Hiển thị tổng tiền:** Tự động tính toán và cập nhật tổng giá trị đơn hàng khi giỏ hàng có thay đổi.

### **A.6. Màn hình Trang thanh toán**

- **Yêu cầu truy cập:** Chỉ người dùng đã đăng nhập và có sản phẩm trong giỏ hàng mới có thể truy cập trang này.
- **Form thông tin giao hàng:** Cung cấp form để người dùng nhập thông tin giao hàng (Họ tên, SĐT, Địa chỉ).
- **Tóm tắt đơn hàng:** Hiển thị lại tóm tắt sản phẩm và tổng tiền để người dùng xác nhận.
- **Xác nhận đơn hàng:** Khi nhấn nút "Xác nhận", hệ thống ghi nhận đơn hàng vào tài khoản của người dùng, làm trống giỏ hàng và chuyển đến trang Xác nhận đơn hàng.

### **A.7. Màn hình Trang xác nhận đơn hàng (Order Confirmation Page)**

- **Thông báo thành công:** Hiển thị thông báo rõ ràng xác nhận đơn hàng đã được đặt thành công.
- **Tóm tắt đơn hàng:** Liệt kê lại thông tin chi tiết của đơn hàng vừa đặt.
- **Nút điều hướng:** Cung cấp nút "Tiếp tục mua sắm" hoặc "Xem lịch sử đơn hàng".

### **A.8. Màn hình Tài khoản của tôi**

- **Yêu cầu truy cập:** Chỉ người dùng đã đăng nhập mới có thể truy cập trang này.
- **Thông tin cá nhân:** Hiển thị thông tin tài khoản của người dùng như Họ và tên, Email.
- **Lịch sử đặt hàng:** Hiển thị danh sách tất cả các đơn hàng mà người dùng đã đặt trước đó. Mỗi đơn hàng hiển thị các thông tin cơ bản như Mã đơn hàng, Ngày đặt, Tổng tiền, Trạng thái.



