import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import logo from "assets/images/LogoTextColored.webp";

import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900">
        <NewsLetter />

        <div className="container flex-col mx-auto flex px-6 lg:flex-row justify-between py-12 gap-14 lg:gap-8 border-t border-gray-700 flex-wrap">
          <div className="flex flex-col gap-6">
            <p className="text-2xl py-3 border-solid border-gray-600 border-b-2">
              صفحات مهم
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/blog">وبلاگ خبری</Link>
              <Link to="/movies">فیلم های فضایی</Link>
              <Link to="/books">کتاب های فضایی</Link>
              <Link to="/gallery">گالری تصاویر</Link>
              <Link to="/about">درباره ما</Link>
            </div>
          </div>

          <div className="flex  flex-col gap-6">
            <p className="text-2xl py-3 border-solid border-gray-600  border-b-2">
              مطالب پربازید
            </p>
            <div className="flex flex-col gap-4">
              <Link to="post/63bc453b476bd1972582ed95/فیزیک%20کوانتوم%20چیست؟">
                فیزیک کوانتوم چیست؟
              </Link>
              <Link to="post/63bc4514476bd1972582ed93/جهانی%20خارج%20از%20منظومه">
                جهانی خارج از منظومه
              </Link>

              <Link to="post/63bc3fc9476bd1972582ed37/شهاب%20سنگ%20های%20اطراف%20زمین">
                شهاب سنگ های اطراف زمین
              </Link>
            </div>
          </div>

          <div className="flex  flex-col gap-6">
            <p className="text-2xl py-3 border-solid border-gray-600  border-b-2">
              ارتباط با ما
            </p>
            <div className="flex flex-col gap-4">
              <p>آدرس: بزرگراه امام علی خیابان ده حقی</p>
              <p>شماره تماس: 09123456789</p>
              <p>ایمیل: aliz.az2000@gmail.com </p>
              <p>تلگرام: @alizaareii</p>
            </div>
          </div>

          <div className="max-w-sm flex flex-col gap-6 items-center">
            <Link to="/">
              <img src={logo} alt="ایستگاه فضایی" className="object-contain" />
            </Link>
            <div className="flex flex-col gap-5 md:pr-3 items-center">
              <p className="text-lg">ایستگاه فضایی در شبکه های اجتماعی:</p>

              <div className="text-3xl flex  gap-4">
                <Link to="/">
                  <IoLogoTwitter />{" "}
                </Link>

                <Link to="/">
                  <IoLogoFacebook />
                </Link>

                <Link to="/">
                  <IoLogoInstagram />{" "}
                </Link>

                <Link to="/">
                  <IoLogoPinterest />{" "}
                </Link>

                <Link to="/">
                  <IoLogoYoutube />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 h-14 flex justify-center items-center text-gray-400">
          <p>
            تمامی حقوق متعلق به{" "}
            <a
              href="https://www.linkedin.com/in/aliized"
              className="text-blue-500"
            >
              علی زارعی
            </a>{" "}
            می باشد.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
