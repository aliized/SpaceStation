import AboutUsPic from "assets/images/AboutUs.webp";

const AboutUs = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse items-center text-lg justify-between lg:flex-row py-8 px-5 gap-10">
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-lg flex flex-col gap-2">
          <h1 className="text-5xl mb-6">درباره ایستگاه فضایی</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی و سه درصد گذشته.
          </p>
          <p>
            سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={AboutUsPic} alt="SpaceShip" className="w-full" />
      </div>
    </div>
  );
};

export default AboutUs;
