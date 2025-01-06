"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import "./detail.css";
import Link from "next/link";
import ENV_VARS from "@/config";
export default function DetailPage() {
  const params = useParams();
  const images = [
    "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832.jpg",
    "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558.jpg",
    "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557.jpg",
    "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5.jpg",
    // Add more image URLs as needed
  ];
  // const products = [
  //   {
  //     id: "am-dun-nuoc-da-ngoai-naturehike-nh17c020-h",
  //     image:
  //       "https://product.hstatic.net/200000467803/product/fanfan-am-dun-nuoc-da-ngoai-naturehike-20_0063489_36cfa5aefee54b4fb811f1fc0622ee6c_large.jpeg",
  //     alt: "Ấm đun nước dã ngoại Naturehike NH17C020-H",
  //     name: "Ấm đun nước dã ngoại Naturehike NH17C020-H",
  //     price: "294,300₫ - 359,100₫",
  //     oldPrice: "327,000₫",
  //     vendor: "NATUREHIKE",
  //   },
  //   {
  //     id: "ao-ghi-le-da-ngoai-naturehike-nh20fs007",
  //     image:
  //       "https://product.hstatic.net/200000467803/product/nfan-ao-ghi-le-da-ngoai-naturehike-nh20fs007-20-gi1sblt2rukdsh0ynavyga_9af78e4899ee403aae33657f1cf44896_large.png",
  //     alt: "Áo ghi lê dã ngoại Naturehike NH20FS007",
  //     name: "Áo ghi lê dã ngoại Naturehike NH20FS007",
  //     price: "898,200₫",
  //     oldPrice: "998,000₫",
  //     vendor: "NATUREHIKE",
  //   },
  //   {
  //     id: "ao-giu-nhiet-body-nam-q-a9-naturehike-nh19fs024",
  //     image:
  //       "https://product.hstatic.net/200000467803/product/giu-nhiet-body-nam-q-a9-naturehike-nh19fs024-10_9oviw4fhv0iuj00isuawvq_58a8d3bfe1d2437a982d81a5542b5bc8_large.png",
  //     alt: "Áo giữ nhiệt body nam Q-A9 Naturehike NH19FS024",
  //     name: "Áo giữ nhiệt body nam Q-A9 Naturehike NH19FS024",
  //     price: "323,100₫",
  //     oldPrice: "359,000₫",
  //     vendor: "NATUREHIKE",
  //   },
  //   // Add more products as needed
  // ];
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${ENV_VARS.NEXT_PUBLIC_URL}/products/${params.id}`,
    fetcher,
    {
      refreshInterval: 6000,
    }
  );
  if (error) {
    return <div>Lỗi load dữ liệu</div>;
  }
  if (!data) return <div>Đang tải...</div>;
  const product = data.result;
  return (
    <>
      <div className="wrapper">
        <div id="page-wrap">
          <div className="breadcrumb-bg hidden-xs">
            <div className="container">
              <div className="wrapper-breadcrum">
                <ol
                  className="breadcrumb breadcrumb-arrow"
                  itemType="http://schema.org/BreadcrumbList"
                >
                  <li
                    itemProp="itemListElement"
                    itemType="http://schema.org/ListItem"
                  >
                    <Link href={""} target="_self" itemProp="item">
                      <span itemProp="name">Trang chủ</span>
                      <meta itemProp="position" content="1" />
                    </Link>
                  </li>
                  <li
                    itemProp="itemListElement"
                    itemType="http://schema.org/ListItem"
                  >
                    <Link href={""} target="_self" itemProp="item">
                      <span itemProp="name">{product.brand}</span>
                      <meta itemProp="position" content="2" />
                    </Link>
                  </li>
                  <li
                    itemProp="itemListElement"
                    itemType="http://schema.org/ListItem"
                    className="active"
                  >
                    <Link href={""} itemProp="item">
                      <span itemProp="name">{product.name}</span>
                      <meta itemProp="position" content="3" />
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <main id="product">
            <div className="container">
              <div className="products flex-box flex-w">
                <div className="product-img-left">
                  <div className="hidden-xs">
                    <div
                      id="sliderproduct"
                      className="owl-carousel owl-loaded owl-drag"
                    >
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            width: "7500px",
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all",
                          }}
                        >
                          <div
                            className="owl-item active"
                            style={{ width: "500px" }}
                          >
                            <Link
                              className="items"
                              data-index={0}
                              href={""}
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src={`${ENV_VARS.NEXT_PUBLIC_URL}/images/${product.img}`}
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={1}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={2}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={3}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={4}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={5}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={6}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={7}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={8}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={9}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={10}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={11}
                              href={
                                "https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a.jpg"
                              }
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={12}
                              href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582.jpg"
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={13}
                              href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce.jpg"
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                          <div className="owl-item" style={{ width: "500px" }}>
                            <Link
                              className="items"
                              data-index={14}
                              href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987.jpg"
                              data-fancybox="home-gallery-images"
                              rel="fancybox-button"
                            >
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_1024x1024.jpg"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <button
                          type="button"
                          role="presentation"
                          className="owl-prev"
                        >
                          <i className="fa fa-angle-left" />
                        </button>
                        <button
                          type="button"
                          role="presentation"
                          className="owl-next"
                        >
                          <i className="fa fa-angle-right" />
                        </button>
                      </div>
                      <div className="owl-dots">
                        <button role="button" className="owl-dot active">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                        <button role="button" className="owl-dot">
                          <span />
                        </button>
                      </div>
                    </div>
                    <div
                      id="sliderproduct-sync"
                      className="owl-carousel my-btn owl-loaded owl-drag"
                    >
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            width: "1947px",
                            paddingLeft: "30px",
                            paddingRight: "30px",
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all",
                          }}
                        >
                          <div
                            className="owl-item current active"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item active"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item active"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item active"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_large.jpg"
                              />
                            </div>
                          </div>
                          <div
                            className="owl-item"
                            style={{ width: "101.75px", marginRight: "24px" }}
                          >
                            <div className="items">
                              <img
                                alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_large.jpg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav">
                        <button
                          type="button"
                          role="presentation"
                          className="owl-prev disabled"
                        >
                          <i className="fa fa-angle-left" />
                        </button>
                        <button
                          type="button"
                          role="presentation"
                          className="owl-next"
                        >
                          <i className="fa fa-angle-right" />
                        </button>
                      </div>
                      <div className="owl-dots disabled" />
                    </div>
                  </div>
                  <div className="product-tab-list flex-box">
                    <span className="active" data-id="#product-des">
                      Mô tả sản phẩm
                    </span>
                    <span data-id="#product-tab-1">Thông số kỹ thuật</span>
                    <span data-id="#pro-review">Đánh giá của khách hàng</span>
                  </div>
                  <div
                    className="product-des-box pd-top cut_tab"
                    id="product-des"
                  >
                    <div className="content">
                      <div className="content-full">
                        <p style={{ textAlign: "justify" }}>
                          <strong>Ba lô xếp gọn 18L NH17A012-B</strong> với kích
                          thước xếp gọn nằm trong lòng bàn tay, nằm gọn 1 góc
                          trong hành lý và đồng hành cùng bạn đến bất kỳ đâu.
                          Đây là một gợi ý hoàn hảo khi bạn đang tìm 1 chiếc
                          balo nhỏ để mang đồ khi đi tham quan, du lịch, nhưng
                          ngại mang theo quá nhiều balo, vali,... - Balo xếp gọn
                          sẽ nằm gọn trong hành lý và xuất hiện lúc bạn cần.
                          Thích hợp sử dụng khi đi du lịch, dã ngoại, đi công
                          tác, sử dụng hằng ngày, hay để trong cốp xe và sử dụng
                          ngay khi cần.
                        </p>
                        <p style={{ textAlign: "center" }}>
                          <img src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_grande.jpg" />
                        </p>
                        <p style={{ textAlign: "center" }}>
                          <em>Balo du lịch nhỏ - gọn - nhẹ</em>
                        </p>
                        <p style={{ textAlign: "center" }}>
                          <img src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_grande.jpg" />
                        </p>
                        <p style={{ textAlign: "center" }}>
                          <em>
                            Không gian chứa đồ phù hợp cho các hoạt động du
                            lịch, công tác hay sử dụng hằng ngày
                          </em>
                        </p>
                        <div style={{ textAlign: "justify" }}>
                          Chiếc balo xếp nhỏ gọn thiết kế với đầy đủ các ngăn,
                          có ngăn chứa chai nước và các ngăn nhỏ để sắp xếp đồ
                          bên trong. Ba lô sử dụng chất liệu vải 30D&nbsp;với
                          khả năng kháng nước, có thể sử dụng balo dưới thời
                          tiết ẩm ướt, mưa nhỏ, nếu mưa lớn nước có thể ngấm qua
                          đường may (Chỉ nên sử dụng với thời gian ngắn) hoặc sử
                          dụng các biện pháp chống nước khác như là áo mưa cho
                          balo.
                        </div>
                        <div style={{ textAlign: "justify" }}>&nbsp;</div>
                        <div style={{ textAlign: "center" }}>
                          <img src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_grande.jpg" />
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <em>
                            Balo kháng nước sử dụng dưới thời tiết mưa nhỏ
                          </em>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <img src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_grande.jpg" />
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <em>Quai đeo thoáng khí, chắc chắn</em>
                        </div>
                        <div style={{ textAlign: "justify" }}>
                          Thông số sản phẩm:
                        </div>
                        <ul>
                          <li style={{ textAlign: "justify" }}>
                            Chất liệu: Vải Nylon 30D
                          </li>
                          <li style={{ textAlign: "justify" }}>
                            Thể tích: 18L
                          </li>
                          <li style={{ textAlign: "justify" }}>
                            Kích thước sử dụng: ~ 23 x 17 x 42 cm
                          </li>
                          <li style={{ textAlign: "justify" }}>
                            Kích thước xếp gọn: ~ 7 x 5 x 12 cm
                          </li>
                          <li style={{ textAlign: "justify" }}>
                            Khối lượng: 120g
                          </li>
                          <li style={{ textAlign: "justify" }}>
                            Bảo hành: Tham khảo&nbsp;
                            <u>
                              <strong>
                                <Link href="https://fanfan.vn/pages/chinh-sach-bao-hanh-naturehike">
                                  <span style={{ color: "#3498db" }}>
                                    Chính sách bảo hành Naturehike
                                  </span>
                                </Link>
                              </strong>
                            </u>
                          </li>
                          <li style={{ textAlign: "justify" }}>
                            Xuất xứ: China
                          </li>
                        </ul>
                        <div style={{ textAlign: "center" }}>
                          <p style={{ textAlign: "center" }}>&nbsp;</p>
                          <p style={{ textAlign: "center" }}>
                            <img src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_grande.jpg" />
                          </p>
                          <p style={{ textAlign: "center" }}>
                            <strong>HƯỚNG DẪN GẤP BALO</strong>
                          </p>
                          <p style={{ textAlign: "center" }}>
                            <img src="//product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_grande.jpg" />
                          </p>
                          <p style={{ textAlign: "center" }}>&nbsp;</p>
                          <p style={{ textAlign: "center" }}>&nbsp;</p>
                          <p style={{ textAlign: "center" }}>&nbsp;</p>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-des-box cut_tab" id="product-tab-1">
                    <div className="title-tab">Thông số kỹ thuật</div>
                    <div className="content">
                      <div className="content-full">
                        <table style={{ height: "244px", width: "100%" }}>
                          <tbody>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Phù hợp cho
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                Du lịch, dã ngoại, những chuyến đi trong ngày
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Kích thước
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                23 x 17 x 42 cm (Ngang x rộng x cao)
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Kích thước xếp
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                7 x 5 x 12 cm (Dài x đường kính)
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ width: "130.653px", height: "18px" }}
                              >
                                Thể tích
                              </td>
                              <td
                                style={{ width: "327.955px", height: "18px" }}
                              >
                                18L
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Khối lượng
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                180g
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Chất liệu
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                Vải 30D Nylon
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Màu
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                Xanh dương (Blue); Đen (Black); Xám (Grey)
                              </td>
                            </tr>
                            <tr style={{ height: "64px" }}>
                              <td
                                style={{ height: "64px", width: "130.653px" }}
                              >
                                Tính năng đặc biệt
                              </td>
                              <td
                                style={{ height: "64px", width: "327.955px" }}
                              >
                                <ul>
                                  <li>Xếp gọn</li>
                                  <li>Chống thấm PU2000+</li>
                                </ul>
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Đi kèm
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                -
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Bảo hành
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                Tham khảo&nbsp;
                                <u>
                                  <strong>
                                    <Link
                                      href="https://fanfan.vn/pages/chinh-sach-bao-hanh-naturehike"
                                      data-cke-saved-href="https://fanfan.vn/pages/chinh-sach-bao-hanh-naturehike"
                                    >
                                      Chính sách bảo hành Naturehike
                                    </Link>
                                  </strong>
                                </u>
                              </td>
                            </tr>
                            <tr style={{ height: "18px" }}>
                              <td
                                style={{ height: "18px", width: "130.653px" }}
                              >
                                Xuất xứ
                              </td>
                              <td
                                style={{ height: "18px", width: "327.955px" }}
                              >
                                China
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="starbap-box product-des-box cut_tab"
                    id="pro-review"
                  >
                    <div className="title-tab">Đánh giá của khách hàng</div>
                    <div style={{ clear: "both" }} />
                    <div
                      id="startbap_product_reviews"
                      className="starbap-widget starbap-review-widget"
                      data-product-title={`${product.name}`}
                      data-url="/products/ba-lo-xep-gon-18l-nh17a012-b"
                      data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832.jpg"
                      data-id={1045430052}
                      data-customer=" "
                    >
                      <div style={{ clear: "both" }} />
                      <div className="starbap-rev-widg__header">
                        <h2 className="starbap-rev-widg__title">
                          Đánh giá sản phẩm
                        </h2>
                        <div className="starbap-rev-widg__summary">
                          <div className="starbap-rev-widg__summary-stars">
                            <Link
                              href={"/"}
                              className="starbap-star starbap--off"
                            >
                              <i
                                className="fa fa-star fa-fw"
                                style={{ color: "#51b848!important" }}
                              />
                            </Link>
                            <Link
                              href={"/"}
                              className="starbap-star starbap--off"
                            >
                              <i
                                className="fa fa-star fa-fw"
                                style={{ color: "#51b848!important" }}
                              />
                            </Link>
                            <Link
                              href={"/"}
                              className="starbap-star starbap--off"
                            >
                              <i
                                className="fa fa-star fa-fw"
                                style={{ color: "#51b848!important" }}
                              />
                            </Link>
                            <Link
                              href={"/"}
                              className="starbap-star starbap--off"
                            >
                              <i
                                className="fa fa-star fa-fw"
                                style={{ color: "#51b848!important" }}
                              />
                            </Link>
                            <Link
                              href={"/"}
                              className="starbap-star starbap--off"
                            >
                              <i
                                className="fa fa-star fa-fw"
                                style={{ color: "#51b848!important" }}
                              />
                            </Link>
                          </div>
                          <div className="starbap-rev-widg__summary-text">
                            Dựa trên 0 đánh giá
                          </div>
                        </div>
                        <Link href="#" className="starbap-ask-question-btn">
                          Đặt câu hỏi
                        </Link>
                        <Link href="#" className="starbap-write-rev-link">
                          Viết đánh giá
                        </Link>
                        <div className="starbap-rev__br" />
                        <div
                          className="starbap-form-wrapper"
                          style={{ display: "none" }}
                        >
                          <form className="starbap-form">
                            {" "}
                            <div className="starbap-form__name-fieldset">
                              {" "}
                              <label>Tên</label>{" "}
                              <input
                                name="reviewer_name"
                                type="text"
                                placeholder="Nhập tên của bạn"
                              />{" "}
                            </div>{" "}
                            <div className="starbap-form__email-fieldset">
                              {" "}
                              <label>Email</label>{" "}
                              <input
                                name="reviewer_email"
                                type="email"
                                required
                                placeholder="hi@example.com"
                                aria-required="true"
                              />{" "}
                            </div>
                            <div className="starbap-form__phone-fieldset">
                              {" "}
                              <label>Số điện thoại</label>{" "}
                              <input
                                name="reviewer_phone"
                                type="phone"
                                placeholder="Nhập số điện thoại của bạn"
                                aria-required="true"
                              />{" "}
                            </div>{" "}
                            <div className="starbap-form__rating-fieldset">
                              {" "}
                              <label>Đánh giá</label>{" "}
                              <div className="rating-stars text-left">
                                <ul id="stars">
                                  <li
                                    className="star selected"
                                    title="Poor"
                                    data-value={1}
                                  >
                                    <i className="fa fa-star fa-fw" />
                                  </li>
                                  <li
                                    className="star selected "
                                    title="Fair"
                                    data-value={2}
                                  >
                                    <i className="fa fa-star fa-fw" />
                                  </li>
                                  <li
                                    className="star selected"
                                    title="Good"
                                    data-value={3}
                                  >
                                    <i className="fa fa-star fa-fw" />
                                  </li>
                                  <li
                                    className="star selected"
                                    title="Excellent"
                                    data-value={4}
                                  >
                                    <i className="fa fa-star fa-fw" />
                                  </li>
                                  <li
                                    className="star selected"
                                    title="WOW!!!"
                                    data-value={5}
                                  >
                                    <i className="fa fa-star fa-fw" />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="starbap-form__title-fieldset">
                              {" "}
                              <label>Tiêu đề đánh giá</label>
                              <span className="starbap-countdown" />{" "}
                              <input
                                name="review_title"
                                type="text"
                                placeholder="Nhập tiêu đề đánh giá của bạn"
                              />{" "}
                            </div>{" "}
                            <div className="starbap-form__body-fieldset">
                              {" "}
                              <label>Nội dung</label>
                              <span className="starbap-countdown" />
                              <textarea
                                rows={5}
                                name="review_body"
                                placeholder="Viết nội dung đánh giá của bạn"
                                defaultValue={""}
                              />{" "}
                            </div>{" "}
                            <div className="starbap-custom-forms" />
                            <div className="starbap-form-video__fieldset">
                              <label className="starbap-picture-fieldset-title">
                                Link video (không bắt buộc)
                              </label>
                              <input
                                name="review_video"
                                type="text"
                                placeholder="Nhập link youtube video của bạn"
                              />
                            </div>
                            <div className="starbap-form__picture-fieldset">
                              <label className="starbap-picture-fieldset-title">
                                Hình ảnh (không bắt buộc)
                              </label>
                              <div className="starbap-picture-fieldset">
                                <div className="starbap-picture-fieldset__container starbap-media-fieldset__container">
                                  <label className="starbap-picture-fieldset__box starbap-picture-fieldset__box--input">
                                    <div className="starbap-picture-fieldset__box-wrapper">
                                      <div className="starbap-picture-fieldset__icon starbap-photocamera-icon" />
                                    </div>
                                    <input
                                      type="file"
                                      name="pictures"
                                      className="starbap-picture-fieldset__input"
                                      multiple
                                      accept="image/gif,image/jpeg,image/jpg,image/png"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                            <input
                              type="submit"
                              className="starbap-submit-rev btn btn_c button "
                              defaultValue="Gửi đánh giá"
                            />
                          </form>
                        </div>
                        <div
                          className="starbap-question-form-wrapper"
                          style={{ display: "none" }}
                        >
                          <form className="starbap-question-form">
                            <div className="starbap-form__name-fieldset">
                              <label>Tên</label>
                              <input
                                name="reviewer_name"
                                type="text"
                                maxLength={100}
                                required
                                placeholder="Nhập tên của bạn"
                              />
                            </div>
                            <div className="starbap-form__email-fieldset">
                              <label>Email</label>
                              <input
                                name="reviewer_email"
                                type="email"
                                required
                                placeholder="hi@example.com"
                              />
                            </div>
                            <div className="starbap-form__phone-fieldset">
                              {" "}
                              <label>Số điện thoại</label>
                              <input
                                name="reviewer_phone"
                                type="phone"
                                placeholder="Nhập số điện thoại của bạn"
                                aria-required="true"
                              />{" "}
                            </div>
                            <div className="starbap-form__question-fieldset">
                              <label>Nội dung</label>
                              <textarea
                                rows={5}
                                name="question_content"
                                required
                                placeholder="Viết câu hỏi của bạn"
                                spellCheck="false"
                                defaultValue={""}
                              />{" "}
                              <input
                                type="submit"
                                className="starbap-submit-question btn btn_c button "
                                defaultValue="Gửi câu hỏi"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="starbap-rev__br" />
                      </div>
                      <div className="starbap-subtab">
                        <span
                          className="starbap-subtab__name starbap--active"
                          data-tabname="reviews"
                        >
                          Đánh giá
                          <span className="starbap-subtab__count">0</span>
                        </span>
                        <span
                          className="starbap-subtab__name"
                          data-tabname="questions"
                        >
                          Câu hỏi &amp; trả lời
                          <span className="starbap-subtab__count">0</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-content-right" id="detail-product">
                  <form
                    id="add-item-form"
                    action="#"
                    method="post"
                    className="variants clearfix"
                    data-title="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                  >
                    <div className="flex-box align-c justify-s">
                      <div className="product-vendor">
                        <Link
                          href="/collections/naturehike"
                          title="Naturalhike"
                        >
                          {product.brand}
                        </Link>
                      </div>
                      <div className="product-sku">
                        SKU: <span>NH17A012-B-GY10</span>
                      </div>
                    </div>
                    <div className="product-title">
                      <h1>{product.name}</h1>
                    </div>
                    <div
                      className="starbaprv-widget starbaprv-preview-badge"
                      data-id="1045430052"
                      data-url="ba-lo-xep-gon-18l-nh17a012-b"
                    >
                      <div
                        className="starbap-prev-badge"
                        data-average-rating="0"
                        data-number-of-reviews="0"
                      >
                        <Link href={"/"} className="starbap-star starbap--off">
                          {[...Array(5)].map((_, starIndex) => (
                            <i
                              className={`fa-star ${
                                starIndex < product.star
                                  ? "fa-solid"
                                  : "fa-regular"
                              }`}
                              style={{
                                color:
                                  starIndex < product.star ? "#50c252" : "#ccc",
                              }}
                              key={starIndex}
                            ></i>
                          ))}
                        </Link>
                        {/* Add more stars as needed */}
                        <span className="starbap-prev-badgetext">
                          0 đánh giá
                        </span>
                      </div>
                    </div>
                    <div
                      className="product-price flex-box align-c"
                      id="price-preview"
                    >
                      <label>-10% </label>
                      {parseFloat(product.priceNew) == 0 ? (
                        <>
                          <span>
                            {product.priceOld.toLocaleString("vi-VN")}₫
                          </span>
                          <del className="none">
                            {product.priceOld.toLocaleString("vi-VN")}₫
                          </del>
                        </>
                      ) : (
                        <>
                          <span>
                            {product.priceNew.toLocaleString("vi-VN")}₫
                          </span>
                          <del>{product.priceOld.toLocaleString("vi-VN")}₫</del>
                        </>
                      )}
                    </div>
                    <div className="line"></div>
                    <div className="visible-xs">
                      <div
                        id="sliderproduct-mb"
                        className="owl-carousel owl-loaded owl-drag"
                      >
                        <div className="owl-stage-outer">
                          <div className="owl-stage">
                            {/* Add images here */}
                            <div className="owl-item">
                              <Link
                                className="items"
                                data-index="0"
                                href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832.jpg"
                                data-fancybox="home-gallery-images"
                                rel="fancybox-button"
                              >
                                <img
                                  alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                  src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832_1024x1024.jpg"
                                />
                              </Link>
                            </div>
                            {/* Repeat for other images */}
                          </div>
                        </div>
                        {/* Add navigation and dots */}
                      </div>
                    </div>
                    <div className="select clearfix">
                      <div className="selector-wrapper">
                        <label>Màu sắc</label>
                        <span className="custom-dropdown custom-dropdown--white">
                          <select
                            className="single-option-selector custom-dropdown__select custom-dropdown__select--white"
                            data-option="option1"
                            id="product-select-option-0"
                          >
                            <option value="Grey">Grey</option>
                            <option value="Black">Black</option>
                            <option value="Blue">Blue</option>
                          </select>
                        </span>
                      </div>
                      <select
                        id="product-select"
                        className="product-select"
                        name="id"
                        style={{ display: "none" }}
                      >
                        <option
                          data-available="true"
                          data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582.jpg"
                          value="1100389534"
                        >
                          Grey - 235,800₫
                        </option>
                        <option
                          data-available="true"
                          data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce.jpg"
                          value="1100389535"
                        >
                          Black - 235,800₫
                        </option>
                        <option
                          data-available="true"
                          data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987.jpg"
                          value="1100389536"
                        >
                          Blue - 235,800₫
                        </option>
                      </select>
                    </div>
                    <div className="select-swatch clearfix">
                      <div
                        id="variant-swatch-0"
                        className="swatch clearfix"
                        data-option="option1"
                        data-option-index="0"
                      >
                        <div className="labelhome">
                          Chọn Màu sắc
                          <div className="error-block">
                            <span>Vui lòng chọn Màu sắc</span>
                          </div>
                        </div>
                        <div className="select-swap">
                          <div
                            data-value="Grey"
                            className="n-sd swatch-element color grey"
                          >
                            <input
                              className="variant-0"
                              id="swatch-0-grey"
                              type="radio"
                              name="option1"
                              value="Grey"
                              data-vhandle="grey"
                              defaultChecked
                            />
                            <label className="grey" htmlFor="swatch-0-grey">
                              <span
                                style={{
                                  backgroundImage:
                                    "url(http://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_small.jpg)",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "45px 100%",
                                  paddingLeft: "50px",
                                  fontSize: "14px",
                                }}
                              >
                                Grey
                              </span>
                            </label>
                          </div>
                          <div
                            data-value="Black"
                            className="n-sd swatch-element color black"
                          >
                            <input
                              className="variant-0"
                              id="swatch-0-black"
                              type="radio"
                              name="option1"
                              value="Black"
                              data-vhandle="black"
                            />
                            <label className="black" htmlFor="swatch-0-black">
                              <span
                                style={{
                                  backgroundImage:
                                    "url(http://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_small.jpg)",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "45px 100%",
                                  paddingLeft: "50px",
                                  fontSize: "14px",
                                }}
                              >
                                Black
                              </span>
                            </label>
                          </div>
                          <div
                            data-value="Blue"
                            className="n-sd swatch-element color blue"
                          >
                            <input
                              className="variant-0"
                              id="swatch-0-blue"
                              type="radio"
                              name="option1"
                              value="Blue"
                              data-vhandle="blue"
                            />
                            <label className="blue" htmlFor="swatch-0-blue">
                              <span
                                style={{
                                  backgroundImage:
                                    "url(http://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_small.jpg)",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "45px 100%",
                                  paddingLeft: "50px",
                                  fontSize: "14px",
                                }}
                              >
                                Blue
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="select-quantity flex-box align-c justify-s">
                      <span>Số lượng</span>
                      <div
                        className="box_qty clearfix"
                        data-price=""
                        data-id=""
                      >
                        <input
                          type="button"
                          value="−"
                          className="qty-btn btn-minus"
                        />
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value="1"
                          min="1"
                          className="quantity-selector"
                        />
                        <input
                          type="button"
                          value="+"
                          className="qty-btn btn-maxnus"
                        />
                      </div>
                    </div>
                    <div className="actions-btn clearfix">
                      <button
                        id="add-to-cart"
                        data-form="#add-item-form"
                        className="btn-cart btn-hover"
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
          <div id="product-related-box">
            <div className="container">
              <div className="related-title">Sản phẩm tương tự</div>
              <div className="index-product-owl owl-carousel my-btn2 owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div
                      className="owl-item"
                      key={product.id}
                      style={{ width: "274.5px", marginRight: "24px" }}
                    >
                      <div className="product-loop">
                        <div className="regular">
                          <div className="product-img">
                            <div className="product-sale">-10%</div>
                            <Link
                              href={`/products/${product.id}`}
                              className="product-image has-effect"
                            >
                              <img
                                className="lazyloaded"
                                src={product.image}
                                alt={product.alt}
                              />
                            </Link>
                          </div>
                          <div className="product-info">
                            <div className="product-vendor text-center">
                              <Link
                                href="/collections/naturehike"
                                title={product.brand}
                              >
                                {product.brand}
                              </Link>
                            </div>
                            <div className="product-name">
                              <h3>
                                <Link href={`/products/${product.id}`}>
                                  {product.name}
                                </Link>
                              </h3>
                            </div>
                            <div className="price-box">
                              <p className="special-price highlight">
                                {product.price}
                              </p>
                              <p className="old-price">
                                <s>{product.oldPrice}</s>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
