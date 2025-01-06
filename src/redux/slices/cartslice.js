import ENV_VARS from "@/config";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let savedCart = [];
let user = '';
let userId = '';

if (typeof window !== 'undefined') {
    try {
        const cartData = localStorage.getItem("cart");
        savedCart = cartData ? JSON.parse(cartData) : [];
        if (!Array.isArray(savedCart)) savedCart = [];
    } catch (e) {
        console.error("Error loading cart from localStorage:", e);
        savedCart = [];
    }
    user = localStorage.getItem("user") || ''; // Lấy user từ localStorage
    console.error("User", user);
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
                localStorage.setItem("cart", JSON.stringify(action.payload));
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
        setUserId: (state, action) => {
            state.userId = action.payload; // Cập nhật userId
        },
    },
});


// Thêm các action để gọi API
export const fetchCart = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`${ENV_VARS.NEXT_PUBLIC_URL}/cart/${userId}`);
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
        const response = await axios.post(`${ENV_VARS.NEXT_PUBLIC_URL}/cart/create`, {
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

export const removeFromCartAPI = (productId) => async (dispatch, getState) => {
    const userId = getState().cart.userId;
    try {
        const response = await axios.delete(`${ENV_VARS.NEXT_PUBLIC_URL}/cart/delete/${productId}`, {
            data: { userId: userId }, // Sử dụng userID từ state
        });
        dispatch(fetchCart(userId));
    } catch (error) {
        console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
    }
};

export const signOutUser = () => async (dispatch, getState) => {
    const userId = getState().cart.userId;
    try {
        const response = await axios.post(`${ENV_VARS.NEXT_PUBLIC_URL}/auth/signout`, {
            data: { userId: userId },
        });
        if (response && response.status === 200) {
            dispatch(clearCart());
            alert("Đăng xuất thành công");
        }
    } catch (error) {
        console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
    }
};

export const { setCart, addToCart, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice;