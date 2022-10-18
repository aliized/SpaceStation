const Navlinks = ({ links }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:gap-14">
      {/* {links.map((link) => (
        <a href="link">{link.name}</a>
      ))} */}

      <ul>
        <li>
          <a href="default">Home</a>
        </li>
        <li>
          <a href="news">News</a>
        </li>
        <li>
          <a href="contact"> Contact </a>
          <ul>
            <li>x</li>
            <li>xt</li>
            <li>xd</li>
          </ul>
        </li>
        <li>
          <a href="about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
