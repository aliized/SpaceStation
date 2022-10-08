
const MainBox = ({bgColor,children}) => {
    let textColor="";
    if(bgColor==="bg-white") textColor="text-black";
    return (
      <div className="container mx-auto px-10">
        <div className={`${bgColor} ${textColor} px-10 py-20 rounded-large`}>
          {children}
        </div>
      </div>
    );
  };
  
  export default MainBox;
  