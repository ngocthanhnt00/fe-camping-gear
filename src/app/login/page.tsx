"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/authContext";
import bcryptjs from "bcryptjs";

export default function Login() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("ngocthanhnt04@gmail.com");
  const [password, setPassword] = useState("createntnt");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { email, password };
    const response = await fetch(
      "https://be-camping-gear.vercel.app/auth/login",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );
    const res = await response.json();
    const token = res.token;
    const user = res.user;

    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(user));
      document.cookie = `token=${token}`;
      setUser(user);
      alert("Đăng nhập thành công");
      router.push("/");
    } else {
      setError(res.message || "Đăng nhập thất bại");
    }
  };

  return (
    <main className="bg-gray">
      {error && <div className="text-red-500 text-center pt-6">{error}</div>}
      <div className="login">
        <div className="container-login wides">
          <div className="heading-login text-center">Đăng nhập</div>
          <form onSubmit={handleSubmit}>
            <div className="login">
              <div className="email info-user">
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập Email của bạn"
                />
              </div>
              <div className="password info-user">
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mật khẩu"
                  name="password"
                />
              </div>
              <button type="submit" className="btn-submit">
                Đăng nhập
              </button>
            </div>
          </form>
          <div className="req_pass text-center">
            <Link href={"/register"} title="Đăng ký">
              Đăng ký
            </Link>
            <Link href={"/"}>Quên mật khẩu?</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
