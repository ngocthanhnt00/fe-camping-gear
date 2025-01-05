var MyClass = React.createClass({
  render: function () {
    return (
      <div id="page-wrap">
        <div id="layout-page">
          <h1 className="head-title">Tìm kiếm</h1>
          <div className="container">
            <div className="coll-sale-container mb20">
              <div className="hidden">filter=(title:product**mặt bàn nhôm)</div>
              <div className="content-page" id="search">
                <div className>
                  <span className="subtext">
                    Kết quả tìm kiếm cho{" "}
                    <strong>"mặt b&amp;#224;n nh&amp;#244;m"</strong>.
                  </span>
                </div>
              </div>
              <div className="products-grid flex-box flex-w">
                <div className=" product-loop">
                  <div className="regular">
                    <div className="product-img">
                      <Link
                        href="/products/mat-ban-nhom-cho-xe-keo-tc02-naturehike-pnh22ju001"
                        className="product-image has-effect"
                      >
                        <img
                          className=" lazyloaded"
                          src="//product.hstatic.net/200000467803/product/fanfan-mat-ban-nhom-cho-xe-keo-tc02-naturehike-pnh22ju001-__3__93604c3f3b2246f38cdbbc08787d5e88_large.jpg"
                          data-src="//product.hstatic.net/200000467803/product/fanfan-mat-ban-nhom-cho-xe-keo-tc02-naturehike-pnh22ju001-__3__93604c3f3b2246f38cdbbc08787d5e88_large.jpg"
                          alt="Mặt bàn nhôm cho xe kéo TC02 Naturehike PNH22JU001"
                        />
                        <img
                          className="hover lazyloaded"
                          src="//product.hstatic.net/200000467803/product/fanfan-mat-ban-nhom-cho-xe-keo-tc02-naturehike-pnh22ju001-__1__4108b8af4a6f4ad09353ea92d73e56bb_large.jpg"
                          data-src="//product.hstatic.net/200000467803/product/fanfan-mat-ban-nhom-cho-xe-keo-tc02-naturehike-pnh22ju001-__1__4108b8af4a6f4ad09353ea92d73e56bb_large.jpg"
                          alt="Mặt bàn nhôm cho xe kéo TC02 Naturehike PNH22JU001"
                        />
                      </Link>
                      <div
                        className="gift product_gift_label hidden"
                        data-id={1047404425}
                      >
                        <img
                          className="lazyload"
                          data-src="https://file.hstatic.net/1000308580/file/icon-gifbox_21127e78739a40a28f058e5e123d41b1.png"
                          alt="icon quà tặng"
                        />
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-vendor text-center">
                        <Link href="/collections/naturehike" title="NATUREHIKE">
                          NATUREHIKE
                        </Link>
                      </div>
                      <div className="product-name">
                        <h3>
                          <Link href="/products/mat-ban-nhom-cho-xe-keo-tc02-naturehike-pnh22ju001">
                            Mặt bàn nhôm cho xe kéo TC02 Naturehike PNH22JU001
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                        data-id={1047404425}
                        data-url="mat-ban-nhom-cho-xe-keo-tc02-naturehike-pnh22ju001"
                      >
                        <div
                          className="starbap-prev-badge"
                          data-average-rating={0}
                          data-number-of-reviews={0}
                        >
                          <Link className="starbap-star starbap--off">
                            <i
                              className="fa fa-star fa-fw"
                              style={{ color: "#51b848!important" }}
                            />
                          </Link>
                          <Link className="starbap-star starbap--off">
                            <i
                              className="fa fa-star fa-fw"
                              style={{ color: "#51b848!important" }}
                            />
                          </Link>
                          <Link className="starbap-star starbap--off">
                            <i
                              className="fa fa-star fa-fw"
                              style={{ color: "#51b848!important" }}
                            />
                          </Link>
                          <Link className="starbap-star starbap--off">
                            <i
                              className="fa fa-star fa-fw"
                              style={{ color: "#51b848!important" }}
                            />
                          </Link>
                          <Link className="starbap-star starbap--off">
                            <i
                              className="fa fa-star fa-fw"
                              style={{ color: "#51b848!important" }}
                            />
                          </Link>
                          <span className="starbap-prev-badgetext">
                            0 đánh giá
                          </span>
                        </div>
                      </div>
                      <div className="price-box">
                        <p className="special-price ">1,354,000₫</p>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="paginate text-center"></div>
              {/* /#search */}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
