import { Link, NavLink, Outlet } from "react-router-dom"
import logo from "./logo.jpg"
import { getCookie } from "../../helpers/cookie"
import { useSelector } from "react-redux";
import "./LayoutDefault.scss"
function LayoutDefault() {
      const token = getCookie("token");
      const isLogin = useSelector(state => state.loginReducer);
      console.log(isLogin);
      return (
            <>
                  <div className="my-website">
                        {/* Header */}
                        <header className="my-website__header">
                              <div className="my-website__logo">
                                    <Link to="/">
                                          <img width={120} height={100} src={logo} alt="" className="my-website__logo-image" />
                                    </Link>
                              </div>
                              <div className="my-website__menu">
                                    <ul>
                                          <li>
                                                <NavLink to="/">Home</NavLink>
                                          </li>
                                          {token && (
                                                <>
                                                      <li>
                                                            <NavLink to="/topic">Topic</NavLink>
                                                      </li>
                                                      <li>
                                                            <NavLink to="/answers">Answers</NavLink>
                                                      </li>
                                                </>
                                          )}
                                    </ul>
                              </div>
                              <div className="my-website__account">
                                    {token ? (
                                          <NavLink to="/logout">Đăng xuất</NavLink>
                                    ) : (
                                          <>
                                                <NavLink to="/login">Đăng nhập</NavLink>
                                                <NavLink to="/register">Đăng ký</NavLink>
                                          </>
                                    )}

                              </div>
                        </header>

                        {/* Main Content */}
                        <main className="my-website__main-content" style={{ padding: '20px' }}>
                              <Outlet />
                        </main>

                        {/* Footer */}
                        <footer className="my-website__footer">
                              <p className="my-website__footer-text">&copy; 2024 My Website</p>
                        </footer>
                  </div>
            </>
      )
}
export default LayoutDefault;