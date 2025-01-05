import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartslice.js"

// Tạo store bằng hàm configureStore
export const store = configureStore({
    reducer: {
        // Thêm reducer cart vào store
        cart: cartSlice.reducer
    }
})