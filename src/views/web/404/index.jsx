import NotFoundPic from "assets/images/NotFound.webp";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    
    <div className="container flex flex-col items-center gap-6 px-6 py-20 mx-auto text-lg text-center">
    
      <div className="mb-6 min-w-full">
        <img src={NotFoundPic} alt="صفحه ی مورد نظر شما یافت نشد" className="max-w-xl w-full  mx-auto"/>
      </div>
      
      <p>صفحه ای که دنبالش میگردی رو پیدا نکردیم</p>

        <p>میخوای برگردی به صفحه ی اصلی؟</p>
        <Link
          to={`/`}
          className="flex items-center text-blue-400"
        >
          صفحه ی اصلی
          <IoChevronForwardOutline/>
        </Link>
      
      
    </div>
  );
};

export default NotFound;
