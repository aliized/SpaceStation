const MainFrame = ({ bgColor, children }) => {
  let textColor = "";
  if (bgColor === "bg-white") textColor = "text-black";
  return (
    <div className="container px-1 mx-auto lg:px-10">
      <div
        className={`${bgColor} ${textColor} px-3 py-5 lg:px-10 lg:py-14 rounded-3xl lg:rounded-large`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainFrame;
