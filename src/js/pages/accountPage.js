import { appState } from "../data/index.js";

function renderAccountInfo() {
    const accountInfo = document.getElementById("account-info");
    const accountOrderHistory = document.getElementById(
        "account-order-history"
    );

    const user = appState.userList.find(
        (user) => user.id === appState.currentUser.id
    );
    const userOrderHistory = user.orderHistory;

    accountInfo.innerHTML = `
    <div class="account-card">
        <h2 class="fs-h4">Thông tin tài khoản</h2>
        <div class="info-grid">
            <div class="info-item">
                <p class="info-label">Họ và tên:</p>
                <p class="info-content">${user.name}</p>
            </div>
            <div class="info-item">
                <p class="info-label">Email:</p>
                <p class="info-content">${user.email}</p>
            </div>
            <div class="info-item">
                <p class="info-label">Số điện thoại:</p>
                <p class="info-content">${user.phoneNumber}</p>
            </div>
            <div class="info-item">
                <p class="info-label">Địa chỉ:</p>
                <p class="info-content">${user.address || "Chưa cập nhật"}</p>
            </div>
        </div>
    </div>
`;

    accountOrderHistory.innerHTML = `
    <div class="account-card">
        <h2 class="fs-h4">Lịch sử đơn hàng</h2>
        <ul class="account-order-list">
            ${userOrderHistory
                .map((order) => {
                    const orderDate = new Date(order.date).toLocaleDateString(
                        "vi-VN",
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    );

                    const itemsHTML = order.orderItems
                        .map(
                            (item) => `
										<div class="cart-item">
											<img src="${item.images[0].url}" alt="${item.name}" class="cart-item-img">
											<div class="cart-item-info">
												<p class="cart-item-name">${item.name}</p>
												<div class="cart-item-action">
													<p class="quantity-value">x${item.quantity}</p>
												</div>
											</div>
											<p class="cart-item-price">${(item.price * item.quantity).toLocaleString("vi-VN")}₫</p>
										</div>
									`
                        )
                        .join("");

                    return `
            <li class="account-order-item">
                <div class="account-order-header-info">
                    <span class="account-order-id">#${order.orderId}</span>
                    <span class="account-order-date">${orderDate}</span>
                </div>

                <div class="account-order-details">
                    <div class="info-item">
                        <span class="info-label">Người nhận:</span>
                        <span class="info-content">${order.nameOrder}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Địa chỉ:</span>
                        <span class="info-content">${order.address}, ${order.city}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Số điện thoại:</span>
                        <span class="info-content">${order.phoneNumber}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Phương thức thanh toán:</span>
                        <span class="info-content">${order.paymentMethod}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Trạng thái:</span>
                        <span class="info-content order-status-success">Thành công</span>
                    </div>
                </div>

                <div class="account-orders-list">${itemsHTML}</div>
                <div class="account-order-total-container">
                    <span class="account-order-total-label">Tổng cộng:</span>
                    <span class="account-order-total-price">${order.totalPrice}₫</span>
                </div>
            </li>`;
                })
                .join("")}
        </ul>
    </div>
`;
}

renderAccountInfo();
