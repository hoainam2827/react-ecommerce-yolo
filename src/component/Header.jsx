import React, { useRef, useEffect } from "react";
import logo from "../assets/images/Logo-2.png";
import { Link, useLocation } from "react-router-dom";

// import '../sass/components/_header.scss'
import { useSelector } from 'react-redux';

// 1
const mainNav = [
    {
        display: "Trang chủ",
        path: "/",
    },
    {
        display: "Sản phẩm",
        path: "/catalog",
    },
    {
        display: "Phụ kiện",
        path: "/accessories",
    },
    {
        display: "Liên hệ",
        path: "/contact",
    },
];
const Header = () => {
    const cartItem = useSelector((state) => state.cartItems.value)
    console.log(cartItem)
    // 2
    // useLocation sẽ trả về location object hiện tại: /; /catalog
    const { pathname } = useLocation();
    //mainNav.path = e.path; activeNav = 0,1,2
    const activeNav = mainNav.findIndex((e) =>e.path === pathname);

    // 3
    // xử lí cuộn chuộT thì header thu nhỏ lại 
    const headerRef = useRef(null);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    // 4
    // click bar và close thì menu active 
    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {mainNav.map((item, index) => (
                            <div
                                key={index}
                                className={`header__menu__item header__menu__left__item ${
                                    index === activeNav ? "active" : ""
                                }`}
                                onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item  header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item  header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                                <p className="number-item">{cartItem.length}</p>
                            </Link>
                        </div>
                        <div className="header__menu__item  header__menu__right__item">
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
