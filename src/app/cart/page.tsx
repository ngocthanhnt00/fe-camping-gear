"use client";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeProduct,
//   clearProduct,
// } from "@/redux/slices/cartslice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartAPI } from "@/redux/slices/cartslice";
import ENV_VARS from "@/config.js";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalPrice = cartItems.reduce((acc: any, curr: any) => {
    return (acc += curr.qty * curr.priceNew);
  }, 0);

  return (
    <div className="container mx-auto py-28 px-2">
      <h1 className="text-3xl text-gray-800 mb-6 text-left font-semibold">
        Giỏ Hàng
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Danh sách sản phẩm */}
        <div className="col-span-2 bg-white shadow-lg rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Sản phẩm</h2>
            <button
              className="text-red-500 font-medium hover:underline"
              onClick={() => dispatch}
            >
              Xoá tất cả
            </button>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((item: any, index: any) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 py-4"
              >
                {/* Thông tin sản phẩm */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 mr-4 text-green-500 border-gray-300 rounded"
                  />
                  <img
                    src={`${ENV_VARS.NEXT_PUBLIC_URL}/images/${item.img}`}
                    alt="Sản phẩm"
                    className="w-20 h-20 rounded-lg object-cover border"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                      {item._id}
                    </h2>
                    <p className="text-sm text-gray-500">Màu sắc: Army green</p>
                    <p className="text-green-600 font-bold">{item.priceNew}₫</p>
                  </div>
                </div>
                {/* Bộ chọn số lượng */}
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 flex justify-center items-center">
                    −
                  </button>
                  <input
                    type="text"
                    value={item.qty}
                    readOnly
                    className="w-10 text-center text-gray-800 border border-gray-300 rounded"
                  />
                  <button className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 flex justify-center items-center">
                    +
                  </button>
                </div>
                {/* Nút xóa */}
                <button
                  className="text-gray-400 hover:text-red-500 text-xl"
                  onClick={() => dispatch(removeFromCartAPI(item._id) as any)}
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Không có sản phẩm trong giỏ hàng
            </p>
          )}
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
            🧾 Tóm tắt đơn hàng
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Tạm tính</p>
              <p className="font-semibold text-gray-700">
                {totalPrice.toLocaleString("vi-VN")}₫
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Ưu đãi giảm giá</p>
              <p className="font-semibold text-red-500">0₫</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="font-bold text-gray-800">Thành tiền</p>
              <p className="font-bold text-green-600">
                {totalPrice.toLocaleString("vi-VN")}₫
              </p>
            </div>
          </div>
          <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-green-600">
            ĐẶT HÀNG
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            Chấp nhận thanh toán qua
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <img
              src="https://via.placeholder.com/40x25"
              alt="Visa"
              className="w-12"
            />
            <img
              src="https://via.placeholder.com/40x25"
              alt="MasterCard"
              className="w-12"
            />
            <img
              src="https://via.placeholder.com/40x25"
              alt="COD"
              className="w-12"
            />
            <img
              src="https://via.placeholder.com/40x25"
              alt="Internet Banking"
              className="w-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
