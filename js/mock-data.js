export const products = [
	{
		id: 1,
		name: "iPhone 15 Pro Max 256GB",
		brand: "Apple",
		category: "smartphone",
		price: 34990000,

		images: [
			{
				id: 1,
				url: "/assets/images/iphone-main.png",
				alt: "iPhone 15 Pro Max màu Titan tự nhiên",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&crop=top",
				alt: "iPhone 15 Pro Max mặt sau",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&crop=bottom",
				alt: "iPhone 15 Pro Max hệ thống camera",
				isMain: false,
			},
		],

		description:
			"iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, khung titan cao cấp và nút Action Button có thể tùy chỉnh. Camera chính 48MP, zoom quang học 5x và màn hình 6.7 inch Super Retina XDR với Dynamic Island.",

		specifications: [
			"Màn hình: 6.7 inch Super Retina XDR OLED với Dynamic Island",
			"Chip: A17 Pro 6-core CPU (3nm)",
			"Camera: 48MP chính + 12MP Ultra Wide + 12MP Telephoto 5x",
			"Pin: 4422mAh, sạc nhanh 27W, MagSafe 15W",
			"Kết nối: 5G, Wi-Fi 6E, USB-C (USB 3.0)",
			"Chống nước: IP68, khung Titan chuẩn hàng không vũ trụ",
		],
	},

	{
		id: 2,
		name: "Nothing Phone (2) 12GB RAM 256GB",
		brand: "Nothing",
		category: "smartphone",
		price: 14990000,

		images: [
			{
				id: 1,
				url: "/assets/images/Nothing.png",
				alt: "Nothing Phone (2) màu trắng trong suốt",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&crop=top",
				alt: "Nothing Phone (2) mặt sau",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&crop=bottom",
				alt: "Nothing Phone (2) Glyph Interface",
				isMain: false,
			},
		],

		description:
			"Nothing Phone (2) với thiết kế trong suốt độc đáo, Glyph Interface sáng tạo và hiệu năng mạnh mẽ. Màn hình OLED 6.7 inch 120Hz cùng camera 50MP được tối ưu bởi AI.",

		specifications: [
			"Màn hình: 6.7 inch LTPO OLED 120Hz",
			"Chip: Snapdragon 8+ Gen 1",
			"Camera: 50MP chính + 50MP ultra-wide",
			"RAM/ROM: 12GB/256GB",
			"Pin: 4700mAh, sạc nhanh 45W, sạc không dây 15W",
			"Đặc biệt: Glyph Interface, Nothing OS 2.0",
		],
	},

	{
		id: 3,
		name: "MacBook Pro 14-inch M3 Pro Chip 18GB 512GB",
		brand: "Apple",
		category: "laptop",
		price: 52990000,

		images: [
			{
				id: 1,
				url: "/assets/images/Macbook.png",
				alt: "MacBook Pro 14 inch M3 Space Gray",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=top",
				alt: "MacBook Pro 14 inch mở màn hình",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=bottom",
				alt: "MacBook Pro 14 inch cổng kết nối",
				isMain: false,
			},
		],

		description:
			"MacBook Pro 14 inch với chip M3 mạnh mẽ, màn hình Liquid Retina XDR và thời lượng pin lên đến 18 giờ. Thiết kế nhôm nguyên khối cao cấp dành cho các chuyên gia.",

		specifications: [
			"Màn hình: 14.2 inch Liquid Retina XDR",
			"Chip: Apple M3 (8-core CPU + 10-core GPU)",
			"RAM/SSD: 8GB unified memory + 512GB SSD",
			"Pin: 70Wh, thời lượng 18 giờ",
			"Kết nối: 3x Thunderbolt 4, HDMI, SDXC",
			"Trọng lượng: 1.55kg",
		],
	},

	{
		id: 4,
		name: "iPad Pro 11-inch M4 Chip Wi-Fi 256GB",
		brand: "Apple",
		category: "tablet",
		price: 28990000,

		images: [
			{
				id: 1,
				url: "/assets/images/ipad-main.png",
				alt: "iPad Pro 11 inch M4 Silver",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop&crop=top",
				alt: "iPad Pro 11 inch với Apple Pencil",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop&crop=bottom",
				alt: "iPad Pro 11 inch mặt sau",
				isMain: false,
			},
		],

		description:
			"iPad Pro 11 inch với chip M4 siêu mạnh, màn hình Ultra Retina XDR OLED đầu tiên trên iPad. Siêu mỏng 5.3mm, hỗ trợ Apple Pencil Pro và Magic Keyboard.",

		specifications: [
			"Màn hình: 11 inch Ultra Retina XDR OLED",
			"Chip: Apple M4 (9-core CPU + 10-core GPU)",
			"Camera: 12MP Wide + 10MP Ultra Wide + LiDAR",
			"Kết nối: USB-C Thunderbolt, Wi-Fi 6E",
			"Độ dày: 5.3mm siêu mỏng",
			"Hỗ trợ: Apple Pencil Pro, Magic Keyboard",
		],
	},

	{
		id: 5,
		name: "Studio Display 27-inch 5K Retina Standard Glass Tilt-Adjustable Stand",
		brand: "Apple",
		category: "monitor",
		price: 39990000,

		images: [
			{
				id: 1,
				url: "/assets/images/studio-display-main.png",
				alt: "Apple Studio Display",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=top",
				alt: "Studio Display góc nghiêng",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=bottom",
				alt: "Studio Display chân đế",
				isMain: false,
			},
		],

		description:
			"Apple Studio Display với màn hình Retina 5K 27 inch tuyệt đẹp, camera Center Stage 12MP và hệ thống âm thanh 6 loa chất lượng studio. Thiết kế nhôm nguyên khối sang trọng.",

		specifications: [
			"Màn hình: 27 inch Retina 5K IPS",
			"Độ phân giải: 5120 x 2880 (218 PPI)",
			"Độ sáng: 600 nits, True Tone, P3 wide color",
			"Camera: 12MP Ultra Wide với Center Stage",
			"Âm thanh: 6 loa force-cancelling, 3 mic studio",
			"Kết nối: 1x Thunderbolt 3, 3x USB-C",
		],
	},

	{
		id: 6,
		name: "Google Pixel 8 Pro 12GB 5G",
		brand: "Google",
		category: "smartphone",
		price: 22990000,

		images: [
			{
				id: 1,
				url: "/assets/images/Google Pixel.png",
				alt: "Google Pixel 8 Pro Bay Blue",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop&crop=top",
				alt: "Pixel 8 Pro camera bar",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop&crop=bottom",
				alt: "Pixel 8 Pro màn hình",
				isMain: false,
			},
		],

		description:
			"Google Pixel 8 Pro với AI photography đột phá, chip Tensor G3 và Android 14 thuần khiết. Camera AI với Magic Eraser và Best Take, 7 năm cập nhật bảo mật.",

		specifications: [
			"Màn hình: 6.7 inch LTPO OLED 120Hz",
			"Chip: Google Tensor G3 + Titan M security",
			"Camera: 50MP chính + 48MP telephoto 5x + 48MP ultra-wide",
			"RAM/ROM: 12GB/128GB",
			"Pin: 5050mAh, sạc nhanh 30W",
			"Đặc biệt: AI photography, 7 năm cập nhật",
		],
	},

	{
		id: 7,
		name: "Mac Studio M2 Max 12-Core CPU 30-Core GPU 32GB 512GB",
		brand: "Apple",
		category: "desktop",
		price: 49990000,

		images: [
			{
				id: 1,
				url: "/assets/images/Mac Studio.png",
				alt: "Mac Studio M2 Max Silver",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=top",
				alt: "Mac Studio cổng kết nối",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=bottom",
				alt: "Mac Studio thiết kế",
				isMain: false,
			},
		],

		description:
			"Mac Studio với chip M2 Max mạnh mẽ, hiệu năng vượt trội cho các tác vụ chuyên nghiệp. Thiết kế nhỏ gọn nhưng đầy đủ cổng kết nối, làm mát hiệu quả và hoàn toàn yên tĩnh.",

		specifications: [
			"Chip: Apple M2 Max (12-core CPU + 30-core GPU)",
			"RAM/SSD: 32GB unified memory + 512GB SSD",
			"Cổng kết nối: 4x Thunderbolt 4, 2x USB-A, HDMI, 10Gb Ethernet",
			"Kết nối: Wi-Fi 6E, Bluetooth 5.3",
			"Âm thanh: Jack 3.5mm hỗ trợ impedance cao",
			"Kích thước: 19.7 x 19.7 x 9.5 cm, 2.7kg",
		],
	},

	{
		id: 8,
		name: "AirPods Max Headphones",
		brand: "Apple",
		category: "accessory",
		price: 13990000,

		images: [
			{
				id: 1,
				url: "/assets/images/Airpod.png",
				alt: "AirPods Max Space Gray",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=top",
				alt: "AirPods Max earcups",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=bottom",
				alt: "AirPods Max headband",
				isMain: false,
			},
		],

		description:
			"AirPods Max với thiết kế over-ear cao cấp, chống ồn chủ động xuất sắc và chất lượng âm thanh Hi-Fi. Driver 40mm tùy chỉnh, khung nhôm và đệm memory foam êm ái.",

		specifications: [
			"Driver: 40mm dynamic driver tùy chỉnh Apple",
			"Chip: Apple H1 trong mỗi earcup",
			"Chống ồn: Active Noise Cancellation + Transparency",
			"Pin: 20 giờ nghe nhạc (ANC/Transparency bật)",
			"Sạc: Lightning, 5 phút = 1.5 giờ nghe",
			"Tính năng: Spatial Audio, Adaptive EQ, Audio Sharing",
		],
	},

	{
		id: 9,
		name: "Samsung Galaxy Tab S9 FE 6GB 128GB",
		brand: "Samsung",
		category: "tablet",
		price: 12990000,

		images: [
			{
				id: 1,
				url: "/assets/images/samsung-tablet-main.png",
				alt: "Samsung Galaxy Tab S9 FE Mint",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop&crop=top",
				alt: "Galaxy Tab S9 FE S Pen",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop&crop=bottom",
				alt: "Galaxy Tab S9 FE màn hình",
				isMain: false,
			},
		],

		description:
			"Samsung Galaxy Tab S9 FE với S Pen đi kèm, màn hình lớn 10.9 inch và pin 8000mAh. Thiết kế kim loại cao cấp với hiệu năng mạnh mẽ, giá cả phải chăng.",

		specifications: [
			"Màn hình: 10.9 inch LCD 90Hz",
			"Chip: Exynos 1380 8-core",
			"Camera: 8MP sau, 12MP ultra-wide trước",
			"RAM/ROM: 6GB/128GB",
			"Pin: 8000mAh, sạc nhanh 45W",
			"Đặc biệt: S Pen đi kèm, chống nước IP68",
		],
	},

	{
		id: 10,
		name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
		brand: "Sony",
		category: "accessory",
		price: 8990000,

		images: [
			{
				id: 1,
				url: "/assets/images/Sony-MX5.png",
				alt: "Sony WH-1000XM5 Black",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=top",
				alt: "Sony WH-1000XM5 đeo",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=bottom",
				alt: "Sony WH-1000XM5 gập lại",
				isMain: false,
			},
		],

		description:
			"Sony WH-1000XM5 với công nghệ chống ồn hàng đầu thế giới, 8 microphone cho cuộc gọi rõ ràng và driver 30mm mới. Pin 30 giờ, sạc nhanh 3 phút = 3 giờ nghe.",

		specifications: [
			"Driver: 30mm carbon fiber composite",
			"Chip: Integrated Processor V1 + QN1",
			"Chống ồn: 8 microphones, Auto NC Optimizer",
			"Pin: 30 giờ (ANC bật), 40 giờ (ANC tắt)",
			"Sạc: USB-C, 3 phút = 3 giờ nghe",
			"Tính năng: LDAC, Multipoint, Speak-to-Chat, DSEE Extreme",
		],
	},

	{
		id: 11,
		name: "Apple Watch Ultra 2 GPS + Cellular 49mm",
		brand: "Apple",
		category: "accessory",
		price: 21990000,

		images: [
			{
				id: 1,
				url: "/assets/images/Apple Watch.png",
				alt: "Apple Watch Ultra 2 Titanium with Trail Loop",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
				alt: "Apple Watch Ultra 2 mặt bên",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
				alt: "Apple Watch Ultra 2 Action Button",
				isMain: false,
			},
		],

		description:
			"Apple Watch Ultra 2 với vỏ titan chuẩn hàng không vũ trụ, màn hình siêu sáng 3000 nits và pin 36 giờ. Action Button tùy chỉnh, GPS 2 tần số chính xác cao và khả năng lặn đến 40m.",

		specifications: [
			"Màn hình: 49mm Retina LTPO OLED (3000 nits)",
			"Chip: Apple S9 SiP + U2 (UWB)",
			"Pin: Lên đến 36 giờ (72 giờ ở chế độ tiết kiệm)",
			"Cảm biến: ECG, Blood oxygen, Temperature, Depth, Altimeter",
			"Chống nước: 100m (ISO 22810), Lặn 40m (EN 13319)",
			"Tính năng: Action Button, Siren 86dB, Cellular, GPS 2 tần số",
		],
	},
];
