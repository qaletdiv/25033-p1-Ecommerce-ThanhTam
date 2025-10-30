export const products = [
	{
		id: 1,
		name: "iPhone 15 Pro Max 256GB",
		brand: "Apple",
		category: "smartphone",
		price: 34990000,
		keywords: ["điện thoại", "smartphone", "di động", "phone", "iphone", "apple"],

		images: [
			{
				id: 1,
				url: "/assets/images/iphone-main.webp",
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
		name: "Nothing Phone (2) 12GB 256GB",
		brand: "Nothing",
		category: "smartphone",
		price: 14990000,
		keywords: ["điện thoại", "smartphone", "di động", "phone", "nothing"],

		images: [
			{
				id: 1,
				url: "/assets/images/Nothing.webp",
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
		name: "MacBook Pro 14-inch M3 Pro 18GB 512GB",
		brand: "Apple",
		category: "laptop",
		price: 52990000,
		keywords: ["máy tính", "laptop", "máy tính xách tay", "macbook", "apple"],

		images: [
			{
				id: 1,
				url: "/assets/images/Macbook.webp",
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
		name: "iPad Pro 11-inch M4 Wi-Fi 256GB",
		brand: "Apple",
		category: "tablet",
		price: 28990000,
		keywords: ["máy tính bảng", "tablet", "ipad", "apple"],

		images: [
			{
				id: 1,
				url: "/assets/images/ipad-main.webp",
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
		keywords: ["màn hình", "monitor", "display", "apple"],

		images: [
			{
				id: 1,
				url: "/assets/images/studio-display-main.webp",
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
		name: "Google Pixel 8 Pro 12GB 128GB 5G",
		brand: "Google",
		category: "smartphone",
		price: 22990000,
		keywords: ["điện thoại", "smartphone", "di động", "phone", "pixel", "google"],

		images: [
			{
				id: 1,
				url: "/assets/images/Google Pixel.webp",
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
		keywords: ["máy tính để bàn", "desktop", "pc", "mac", "apple"],

		images: [
			{
				id: 1,
				url: "/assets/images/Mac Studio.webp",
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
		keywords: ["tai nghe", "headphone", "earphone", "airpods", "apple", "phụ kiện"],

		images: [
			{
				id: 1,
				url: "/assets/images/Airpod.webp",
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
		name: "Samsung Galaxy Tab S9 Ultra 12GB 256GB WiFi",
		brand: "Samsung",
		category: "tablet",
		price: 29990000,
		keywords: ["máy tính bảng", "tablet", "samsung", "galaxy"],

		images: [
			{
				id: 1,
				url: "/assets/images/galaxy tablet ultra.webp",
				alt: "Samsung Galaxy Tab S9 Ultra Graphite",
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
				alt: "Galaxy Tab S9 Ultra màn hình AMOLED",
				isMain: false,
			},
		],

		description:
			"Samsung Galaxy Tab S9 Ultra là tablet cao cấp nhất với màn hình khổng lồ 14.6 inch Dynamic AMOLED 2X 120Hz. Chip Snapdragon 8 Gen 2 for Galaxy mạnh mẽ, S Pen đi kèm với độ trễ thấp, và thiết kế kim loại siêu mỏng chỉ 5.5mm - lý tưởng cho công việc sáng tạo và giải trí.",

		specifications: [
			"Màn hình: 14.6 inch Dynamic AMOLED 2X 120Hz (2960 x 1848)",
			"Chip: Snapdragon 8 Gen 2 for Galaxy",
			"Camera: 13MP chính + 8MP ultra-wide, 12MP + 12MP ultra-wide trước",
			"RAM/ROM: 12GB/256GB",
			"Pin: 11200mAh, sạc nhanh 45W",
			"Đặc biệt: S Pen đi kèm, chống nước IP68, AKG Quad speakers",
		],
	},

	{
		id: 10,
		name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
		brand: "Sony",
		category: "accessory",
		price: 8990000,
		keywords: ["tai nghe", "headphone", "earphone", "sony", "phụ kiện"],

		images: [
			{
				id: 1,
				url: "/assets/images/Sony-MX5.webp",
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
		keywords: ["đồng hồ thông minh", "smartwatch", "watch", "apple", "phụ kiện"],

		images: [
			{
				id: 1,
				url: "/assets/images/Apple Watch.webp",
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

	// Thêm smartphone
	{
		id: 12,
		name: "Samsung Galaxy S24 Ultra 12GB 256GB",
		brand: "Samsung",
		category: "smartphone",
		price: 29990000,
		keywords: ["điện thoại", "smartphone", "di động", "phone", "samsung", "galaxy"],

		images: [
			{
				id: 1,
				url: "/assets/images/samsung 24 ultra.webp",
				alt: "Samsung Galaxy S24 Ultra Titanium Gray",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&crop=top",
				alt: "Galaxy S24 Ultra S Pen",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&crop=bottom",
				alt: "Galaxy S24 Ultra camera",
				isMain: false,
			},
		],

		description:
			"Samsung Galaxy S24 Ultra với khung titan cao cấp, S Pen tích hợp và camera AI thông minh. Màn hình Dynamic AMOLED 2X 6.8 inch với độ sáng đỉnh 2600 nits, chip Snapdragon 8 Gen 3 for Galaxy mạnh mẽ.",

		specifications: [
			"Màn hình: 6.8 inch Dynamic AMOLED 2X 120Hz (2600 nits)",
			"Chip: Snapdragon 8 Gen 3 for Galaxy",
			"Camera: 200MP chính + 50MP telephoto 5x + 10MP telephoto 3x + 12MP ultra-wide",
			"RAM/ROM: 12GB/256GB",
			"Pin: 5000mAh, sạc nhanh 45W, sạc không dây 15W",
			"Đặc biệt: S Pen tích hợp, Galaxy AI, khung Titanium",
		],
	},

	{
		id: 13,
		name: "Xiaomi 14 Ultra 16GB 512GB",
		brand: "Xiaomi",
		category: "smartphone",
		price: 27990000,
		keywords: ["điện thoại", "smartphone", "di động", "phone", "xiaomi"],

		images: [
			{
				id: 1,
				url: "/assets/images/Another phone.webp",
				alt: "Xiaomi 14 Ultra Black",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&crop=top",
				alt: "Xiaomi 14 Ultra Leica camera",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&crop=bottom",
				alt: "Xiaomi 14 Ultra màn hình",
				isMain: false,
			},
		],

		description:
			"Xiaomi 14 Ultra hợp tác với Leica mang đến hệ thống camera chuyên nghiệp với cảm biến Sony LYT-900. Màn hình LTPO AMOLED 6.73 inch, chip Snapdragon 8 Gen 3 và sạc siêu nhanh 90W.",

		specifications: [
			"Màn hình: 6.73 inch LTPO AMOLED 120Hz (3000 nits)",
			"Chip: Snapdragon 8 Gen 3",
			"Camera: 50MP chính LYT-900 + 50MP telephoto 5x + 50MP telephoto 3.2x + 50MP ultra-wide",
			"RAM/ROM: 16GB/512GB",
			"Pin: 5000mAh, sạc nhanh 90W, sạc không dây 80W",
			"Đặc biệt: Leica optics, IP68, mặt lưng da thuần chay",
		],
	},

	{
		id: 14,
		name: "OPPO Find X7 Ultra 16GB 512GB",
		brand: "OPPO",
		category: "smartphone",
		price: 24990000,
		keywords: ["điện thoại", "smartphone", "di động", "phone", "oppo"],

		images: [
			{
				id: 1,
				url: "/assets/images/Oppo phone.webp",
				alt: "OPPO Find X7 Ultra Ocean Blue",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop&crop=top",
				alt: "OPPO Find X7 Ultra camera Hasselblad",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop&crop=bottom",
				alt: "OPPO Find X7 Ultra thiết kế",
				isMain: false,
			},
		],

		description:
			"OPPO Find X7 Ultra với hệ thống 4 camera Hasselblad đều 50MP, bao gồm 2 ống kính tiềm vọng. Màn hình cong 2K+ với công nghệ ProXDR, chip Snapdragon 8 Gen 3 và pin 5000mAh.",

		specifications: [
			"Màn hình: 6.82 inch LTPO AMOLED 120Hz (4500 nits peak)",
			"Chip: Snapdragon 8 Gen 3",
			"Camera: 50MP chính LYT-900 + 50MP periscope 6x + 50MP periscope 3x + 50MP ultra-wide",
			"RAM/ROM: 16GB/512GB",
			"Pin: 5000mAh, sạc nhanh 100W, sạc không dây 50W",
			"Đặc biệt: Hasselblad Master, IP68, Ceramic guard",
		],
	},

	{
		id: 15,
		name: "OnePlus 12 16GB 512GB",
		brand: "OnePlus",
		category: "smartphone",
		price: 19990000,
		keywords: ["điện thoại", "smartphone", "di động", "phone", "oneplus"],

		images: [
			{
				id: 1,
				url: "/assets/images/123.webp",
				alt: "OnePlus 12 Flowy Emerald",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&crop=top",
				alt: "OnePlus 12 Hasselblad camera",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&crop=bottom",
				alt: "OnePlus 12 màn hình cong",
				isMain: false,
			},
		],

		description:
			"OnePlus 12 với thiết kế Premium, màn hình ProXDR 2K+ siêu sáng 4500 nits và camera Hasselblad thế hệ 4. Chip Snapdragon 8 Gen 3, RAM 16GB LPDDR5X và sạc siêu nhanh 100W.",

		specifications: [
			"Màn hình: 6.82 inch LTPO AMOLED 120Hz ProXDR (4500 nits)",
			"Chip: Snapdragon 8 Gen 3",
			"Camera: 50MP chính LYT-808 + 64MP periscope 3x + 48MP ultra-wide",
			"RAM/ROM: 16GB LPDDR5X/512GB UFS 4.0",
			"Pin: 5400mAh, sạc nhanh SuperVOOC 100W",
			"Đặc biệt: Hasselblad gen 4, Alert Slider, Dolby Atmos",
		],
	},

	// Thêm laptop
	{
		id: 16,
		name: "Dell XPS 15 9530 Intel Core i7-13700H 16GB 512GB RTX 4050",
		brand: "Dell",
		category: "laptop",
		price: 44990000,
		keywords: ["máy tính", "laptop", "máy tính xách tay", "dell"],

		images: [
			{
				id: 1,
				url: "/assets/images/Dell Laptop.webp",
				alt: "Dell XPS 15 Platinum Silver",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=top",
				alt: "Dell XPS 15 màn hình OLED",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=bottom",
				alt: "Dell XPS 15 bàn phím",
				isMain: false,
			},
		],

		description:
			"Dell XPS 15 với màn hình OLED 3.5K 15.6 inch tuyệt đẹp, Intel Core i7-13700H mạnh mẽ và NVIDIA RTX 4050. Thiết kế nhôm CNC cao cấp, bàn phím có đèn nền và touchpad lớn.",

		specifications: [
			"Màn hình: 15.6 inch OLED 3.5K (3456 x 2160) 400 nits",
			"CPU: Intel Core i7-13700H (14-core, 5.0GHz)",
			"GPU: NVIDIA GeForce RTX 4050 6GB",
			"RAM/SSD: 16GB DDR5 + 512GB PCIe 4.0 NVMe",
			"Pin: 86Wh, thời lượng 10-12 giờ",
			"Kết nối: 2x Thunderbolt 4, USB-C 3.2, SD card reader",
		],
	},

	{
		id: 17,
		name: "ASUS ROG Zephyrus G14 AMD Ryzen 9 7940HS 32GB 1TB RTX 4060",
		brand: "ASUS",
		category: "laptop",
		price: 39990000,
		keywords: ["máy tính", "laptop", "máy tính xách tay", "asus", "gaming"],

		images: [
			{
				id: 1,
				url: "/assets/images/Asus Laptop.webp",
				alt: "ASUS ROG Zephyrus G14 Moonlight White",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=top",
				alt: "ROG Zephyrus G14 AniMe Matrix Display",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=bottom",
				alt: "ROG Zephyrus G14 RGB keyboard",
				isMain: false,
			},
		],

		description:
			"ASUS ROG Zephyrus G14 là laptop gaming mỏng nhẹ với AMD Ryzen 9 7940HS và RTX 4060. Màn hình ROG Nebula 14 inch 2.8K 120Hz, AniMe Matrix Display độc đáo và pin 76Wh ấn tượng.",

		specifications: [
			"Màn hình: 14 inch ROG Nebula 2.8K (2880 x 1800) 120Hz 500 nits",
			"CPU: AMD Ryzen 9 7940HS (8-core, 5.2GHz)",
			"GPU: NVIDIA GeForce RTX 4060 8GB",
			"RAM/SSD: 32GB DDR5 + 1TB PCIe 4.0 NVMe",
			"Pin: 76Wh, thời lượng 8-10 giờ",
			"Đặc biệt: AniMe Matrix Display, MUX Switch, Dolby Atmos",
		],
	},

	{
		id: 18,
		name: "Lenovo ThinkPad X1 Carbon Gen 11 Intel Core i7-1355U 16GB 512GB",
		brand: "Lenovo",
		category: "laptop",
		price: 41990000,
		keywords: ["máy tính", "laptop", "máy tính xách tay", "lenovo", "thinkpad"],

		images: [
			{
				id: 1,
				url: "/assets/images/Macbook.webp",
				alt: "Lenovo ThinkPad X1 Carbon Black",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=top",
				alt: "ThinkPad X1 Carbon TrackPoint",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop&crop=bottom",
				alt: "ThinkPad X1 Carbon cổng kết nối",
				isMain: false,
			},
		],

		description:
			"Lenovo ThinkPad X1 Carbon Gen 11 - laptop doanh nhân cao cấp với khung carbon fiber siêu nhẹ 1.12kg. Màn hình 14 inch 2.8K OLED, Intel Core i7 thế hệ 13 và bàn phím ThinkPad huyền thoại.",

		specifications: [
			"Màn hình: 14 inch 2.8K (2880 x 1800) OLED 400 nits",
			"CPU: Intel Core i7-1355U (10-core, 5.0GHz)",
			"RAM/SSD: 16GB LPDDR5 + 512GB PCIe 4.0 NVMe",
			"Pin: 57Wh, thời lượng 12-15 giờ",
			"Bảo mật: IR camera, fingerprint, dTPM 2.0, Kensington lock",
			"Chuẩn quân đội: MIL-STD-810H, Trọng lượng 1.12kg",
		],
	},

	// Thêm desktop
	{
		id: 19,
		name: "HP OMEN 45L Gaming Desktop Intel Core i9-13900K RTX 4080 32GB 2TB",
		brand: "HP",
		category: "desktop",
		price: 69990000,
		keywords: ["máy tính để bàn", "desktop", "pc", "hp", "gaming"],

		images: [
			{
				id: 1,
				url: "/assets/images/PC.webp",
				alt: "HP OMEN 45L Gaming Desktop",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=top",
				alt: "HP OMEN 45L RGB lighting",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=bottom",
				alt: "HP OMEN 45L bên trong",
				isMain: false,
			},
		],

		description:
			"HP OMEN 45L là desktop gaming mạnh mẽ với Intel Core i9-13900K và RTX 4080. Vỏ case kính cường lực với RGB, tản nhiệt nước AIO 360mm và khả năng nâng cấp dễ dàng.",

		specifications: [
			"CPU: Intel Core i9-13900K (24-core, 5.8GHz)",
			"GPU: NVIDIA GeForce RTX 4080 16GB",
			"RAM/Storage: 32GB DDR5 5600MHz + 2TB PCIe Gen 4 SSD",
			"Tản nhiệt: AIO Liquid Cooling 360mm OMEN Cryo Chamber",
			"PSU: 1000W 80+ Gold",
			"Đặc biệt: OMEN Gaming Hub, RGB Lighting, Tool-less design",
		],
	},

	{
		id: 21,
		name: "Dell OptiPlex 7010 Tower Intel Core i7-13700 16GB 512GB",
		brand: "Dell",
		category: "desktop",
		price: 24990000,
		keywords: ["máy tính để bàn", "desktop", "pc", "dell"],

		images: [
			{
				id: 1,
				url: "/assets/images/desktop 2.webp",
				alt: "Dell OptiPlex 7010 Tower",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=top",
				alt: "Dell OptiPlex 7010 cổng kết nối",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=bottom",
				alt: "Dell OptiPlex 7010 thiết kế",
				isMain: false,
			},
		],

		description:
			"Dell OptiPlex 7010 Tower là desktop doanh nghiệp đáng tin cậy với Intel Core i7-13700. Thiết kế nhỏ gọn, tiết kiệm năng lượng, dễ dàng nâng cấp và bảo trì với bảo hành dài hạn.",

		specifications: [
			"CPU: Intel Core i7-13700 (16-core, 5.2GHz)",
			"RAM/Storage: 16GB DDR4 3200MHz + 512GB PCIe NVMe SSD",
			"Cổng kết nối: 6x USB 3.2, 2x USB-C, DisplayPort, HDMI",
			"Mở rộng: 2x PCIe slots, 2x M.2, 1x 3.5 inch drive bay",
			"Bảo mật: TPM 2.0, Kensington lock, Chassis intrusion",
			"Đặc biệt: Intel vPro, Dell Optimizer, 3 năm bảo hành",
		],
	},

	{
		id: 20,
		name: "Intel NUC 13 Extreme Kit (Dragon Canyon) Barebone",
		brand: "Intel",
		category: "desktop",
		price: 29990000,
		keywords: ["máy tính để bàn", "desktop", "pc", "intel", "mini pc"],

		images: [
			{
				id: 1,
				url: "/assets/images/mac mini.webp",
				alt: "Intel NUC 13 Extreme Dragon Canyon",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=top",
				alt: "Intel NUC 13 Extreme bên trong",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&crop=bottom",
				alt: "Intel NUC 13 Extreme kích thước",
				isMain: false,
			},
		],

		description:
			"Intel NUC 13 Extreme Kit Dragon Canyon là barebone mini PC mạnh mẽ trong form factor nhỏ gọn. Thiết kế modular độc đáo hỗ trợ CPU desktop thế hệ 12-13 và GPU full-size lên đến 12 inch. Bộ kit bao gồm NUC Compute Element, case và PSU 750W, sẵn sàng cho bạn tự build hệ thống gaming/workstation trong không gian tối giản.",

		specifications: [
			"Bộ kit: NUC Compute Element + Case + PSU 750W 80+ Gold",
			"Hỗ trợ CPU: Intel Gen 12-13 LGA1700 (CPU không kèm)",
			"Hỗ trợ GPU: Full-size lên đến 12 inch / 305mm (GPU không kèm)",
			"RAM: 2x SO-DIMM DDR4 3200MHz, tối đa 64GB (RAM không kèm)",
			"Storage: 3x M.2 PCIe 4.0 NVMe slots (SSD không kèm)",
			"Kích thước: 357 x 189 x 120mm (13.9L) - Mini PC form factor",
		],
	},

	// Thêm monitor
	{
		id: 21,
		name: "Samsung Odyssey OLED G9 49-inch Curved Gaming Monitor",
		brand: "Samsung",
		category: "monitor",
		price: 44990000,
		keywords: ["màn hình", "monitor", "display", "samsung", "gaming"],

		images: [
			{
				id: 1,
				url: "/assets/images/studio-display-main.webp",
				alt: "Samsung Odyssey OLED G9",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=top",
				alt: "Odyssey OLED G9 curve 1800R",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=bottom",
				alt: "Odyssey OLED G9 RGB CoreSync",
				isMain: false,
			},
		],

		description:
			"Samsung Odyssey OLED G9 là màn hình gaming 49 inch cong 1800R với tấm nền OLED QD. Độ phân giải Dual QHD 240Hz, HDR True Black 400 và thời gian phản hồi 0.03ms cho trải nghiệm gaming đỉnh cao.",

		specifications: [
			"Màn hình: 49 inch Dual QHD (5120 x 1440) OLED Curved 1800R",
			"Tần số quét: 240Hz, 0.03ms (GtG)",
			"HDR: HDR True Black 400, 1,000,000:1 contrast",
			"Công nghệ: AMD FreeSync Premium Pro, G-Sync Compatible",
			"Kết nối: 1x DisplayPort 1.4, 2x HDMI 2.1, USB hub",
			"Đặc biệt: Quantum Dot OLED, CoreSync lighting, KVM switch",
		],
	},

	{
		id: 22,
		name: "LG UltraFine 27-inch 5K2K IPS Monitor 27MD5KL-B",
		brand: "LG",
		category: "monitor",
		price: 32990000,
		keywords: ["màn hình", "monitor", "display", "lg"],

		images: [
			{
				id: 1,
				url: "/assets/images/studio-display-main.webp",
				alt: "LG UltraFine 27 inch 5K",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=top",
				alt: "LG UltraFine thiết kế tối giản",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=bottom",
				alt: "LG UltraFine kết nối Thunderbolt",
				isMain: false,
			},
		],

		description:
			"LG UltraFine 27 inch với độ phân giải 5K2K (5120 x 2880) sắc nét, tấm nền IPS với 99% P3. Thunderbolt 3 tích hợp 85W charging, thiết kế tối giản phù hợp với MacBook.",

		specifications: [
			"Màn hình: 27 inch 5K2K (5120 x 2880) IPS",
			"Độ phủ màu: 99% DCI-P3, 500 nits",
			"Kết nối: Thunderbolt 3 (85W charging), 3x USB-C downstream",
			"Camera: 5MP FaceTime HD camera tích hợp",
			"Âm thanh: Stereo speakers tích hợp",
			"Đặc biệt: Thiết kế cho MacBook, Tilt-adjustable stand",
		],
	},

	{
		id: 23,
		name: "ASUS ProArt PA32UCG 32-inch 4K Mini LED HDR Monitor",
		brand: "ASUS",
		category: "monitor",
		price: 89990000,
		keywords: ["màn hình", "monitor", "display", "asus"],

		images: [
			{
				id: 1,
				url: "/assets/images/asus proart.webp",
				alt: "ASUS ProArt PA32UCG",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=top",
				alt: "ProArt PA32UCG Mini LED",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=bottom",
				alt: "ProArt PA32UCG màu sắc chính xác",
				isMain: false,
			},
		],

		description:
			"ASUS ProArt PA32UCG là màn hình chuyên nghiệp 32 inch 4K với 1152 vùng Mini LED. Đạt chuẩn Dolby Vision HDR 1400, 97% DCI-P3 và calorie hardware tích hợp cho chỉnh màu chính xác tuyệt đối.",

		specifications: [
			"Màn hình: 32 inch 4K UHD (3840 x 2160) IPS Mini LED",
			"HDR: Dolby Vision, HDR 1400 (1,200 nits sustained)",
			"Độ phủ màu: 97% DCI-P3, 99% Adobe RGB, Delta E < 1",
			"Dimming: 1152 local dimming zones, 1,000,000:1 contrast",
			"Kết nối: DisplayPort 1.4, 3x HDMI 2.0, Thunderbolt 3 (65W)",
			"Đặc biệt: Hardware calibration, Calman Ready, X-Rite i1 Display Pro",
		],
	},

	{
		id: 24,
		name: "Dell UltraSharp U2723DE 27-inch QHD IPS Monitor",
		brand: "Dell",
		category: "monitor",
		price: 14990000,
		keywords: ["màn hình", "monitor", "display", "dell"],

		images: [
			{
				id: 1,
				url: "/assets/images/dell monitor.webp",
				alt: "Dell UltraSharp U2723DE",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=top",
				alt: "UltraSharp U2723DE viền mỏng",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&crop=bottom",
				alt: "UltraSharp U2723DE USB-C Hub",
				isMain: false,
			},
		],

		description:
			"Dell UltraSharp U2723DE là màn hình văn phòng 27 inch QHD với tấm nền IPS Black. USB-C hub 90W charging, viền mỏng 4 cạnh, 100% sRGB và ComfortView Plus chống mỏi mắt.",

		specifications: [
			"Màn hình: 27 inch QHD (2560 x 1440) IPS Black",
			"Độ phủ màu: 100% sRGB, 95% DCI-P3, Delta E < 2",
			"Kết nối: USB-C (90W charging), DisplayPort 1.4, HDMI 2.0",
			"USB Hub: 1x USB-C upstream, 4x USB-A downstream, RJ45 Ethernet",
			"Điều chỉnh: Height, tilt, swivel, pivot (90°)",
			"Đặc biệt: ComfortView Plus (TÜV), viền 4 cạnh mỏng, VESA",
		],
	},

	// Thêm accessory
	{
		id: 25,
		name: "Logitech MX Master 3S Wireless Mouse",
		brand: "Logitech",
		category: "accessory",
		price: 2490000,
		keywords: ["chuột", "mouse", "logitech", "phụ kiện"],

		images: [
			{
				id: 1,
				url: "/assets/images/logitech mx mouse.webp",
				alt: "Logitech MX Master 3S Graphite",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=top",
				alt: "MX Master 3S scroll wheel",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=bottom",
				alt: "MX Master 3S ergonomic design",
				isMain: false,
			},
		],

		description:
			"Logitech MX Master 3S là chuột không dây cao cấp với cảm biến 8000 DPI yên tĩnh, MagSpeed scroll wheel và thiết kế ergonomic. Kết nối đến 3 thiết bị, pin 70 ngày và sạc nhanh USB-C.",

		specifications: [
			"Cảm biến: Darkfield 8000 DPI (yên tĩnh 90% hơn)",
			"Kết nối: Bluetooth, Logi Bolt USB receiver (đa thiết bị)",
			"Pin: 70 ngày, sạc USB-C nhanh (3 phút = 3 giờ)",
			"Nút bấm: 7 nút tùy chỉnh, MagSpeed scroll wheel",
			"Tương thích: Windows, macOS, Linux, iPad, Chrome OS",
			"Đặc biệt: Logi Options+ app, Flow cross-computer control",
		],
	},

	{
		id: 26,
		name: "Keychron Q1 Pro QMK Mechanical Keyboard Wireless",
		brand: "Keychron",
		category: "accessory",
		price: 4990000,
		keywords: ["bàn phím", "keyboard", "keychron", "phụ kiện"],

		images: [
			{
				id: 1,
				url: "/assets/images/keychrone q1 mouse.webp",
				alt: "Keychron Q1 Pro Carbon Black",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=top",
				alt: "Keychron Q1 Pro RGB backlight",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop&crop=bottom",
				alt: "Keychron Q1 Pro hot-swappable",
				isMain: false,
			},
		],

		description:
			"Keychron Q1 Pro là bàn phím cơ custom 75% với khung nhôm CNC, QMK/VIA programmable và hot-swappable switch. Kết nối không dây 2.4GHz/Bluetooth, pin 4000mAh và RGB per-key.",

		specifications: [
			"Layout: 75% (82 phím), khung nhôm CNC 6063",
			"Switch: Hot-swappable, Gateron G Pro (Red/Brown/Blue)",
			"Keycaps: Double-shot PBT OSA profile",
			"Kết nối: 2.4GHz wireless, Bluetooth 5.1, USB-C wired",
			"Pin: 4000mAh, 100-300 giờ (tùy backlight)",
			"Đặc biệt: QMK/VIA firmware, South-facing RGB, Poron foam",
		],
	},

	{
		id: 27,
		name: "Anker 737 PowerCore 26K Power Bank 140W PD 3.1",
		brand: "Anker",
		category: "accessory",
		price: 4490000,
		keywords: ["sạc dự phòng", "power bank", "pin dự phòng", "anker", "phụ kiện"],

		images: [
			{
				id: 1,
				url: "/assets/images/apple mouse.webp",
				alt: "Anker 747 PowerCore 26K",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
				alt: "Anker 747 cổng sạc",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
				alt: "Anker 747 màn hình LED",
				isMain: false,
			},
		],

		description:
			"Anker 737 PowerCore 26K với thiết kế tối giản, sang trọng như phụ kiện Apple. Sạc dự phòng 26800mAh công suất 140W PD 3.1 mạnh mẽ, đủ sạc đầy MacBook Pro 16 inch. Màn hình LED tinh tế hiển thị % pin chính xác, hoàn hảo cho người dùng hệ sinh thái Apple và các thiết bị cao cấp khác.",

		specifications: [
			"Dung lượng: 26800mAh (99.16Wh)",
			"Công suất: USB-C1 140W PD 3.1, USB-C2 100W PD, USB-A 18W",
			"Sạc lại: 140W input, đầy 100% trong 43 phút",
			"Bảo vệ: MultiProtect (quá áp, quá nhiệt, ngắn mạch)",
			"Màn hình: Smart LED display hiển thị % pin",
			"Tương thích: MacBook Pro, iPad Pro, iPhone, Samsung, Switch",
		],
	},

	{
		id: 28,
		name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
		brand: "Razer",
		category: "accessory",
		price: 3290000,
		keywords: ["chuột", "mouse", "razer", "gaming", "phụ kiện"],

		images: [
			{
				id: 1,
				url: "/assets/images/Razer mouse.webp",
				alt: "Razer DeathAdder V3 Pro Black",
				isMain: true,
			},
			{
				id: 2,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=top",
				alt: "DeathAdder V3 Pro ergonomic",
				isMain: false,
			},
			{
				id: 3,
				url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=600&fit=crop&crop=bottom",
				alt: "DeathAdder V3 Pro Focus Pro sensor",
				isMain: false,
			},
		],

		description:
			"Razer DeathAdder V3 Pro là chuột gaming không dây nhẹ 63g với cảm biến Focus Pro 30K DPI. Razer HyperSpeed Wireless, switch quang Gen-3 Optical, pin 90 giờ và thiết kế ergonomic huyền thoại.",

		specifications: [
			"Cảm biến: Focus Pro 30K DPI (750 IPS, 70g acceleration)",
			"Kết nối: Razer HyperSpeed Wireless 2.4GHz, Bluetooth, USB-C wired",
			"Switch: Gen-3 Razer Optical (90 triệu clicks)",
			"Pin: 90 giờ (2.4GHz), sạc USB-C nhanh",
			"Trọng lượng: 63g (siêu nhẹ)",
			"Đặc biệt: Razer Synapse 3, On-board memory, Ergonomic right-hand",
		],
	},
];
