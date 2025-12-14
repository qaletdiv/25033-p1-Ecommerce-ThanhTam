import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    css: {
        devSourcemap: true,
    },

    server: {
        host: "localhost",
        port: 5173,
    },

    build: {
        cssCodeSplit: true,
        minify: "esbuild",
        cssMinify: false,

        target: ["es2022", "chrome89", "edge89", "firefox89", "safari15"],

        sourcemap: process.env.NODE_ENV === "production" ? "hidden" : true,

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

                // Organize CSS assets in separate directory
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith(".css")) {
                        return "assets/css/[name]-[hash][extname]";
                    }
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
});
