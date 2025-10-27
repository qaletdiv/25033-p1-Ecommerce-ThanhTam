const products = [
	{
		id: 1,
		name: "iPhone 15 Pro Max",
		brand: "Apple",
		category: "smartphone",
		price: 29990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&crop=center",
				alt: "iPhone 15 Pro Max màu xanh titan",
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
				alt: "iPhone 15 Pro Max camera",
				isMain: false,
			},
		],

		description:
			"iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, camera chuyên nghiệp 48MP và thiết kế titan cao cấp. Màn hình 6.7 inch Super Retina XDR cùng pin dung lượng lớn cho trải nghiệm đỉnh cao.",

		specifications: [
			"Màn hình: 6.7 inch Super Retina XDR OLED",
			"Chip: A17 Pro 6-core CPU",
			"Camera: 48MP chính + 12MP telephoto + 12MP ultra-wide",
			"Pin: 4441mAh, sạc nhanh 27W",
			"Kết nối: 5G, Wi-Fi 6E, USB-C",
			"Chống nước: IP68",
		],
	},

	{
		id: 2,
		name: "Samsung Galaxy S24 Ultra",
		brand: "Samsung",
		category: "smartphone",
		price: 26990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&crop=center",
				alt: "Samsung Galaxy S24 Ultra màu xám",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&crop=top",
				alt: "Galaxy S24 Ultra mặt sau",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&crop=bottom",
				alt: "Galaxy S24 Ultra S Pen",
				isMain: false,
			},
		],

		description:
			"Galaxy S24 Ultra với S Pen tích hợp, camera zoom 100x và AI thông minh. Màn hình 6.8 inch Dynamic AMOLED 2X cùng pin 5000mAh cho trải nghiệm flagship đỉnh cao.",

		specifications: [
			"Màn hình: 6.8 inch Dynamic AMOLED 2X QHD+",
			"Chip: Snapdragon 8 Gen 3 for Galaxy",
			"Camera: 200MP chính + 50MP telephoto + 10MP telephoto + 12MP ultra-wide",
			"RAM/ROM: 12GB/256GB",
			"Pin: 5000mAh, sạc nhanh 45W",
			"Đặc biệt: S Pen tích hợp, Galaxy AI",
		],
	},

	{
		id: 3,
		name: "MacBook Pro 14 inch M3",
		brand: "Apple",
		category: "laptop",
		price: 52990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=center",
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
		name: "iPad Pro 11 inch M4",
		brand: "Apple",
		category: "tablet",
		price: 28990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop&crop=center",
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
		name: "Samsung Odyssey G9 49 inch",
		brand: "Samsung",
		category: "monitor",
		price: 35990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=center",
				alt: "Samsung Odyssey G9 49 inch",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=top",
				alt: "Odyssey G9 màn hình cong",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=bottom",
				alt: "Odyssey G9 RGB lighting",
				isMain: false,
			},
		],

		description:
			"Màn hình gaming cong 49 inch với độ cong 1000R, độ phân giải Dual QHD và tần số quét 240Hz. Công nghệ Quantum Dot cho màu sắc sống động, RGB lighting đẹp mắt.",

		specifications: [
			"Màn hình: 49 inch cong 1000R VA Quantum Dot",
			"Độ phân giải: 5120 x 1440 (Dual QHD)",
			"Tần số quét: 240Hz, phản hồi 1ms",
			"HDR: HDR1000, 95% DCI-P3",
			"Gaming: G-Sync Compatible, FreeSync Premium Pro",
			"Kết nối: 2x DP 1.4, 1x HDMI 2.1, USB-C 90W",
		],
	},

	{
		id: 6,
		name: "Google Pixel 8 Pro",
		brand: "Google",
		category: "smartphone",
		price: 22990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop&crop=center",
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
		name: "Xiaomi 14 Ultra",
		brand: "Xiaomi",
		category: "smartphone",
		price: 29990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=center",
				alt: "Xiaomi 14 Ultra Black",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=top",
				alt: "Xiaomi 14 Ultra camera Leica",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=bottom",
				alt: "Xiaomi 14 Ultra mặt sau",
				isMain: false,
			},
		],

		description:
			"Xiaomi 14 Ultra với camera Leica chuyên nghiệp, cảm biến Sony LYT-900 1 inch và sạc siêu nhanh 90W. Đi kèm Photography Kit với grip camera chuyên nghiệp.",

		specifications: [
			"Màn hình: 6.73 inch LTPO AMOLED 2K 120Hz",
			"Chip: Snapdragon 8 Gen 3",
			'Camera: 50MP Leica chính 1" + 50MP telephoto 5x + 50MP ultra-wide',
			"RAM/ROM: 16GB/512GB",
			"Pin: 5300mAh, HyperCharge 90W (18 phút 100%)",
			"Đặc biệt: Photography Kit, Leica watermark",
		],
	},

	{
		id: 8,
		name: "AirPods Pro 2 (USB-C)",
		brand: "Apple",
		category: "accessory",
		price: 6490000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=center",
				alt: "AirPods Pro 2 USB-C",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=top",
				alt: "AirPods Pro 2 trong case",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=bottom",
				alt: "AirPods Pro 2 đeo tai",
				isMain: false,
			},
		],

		description:
			"AirPods Pro 2 với chip H2, chống ồn chủ động tốt nhất và case sạc USB-C. Spatial Audio với head tracking, 6 giờ nghe nhạc + 24 giờ với case sạc.",

		specifications: [
			"Chip: H2 thế hệ mới",
			"Chống ồn: Active Noise Cancellation 2x tốt hơn",
			"Pin: 6 giờ tai nghe + 24 giờ case (30 giờ tổng)",
			"Sạc: USB-C + MagSafe + Qi wireless",
			"Tính năng: Spatial Audio, Adaptive EQ, Find My",
			"Tương thích: iPhone, iPad, Mac, Apple Watch, Apple TV",
		],
	},

	{
		id: 9,
		name: "Samsung Galaxy Tab S9 Ultra",
		brand: "Samsung",
		category: "tablet",
		price: 31990000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop&crop=center",
				alt: "Samsung Galaxy Tab S9 Ultra Gray",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop&crop=top",
				alt: "Galaxy Tab S9 Ultra S Pen",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop&crop=bottom",
				alt: "Galaxy Tab S9 Ultra màn hình",
				isMain: false,
			},
		],

		description:
			"Tablet Android cao cấp nhất với màn hình khổng lồ 14.6 inch, S Pen tích hợp và chế độ Samsung DeX. Pin 11200mAh cùng 4 loa AKG Dolby Atmos.",

		specifications: [
			"Màn hình: 14.6 inch Dynamic AMOLED 2X 120Hz",
			"Chip: Snapdragon 8 Gen 2 for Galaxy",
			"Camera: 13MP + 6MP sau, 12MP + 12MP trước",
			"RAM/ROM: 12GB/256GB",
			"Pin: 11200mAh, sạc nhanh 45W",
			"Đặc biệt: S Pen, Samsung DeX, chống nước IP68",
		],
	},

	{
		id: 10,
		name: "Xiaomi Gaming Headset 7.1",
		brand: "Xiaomi",
		category: "accessory",
		price: 1290000,

		images: [
			{
				id: 1,
				url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=center",
				alt: "Xiaomi Gaming Headset 7.1 Black",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=top",
				alt: "Xiaomi Gaming Headset LED RGB",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=bottom",
				alt: "Xiaomi Gaming Headset microphone",
				isMain: false,
			},
		],

		description:
			"Tai nghe gaming 7.1 surround sound với LED RGB 16.7 triệu màu, driver 40mm và mic chống nhiễu. Thiết kế thoải mái cho gaming sessions dài với giá cả phải chăng.",

		specifications: [
			"Driver: 40mm Neodymium",
			"Âm thanh: Virtual 7.1 surround sound",
			"Mic: Omni-directional, chống nhiễu, gập 120°",
			"LED: RGB 16.7 triệu màu, multiple effects",
			"Kết nối: USB 2.0, cable 2.2m",
			"Tương thích: PC, PS4, PS5 + Mi Gaming software",
		],
	},
];
