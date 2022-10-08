const Navlinks = ({ links }) => {
  return (
    <div className="flex justify-between gap-14">
      {links.map((link) => (
        <a href="link">{link.name}</a>
      ))}
    </div>
  );
};

export default Navlinks;
