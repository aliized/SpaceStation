import MainFrame from "components/containers/MainFrame";

const Loading = ({ bgColor, link = false }) => {
  const grayCode = bgColor === "black" ? "700" : "300";
  console.log(grayCode);
  return (
    <MainFrame bgColor={`bg-${bgColor}`}>
      <div className="flex flex-col max-w-5xl gap-8 px-2 mx-auto sm:px-6 animate-pulse ">
        <h4 className="mx-auto text-3xl font-bold lg:mb-3">
          <div className={`w-64 h-6 my-1 bg-gray-${grayCode}`}></div>
        </h4>

        <div className="w-full">
          <div
            className={`rounded-3xl aspect-video object-cover w-full bg-gray-${grayCode}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className={`bg-gray-${grayCode} h-6`}> </p>
          <p className={`bg-gray-${grayCode} h-6`}> </p>
          <p className={` bg-gray-${grayCode} h-6 w-3/5`}> </p>
          <p className={` bg-gray-${grayCode} h-6`}></p>
          <p className={` bg-gray-${grayCode} h-6 w-1/3`}> </p>
        </div>

        {link ? (
          <div className="flex justify-end w-full">
            <div
              className={`bg-gray-${grayCode} text-white h-10 w-28 rounded-full`}
            ></div>{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </MainFrame>
  );
};

export default Loading;
