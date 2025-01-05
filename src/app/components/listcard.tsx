import Link from "next/link";

import { useDispatch } from "react-redux"; // Thêm import useDispatch
import { addToCartAPI } from "../../redux/slices/cartslice"; // Thêm import addToCartAPI

export default function ListCard(props: {
  title: string;
  products: any[];
  id: number | string;
}) {
  const dispatch = useDispatch(); // Khởi tạo dispatch

  const handleAddToCart = (productId: any, quantity: any) => {
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user)._id : "";
    dispatch(addToCartAPI(userId, productId, quantity) as any); // Gọi action thêm sản phẩm vào giỏ hàng
  };

  return (
    <div className="main-content">
      <div className="product-super-list wide">
        <div className="view-heading-recently wide">{props.title}</div>
        <div className={`cart${props.id}`}>
          <div className={`list-products${props.id}`}>
            {props.products.map((product, index) => (
              <div className={`product${props.id}`}>
                <Link href={`/chitiet/${product._id}`} key={index}>
                  <div className="image-product">
                    <img
                      src={`https://be-camping-gear.vercel.app/images/${product.img}`}
                      alt={product.name}
                    />
                  </div>
                </Link>
                <div className="product-info" data-id={product._id}>
                  <div className={`btn-add flex`}>
                    <button
                      className="addCart"
                      onClick={() => handleAddToCart(product._id, 1)}
                    >
                      <i
                        className="fa-solid fa-cart-shopping fa-lg"
                        style={{ color: "#fff" }}
                      ></i>
                    </button>
                    <button className="pretty">
                      <i
                        className="fa-solid fa-heart fa-lg"
                        style={{ color: "#fff" }}
                      ></i>
                    </button>
                    <button className="options">
                      <i
                        className="fa-solid fa-gear fa-lg"
                        style={{ color: "#fff" }}
                      ></i>
                    </button>
                  </div>
                  <div className="product-vendor text-center">
                    <span>
                      <Link href="">{product.vendor}</Link>
                    </span>
                  </div>
                  <div className="product-name text-center">
                    <h3 className="cart-title">
                      <Link href="#">{product.name}</Link>
                    </h3>
                  </div>
                  <div className="stars text-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <i
                        className={`fa-star ${
                          starIndex < product.star ? "fa-solid" : "fa-regular"
                        }`}
                        style={{
                          color: starIndex < product.star ? "#50c252" : "#ccc",
                        }}
                        key={starIndex}
                      ></i>
                    ))}
                  </div>
                  <div className="price">
                    {parseFloat(product.priceNew) == 0 ? (
                      <>
                        <div className="price-new">
                          {product.priceOld.toLocaleString("vi-VN")}đ
                        </div>
                        <div className="price-old none">
                          {product.priceOld.toLocaleString("vi-VN")}đ
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="price-new">
                          {product.priceNew.toLocaleString("vi-VN")}đ
                        </div>
                        <div className="price-old">
                          {product.priceOld.toLocaleString("vi-VN")}đ
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`button-prod ${props.id == "" ? "none" : ""}`}>
          <button className={`next3 ${props.id == "" ? "none" : ""}`}>
            &gt;
          </button>
          <button className="prev3">&lt;</button>
        </div>
      </div>
    </div>
  );
}
