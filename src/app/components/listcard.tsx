import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAPI } from "../../redux/slices/cartslice";
import ENV_VARS from "@/config";
import { useEffect, useState, useRef } from "react";

export default function ListCard(props: {
  title: string;
  products: any[];
  id: number | string;
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.cart.userId);
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!isAnimating && containerRef.current) {
      const itemWidth = containerRef.current.offsetWidth / 4;
      const maxScroll = -(props.products.length * itemWidth - containerRef.current.offsetWidth);

      setIsAnimating(true);
      const newPosition = Math.max(position - itemWidth, maxScroll);
      setPosition(newPosition);

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const itemWidth = containerRef.current?.offsetWidth ? containerRef.current.offsetWidth / 4 : 0;
      const newPosition = Math.min(position + itemWidth, 0);
      setPosition(newPosition);

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleAddToCart = (productId: any, quantity: any) => {
    if (!userId) {
      window.location.href = "/login";
      return;
    }
    dispatch(addToCartAPI(userId, productId, quantity) as any);
  };

  // Lấy sản phẩm cho trang hiện tại


  return (
    <div className="main-content">
      <div className="product-super-list wide">
        <div className="view-heading-recently wide">{props.title}</div>
        <div className={`cart${props.id}`}>
          <div
            ref={containerRef}
            className={`list-products${props.id}`}
            style={{
              transform: `translateX(${position}px)`,
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            {props.products.map((product, index) => (
              <div className={`product${props.id}`} key={index}>
                <Link href={`/chitiet/${product._id}`}>
                  <div className="image-product">
                    <img
                      src={`${ENV_VARS.NEXT_PUBLIC_URL}/images/${product.img}`}
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
                        className={`fa-star ${starIndex < product.star ? "fa-solid" : "fa-regular"
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
          <button
            className="prev3"
            onClick={handlePrev}
            disabled={position >= 0}
          >
            &lt;
          </button>
          <button
            className="next3"
            onClick={handleNext}
            disabled={Boolean(containerRef.current && position <= -(props.products.length * (containerRef.current.offsetWidth / 4) - containerRef.current.offsetWidth))}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
