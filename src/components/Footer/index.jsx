import { Link } from "react-router-dom";

import NewsLetter from "./NewsLetter";

import logo from "pics/LogoTextColored.webp";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900">
        <NewsLetter />

        <div className="container mx-auto flex flex-row justify-between py-12 gap-8 border-t border-gray-700 flex-wrap">
          <div className="flex  flex-col gap-6 max-w-[25%]">
            <p className="text-2xl py-3 border-solid border-b-2">صفحات مهم</p>
            <div className="flex flex-col gap-4">
              <Link to="/blog">وبلاگ خبری</Link>
              <Link to="/movies">فیلم های فضایی</Link>
              <Link to="/books">کتاب های فضایی</Link>
              <Link to="/gallery">گالری تصاویر</Link>
              <Link to="/about">درباره ما</Link>
            </div>
          </div>
          <div className="flex  flex-col gap-6">
            <p className="text-2xl py-3 border-solid border-b-2">
              مطالب پربازید
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/post/6366b419f52d7bd3268e372d/جهانی%20خارج%20از%20منظومه">
                جهانی خارج از منظومه
              </Link>
              <Link to="post/639880644700103abef0ffbc/فیزیک%20کوانتوم%20چیست؟">
                فیزیک کوانتوم چیست؟
              </Link>
              <Link to="/post/6366b419f52d7bd3268e372d/جهانی%20خارج%20از%20منظومه">
                جهانی خارج از منظومه
              </Link>
              <Link to="post/639880644700103abef0ffbc/فیزیک%20کوانتوم%20چیست؟">
                فیزیک کوانتوم چیست؟
              </Link>
            </div>
          </div>
          <div className="flex  flex-col gap-6">
            <p className="text-2xl py-3 border-solid border-b-2">
              ارتباط با ما
            </p>
            <div className="flex flex-col gap-4">
              <p>آدرس: بزرگراه امام علی خیابان ده حقی</p>
              <p>شماره تماس: 09123456789</p>
              <p>ایمیل: azarsh780@gmail.com </p>
              <p>تلگرام: @aziii78</p>
            </div>
          </div>

          <div className="max-w-sm flex flex-col gap-6">
            <Link to="/">
              <img src={logo} alt="ایستگاه فضایی" className="object-contain" />
            </Link>
            <div className="flex flex-col gap-5 pr-3">
              <p className="text-lg">ایستگاه فضایی در شبکه های اجتماعی:</p>

              <div className="text-3xl flex gap-4">
                <Link to="/">
                  <ion-icon name="logo-twitter"></ion-icon>
                </Link>

                <Link to="/">
                  <ion-icon name="logo-facebook"></ion-icon>
                </Link>

                <Link to="/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>

                <Link to="/">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </Link>

                <Link to="/">
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 h-14 flex justify-center items-center text-gray-400">
          <p>تمامی حقوق متعلق به <span className="text-blue-500">آذر شریفی نیا</span> می باشد.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
