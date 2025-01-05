import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let savedCart = [];
let user = '';
let userId = '';

if (typeof window !== 'undefined') {
    // Đọc giỏ hàng từ localStorage
    savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    user = localStorage.getItem("user") || ''; // Lấy user từ localStorage
    userId = user ? JSON.parse(user)._id : ''; // Giả sử user có thuộc tính id chứa userId
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: savedCart,
        userId: userId,
        // ...other initial state properties
    },
    reducers: {
        setCart: (state, action) => {
            state.items = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem("cart", JSON.stringify(state.items)); // Cập nhật localStorage
            }
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
            if (typeof window !== 'undefined') {
                localStorage.setItem("cart", JSON.stringify(state.items)); // Cập nhật localStorage
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.productId !== action.payload);
            if (typeof window !== 'undefined') {
                localStorage.setItem("cart", JSON.stringify(state.items)); // Cập nhật localStorage
            }
        },
        clearCart: (state) => {
            state.items = [];
            if (typeof window !== 'undefined') {
                localStorage.setItem("cart", JSON.stringify(state.items)); // Xóa localStorage
            }
        },
    },
});


// Thêm các action để gọi API
export const fetchCart = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`https://be-camping-gear.vercel.app/cart/${userId}`);
        const data = response.data.result;
        const filterProduct = data.map((item, index) => {
            return { ...item.productId, qty: item.quantity }
        });
        console.log(filterProduct, "FilterProduct");
        dispatch(setCart(filterProduct));
    } catch (error) {
        console.error("Lỗi khi lấy giỏ hàng từ backend:", error);
    }
};

export const addToCartAPI = (userId, productId, quantity) => async (dispatch) => {
    try {
        const response = await axios.post("https://be-camping-gear.vercel.app/cart/create", {
            userId,
            productId,
            qty: quantity,
        });
        if (response && response.status === 200) {
            dispatch(fetchCart(userId));
            alert("Thêm sản phẩm thành công");
        }
    } catch (error) {
        console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
};

export const removeFromCartAPI = (productId) => async (dispatch) => {
    try {
        const response = await axios.delete(`https://be-camping-gear.vercel.app/cart/delete/${productId}`, {
            data: { userId: userId }, // Sử dụng userID từ localStorage
        });
        dispatch(fetchCart(userId));
    } catch (error) {
        console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
    }
};

export const { setCart, addToCart, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice;
