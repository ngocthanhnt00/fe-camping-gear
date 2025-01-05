import Link from "next/link";

export default function productLoop(props: { data: any[] }) {
  return (
    <>
      {props.data.map((product, index) => (
        <div className="product-loop" key={index}>
          <div className="regular">
            <div className="product-img">
              <Link
                href={`/chitiet/${product._id}`}
                className="product-image has-effect"
              >
                <img
                  className=" lazyloaded"
                  src={`https://be-camping-gear.vercel.app/images/${product.img}`}
                  data-src={product.img}
                  alt={product.name}
                />
                <img
                  className="hover lazyloaded"
                  src={`https://be-camping-gear.vercel.app/images/${product.img}`}
                  data-src={`https://be-camping-gear.vercel.app/images/${product.img}`}
                  alt={product.name}
                />
              </Link>
              <div
                className="gift product_gift_label hidden"
                data-id={1056304767}
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
                <Link href={`/danhmuc/${product.brand}`} title={product.brand}>
                  {product.brand}
                </Link>
              </div>
              <div className="product-name">
                <h3>
                  <Link href={`/products/${product.name}`}>{product.name}</Link>
                </h3>
              </div>
              <div
                className="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                data-id={1056304767}
                data-url="xe-keo-da-ngoai-xep-gon-blackdog-cbd2300jj023"
              >
                <div
                  className="starbap-prev-badge"
                  data-average-rating={0}
                  data-number-of-reviews={0}
                >
                  <Link href={""} className="starbap-star starbap--off">
                    <i
                      className="fa fa-star fa-fw"
                      style={{ color: "#51b848!important" }}
                    />
                  </Link>
                  <Link href={""} className="starbap-star starbap--off">
                    <i
                      className="fa fa-star fa-fw"
                      style={{ color: "#51b848!important" }}
                    />
                  </Link>
                  <Link href={""} className="starbap-star starbap--off">
                    <i
                      className="fa fa-star fa-fw"
                      style={{ color: "#51b848!important" }}
                    />
                  </Link>
                  <Link href={""} className="starbap-star starbap--off">
                    <i
                      className="fa fa-star fa-fw"
                      style={{ color: "#51b848!important" }}
                    />
                  </Link>
                  <Link href={""} className="starbap-star starbap--off">
                    <i
                      className="fa fa-star fa-fw"
                      style={{ color: "#51b848!important" }}
                    />
                  </Link>
                  <span className="starbap-prev-badgetext">0 đánh giá</span>
                </div>
              </div>
              <div className="price-box">
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
        </div>
      ))}
    </>
  );
}
