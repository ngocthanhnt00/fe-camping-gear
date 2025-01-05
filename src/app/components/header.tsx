"use client";
import Link from "next/link";
import { useContext } from "react";
import { SearchContext } from "./searchContext";
import { useRouter } from "next/navigation";
import { useAuth } from "./authContext";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartCount = cartItems.reduce(
    (count: any, item: any) => count + Number(item.quantity),
    0
  );
  const { keyword, setKeyword } = useContext(SearchContext);
  const { user } = useAuth();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn hành động mặc định của form
    if (keyword.trim() !== "") {
      // Chuyển hướng đến trang tìm kiếm
      router.push(`/timkiem?keyword=${encodeURIComponent(keyword)}`);
    }
  };
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
                src="https://be-camping-gear.vercel.app/images/logo.webp"
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
                  name=""
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
                  src="https://be-camping-gear.vercel.app/images/iconBlog.webp"
                  alt="Blog"
                />
                <span>Blog</span>
              </Link>
              <Link href="./src/sale.html" className="blog" title="Khuyến mãi">
                <img
                  src="https://be-camping-gear.vercel.app/images/give.webp"
                  alt="Khuyến mãi"
                />
                <span>Khuyến mãi</span>
              </Link>
              <Link
                data-cart-counter={cartItems.length}
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
                <Link href="/info" title="Hồ sơ cá nhân">
                  <img
                    src={user.avatar || "https://via.placeholder.com/50"}
                    alt="Avatar"
                    className="avatar"
                  />
                  <span>{user.displayname || "Tài khoản"}</span>
                </Link>
              ) : (
                <Link href="/login" className="blog" title="Đăng nhập">
                  <img
                    src="https://theme.hstatic.net/200000467803/1000988268/14/icon-user.svg?v=774"
                    alt="Đăng nhập"
                  />
                  <span style={{ color: "#51b848" }}>Đăng nhập</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
