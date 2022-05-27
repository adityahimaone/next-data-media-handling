import React from "react";
import Image from "next/image";
import EmailIcon from "@/img/icon_email.svg";
import FBIcon from "@/img/icon_fb.svg";
import IGIcon from "@/img/icon_ig.svg";
import TwitchIcon from "@/img/icon_twitch.svg";
import TwitterIcon from "@/img/icon_twitter.svg";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-bluewhite to-transparent">
      <div className="flex flex-col lg:flex-row container mx-auto px-10 gap-3 justify-between mt-32 py-10">
        <div className="text-center lg:text-left space-y-5">
          <p>
            Jalan Suroyo No. 161 Mayangan <br /> Kota Probolonggo 672000
          </p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="flex justify-center flex-row lg:flex-col gap-3 font-semibold">
          <a href="#our-service">Our Service</a>
          <a href="#whyus">Why Us</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h6 className="text-center lg:text-left mb-2">Connect With us</h6>
          <div className="flex justify-center gap-2">
            <a href="https://www.facebook.com/">
              <Image src={FBIcon} alt="icon-fb" className="footer-sosmed" />
            </a>
            <a href="https://www.instagram.com/">
              <Image src={IGIcon} alt="icon-ig" className="footer-sosmed" />
            </a>
            <a href="https://www.twitter.com/">
              <Image
                src={TwitterIcon}
                alt="icon-twitter"
                className="footer-sosmed"
              />
            </a>
            <a href="https://www.email.com/">
              <Image
                src={EmailIcon}
                alt="icon-email"
                className="footer-sosmed"
              />
            </a>
            <a href="https://www.twitch.com/">
              <Image
                src={TwitchIcon}
                alt="icon-twitch"
                className="footer-sosmed"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center gap-2">
          <h6>Copyright Binar 2022</h6>
          <div className="lg:w-[100px] h-[34px] bg-primaryDarkBlue-400"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
