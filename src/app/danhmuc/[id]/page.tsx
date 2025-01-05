"use client";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import "./danhmuc.css";
import ProductLoop from "@/app/components/productLoop";
export default function Category() {
  const [sort, setSort] = useState("asc");
  const [maxPrice, setMaxPrice] = useState(6000000);
  const params = useParams();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `https://be-camping-gear.vercel.app/products?idcate=${params.id}`,
    fetcher,
    {
      refreshInterval: 6000,
    }
  );

  if (error) {
    return <div>Lỗi load dữ liệu</div>;
  }

  if (!data) return <div>Đang tải...</div>;

  const filterOptions = [
    { label: "Giá giảm dần", value: "desc" },
    { label: "Giá tăng dần", value: "asc" },
    { label: "Tiêu đề A-Z", value: "title:product=asc" },
    { label: "Tiêu đề Z-A", value: "title:product=desc" },
  ];

  // Sắp xếp dữ liệu theo giá trị của `sort`
  const sortedData = data.result.sort((a: any, b: any) => {
    if (sort === "asc") return a.priceNew - b.priceNew;
    if (sort === "desc") return b.priceNew - a.priceNew;
    if (sort === "title:product=asc")
      return a.name.localeCompare(b.name, "vi", { sensitivity: "base" });
    if (sort === "title:product=desc")
      return b.name.localeCompare(a.name, "vi", { sensitivity: "base" });
    return 0;
  });

  let category = data?.result[0]?.categoryId?.name;
  // Lọc các đối tượng có giá dưới hoặc bằng maxPrice
  const filteredData = sortedData.filter(
    (item: any) => item.priceNew <= maxPrice
  );

  const handleChange = (value: string) => {
    setSort(value);
  };
  return (
    <div id="page-wrap">
      <div className="breadcrumb-bg">
        <div className="container">
          <div className="wrapper-breadcrum">
            <ol
              className="breadcrumb breadcrumb-arrow"
              itemScope
              itemType="http://schema.org/BreadcrumbList"
            >
              <li
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/ListItem"
              >
                <Link href="/" target="_self" itemProp="item">
                  <span itemProp="name">Trang chủ</span>
                  <meta itemProp="position" />
                </Link>
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/ListItem"
                className="breadcrumb-item"
                style={{ display: "none" }}
              >
                <Link href="/collections/all" target="_self" itemProp="item">
                  <span itemProp="name">Danh mục</span>
                </Link>
                <meta itemProp="position" />
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/ListItem"
                className="breadcrumb-item active"
              >
                <h1>
                  <span itemProp="name">{category}</span>
                </h1>
                <meta itemProp="position" />
              </li>
            </ol>
          </div>
        </div>
      </div>
      <main id="collection">
        <div className="container">
          <div>
            <h2 style={{ textAlign: "justify" }}>
              <strong>
                <span style={{ fontSize: "16px" }}>
                  Những món đồ cắm trại, đồ dã ngoại, camping cần thiết từ cơ
                  bản đến chuyên nghiệp
                </span>
              </strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Fanfan cung cấp những sản phẩm đồ cắm trại và đồ leo núi cho các
              bạn mới bắt đầu đến những sản phẩm leo núi chuyên nghiệp như lều
              trại, tăng võng hay những sản phẩm bếp cắm trại, leo núi, glamping
              dã ngoại chuyên dụng.
            </p>
          </div>
          <div className="flex-box flex-w bg-container">
            <div className="collection-filter-block">
              <div className="close-filter-top visible-xs visible-sm">Đóng</div>
              <div className="wrap-in clearfix">
                <div className="filter-title-top">Danh mục sản phẩm</div>
                <ul className="filter-menu-left">
                  <li>
                    <h2>
                      <Link
                        href="/collections/leu-cam-trai"
                        title="Lều Cắm Trại"
                      >
                        Lều Cắm Trại
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/tang-vong-da-ngoai"
                        title="Tăng, Võng Dã Ngoại"
                      >
                        Tăng, Võng Dã Ngoại
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/tui-ngu-va-tam-trai"
                        title="Túi Ngủ Và Tấm Trải"
                      >
                        Túi Ngủ Và Tấm Trải
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/bep-da-ngoai"
                        title="Bếp Dã Ngoại"
                      >
                        Bếp Dã Ngoại
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/ban-ghe-cam-trai"
                        title="Bàn Ghế Cắm Trại"
                      >
                        Bàn Ghế Cắm Trại
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/phu-kien-glamping"
                        title="Phụ kiện Glamping"
                      >
                        Phụ kiện Glamping
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/cam-trai-voi-o-to"
                        title="Cắm trại với ô tô"
                      >
                        Cắm trại với ô tô
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/xe-keo-da-ngoai"
                        title="Xe kéo dã ngoại"
                      >
                        Xe kéo dã ngoại
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/thung-dung-do-cam-trai"
                        title="Thùng đựng đồ cắm trại"
                      >
                        Thùng đựng đồ cắm trại
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/do-sinh-ton-cuu-sinh"
                        title="Đồ Sinh Tồn, Cứu Sinh"
                      >
                        Đồ Sinh Tồn, Cứu Sinh
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/chong-muoi-ho-tro-bao-ve-suc-khoe"
                        title="Chống Muỗi - Hỗ Trợ - Bảo Vệ Sức Khoẻ"
                      >
                        Chống Muỗi - Hỗ Trợ - Bảo Vệ Sức Khoẻ
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/thuc-pham-bu-nang-luong"
                        title="Thực Phẩm Bù Năng Lượng"
                      >
                        Thực Phẩm Bù Năng Lượng
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/binh-nuoc-thung-da-tui-giu-nhiet"
                        title="Bình Nước, Thùng Đá, Túi Giữ Nhiệt"
                      >
                        Bình Nước, Thùng Đá, Túi Giữ Nhiệt
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/thiet-bi-bao-ho-an-toan"
                        title="Thiết Bị Bảo Hộ An Toàn"
                      >
                        Thiết Bị Bảo Hộ An Toàn
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <Link
                        href="/collections/phu-kien-trekking-leo-nui-cam-trai"
                        title="Phụ Kiện Trekking, Leo Núi, Cắm Trại"
                      >
                        Phụ Kiện Trekking, Leo Núi, Cắm Trại
                      </Link>
                    </h2>
                  </li>
                </ul>
                <div className="filter-block">
                  <div className="filter-items">
                    <span className="title-filter" data-title="Giá">
                      Giá
                    </span>
                    <div className="f-price-box">
                      <p>Chọn khoảng giá:</p>
                      <div className="f-error hide">Vui lòng nhập số</div>
                      <div className="f-price flex-box align-c">
                        <span>Từ:</span>
                        <input
                          type="text"
                          pattern="\d"
                          className="price-from"
                          name="price-from"
                          data-key
                        />
                      </div>
                      <div className="f-price flex-box align-c">
                        <span>Đến:</span>
                        <input
                          type="text"
                          pattern="\d"
                          className="price-to"
                          name="price-to"
                          data-key
                        />
                      </div>
                      <span className="p-2">0</span>
                      <br />
                      <input
                        type="range"
                        min="0"
                        max="6000000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-1/3"
                      />
                      <span>{maxPrice}</span>
                      <br />
                      <div className="filter-price-apply">Áp dụng</div>
                    </div>
                  </div>
                </div>

                <div className="filter-block vendoright">
                  <div className="filter-items category">
                    <span className="title-filter" data-title="Thương hiệu">
                      Thương hiệu
                    </span>
                    <ul className="vendor-choise filter-check">
                      <li data-value="ALLROUNDER">
                        <span data-value="(vendor:product=ALLROUNDER)">
                          ALLROUNDER
                        </span>
                      </li>
                      <li data-value="Aquamira">
                        <span data-value="(vendor:product=Aquamira)">
                          Aquamira
                        </span>
                      </li>
                      <li data-value="BARBECOOK">
                        <span data-value="(vendor:product=BARBECOOK)">
                          BARBECOOK
                        </span>
                      </li>
                      <li data-value="BLACKDOG">
                        <span data-value="(vendor:product=BLACKDOG)">
                          BLACKDOG
                        </span>
                      </li>
                      <li data-value="CADAC">
                        <span data-value="(vendor:product=CADAC)">CADAC</span>
                      </li>
                      <li data-value="CARSON">
                        <span data-value="(vendor:product=CARSON)">CARSON</span>
                      </li>
                      <li data-value="Char-Broil">
                        <span data-value="(vendor:product=Char-Broil)">
                          Char-Broil
                        </span>
                      </li>
                      <li data-value="CLIMBING TECH">
                        <span data-value="(vendor:product=CLIMBING TECH)">
                          CLIMBING TECH
                        </span>
                      </li>
                      <li data-value="COGHLANS">
                        <span data-value="(vendor:product=COGHLANS)">
                          COGHLANS
                        </span>
                      </li>
                      <li data-value="DAISON">
                        <span data-value="(vendor:product=DAISON)">DAISON</span>
                      </li>
                      <li data-value="ENO">
                        <span data-value="(vendor:product=ENO)">ENO</span>
                      </li>
                      <li data-value="Eureka!">
                        <span data-value="(vendor:product=Eureka!)">
                          Eureka!
                        </span>
                      </li>
                      <li data-value="FanFan">
                        <span data-value="(vendor:product=FanFan)">FanFan</span>
                      </li>
                      <li data-value="FEUERHAND">
                        <span data-value="(vendor:product=FEUERHAND)">
                          FEUERHAND
                        </span>
                      </li>
                      <li data-value="GEAR AID">
                        <span data-value="(vendor:product=GEAR AID)">
                          GEAR AID
                        </span>
                      </li>
                      <li data-value="GERBER GEAR">
                        <span data-value="(vendor:product=GERBER GEAR)">
                          GERBER GEAR
                        </span>
                      </li>
                      <li data-value="GO GIRL">
                        <span data-value="(vendor:product=GO GIRL)">
                          GO GIRL
                        </span>
                      </li>
                      <li data-value="GU Energy Labs">
                        <span data-value="(vendor:product=GU Energy Labs)">
                          GU Energy Labs
                        </span>
                      </li>
                      <li data-value="HAMMER NUTRITION">
                        <span data-value="(vendor:product=HAMMER NUTRITION)">
                          HAMMER NUTRITION
                        </span>
                      </li>
                      <li data-value="HUMA ENERGY">
                        <span data-value="(vendor:product=HUMA ENERGY)">
                          HUMA ENERGY
                        </span>
                      </li>
                      <li data-value="HUMANGEAR">
                        <span data-value="(vendor:product=HUMANGEAR)">
                          HUMANGEAR
                        </span>
                      </li>
                      <li data-value="Hydro Flask">
                        <span data-value="(vendor:product=Hydro Flask)">
                          Hydro Flask
                        </span>
                      </li>
                      <li data-value="IGLOO">
                        <span data-value="(vendor:product=IGLOO)">IGLOO</span>
                      </li>
                      <li data-value="Khác">
                        <span data-value="(vendor:product=Khác)">Khác</span>
                      </li>
                      <li data-value="Kingii">
                        <span data-value="(vendor:product=Kingii)">Kingii</span>
                      </li>
                      <li data-value="KLARUS">
                        <span data-value="(vendor:product=KLARUS)">KLARUS</span>
                      </li>
                      <li data-value="KONG">
                        <span data-value="(vendor:product=KONG)">KONG</span>
                      </li>
                      <li data-value="KORSOA">
                        <span data-value="(vendor:product=KORSOA)">KORSOA</span>
                      </li>
                      <li data-value="LAKEN">
                        <span data-value="(vendor:product=LAKEN)">LAKEN</span>
                      </li>
                      <li data-value="Lecka">
                        <span data-value="(vendor:product=Lecka)">Lecka</span>
                      </li>
                      <li data-value="LEWIS N. CLARK">
                        <span data-value="(vendor:product=LEWIS N. CLARK)">
                          LEWIS N. CLARK
                        </span>
                      </li>
                      <li data-value="LIGHT MY FIRE">
                        <span data-value="(vendor:product=LIGHT MY FIRE)">
                          LIGHT MY FIRE
                        </span>
                      </li>
                      <li data-value="MADFOX">
                        <span data-value="(vendor:product=MADFOX)">MADFOX</span>
                      </li>
                      <li data-value="Matador">
                        <span data-value="(vendor:product=Matador)">
                          Matador
                        </span>
                      </li>
                      <li data-value="Maxsun">
                        <span data-value="(vendor:product=Maxsun)">Maxsun</span>
                      </li>
                      <li data-value="N-RIT">
                        <span data-value="(vendor:product=N-RIT)">N-RIT</span>
                      </li>
                      <li data-value="NALGENE">
                        <span data-value="(vendor:product=NALGENE)">
                          NALGENE
                        </span>
                      </li>
                      <li data-value="NATUREHIKE">
                        <span data-value="(vendor:product=NATUREHIKE)">
                          NATUREHIKE
                        </span>
                      </li>
                      <li data-value="NEW ENGLAND ROPES">
                        <span data-value="(vendor:product=NEW ENGLAND ROPES)">
                          NEW ENGLAND ROPES
                        </span>
                      </li>
                      <li data-value="NIKULA">
                        <span data-value="(vendor:product=NIKULA)">NIKULA</span>
                      </li>
                      <li data-value="NITE IZE">
                        <span data-value="(vendor:product=NITE IZE)">
                          NITE IZE
                        </span>
                      </li>
                      <li data-value="OPINEL">
                        <span data-value="(vendor:product=OPINEL)">OPINEL</span>
                      </li>
                      <li data-value="Outwell">
                        <span data-value="(vendor:product=Outwell)">
                          Outwell
                        </span>
                      </li>
                      <li data-value="PARAKITO">
                        <span data-value="(vendor:product=PARAKITO)">
                          PARAKITO
                        </span>
                      </li>
                      <li data-value="POWERBAR">
                        <span data-value="(vendor:product=POWERBAR)">
                          POWERBAR
                        </span>
                      </li>
                      <li data-value="Quechua">
                        <span data-value="(vendor:product=Quechua)">
                          Quechua
                        </span>
                      </li>
                      <li data-value="SAWYER">
                        <span data-value="(vendor:product=SAWYER)">SAWYER</span>
                      </li>
                      <li data-value="SHIMOYAMA">
                        <span data-value="(vendor:product=SHIMOYAMA)">
                          SHIMOYAMA
                        </span>
                      </li>
                      <li data-value="SIGG">
                        <span data-value="(vendor:product=SIGG)">SIGG</span>
                      </li>
                      <li data-value="Skratch Labs">
                        <span data-value="(vendor:product=Skratch Labs)">
                          Skratch Labs
                        </span>
                      </li>
                      <li data-value="SWISS+TECH">
                        <span data-value="(vendor:product=SWISS+TECH)">
                          SWISS+TECH
                        </span>
                      </li>
                      <li data-value="TENMA">
                        <span data-value="(vendor:product=TENMA)">TENMA</span>
                      </li>
                      <li data-value="TEUFELBERGER">
                        <span data-value="(vendor:product=TEUFELBERGER)">
                          TEUFELBERGER
                        </span>
                      </li>
                      <li data-value="TOOL LOGIC">
                        <span data-value="(vendor:product=TOOL LOGIC)">
                          TOOL LOGIC
                        </span>
                      </li>
                      <li data-value="Trackman">
                        <span data-value="(vendor:product=Trackman)">
                          Trackman
                        </span>
                      </li>
                      <li data-value="TRANGIA">
                        <span data-value="(vendor:product=TRANGIA)">
                          TRANGIA
                        </span>
                      </li>
                      <li data-value="UrbanGear">
                        <span data-value="(vendor:product=UrbanGear)">
                          UrbanGear
                        </span>
                      </li>
                      <li data-value="VARGO">
                        <span data-value="(vendor:product=VARGO)">VARGO</span>
                      </li>
                      <li data-value="VULTURA">
                        <span data-value="(vendor:product=VULTURA)">
                          VULTURA
                        </span>
                      </li>
                      <li data-value="Wenzel">
                        <span data-value="(vendor:product=Wenzel)">Wenzel</span>
                      </li>
                      <li data-value="YOUNG CHEMICAL">
                        <span data-value="(vendor:product=YOUNG CHEMICAL)">
                          YOUNG CHEMICAL
                        </span>
                      </li>
                    </ul>
                    <div className="text-center">
                      <Link href={"/test"} className="seemore_late">
                        Xem thêm{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="filter-block">
                  <div className="filter-items category">
                    <span
                      className="title-filter"
                      data-title="Tính năng - Thông số"
                    >
                      Tính năng - Thông số
                    </span>
                    <ul className="tag1-choise filter-check">
                      <li data-value="Balo leo núi và phụ kiện">
                        <span data-value="(tag:product=Balo leo núi và phụ kiện)">
                          Balo leo núi và phụ kiện
                        </span>
                      </li>
                      <li data-value="Balo và túi du lịch">
                        <span data-value="(tag:product=Balo và túi du lịch)">
                          Balo và túi du lịch
                        </span>
                      </li>
                      <li data-value="Bàn ghế cắm trại">
                        <span data-value="(tag:product=Bàn ghế cắm trại)">
                          Bàn ghế cắm trại
                        </span>
                      </li>
                      <li data-value="Bếp dã ngoại">
                        <span data-value="(tag:product=Bếp dã ngoại)">
                          Bếp dã ngoại
                        </span>
                      </li>
                      <li data-value="Cắm trại với ô tô">
                        <span data-value="(tag:product=Cắm trại với ô tô)">
                          Cắm trại với ô tô
                        </span>
                      </li>
                      <li data-value="Chén bát dã ngoại">
                        <span data-value="(tag:product=Chén bát dã ngoại)">
                          Chén bát dã ngoại
                        </span>
                      </li>
                      <li data-value="Chống nước 3000mm">
                        <span data-value="(tag:product=Chống nước 3000mm)">
                          Chống nước 3000mm
                        </span>
                      </li>
                      <li data-value="Có mái che">
                        <span data-value="(tag:product=Có mái che)">
                          Có mái che
                        </span>
                      </li>
                      <li data-value="Đồ điện tử - công nghệ">
                        <span data-value="(tag:product=Đồ điện tử - công nghệ)">
                          Đồ điện tử - công nghệ
                        </span>
                      </li>
                      <li data-value="Đồ sinh tồn">
                        <span data-value="(tag:product=Đồ sinh tồn)">
                          Đồ sinh tồn
                        </span>
                      </li>
                      <li data-value="Dụng cụ đựng nước - Bình nước">
                        <span data-value="(tag:product=Dụng cụ đựng nước - Bình nước)">
                          Dụng cụ đựng nước - Bình nước
                        </span>
                      </li>
                      <li data-value="Ghế khung nhôm">
                        <span data-value="(tag:product=Ghế khung nhôm)">
                          Ghế khung nhôm
                        </span>
                      </li>
                      <li data-value="Ghế tựa tay">
                        <span data-value="(tag:product=Ghế tựa tay)">
                          Ghế tựa tay
                        </span>
                      </li>
                      <li data-value="giftbox">
                        <span data-value="(tag:product=giftbox)">giftbox</span>
                      </li>
                      <li data-value="Giữ lạnh - giữ nhiệt">
                        <span data-value="(tag:product=Giữ lạnh - giữ nhiệt)">
                          Giữ lạnh - giữ nhiệt
                        </span>
                      </li>
                      <li data-value="Glamping">
                        <span data-value="(tag:product=Glamping)">
                          Glamping
                        </span>
                      </li>
                      <li data-value="Khung nhôm 7001">
                        <span data-value="(tag:product=Khung nhôm 7001)">
                          Khung nhôm 7001
                        </span>
                      </li>
                      <li data-value="Khuyến mãi">
                        <span data-value="(tag:product=Khuyến mãi)">
                          Khuyến mãi
                        </span>
                      </li>
                      <li data-value="Lantern - Đèn bão">
                        <span data-value="(tag:product=Lantern - Đèn bão)">
                          Lantern - Đèn bão
                        </span>
                      </li>
                      <li data-value="Lantern - Đèn bão - Đèn cắm trại">
                        <span data-value="(tag:product=Lantern - Đèn bão - Đèn cắm trại)">
                          Lantern - Đèn bão - Đèn cắm trại
                        </span>
                      </li>
                      <li data-value="Lều 1 người">
                        <span data-value="(tag:product=Lều 1 người)">
                          Lều 1 người
                        </span>
                      </li>
                      <li data-value="Lều 2 cửa">
                        <span data-value="(tag:product=Lều 2 cửa)">
                          Lều 2 cửa
                        </span>
                      </li>
                      <li data-value="Lều 2 lớp">
                        <span data-value="(tag:product=Lều 2 lớp)">
                          Lều 2 lớp
                        </span>
                      </li>
                      <li data-value="Lều 2 người">
                        <span data-value="(tag:product=Lều 2 người)">
                          Lều 2 người
                        </span>
                      </li>
                      <li data-value="Lều 4 người">
                        <span data-value="(tag:product=Lều 4 người)">
                          Lều 4 người
                        </span>
                      </li>
                      <li data-value="Lều 6 người">
                        <span data-value="(tag:product=Lều 6 người)">
                          Lều 6 người
                        </span>
                      </li>
                      <li data-value="Lều cắm trại và phụ kiện">
                        <span data-value="(tag:product=Lều cắm trại và phụ kiện)">
                          Lều cắm trại và phụ kiện
                        </span>
                      </li>
                      <li data-value="Lều Mông Cổ">
                        <span data-value="(tag:product=Lều Mông Cổ)">
                          Lều Mông Cổ
                        </span>
                      </li>
                      <li data-value="Lều toilet">
                        <span data-value="(tag:product=Lều toilet)">
                          Lều toilet
                        </span>
                      </li>
                      <li data-value="Ly dã ngoại">
                        <span data-value="(tag:product=Ly dã ngoại)">
                          Ly dã ngoại
                        </span>
                      </li>
                      <li data-value="Nệm - Gối bơm hơi và tấm trải">
                        <span data-value="(tag:product=Nệm - Gối bơm hơi và tấm trải)">
                          Nệm - Gối bơm hơi và tấm trải
                        </span>
                      </li>
                      <li data-value="Núm vặn chỉnh sáng vô cấp">
                        <span data-value="(tag:product=Núm vặn chỉnh sáng vô cấp)">
                          Núm vặn chỉnh sáng vô cấp
                        </span>
                      </li>
                      <li data-value="Phụ kiện hỗ trợ cơ - khớp">
                        <span data-value="(tag:product=Phụ kiện hỗ trợ cơ - khớp)">
                          Phụ kiện hỗ trợ cơ - khớp
                        </span>
                      </li>
                      <li data-value="Phụ kiện leo núi - du lịch">
                        <span data-value="(tag:product=Phụ kiện leo núi - du lịch)">
                          Phụ kiện leo núi - du lịch
                        </span>
                      </li>
                      <li data-value="Phụ Kiện Trekking">
                        <span data-value="(tag:product=Phụ Kiện Trekking)">
                          Phụ Kiện Trekking
                        </span>
                      </li>
                      <li data-value="Sào chống tăng">
                        <span data-value="(tag:product=Sào chống tăng)">
                          Sào chống tăng
                        </span>
                      </li>
                      <li data-value="Tăng - võng dã ngoại">
                        <span data-value="(tag:product=Tăng - võng dã ngoại)">
                          Tăng - võng dã ngoại
                        </span>
                      </li>
                      <li data-value="Thùng đựng đồ">
                        <span data-value="(tag:product=Thùng đựng đồ)">
                          Thùng đựng đồ
                        </span>
                      </li>
                      <li data-value="Túi khô - Túi chống nước">
                        <span data-value="(tag:product=Túi khô - Túi chống nước)">
                          Túi khô - Túi chống nước
                        </span>
                      </li>
                      <li data-value="Túi ngủ">
                        <span data-value="(tag:product=Túi ngủ)">Túi ngủ</span>
                      </li>
                      <li data-value="Vải Ripstop">
                        <span data-value="(tag:product=Vải Ripstop)">
                          Vải Ripstop
                        </span>
                      </li>
                      <li data-value="Xe kéo và phụ kiện">
                        <span data-value="(tag:product=Xe kéo và phụ kiện)">
                          Xe kéo và phụ kiện
                        </span>
                      </li>
                    </ul>
                    <div className="text-center">
                      <Link href={`/test`} className="seemore_late">
                        Xem thêm
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-right">
              <div className="filter-top hide">
                Kết quả tìm kiếm:{" "}
                <span className="result-count">0 sản phẩm</span>
                <span className="clear-filter-top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </span>
              </div>
              <div className="filter-sort">
                <div className="filter-mb-button flex-box align-c justify-s hidden-md hidden-lg">
                  <div className="sort-btn flex-box align-c">
                    Sắp xếp <span />
                  </div>
                  <div className="filter-btn flex-box align-c">
                    <i className="fa fa-filter" aria-hidden="true" />
                    <span>Lọc</span>
                  </div>
                </div>
                <div className="sort-by flex-box align-c">
                  {/* <span data-value="created_at:product=desc">Mới nhất</span> */}
                  {/* <span data-value="sold_quantity:product=desc">Bán chạy</span> */}
                  {filterOptions.map((item) => (
                    <span
                      className={`${item.value === sort ? "thanh" : ""}`}
                      key={item.value}
                      data-value={item.value}
                      onClick={() => handleChange(item.value)}
                    >
                      {item.label}
                    </span>
                  ))}
                  {/* <span data-value="title:product=asc">Tiêu đề A-Z</span> */}
                  {/* <span data-value="title:product=desc">Tiêu đề Z-A</span> */}
                </div>
              </div>
              <div className="filter-text hide">
                <div className="clear-result" />
                <span className="clear-filter ">Xóa tất cả</span>
              </div>
              <div className="products-grid flex-box flex-w coll-sale-container ">
                <ProductLoop data={filteredData} />
              </div>
              <div className="sortpagibar pagi clearfix text-center">
                <div id="pagination">
                  <span className="page-node current">1</span>
                  <Link
                    className="page-node"
                    href="/collections/cam-trai-leo-nui?page=2"
                  >
                    2
                  </Link>
                  <Link
                    className="page-node"
                    href="/collections/cam-trai-leo-nui?page=3"
                  >
                    3
                  </Link>
                  <span className="page-node ">…</span>
                  <Link
                    className="page-node"
                    href="/collections/cam-trai-leo-nui?page=16"
                  >
                    16
                  </Link>
                  <Link
                    className="page-node"
                    href="/collections/cam-trai-leo-nui?page=2"
                  >
                    <span>Sau</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
