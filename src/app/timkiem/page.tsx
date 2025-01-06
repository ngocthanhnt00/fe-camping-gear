"use client";
import { useContext } from "react";
import useSWR from "swr";
import ListCard from "../components/listcard";
import { SearchContext } from "../components/searchContext";
import ProductLoop from "../components/productLoop";
import "./timkiem.css";
import ENV_VARS from "@/config";
export default function SearchPage() {
  const { keyword } = useContext(SearchContext);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${ENV_VARS.NEXT_PUBLIC_URL}/products`,
    fetcher,
    {
      refreshInterval: 6000,
    }
  );

  if (error) return <div>Lỗi load dữ liệu.</div>;
  if (!data) return <div>Đang tải...</div>;

  const searchResult = data.result.filter((item: any) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div id="page-wrap">
      <div id="layout-page">
        <h1 className="head-title">Tìm kiếm</h1>
        <div className="container">
          <div className="coll-sale-container mb20">
            <div className="hidden">filter=(title:product**mặt bàn nhôm)</div>
            <div className="content-page" id="search">
              <div>
                <span className="subtext">
                  Kết quả tìm kiếm cho "
                  <span style={{ color: "red", fontSize: "20px" }}>
                    {keyword}
                  </span>
                  "{/* <strong>"mặt b&amp;#224;n nh&amp;#244;m"</strong>. */}
                </span>
              </div>
            </div>
            <div className="products-grid flex-box flex-w">
              <ProductLoop data={searchResult} />
            </div>
            <div className="paginate text-center"></div>
            {/* /#search */}
          </div>
        </div>
      </div>
    </div>
  );
}
