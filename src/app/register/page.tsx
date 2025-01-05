"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bcryptjs from "bcryptjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = async () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập Email"),
    password: Yup.string()
      .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
      .required("Vui lòng nhập mật khẩu"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
      .required("Vui lòng nhập lại mật khẩu"),
  });
  const handleSubmit = async (values: any) => {
    const { name, email, password, confirm_password } = values;
    console.log("user register: ", { name, email, password, confirm_password });
    // const formData = new FormData();
    // formData.append("displayname", name);
    // formData.append("email", email);
    // formData.append("password", password);
    // formData.append("confirm_password", confirm_password);
    const data = {
      displayname: name,
      email,
      password,
      confirm_password,
    };
    // console.log(data, "Data");
    try {
      //   console.log(users, "SUer");
      //   const emailExists = users.filter((user: any) => user.email === email);
      //   console.log(emailExists, "!!!!");
      //   if (emailExists.length > 0) {
      //     alert("Email đã tồn tại");
      //     return;
      //   }
      const res = await fetch(
        "https://be-camping-gear.vercel.app/auth/register",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      console.log(res, "ressssss");
      if (res.status == 200) {
        alert("Đăng ký thành công");
        router.push("/login");
        return;
      } else if (res.status == 401) {
        alert("Email đã tồn tại");
        return;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const router = useRouter();

  return (
    <main className="bg-gray">
      <div className="login">
        <div className="container-login wide">
          <div className="heading-login text-center">Đăng ký</div>

          <Formik
            //   Giá trị khởi tạo cho các trường input
            initialValues={{
              name: "Thanh",
              email: "mxh@gmail.com",
              password: "",
              confirm_password: "",
            }}
            //Schema để validate các trường input
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="firstname info-user">
                  <Field
                    name="name"
                    type="text"
                    id="firstname"
                    placeholder="Tên"
                  />
                  {errors.name && touched.name ? (
                    <div className="error">{errors.name}</div>
                  ) : null}
                </div>

                <div className="email info-user">
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="password info-user">
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                  />
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                </div>
                <div className="confirm_password info-user">
                  <Field
                    name="confirm_password"
                    type="password"
                    id="confirm_password"
                    placeholder="Nhập lại mật khẩu"
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <div className="error">{errors.confirm_password}</div>
                  ) : null}
                </div>

                <div className="submit">
                  <button type="submit" className="btn-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="req_pass text-center">
                  <Link href="/login" title="Đăng ký">
                    Đăng nhập
                  </Link>
                  <Link href={"/"}>Quên mật khẩu?</Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};
export default RegisterForm;
