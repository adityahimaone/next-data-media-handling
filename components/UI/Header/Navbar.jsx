import React, { useState } from "react";
import Link from "next/link";
import { BiX, BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import ButtonSuccess from "../Button/ButtonSuccess";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { logout } from "@/store/auth/loginSlice";

function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const infoUser = useSelector((state) => state.user);

  const [offcanvas, setOffcanvas] = useState(false);

  const onNavigate = () => {
    if (infoUser.isLoggedIn === true) {
      dispatch(logout());
      router.push("/");
    } else {
      router.push("/auth/register");
    }
  };

  const NavMenu = [
    {
      title: "Our Service",
      link: "/",
    },
    {
      title: "Why US",
      link: "/",
    },
    {
      title: "Testimonial",
      link: "/",
    },
    {
      title: "FAQ",
      link: "/",
    },
  ];

  return (
    <nav className="py-3 px-10 bg-bluewhite">
      <div className="container mx-auto">
        <div className="flex items-center ">
          <div className="grow">
            <div className="w-[100px] h-[34px] bg-primaryDarkBlue-400"></div>
          </div>
          <div
            className={
              offcanvas
                ? "absolute inset-0 bg-black/80 transition-all z-20"
                : ""
            }
          ></div>
          <div
            className={`w-[250px] lg:w-full bg-gradient-to-b from-white to-bluewhite lg:bg-none fixed lg:static lg:h-auto lg:p-0 top-0 z-50 h-screen p-10 transition-all ${
              offcanvas ? "right-0" : "-right-full "
            }`}
          >
            <div className="flex shrink lg:hidden mb-4">
              <h2 className=" font-bold">BCR</h2>
              <button
                type="button"
                onClick={() => setOffcanvas(!offcanvas)}
                className="absolute top-10 right-10 lg:hidden text-black"
              >
                <BiX className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex lg:space-x-8 lg:justify-end lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              {NavMenu.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Link href={item.link}>
                    <a className="text-black font-semibold">{item.title}</a>
                  </Link>
                </li>
              ))}
              <li>
                <ButtonSuccess onClick={onNavigate}>
                  {infoUser.isLoggedIn === true ? "Logout" : "Register"}
                </ButtonSuccess>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <button type="button" onClick={() => setOffcanvas(!offcanvas)}>
              <BiMenu className="w-5 h-5 text-black " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
