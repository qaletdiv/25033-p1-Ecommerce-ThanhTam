import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		host: "localhost",
		port: 5173,
	},
	build: {
		cssCodeSplit: true,
		minify: "esbuild",
		sourcemap: false,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				login: resolve(__dirname, "login.html"),
				signup: resolve(__dirname, "signup.html"),
				collection: resolve(__dirname, "collection.html"),
				products: resolve(__dirname, "products-list.html"),
				cart: resolve(__dirname, "cart.html"),
				productDetails: resolve(__dirname, "product-details.html"),
				orderConfirmation: resolve(__dirname, "order-summary.html"),
				account: resolve(__dirname, "account.html"),
			},
			output: {
				manualChunks: {
					shared: ["./src/js/data/storageService.js"],
					data: ["./src/js/data/mockData.js"],
					provinces: ["vietnam-provinces-js"],
				},
			},
		},
	},
});
