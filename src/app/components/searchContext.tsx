"use client";
import { createContext, useState } from "react";

// Tạo 1 context để chứa giá trị của từ khoá tìm kiếm
const SearchContext = createContext({
  keyword: "",
  setKeyword: (keyword: string) => {},
});

// Tạo 1 provider để cung cấp giá trị cho context
const SearchProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState("");

  return (
    // Truyền giá trị và hàm cập nhật giá trị cho context
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};

// Export context and provider
export { SearchContext, SearchProvider };
