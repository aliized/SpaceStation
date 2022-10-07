import login from "../../../pics/Login.png";
import search from "../../../pics/Search.png";

const NavButtons = () => {
  return (
    <div className="flex gap-6 justify-between">
      <button>
        <img src={login} alt="login" />
      </button>

      <button>
        <img src={search} alt="search" />
      </button>
    </div>
  );
};

export default NavButtons;
