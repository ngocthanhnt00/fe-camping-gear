"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "./searchContext";
import { useRouter } from "next/navigation";
import { useAuth } from "./authContext";
import { useDispatch, useSelector } from "react-redux";
import ENV_VARS from "@/config";
import { signOutUser } from "@/redux/slices/cartslice";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items) || []; // ✅ Đảm bảo giá trị mặc định là []
  const [cartCount, setCartCount] = useState(0); // ✅ Dùng useState để xử lý hydration error

  useEffect(() => {
    const total = cartItems.reduce(
      (count: number, item: any) => count + (Number(item?.qty) || 0), // ✅ Kiểm tra `item?.qty`
      0
    );
    setCartCount(total);
  }, [cartItems]);

  // console.error(cartCount, "cartCounts");

  const { keyword, setKeyword } = useContext(SearchContext);
  const { user } = useAuth();
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim() !== "") {
      router.push(`/timkiem?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  const logout = () => {
    dispatch(signOutUser() as any);
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  return (
    <header>
      <div className="top">
        <ul className="requiment wide">
          <li>
            <Link href="/tuyendung" title="Tuyển dụng">
              Tuyển dụng
            </Link>
          </li>
          <li>
            <Link href="/lienhe" title="Liên hệ">
              Liên hệ
            </Link>
          </li>
          <li>
            <div className="language">
              <select name="" id="options">
                <option>Chọn ngôn ngữ</option>
                <option value="">Việt Nam</option>
                <option value="">English</option>
                <option value="">Tiếng Trung</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className="bottom-list">
        <div className="bottom wide">
          <div className="logo">
            <Link href="/" title="FanFan" id="logoImage">
              <img
                src={`${ENV_VARS.NEXT_PUBLIC_URL}/images/logo.webp`}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="item-header">
            <form onSubmit={handleSearch}>
              <div className="search-input">
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  autoComplete="off"
                  type="text"
                  id="search-products"
                  placeholder="Tìm kiếm"
                />
                <button type="submit">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "#000000ce" }}
                  ></i>
                </button>
                <div className="search-input-product wide">
                  <div className="smart-wrapper-search">
                    <div className="search-left"></div>
                    <div className="search-right">
                      <h4>Sản phẩm bạn tìm hiện không tìm thấy</h4>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="right-header">
              <Link href="#" className="blog" title="Blog">
                <img
                  src={`${ENV_VARS.NEXT_PUBLIC_URL}/images/iconBlog.webp`}
                  alt="Blog"
                />
                <span>Blog</span>
              </Link>
              <Link href="./src/sale.html" className="blog" title="Khuyến mãi">
                <img
                  src={`${ENV_VARS.NEXT_PUBLIC_URL}/images/give.webp`}
                  alt="Khuyến mãi"
                />
                <span>Khuyến mãi</span>
              </Link>
              <Link
                data-cart-counter={cartCount}
                href="/cart"
                className="blog cart"
                title="Giỏ hàng"
              >
                <img
                  src="https://theme.hstatic.net/200000467803/1000988268/14/icon-cart.svg?v=435"
                  alt="Giỏ hàng"
                />
                <span>Giỏ hàng</span>
              </Link>
              {user ? (
                <div
                  className="relative flex justify-center items-center user-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={user.avatar || "https://via.placeholder.com/50"}
                    alt="Avatar"
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <span className="ml-2 font-medium text-black">
                    {user.displayname || "Tài khoản"}
                  </span>
                  {isDropdownVisible && (
                    <div className="absolute top-0 right-0 mt-6 w-48 rounded-md bg-white shadow-lg">
                      <Link
                        href="/info"
                        title="Hồ sơ cá nhân"
                        className="block text-sm px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                      >
                        Thông tin cá nhân
                      </Link>
                      <button
                        onClick={logout}
                        className="block text-sm w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login" className="blog" title="Đăng nhập">
                  <img
                    src="https://theme.hstatic.net/200000467803/1000988268/14/icon-user.svg?v=774"
                    alt="Đăng nhập"
                    className="h-10 w-10"
                  />
                  <span className="ml-2 font-medium text-[#51b848]">
                    Đăng nhập
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
