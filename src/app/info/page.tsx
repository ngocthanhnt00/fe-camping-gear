import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "./info.css";
export default async function Info() {
  // Lấy thông tin user dựa vào token trong cookie
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  console.log("token", token);

  if (!token) {
    redirect("/login");
  }
  // Lấy thông tin user từ token
  const user = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  console.log("User:", user);
  return (
    <>
      <div id="page-wrap">
        <img className="avatar-lg" src={user.avatar} alt="" />
        <div className="layout-info-account">
          <div className="container mt30">
            <div className="row bgfff">
              <div className="col-xs-12 wrapbox-heading-account">
                <div className="header-page clearfix">
                  <h1>Tài khoản của bạn</h1>
                </div>
              </div>
              <div className="col-xs-12 col-sm-3 sidebar-account">
                <div className="AccountSidebar">
                  <h3 className="AccountTitle titleSidebar">Tài khoản</h3>
                  <div className="AccountContent">
                    <div className="AccountList">
                      <ul className="list-unstyled">
                        <li className="current">
                          <a href="/account">Thông tin tài khoản</a>
                        </li>
                        <li>
                          <a href="/account/addresses">Danh sách địa chỉ</a>
                        </li>
                        <li className="last">
                          <a href="/account/logout">Đăng xuất</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-9">
                <div className="row">
                  <div className="col-xs-12" id="customer_sidebar">
                    <p className="title-detail">Thông tin tài khoản</p>
                    <form
                      acceptCharset="UTF-8"
                      action="/account"
                      id="update_customer"
                      method="post"
                    >
                      <input
                        name="form_type"
                        type="hidden"
                        defaultValue="update_customer"
                      />
                      <input name="utf8" type="hidden" defaultValue="✓" />
                      <div className="phone clearfix large_form">
                        <label className="label phone">Email</label>
                        <input
                          autoComplete="false"
                          type="text"
                          defaultValue={user.email}
                          name="customer[email]"
                          className="text email"
                          disabled
                          size={30}
                          style={{ cursor: "not-allowed" }}
                        />
                      </div>
                      <div className="phone clearfix large_form">
                        <label className="label phone">Số điện thoại</label>
                        <input
                          autoComplete="false"
                          type="text"
                          defaultValue={"0966483944"}
                          name="customer[phone]"
                          id="phone"
                          className="text phone"
                          size={30}
                          style={{ marginBottom: 0 }}
                        />
                      </div>
                      <div id="last_name" className="clearfix large_form">
                        <label htmlFor="birthday" className="label">
                          Họ và tên đệm
                        </label>
                        <input
                          required
                          type="text"
                          defaultValue={user.name}
                          name="customer[last_name]"
                          placeholder="Nguyễn Ngọc"
                          id="last_name"
                          className="text"
                          size={30}
                        />
                      </div>
                      <div id="first_name" className="clearfix large_form">
                        <label htmlFor="birthday" className="label">
                          Tên
                        </label>
                        <input
                          required
                          type="text"
                          defaultValue="Thanh"
                          name="customer[first_name]"
                          placeholder="Thanh"
                          id="first_name"
                          className="text"
                          size={30}
                        />
                      </div>
                      <div id="gender">
                        <label htmlFor="birthday" className="label">
                          Giới tính
                        </label>
                        <ul>
                          <li>
                            <input
                              id="radio0"
                              type="radio"
                              defaultValue={0}
                              name="customer[gender]"
                            />
                            <label htmlFor="radio0">Nữ</label>
                          </li>
                          <li>
                            <input
                              id="radio1"
                              type="radio"
                              defaultValue={1}
                              name="customer[gender]"
                            />
                            <label htmlFor="radio1">Nam</label>
                          </li>
                        </ul>
                      </div>
                      <div id="birthday" className="clearfix large_form">
                        <label htmlFor="birthday" className="label">
                          Ngày sinh
                        </label>
                        <input
                          autoComplete="false"
                          type="text"
                          id="datepicker"
                          placeholder="mm/dd/yyyy"
                          name="customer[birthday]"
                          className="text"
                          size={30}
                        />
                      </div>
                      <div className="action_bottom">
                        <input
                          type="button"
                          className="btn updateAccount"
                          defaultValue="Cập nhật"
                        />
                      </div>
                    </form>
                    <div className="clearfix" />
                  </div>
                  <div
                    className="col-xs-12 customer-table-wrap"
                    id="customer_orders"
                  >
                    <div className="customer_order customer-table-bg">
                      <p className="title-detail">
                        Danh sách đơn hàng mới nhất
                      </p>
                      <p>Bạn chưa đặt mua sản phẩm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\tp.title-detail {\n\t\tmargin-bottom: 20px !important;\n\t}\n\tform#update_customer input[type="text"]{\n\t\twidth: 40%;\n\t\theight: 45px;\n\t\tborder: 1px solid transparent;\n\t\tbackground: #ededed;\n\t\tcolor: #221e20;\n\t\tpadding: 0 20px;\n\t\tfont-weight: 500;\n\t\t-webkit-appearance: none;\n\t}\n\tform#update_customer .large_form {\n\t\tmargin-bottom: 18px;\n\t}\n\tform#update_customer #gender ul li {\n\t\tdisplay: inline;\n\t\tmargin-right: 20px;\n\t}\n\t#customer_sidebar form#update_customer label.label {\n\t\tdisplay: block;\n\t\tcolor: #000 !important;\n\t\ttext-align: left;\n\t\tfont-size: 14px;\n\t\tpadding-left: 0px !important;\n\t\tmargin-bottom: 0px !important;\n\t\tfont-weight: initial;\n\t\twidth: 120px;\n\t\tfloat: left;\n\t\tline-height: 38px;\n\t}\n\tform#update_customer #gender ul li label{\n\t\tfont-weight: initial;\n\t}\n\tform#update_customer div {\n\t\tdisplay: block !important;\n\t\twidth: 100%;\n\t\tclear: both;\n\t}\n\tform#update_customer  #gender ul {\n\t\tmargin: 10px 0px 20px;\n\t\tfloat: left;\n\t}\n\tform#update_customer .phone {\n\t\tmargin-bottom: 18px;\n\t}\n\t.layout-info-account .action_bottom {\n\t\tmax-width:200px;\n\t}\n\t.layout-info-account .action_bottom .btn {\n\t\theight: 35px;\n    line-height: 35px;\n    outline: 0;\n    margin-right: 5px;\n    font-size: 14px;\n    text-transform: uppercase;\n    padding: 0 30px;\n    border: 0;\n    background: #66a55f;\n    color: #fff;\n    display: inline-block;\n    border-radius: 0;\n\t}\n',
          }}
        />
      </div>
    </>
  );
}
