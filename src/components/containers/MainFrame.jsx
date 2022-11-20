const MainFrame = ({ bgColor, children }) => {
  let textColor = "";
  if (bgColor === "bg-white") textColor = "text-black";
  return (
    <div className="container mx-auto px-1 lg:px-10">
      <div
        className={`${bgColor} ${textColor} px-3 py-10 lg:px-10 lg:py-20 rounded-3xl lg:rounded-large`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainFrame;
