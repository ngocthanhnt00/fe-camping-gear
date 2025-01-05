import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div id="store-bg">
        <div className="product-super-list wide">
          <div className="view-store wide">Xem Cửa Hàng</div>
          <div className="head">
            <div className="store-list">
              <div className="store-item">
                <Link href="">
                  <img
                    src="https://be-camping-gear.vercel.app/images/cuahang1.jpg"
                    alt="FanFan Tân Sơn Nhất"
                  />
                  <div className="title-store">
                    <span>FanFan Tân Sơn Nhất</span>
                  </div>
                </Link>
                <div className="store-info">
                  <p>33/1 Trường Sơn, P.4, Quận Tân Bình, HCM</p>
                  <p>Tel: 0776.731.741</p>
                </div>
              </div>
              <div className="store-item">
                <Link href="">
                  <img
                    src="https://be-camping-gear.vercel.app/images/cuahang2.webp"
                    alt="FanFan Quận 1"
                  />
                  <div className="title-store">
                    <span>FanFan Quận 1</span>
                  </div>
                </Link>
                <div className="store-info">
                  <p>61/4 Cô Giang, P. Cầu Ông Lãnh Quận 1, HCM</p>
                  <p>Tel: 093.7899.130</p>
                </div>
              </div>
              <div className="store-item">
                <Link href="">
                  <img
                    src="https://be-camping-gear.vercel.app/images/cuahang3.jpg"
                    alt="FanFan Hà Nội"
                  />
                  <div className="title-store">
                    <span>FanFan Hà Nội</span>
                  </div>
                </Link>
                <div className="store-info">
                  <p>76 Nguyễn Chí Thanh, phường Láng Thượng, Đống Đa, HN</p>
                  <p>Tel: 0898.999.130</p>
                </div>
              </div>
            </div>
          </div>

          <div className="support">
            <div className="list-support">
              <div className="support-item">
                <h4 className="introduce">Giới thiệu</h4>
                <div className="support-desc">
                  <p>Giới thiệu về FanFan</p>
                  <p>Tuyển dụng</p>
                  <p>Quảng cáo trên Facebook</p>
                  <p>Tải ứng dụng</p>
                </div>
              </div>
              <div className="support-item">
                <h4 className="introduce">Những thông tin cần biết</h4>
                <div className="support-desc">
                  <p>Điều kiện và điều khoản</p>
                  <p>Bảo mật và thông tin</p>
                  <p className="address">
                    Công ty TNHH MTV Fan Fan
                    <br />
                    Trụ sở chính: 61/4 Cô Giang, P.Cầu Ông Lãnh, Quận 1, Tp.HCM,
                    Việt Nam.
                    <br />
                    MST: 0312909231
                    <br />
                    Ngày ĐKKD: 29/08/2014 tại Sở KH&ĐT Tp.HCM.
                    <br />
                    +84 988 999 130 - info@fanfan.vn
                  </p>
                </div>
              </div>
              <div className="support-item">
                <h4 className="introduce">Hỗ trợ</h4>
                <div className="support-desc">
                  <p>Hướng dẫn đăng kí, đăng nhập</p>
                  <p>Hướng dẫn thanh toán</p>
                  <p>Chính sách bảo hành và đổi trả</p>
                  <p>Ưu đãi cho thành viên</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="social-copyright">
              <div className="contact-app">
                <i
                  style={{ color: "#ffffff" }}
                  className="fa-brands fa-tiktok"
                ></i>
              </div>
              <div className="contact-app">
                <i
                  style={{ color: "#ffffff" }}
                  className="fa-brands fa-twitter"
                ></i>
              </div>
              <div className="contact-app">
                <i
                  style={{ color: "#ffffff" }}
                  className="fa-brands fa-facebook"
                ></i>
              </div>
              <div className="contact-app">
                <i
                  style={{ color: "#ffffff" }}
                  className="fa-brands fa-instagram"
                ></i>
              </div>
              <div className="contact-app">
                <i
                  style={{ color: "#ffffff" }}
                  className="fa-brands fa-youtube"
                ></i>
              </div>
              <p className="footer-copyright">&copy; 2023 FanFan, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
