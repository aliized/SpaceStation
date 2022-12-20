const MovieCard = ({ name, director, writers, actors, releaseDate, photo }) => {
  return (
    
      <div className="flex flex-col lg:flex-row w-full lg:w-auto mx-auto max-w-5xl lg:items-center gap-5 lg:gap-10">
        <div className="h-[60vw] lg:w-[28rem] lg:h-[18rem] rounded-3xl overflow-hidden">
          <img src={photo} alt={name} className="w-full h-full object-cover "  />
        </div>
        <div className=" flex flex-col gap-2 lg:w-[24rem] px-4">
          <h3 className="text-2xl font-bold text-blue-700"> فیلم {name}</h3>
          <p className="font-bold text-gray-700">کارگردان: {director}</p>
          <p className="font-bold text-gray-700">نویسندگان: {writers}</p>
          <p className="font-bold text-gray-700">بازیگران: {actors}</p>
          <p className="font-bold text-gray-700">تاریخ انتشار: {releaseDate}</p>
          <div className="flex justify-end">
          <a href="link" className="bg-blue-700 text-white py-2 px-5 rounded-full">خلاصه فیلم</a>
            
          </div>
        </div>
      </div>
    
  );
};

export default MovieCard;
