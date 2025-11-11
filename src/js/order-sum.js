import { userList } from "./main";

const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get("id");
const orderContainerEl = document.querySelector(".order-summary-container");

const orderOwner = userList.find((user) => {
	return user.orderHistory.find((order) => order.orderId === orderId);
});

const foundOrder = orderOwner?.orderHistory.find((order) => order.orderId === orderId);

renderOrderSum(foundOrder, orderContainerEl);

export function renderOrderSum(order, container) {
	const orderDate = new Date(order.date).toLocaleDateString("vi-VN", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const orderSummaryEl = `
    <div class="order-summary">

        <div class="order-header">
            <div class="info-grid">
                <div class="order-info-container">
                    <p class="order-label">Mã đơn hàng:</p>
                    <p class="order-info">#${order.orderId}</p>
                </div>
                <div class="order-info-container">
                    <p class="order-label">Ngày đặt:</p>
                    <p class="order-info">${orderDate}</p>
                </div>
                <div class="order-info-container">
                    <p class="order-label">Phương thức thanh toán:</p>
                    <p class="order-info">${order.paymentMethod}</p>
                </div>
                <div class="order-info-container">
                    <p class="order-label">Trạng thái:</p>
                    <p class="order-info order-status">Thành công</p>
                </div>
            </div>
        </div>

        <div class="section-divider"></div>

        <div class="customer-info">
            <h3>Thông tin khách hàng</h3>
            <div class="info-grid">
                <div class="order-info-container">
                    <p class="order-label">Tên người nhận:</p>
                    <p class="order-info">${order.nameOrder}</p>
                </div>
                <div class="order-info-container">
                    <p class="order-label">Email:</p>
                    <p class="order-info">${order.email}</p>
                </div>
                <div class="order-info-container">
                    <p class="order-label">Số điện thoại:</p>
                    <p class="order-info">${order.phoneNumber}</p>
                </div>
                <div class="order-info-container">
                    <p class="order-label">Địa chỉ giao hàng:</p>
                    <p class="order-info">${order.address}, ${order.city}</p>
                </div>
                ${
									order.note
										? `
                <div class="order-info-container">
                    <p class="order-label">Ghi chú giao hàng:</p>
                    <p class="order-info">${order.note}</p>
                </div>
                `
										: ""
								}
            </div>
        </div>

        <div class="section-divider"></div>

        <div class="order-items-summary">
            <h3>Sản phẩm (${order.orderItems.length})</h3>
            <div class="info-grid"></div>
        </div>

        <div class="section-divider"></div>

        <div class="order-total">
            <div class="order-info-container">
                <p class="order-label">Tổng tiền:</p>
                <p class="order-info total-price">${order.totalPrice}₫</p>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = orderSummaryEl;

	const orderItemsContainer = container.querySelector(".order-items-summary .info-grid");
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
        </div>`
		)
		.join("");

	orderItemsContainer.innerHTML = itemsHTML;
}
