"use client";

import React, { useEffect, useState } from "react";
import { AuthProvider } from "./components/authContext"; // Adjust the path as necessary
import Header from "./components/header"; // Import your Header component
import ListCard from "./components/listcard";
import Link from "next/link";
import Image from "next/image";

// Define the type for category items
interface Category {
  _id: string;
  name: string;
  icon: string; // Add other properties if necessary
}

const App = () => {
  const [categories, setCategories] = useState<{ result: Category[] }>({
    result: [],
  });
  const [products, setProducts] = useState<{ result: any[] }>({ result: [] });
  const [productsHot, setProductsHot] = useState<{ result: any[] }>({
    result: [],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://be-camping-gear.vercel.app/category"
      );
      const data = await response.json();
      setCategories(data);
    };

    const fetchProducts = async () => {
      const response = await fetch(
        "https://be-camping-gear.vercel.app/products"
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <AuthProvider>
      <Header />
      <main>
        <section>
          <div className="slider">
            <div className="list">
              {[
                "https://be-camping-gear.vercel.app/images/bannerheading.webp",
                "https://be-camping-gear.vercel.app/images/bannerheading1.webp",
                "https://be-camping-gear.vercel.app/images/bannerheading3.webp",
                "https://be-camping-gear.vercel.app/images/bannerheading4.webp",
                "https://be-camping-gear.vercel.app/images/bannerheading5.webp",
              ].map((src, index) => (
                <div className="item" key={index}>
                  <img
                    src={src}
                    alt={`Banner ${index + 1}`}
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </div>
            <div className="buttons">
              <button id="prev">&lt;</button>
              <button id="next">&gt;</button>
            </div>
            <ul className="dots">
              {[...Array(5)].map((_, index) => (
                <li className={index === 0 ? "active" : ""} key={index}></li>
              ))}
            </ul>
          </div>

          <div className="menu-main wide">
            <ul className="name-product">
              {categories.result.map((item: Category, index: number) => (
                <li className="has-child" key={index}>
                  <Link href={`danhmuc/${item._id}`} title={item.name}>
                    <img
                      src={`https://be-camping-gear.vercel.app/images/${item.icon}`}
                      alt={item.name}
                      width={500}
                      height={500}
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <ListCard
          title="Sản phẩm bán chạy nhất"
          products={products.result}
          id={2}
        />
        <ListCard
          title="Sản phẩm xem gần đây"
          products={products.result}
          id={""}
        />
        <ListCard
          title="Sản phẩm nổi bật"
          products={productsHot.result}
          id={3}
        />
      </main>
    </AuthProvider>
  );
};

export default App;
